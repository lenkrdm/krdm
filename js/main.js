/* ============================================================
   BAGHDADIA (بغدادية) — Traditional Iraqi Bakery & Sweets
   Engine & Interactive Functionality (The Qream Clone)
   ============================================================ */

/* ---- Products Catalog for Modal & Detail Views ---- */
const PRODUCTS = {
  'kleicha-date': {
    id: 'kleicha-date',
    name: 'Baghdadi Date Kleicha',
    arabic: 'كليجة بغدادية بالتمر والهيل',
    category: 'Kleicha & Pastries',
    price: 18000,
    img: 'images/kleicha.jpg',
    emoji: '🥮',
    desc: 'The soul of Iraqi hospitality. Crisp, golden cardamom dough filled with slow-cooked Karbala Zahdi dates and roasted sesame seeds, baked fresh with 100% pure sheep ghee (دهن حر).'
  },
  'kleicha-walnut': {
    id: 'kleicha-walnut',
    name: 'Iraqi Walnut Kleicha',
    arabic: 'كليجة عراقية بالجوز والهيل',
    category: 'Kleicha & Pastries',
    price: 20000,
    img: 'images/kleicha-walnut.jpg',
    emoji: '🥟',
    desc: 'Crispy folded golden pastries filled with crushed mountain walnuts, sugar, ground cinnamon, and fragrant cardamom, finished with golden egg wash and pure ghee.'
  },
  'daheen-najafi': {
    id: 'daheen-najafi',
    name: 'Daheen Najafi Al-Malaki',
    arabic: 'دهين نجفي ملكي بالدهن الحر',
    category: 'Najaf Confectionery',
    price: 24000,
    img: 'images/daheen-tray.jpg',
    emoji: '🍯',
    desc: 'The legendary molten confection from holy Najaf. Slow-cooked with date syrup (دبس), pure clarified sheep butter (دهن حر), flour, and whole milk, blanketed with roasted coconut ribbons and almonds.'
  },
  'royal-box': {
    id: 'royal-box',
    name: 'Royal Diyafa Eid Grand Tray',
    arabic: 'صينية ضيافة الملوك الملكية المشكلة',
    category: 'Festive Collection',
    price: 68000,
    img: 'images/royal-assortment.jpg',
    emoji: '👑',
    desc: 'The pinnacle of Iraqi luxury gifting. A 2.5 kg grand platter filled with Date Kleicha, Walnut Kleicha, Pistachio Baqlawa, Barazek, and a tray of fresh Daheen Najafi.'
  },
  'zenood-el-sit': {
    id: 'zenood-el-sit',
    name: 'Zenood El Sit Al-Baghdadia',
    arabic: 'زنود الست بالقشطة العربية والفستق',
    category: 'Fresh Ashta Pastries',
    price: 16000,
    img: 'images/zenood-el-sit.jpg',
    emoji: '🥟',
    desc: 'Traditional Baghdadi "Lady’s Arms". Paper-thin phyllo rolls filled with fresh clotted buffalo ashta cream, flash-fried crispy, drenched in rosewater syrup, and coated with emerald Halabi pistachios.'
  },
  'baklava': {
    id: 'baklava',
    name: 'Royal Pistachio Baqlawa',
    arabic: 'بقلاوة عراقية فاخرة بالفستق والدهن الحر',
    category: 'Royal Baqlawa',
    price: 34000,
    img: 'images/baklava.jpg',
    emoji: '🥮',
    desc: 'Over 40 hand-rolled micro-layers of crisp phyllo soaked in rich sheep ghee, packed with double-roasted emerald green pistachios and lightly scented with cardamom nectar.'
  },
  'kahi-geymar': {
    id: 'kahi-geymar',
    name: 'Kahi & Geymar Arab Set',
    arabic: 'كاهي بغدادي وقيمر عرب وعسل سدر',
    category: 'Breakfast Ritual',
    price: 15000,
    img: 'images/kahi-geymar.jpg',
    emoji: '🥞',
    desc: 'Baghdad’s sacred morning feast. Four oven-hot flaky puff pastry squares served with thick fresh water-buffalo Geymar Arab (قيمر عرب) and organic mountain Sidr honey.'
  },
  'samoon': {
    id: 'samoon',
    name: 'Iraqi Stone Samoon (10 Pcs)',
    arabic: 'صمون حجري عراقي طازج من الفرن',
    category: 'Hearth Stone Ovens',
    price: 3000,
    img: 'images/samoon-hijri.jpg',
    emoji: '🥖',
    desc: 'The iconic diamond-shaped Iraqi hearth bread. Baked on blazing 450°C refractory stone oven floors for a crackling crisp crust and airy hollow pocket.'
  },
  'tannour': {
    id: 'tannour',
    name: 'Khubz Tannour Bil Simsim',
    arabic: 'خبز تنور عراقي أصيل بالسمسم (8 أرغفة)',
    category: 'Clay Oven Flatbread',
    price: 4000,
    img: 'images/khubz-tannour.jpg',
    emoji: '🫓',
    desc: 'Ancient Mesopotamian flatbread baked against the roaring terracotta walls of a clay tannour oven, charred with smoky bubbles and sprinkled with toasted sesame and nigella seeds.'
  },
  'zalabia': {
    id: 'zalabia',
    name: 'Crispy Golden Zalabia',
    arabic: 'زلابية عراقية مقرمشة بماء الورد',
    category: 'Crispy Sweets',
    price: 11000,
    img: 'images/zalabia.jpg',
    emoji: '🥨',
    desc: 'Delicate crisp golden lattice spirals fried until crackling, dipped in fragrant cardamom and rose blossom attar syrup.'
  },
  'luqaimat': {
    id: 'luqaimat',
    name: 'Golden Awama & Luqaimat',
    arabic: 'عوّامة ولقيمات مقرمشة بالدبس والهيل',
    category: 'Syrup Dumplings',
    price: 10000,
    img: 'images/luqaimat.jpg',
    emoji: '🍯',
    desc: 'Golden spheres with a brittle, shattering crust and soft, airy crumb inside, tossed in rich date molasses (دبس تمر) and crushed cardamom.'
  },
  'barazek': {
    id: 'barazek',
    name: 'Damascene-Baghdadi Barazek',
    arabic: 'برازق فاخرة بالسمسم والفستق الحلبي',
    category: 'Sesame Biscuits',
    price: 13000,
    img: 'images/barazek.jpg',
    emoji: '🍪',
    desc: 'Crisp, brittle golden biscuits carpeted with roasted sesame seeds on top and chopped vibrant green pistachios underneath.'
  },
  'mhallabiya': {
    id: 'mhallabiya',
    name: 'Mhallabiya Bil Mistka & Rose',
    arabic: 'مهلبية ملكية بالمستكة والفستق الحلبي',
    category: 'Chilled Velvet Pudding',
    price: 10000,
    img: 'images/mhallabiya.jpg',
    emoji: '🍮',
    desc: 'Silken whole milk pudding scented with natural Greek Chios mastic tears and pure rosewater, blanketed with Halabi pistachios.'
  },
  'shakar-lama': {
    id: 'shakar-lama',
    name: 'Baghdadi Shakar Lama',
    arabic: 'شكرلمة بغدادية أصيلة بالهيل واللوز',
    category: 'Traditional Melt Cookies',
    price: 12000,
    img: 'images/shakar-lama.jpg',
    emoji: '🥟',
    desc: 'Delicate melt-in-the-mouth Iraqi shortbread cookies prepared with clarified butter and cardamom, each topped with a toasted whole almond.'
  }
};

/* ---- State Management ---- */
let cart = JSON.parse(localStorage.getItem('baghdadia_cart') || '[]');

/* ============================================================
   CUSTOM CURSOR (High-Precision Qream Follower)
   ============================================================ */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursor) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }
});

function updateCursor() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  if (follower) {
    follower.style.left = ringX + 'px';
    follower.style.top = ringY + 'px';
  }
  requestAnimationFrame(updateCursor);
}
requestAnimationFrame(updateCursor);

/* ============================================================
   PRELOADER
   ============================================================ */
function initPreloader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loader-fill');
  if (!loader) return;

  let progress = 0;
  const timer = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 6;
    if (progress > 100) progress = 100;
    if (fill) fill.style.width = progress + '%';

    if (progress === 100) {
      clearInterval(timer);
      setTimeout(() => {
        loader.classList.add('done');
      }, 350);
    }
  }, 40);
}

/* ============================================================
   NAV SCROLL & MOBILE MENU
   ============================================================ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
});

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const burger = document.getElementById('nav-burger');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  if (burger) burger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const burger = document.getElementById('nav-burger');
  if (menu) menu.classList.remove('open');
  if (burger) burger.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   FILTERING PRODUCTS
   ============================================================ */
function setupFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.pcard');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ============================================================
   WISHLIST TOGGLE
   ============================================================ */
function toggleWish(btn) {
  const isLoved = btn.classList.toggle('active');
  btn.textContent = isLoved ? '♥' : '♡';
  showToast(isLoved ? 'Saved to favorites ♥' : 'Removed from favorites');
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */
function openModal(productId) {
  const product = PRODUCTS[productId];
  if (!product) return;

  const backdrop = document.getElementById('modal-backdrop');
  const imgEl = document.getElementById('modal-img');
  const catEl = document.getElementById('modal-cat');
  const nameEl = document.getElementById('modal-name');
  const arabicEl = document.getElementById('modal-arabic');
  const priceEl = document.getElementById('modal-price');
  const descEl = document.getElementById('modal-desc');
  const addBtn = document.getElementById('modal-add-btn');

  if (imgEl) imgEl.src = product.img;
  if (catEl) catEl.textContent = product.category;
  if (nameEl) nameEl.textContent = product.name;
  if (arabicEl) arabicEl.textContent = product.arabic;
  if (priceEl) priceEl.textContent = product.price.toLocaleString('en-US') + ' د.ع';
  if (descEl) descEl.textContent = product.desc;

  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(product.name, product.price, product.emoji, product.img);
      closeModal();
      openCart();
    };
  }

  if (backdrop) {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   SHOPPING CART ENGINE
   ============================================================ */
function saveCart() {
  localStorage.setItem('baghdadia_cart', JSON.stringify(cart));
}

function findProductImage(name) {
  for (const key in PRODUCTS) {
    if (PRODUCTS[key].name === name || PRODUCTS[key].arabic.includes(name) || name.includes(PRODUCTS[key].name)) {
      return PRODUCTS[key].img;
    }
  }
  return 'images/kleicha.jpg';
}

function addToCart(name, price, emoji = '🥮', img = null) {
  const existing = cart.find(item => item.name === name);
  const image = img || findProductImage(name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      emoji: emoji,
      img: image,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  showToast(`Added ${emoji} ${name} to order`);
}

function updateCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removed = cart.splice(index, 1);
  saveCart();
  renderCart();
  if (removed[0]) showToast(`Removed ${removed[0].name}`);
}

function renderCart() {
  const cartBody = document.getElementById('cart-body');
  const emptyState = document.getElementById('cart-empty-state');
  const totalCountEl = document.getElementById('cart-count');
  const headCountEl = document.getElementById('cart-head-count');
  const totalPriceEl = document.getElementById('cart-total-price');

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (totalCountEl) totalCountEl.textContent = totalCount;
  if (headCountEl) headCountEl.textContent = `(${totalCount})`;
  if (totalPriceEl) totalPriceEl.textContent = totalPrice.toLocaleString('en-US') + ' د.ع';

  if (!cartBody) return;

  // Clear existing item elements (leave empty state element)
  cartBody.querySelectorAll('.cart-item').forEach(el => el.remove());

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
  } else {
    if (emptyState) emptyState.style.display = 'none';

    cart.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div class="cart-item-img">
          <img src="${item.img || 'images/kleicha.jpg'}" alt="${item.name}"/>
        </div>
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${(item.price * item.qty).toLocaleString('en-US')} د.ع</div>
          <div class="cart-qty-bar">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
          </div>
        </div>
        <button class="cart-remove-btn" onclick="removeCartItem(${index})" title="Remove">✕</button>
      `;
      cartBody.appendChild(itemEl);
    });
  }
}

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty ⚠️');
    return;
  }

  const orderNum = Math.floor(1000 + Math.random() * 9000);
  showToast(`Order #BGH-${orderNum} placed successfully! ✦`);
  cart = [];
  saveCart();
  renderCart();

  setTimeout(() => {
    closeCart();
  }, 1200);
}

/* ============================================================
   TOAST SYSTEM
   ============================================================ */
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ============================================================
   INIT ON DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  setupFilters();
  renderCart();

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
      closeMobileMenu();
    }
  });
});
