/* ========================================
   Kurdish Clothing Store - Main JavaScript
   ======================================== */

/* ---- Cart State ---- */
let cart = JSON.parse(localStorage.getItem('kurd_cart') || '[]');

function saveCart() {
  localStorage.setItem('kurd_cart', JSON.stringify(cart));
}

/* ---- Countdown Timer ---- */
function initCountdown() {
  const target = new Date();
  target.setHours(target.getHours() + 23);
  target.setMinutes(target.getMinutes() + 47);
  target.setSeconds(target.getSeconds() + 12);

  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return;

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-minutes');
    const sEl = document.getElementById('cd-seconds');

    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ---- Toast Notification ---- */
function showToast(message, icon = '✅') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-icon').textContent = icon;
  toast.querySelector('.toast-msg').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ---- Cart Render ---- */
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartTotal = document.getElementById('cart-total');
  const badge = document.getElementById('cart-badge');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (badge) badge.textContent = totalItems;

  if (!cartItems) return;

  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartItems.innerHTML = '';
  } else {
    cartEmpty.style.display = 'none';
    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-img" style="background: ${item.color}">
          ${item.emoji}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${(item.price * item.qty).toLocaleString('ar-IQ')} د.ع</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeItem(${index})" title="Remove">🗑️</button>
      </div>
    `).join('');
  }

  if (cartTotal) {
    cartTotal.textContent = totalPrice.toLocaleString('ar-IQ') + ' د.ع';
  }
}

function addToCart(name, price, emoji, color) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, emoji, color, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast(`${name} added to cart!`, '🛍️');
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
  showToast('Item removed from cart', '🗑️');
}

/* ---- Cart Sidebar ---- */
function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-sidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-sidebar').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- Mobile Menu ---- */
function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

/* ---- Product Filter ---- */
function filterProducts(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.product-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      card.style.animation = 'fadeIn 0.4s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ---- Wishlist Toggle ---- */
function toggleWishlist(btn) {
  btn.classList.toggle('wishlisted');
  if (btn.classList.contains('wishlisted')) {
    btn.textContent = '❤️';
    showToast('Added to wishlist!', '❤️');
  } else {
    btn.textContent = '🤍';
    showToast('Removed from wishlist', '💔');
  }
}

/* ---- Back to Top ---- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- Smooth scroll for nav links ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav if open
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) mobileNav.style.display = 'none';
      }
    });
  });
}

/* ---- Active nav link on scroll ---- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });
}

/* ---- Newsletter form ---- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input.value.trim()) {
      showToast('You\'re subscribed! Check your inbox 📬', '🎉');
      input.value = '';
    }
  });
}

/* ---- Animate on scroll (simple intersection observer) ---- */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .category-card, .feature-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ---- Checkout ---- */
function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', '⚠️');
    return;
  }
  showToast('Redirecting to checkout... 🎉', '🛒');
  setTimeout(() => {
    cart = [];
    saveCart();
    renderCart();
    closeCart();
    showToast('Order placed successfully! Thank you! 🎊', '✅');
  }, 1500);
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  initCountdown();
  initBackToTop();
  initSmoothScroll();
  initScrollSpy();
  initNewsletter();

  // Delay animations slightly to avoid flash
  setTimeout(initAnimations, 100);
});
