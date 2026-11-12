/* ============================================
   KRDM FOR SALE — Main JS (Qream-style)
   ============================================ */

/* ---- Cursor ---- */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animFollower);
})();

/* ---- Loader ---- */
const loaderFill = document.getElementById('loader-fill');
const loader     = document.getElementById('loader');

loaderFill.style.width = '100%';

setTimeout(() => {
  loader.classList.add('done');
  document.body.style.overflow = '';
  triggerReveal();
}, 1400);

document.body.style.overflow = 'hidden';

/* ---- Nav scroll ---- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- Mobile menu ---- */
const burger     = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMobileMenu() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

/* ---- Reveal on scroll ---- */
function triggerReveal() {
  const els = document.querySelectorAll('.reveal-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.delay || 0);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  els.forEach(el => io.observe(el));
}

/* ---- Smooth scroll ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      closeMobileMenu();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---- Product filter ---- */
document.querySelectorAll('.filter-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.work-item').forEach(item => {
      const show = f === 'all' || item.dataset.category === f;
      item.style.display = show ? 'block' : 'none';
      if (show) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(16px)';
        setTimeout(() => {
          item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 20);
      }
    });
  });
});

/* ---- Wishlist ---- */
function toggleWish(btn) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  showToast(btn.classList.contains('active') ? 'Added to wishlist ♥' : 'Removed from wishlist');
}

/* ---- Cart State ---- */
let cart = JSON.parse(localStorage.getItem('krdm_cart') || '[]');

function saveCart() { localStorage.setItem('krdm_cart', JSON.stringify(cart)); }

function renderCart() {
  const body      = document.getElementById('cart-body');
  const emptyState= document.getElementById('cart-empty-state');
  const totalEl   = document.getElementById('cart-total-price');
  const countEl   = document.getElementById('cart-count');
  const headCount = document.getElementById('cart-head-count');

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (countEl)   countEl.textContent  = totalItems;
  if (headCount) headCount.textContent = `(${totalItems})`;
  if (totalEl)   totalEl.textContent  = totalPrice.toLocaleString('ar-IQ') + ' د.ع';

  if (!body) return;

  if (cart.length === 0) {
    emptyState.style.display = 'flex';
    // remove any cart items
    body.querySelectorAll('.cart-item').forEach(el => el.remove());
  } else {
    emptyState.style.display = 'none';
    body.querySelectorAll('.cart-item').forEach(el => el.remove());
    cart.forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-thumb" style="background:${item.color}20">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${(item.price * item.qty).toLocaleString('ar-IQ')} د.ع</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${i},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${i},1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeItem(${i})">✕</button>
      `;
      body.appendChild(div);
    });
  }
}

function addToCart(name, price, emoji, color) {
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; }
  else { cart.push({ name, price, emoji, color, qty: 1 }); }
  saveCart();
  renderCart();
  showToast(`${emoji} Added to cart`);
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

/* ---- Cart drawer ---- */
function openCart() {
  document.getElementById('cart-backdrop').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-backdrop').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- Checkout ---- */
function checkout() {
  if (!cart.length) { showToast('Your cart is empty ⚠️'); return; }
  showToast('Processing your order...');
  setTimeout(() => {
    cart = []; saveCart(); renderCart(); closeCart();
    showToast('Order placed! Thank you 🎉');
  }, 1800);
}

/* ---- Toast ---- */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});
