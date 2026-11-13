/* ============================================================
   BAGHDADIA (بغدادية) — Traditional Iraqi Bakery & Sweets
   Interactive Features & State Engine (Qream Clone Engine)
   ============================================================ */

/* ---- Products Database (14 Authentic Iraqi Bakes & Sweets) ---- */
const PRODUCTS_DATA = [
  {
    id: 'kleicha-tamur',
    name: 'Baghdadi Date Kleicha',
    arabic: 'كليجة بغدادية بالتمر والهيل العراقي',
    category: 'kleicha',
    categoryLabel: 'Kleicha & Biscuits',
    price: 18000,
    originalPrice: 24000,
    badge: 'Best Seller ✦',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&fit=crop',
    emoji: '🥮',
    desc: 'The soul of Iraqi hospitality. Crisp, golden cardamom-infused dough stuffed with slow-cooked Karbala Zahdi dates, toasted sesame, and black nigella seeds. Baked in stone hearths until fragrant and flaky.',
    ingredients: 'Karbala Zahdi Dates, Pure Iraqi Dihin Hor (Sheep Ghee), Cardamom, Roasted Sesame, Nigella Seeds, Unbleached Flour',
    serving: 'Best enjoyed warm alongside a steaming glass of Iraqi Cardamom Tea (استكان شاي بالهيل).',
    weight: '1 kg Box (approx. 32-35 pcs)'
  },
  {
    id: 'daheen-najafi',
    name: 'Daheen Najafi Al-Malaki',
    arabic: 'دهين نجفي ملكي بالدهن الحر والمكسرات',
    category: 'sweets',
    categoryLabel: 'Royal Sweets',
    price: 24000,
    originalPrice: 30000,
    badge: 'Iconic Heritage ✦',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80&fit=crop',
    emoji: '🍯',
    desc: 'The legendary molten fudge from the sacred city of Najaf. Cooked for hours with pure clarified sheep ghee (dihin hor), rich date syrup, whole milk, and flour, generously crowned with golden toasted coconut ribbons and whole almonds.',
    ingredients: 'Pure Iraqi Clarified Butter (دهن حر), Date Treacle (دبس التمر), Toasted Coconut, Whole Almonds, Whole Milk, Flour',
    serving: 'Serve slightly warm or at room temperature. Rich, sticky, and deeply caramelized.',
    weight: '1.2 kg Oven Tray'
  },
  {
    id: 'zenood-el-sit',
    name: 'Zenood El Sit Al-Baghdadia',
    arabic: 'زنود الست بالقشطة العربية والفستق',
    category: 'sweets',
    categoryLabel: 'Royal Sweets',
    price: 16000,
    originalPrice: 22000,
    badge: 'Fresh Daily ✦',
    img: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=800&q=80&fit=crop',
    emoji: '🥟',
    desc: 'Historic "Lady\'s Arms" pastry. Gossamer rolls of paper-thin phyllo wrapped around thick clotted buffalo ashta cream, flash-fried to an explosive crisp, dipped in orange blossom attar syrup, and dusted with vivid Halabi pistachios.',
    ingredients: 'Fresh Clotted Ashta Cream (قيمر عرب), Crisp Phyllo Pastry, Orange Blossom Water, Crushed Green Pistachios, Scented Sugar Syrup',
    serving: 'Keep refrigerated. Consume fresh within 48 hours for ultimate crispness.',
    weight: '12 Large Pastry Rolls'
  },
  {
    id: 'royal-baqlawa',
    name: 'Royal Pistachio Baqlawa',
    arabic: 'بقلاوة عراقية فاخرة بالفستق الحلبي والدهن الحر',
    category: 'sweets',
    categoryLabel: 'Royal Sweets',
    price: 34000,
    originalPrice: 42000,
    badge: 'Signature ✦',
    img: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80&fit=crop',
    emoji: '🥮',
    desc: 'Forty hand-stretched gossamer pastry sheets brushed lavishly with molten Iraqi sheep butter, packed with double-roasted emerald green pistachios, baked until golden bronze, and sweetened with light cardamom syrup.',
    ingredients: 'Handmade Phyllo Sheets, Double-Roasted Pistachios, Clarified Sheep Ghee, Cardamom Blossom Syrup',
    serving: 'Room temperature. Pairs exquisitely with dark roast Iraqi Arabic coffee or chai.',
    weight: '1 kg Diamond Cut Platter'
  },
  {
    id: 'kahi-geymar',
    name: 'Kahi & Geymar Arab Set',
    arabic: 'كاهي بغدادي مقرمش وقيمر عرب وعسل سدر',
    category: 'breakfast',
    categoryLabel: 'Kahi & Geymar',
    price: 15000,
    originalPrice: 19000,
    badge: 'Morning Ritual ✦',
    img: 'https://images.unsplash.com/photo-1621236378699-8597faf6a173?w=800&q=80&fit=crop',
    emoji: '🥞',
    desc: 'Baghdad\'s sacred weekend breakfast. Layers upon layers of feather-light puff pastry squares served piping hot from the stone oven, served with a pot of pure fresh water-buffalo Geymar (thick clotted cream) and raw Sidr honey or date molasses.',
    ingredients: 'Layered Puff Pastry, Iraqi Buffalo Geymar Arab, Pure Raw Honey or Date Syrup (دبس)',
    serving: 'Warm the kahi squares for 45 seconds in the oven, then ladle cool thick geymar and drizzle honey over the top.',
    weight: '4 Large Kahi Squares + 250g Fresh Geymar'
  },
  {
    id: 'samoon-hijri',
    name: 'Iraqi Stone-Hearth Samoon',
    arabic: 'صمون حجري عراقي طازج من الفرن',
    category: 'tannour',
    categoryLabel: 'Stone Tannour',
    price: 3000,
    originalPrice: 4500,
    badge: 'Hearth Baked ✦',
    img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80&fit=crop',
    emoji: '🥖',
    desc: 'The undisputed icon of Iraqi bakeries. Diamond-shaped bread baked directly onto 450°C stone refractory oven floors. Features a blistered golden crackling crust and an airy hollow pocket perfect for filling with kebab or falafel.',
    ingredients: 'Hard Wheat Flour, Sourdough Starter, Mineral Water, Sea Salt, Yeast',
    serving: 'Baked hourly. Consume fresh or freeze immediately to preserve oven crispness.',
    weight: 'Pack of 10 Stone Samoon'
  },
  {
    id: 'khubz-tannour',
    name: 'Khubz Tannour Bil Simsim',
    arabic: 'خبز تنور عراقي أصيل بالسمسم المحمص',
    category: 'tannour',
    categoryLabel: 'Stone Tannour',
    price: 4000,
    originalPrice: 5500,
    badge: 'Clay Oven ✦',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&fit=crop',
    emoji: '🫓',
    desc: 'Traditional Mesopotamian clay-oven flatbread. Hand-stretched dough slapped onto blazing ceramic tannour walls, developing charred smoky blisters, sprinkled generously with nutty toasted sesame and black nigella seeds.',
    ingredients: 'Wheat Flour, Water, Wild Yeast, Sea Salt, Toasted Sesame Seeds, Black Caraway Seeds',
    serving: 'Warm gently over an open flame or stovetop skillet for instant oven-fresh fragrance.',
    weight: 'Stack of 8 Large Tannour Breads'
  },
  {
    id: 'zalabia-golden',
    name: 'Crispy Golden Zalabia',
    arabic: 'زلابية عراقية ذهبية مقرمشة بماء الورد',
    category: 'sweets',
    categoryLabel: 'Royal Sweets',
    price: 11000,
    originalPrice: 14000,
    badge: 'Crispy Classic ✦',
    img: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&q=80&fit=crop',
    emoji: '🥨',
    desc: 'Delicate golden honeycombed lattice spirals fried until amber and dipped into cardamom and orange blossom syrup. Delivers an explosive audible crunch giving way to sweet aromatic nectar within.',
    ingredients: 'Fermented Wheat Batter, Pure Corn Starch, Rose & Cardamom Infused Attar Syrup',
    serving: 'Best eaten within 24 hours. Keep in a dry, ventilated box to maintain crunch.',
    weight: '750g Box'
  },
  {
    id: 'kleicha-jawz',
    name: 'Kleicha Jawz & Mabroosh',
    arabic: 'كليجة بالجوز العراقي وجوز الهند المطيب',
    category: 'kleicha',
    categoryLabel: 'Kleicha & Biscuits',
    price: 20000,
    originalPrice: 26000,
    badge: 'Festive ✦',
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&fit=crop',
    emoji: '🥟',
    desc: 'The ceremonial twin to date kleicha. Flaky golden parcels stuffed with crushed Iraqi mountain walnuts, crystallized cane sugar, ground nutmeg, and cinnamon, alongside sweet aromatic coconut crescents scented with orange blossom.',
    ingredients: 'Iraqi Mountain Walnuts, Desiccated Coconut, Clarified Sheep Ghee, Ground Cinnamon, Nutmeg, Rosewater',
    serving: 'Long shelf life (up to 3 weeks). Excellent paired with afternoon chai.',
    weight: '1 kg Assorted Nut & Coconut Box'
  },
  {
    id: 'halawat-shariya',
    name: 'Halawat Sha\'riya Bil Zafaran',
    arabic: 'حلاوة شعرية بالهيل والزعفران والمكسرات',
    category: 'sweets',
    categoryLabel: 'Royal Sweets',
    price: 12000,
    originalPrice: 16000,
    badge: 'House Special ✦',
    img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80&fit=crop',
    emoji: '🍲',
    desc: 'Golden Baghdadi roasted vermicelli halwa slow-cooked with browned clarified butter, scented with royal saffron threads and freshly ground cardamom pods, decorated with toasted almond slivers and pistachios.',
    ingredients: 'Roasted Golden Vermicelli, Clarified Sheep Butter, Saffron Threads, Crushed Green Cardamom, Slivered Almonds',
    serving: 'Warm before serving. A comforting, deeply aromatic traditional Iraqi comfort dessert.',
    weight: '800g Bowl'
  },
  {
    id: 'khabeesat-tamur',
    name: 'Khabeesat Al-Tamur',
    arabic: 'خبيصة التمر والجوز بالسمن البلدي والسمسم',
    category: 'sweets',
    categoryLabel: 'Royal Sweets',
    price: 16000,
    originalPrice: 21000,
    badge: 'Traditional ✦',
    img: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80&fit=crop',
    emoji: '🌰',
    desc: 'An ancient Mesopotamian confection made from sun-cured Zahdi dates mashed and browned in bubbling sheep ghee, mixed with toasted whole sesame seeds, cardamom, and mountain walnuts, rolled into rich chewy medallions.',
    ingredients: 'Sun-cured Zahdi Dates, Clarified Ghee, Roasted White Sesame, Mountain Walnuts, Cardamom Powder',
    serving: 'Rich in natural energy. Perfect with bitter black coffee (قهوة عربية سادة).',
    weight: '900g Presentation Box'
  },
  {
    id: 'barazek-simsim',
    name: 'Damascene-Baghdadi Barazek',
    arabic: 'برازق فاخرة بالسمسم المحمص والفستق الحلبي',
    category: 'kleicha',
    categoryLabel: 'Kleicha & Biscuits',
    price: 13000,
    originalPrice: 17000,
    badge: 'Crispy Crunch ✦',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80&fit=crop',
    emoji: '🍪',
    desc: 'Ultra-thin, feather-light honey biscuits encrusted on top with a dense mosaic of caramelized roasted sesame seeds and on the underside with vibrant emerald pistachios. Baked to a brittle, shattering snap.',
    ingredients: 'Wheat Flour, Pure Butter, Blossom Honey, Toasted Sesame Seeds, Turkish Pistachios',
    serving: 'Keeps crisp for weeks in an airtight tin. The ideal daily biscuit for tea time.',
    weight: '600g Tin'
  },
  {
    id: 'mhallabiya-mistka',
    name: 'Mhallabiya Bil Mistka & Rose',
    arabic: 'مهلبية ملكية بالمستكة الطبيعية والفستق الحلبي',
    category: 'sweets',
    categoryLabel: 'Royal Sweets',
    price: 10000,
    originalPrice: 14000,
    badge: 'Chilled Velvet ✦',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80&fit=crop',
    emoji: '🍮',
    desc: 'Silken whole milk pudding slow-infused with tears of natural Greek Chios mastic and mountain rosewater, topped with a thick carpet of crushed green Halabi pistachios and edible dried Damascus rose petals.',
    ingredients: 'Fresh Whole Milk, Chios Tears of Mastic, Pure Rosewater, Corn Starch, Crushed Pistachios, Rose Petals',
    serving: 'Served cold. Keep refrigerated.',
    weight: 'Set of 4 Glass Dessert Jars'
  },
  {
    id: 'royal-diyafa-tin',
    name: 'Royal Diyafa Eid Grand Tin',
    arabic: 'صندوق ضيافة الملوك الملكي المشكل للأعياد',
    category: 'breakfast',
    categoryLabel: 'Royal Gift Box',
    price: 68000,
    originalPrice: 85000,
    badge: 'VIP Gift Box ✦',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&fit=crop',
    emoji: '👑',
    desc: 'The pinnacle of Iraqi gifting. An ornate engraved brass presentation chest filled with 2.5 kg of assorted artisanal bakes: Date Kleicha, Walnut Kleicha, Pistachio Baqlawa, Barazek, and a vacuum-sealed tray of fresh Daheen Najafi.',
    ingredients: 'Complete Royal Assortment (Kleicha, Baqlawa, Daheen, Barazek) in an embossed heritage gift box',
    serving: 'The ultimate centerpiece for Eid, weddings, official delegations, and high-honor guests.',
    weight: '2.5 kg Grand Assortment'
  }
];

/* ---- State Management ---- */
let cart = JSON.parse(localStorage.getItem('baghdadia_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('baghdadia_wishlist') || '[]');
let isAudioMuted = false;

/* ============================================================
   AUDIO SYNTHESIZER (Tactile Luxury UI Sound)
   ============================================================ */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
}

function playUiSound(type = 'click') {
  if (isAudioMuted) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      // Warm subtle wooden tap
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.04);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'chime') {
      // Golden bell shimmer for additions
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.18); // A5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {
    // Audio context silent fallback
  }
}

function toggleAudio() {
  isAudioMuted = !isAudioMuted;
  const btn = document.getElementById('audio-toggle-btn');
  if (btn) {
    btn.innerHTML = isAudioMuted ? '🔇' : '🔊';
    btn.setAttribute('title', isAudioMuted ? 'Sound: Muted' : 'Sound: Enabled');
  }
  showToast(isAudioMuted ? 'UI Sounds Muted' : 'UI Sounds Enabled');
}

/* ============================================================
   CUSTOM CURSOR (Lag follower & Magnetic Reactivity)
   ============================================================ */
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorDot) {
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  }
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.14;
  ringY += (mouseY - ringY) * 0.14;
  if (cursorRing) {
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ============================================================
   FULLSCREEN PRELOADER
   ============================================================ */
function initLoader() {
  const loader = document.getElementById('loader-screen');
  const bar = document.getElementById('loader-progress-bar');
  const percentText = document.getElementById('loader-percentage');
  if (!loader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 3;
    if (progress > 100) progress = 100;
    if (bar) bar.style.width = progress + '%';
    if (percentText) percentText.textContent = progress + '%';

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('done');
        document.body.style.overflow = '';
      }, 400);
    }
  }, 35);
}

/* ============================================================
   HERO 3D MOUSE TILT (Qream Signature Effect)
   ============================================================ */
const heroPin = document.getElementById('hero-perspective-box');
if (heroPin) {
  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    const rotX = -dy * 3.5;
    const rotY = dx * 4.5;
    heroPin.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });
}

/* ============================================================
   NAV SCROLL EFFECT & MOBILE MENU
   ============================================================ */
const nav = document.getElementById('nav-header');
window.addEventListener('scroll', () => {
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }
});

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const burger = document.getElementById('nav-burger-btn');
  if (!drawer) return;
  const isOpen = drawer.classList.toggle('open');
  if (burger) {
    burger.classList.toggle('open', isOpen);
  }
  document.body.style.overflow = isOpen ? 'hidden' : '';
  playUiSound('click');
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const burger = document.getElementById('nav-burger-btn');
  if (drawer) drawer.classList.remove('open');
  if (burger) burger.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   PRODUCTS RENDERING & FILTERING
   ============================================================ */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const items = filter === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === filter);

  grid.innerHTML = items.map((product, index) => {
    const isWished = wishlist.includes(product.id);
    const isWide = index === 0 || index === 7;
    return `
      <article class="pcard-item ${isWide ? 'pcard--wide' : ''}" data-id="${product.id}" data-category="${product.category}">
        <div class="pcard-image-box">
          <img src="${product.img}" alt="${product.name}" loading="lazy"/>
          <span class="pcard-tag-badge">${product.badge}</span>
          <div class="pcard-quick-overlay">
            <button class="pcard-action-btn btn-add-bag" onclick="handleAddToCart('${product.id}')">Add to Order</button>
            <button class="pcard-action-btn btn-quick-view" onclick="openProductModal('${product.id}')">Inspect</button>
          </div>
        </div>
        <div class="pcard-content">
          <div>
            <div class="pcard-meta-top">
              <span class="pcard-cat-label">${product.categoryLabel}</span>
              <button class="pcard-wish-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist('${product.id}', this)" title="Wishlist">
                ${isWished ? '♥' : '♡'}
              </button>
            </div>
            <div class="pcard-title-group">
              <h4>${product.name}</h4>
              <span class="arabic-title">${product.arabic}</span>
            </div>
            <p class="pcard-desc-brief">${product.desc}</p>
          </div>
          <div class="pcard-price-row">
            <div class="pcard-prices">
              <span class="price-current">${product.price.toLocaleString('en-US')} د.ع</span>
              <span class="price-original">${product.originalPrice.toLocaleString('en-US')} د.ع</span>
            </div>
            <button class="pcard-cart-btn-mobile" onclick="handleAddToCart('${product.id}')">
              + Add
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll('.filter-pill-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      playUiSound('click');
      renderProducts(cat);
    });
  });
}

/* ============================================================
   WISHLIST ENGINE
   ============================================================ */
function toggleWishlist(productId, btnEl) {
  playUiSound('click');
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    btnEl.classList.remove('active');
    btnEl.textContent = '♡';
    showToast(`Removed ${product ? product.name : 'item'} from favorites`);
  } else {
    wishlist.push(productId);
    btnEl.classList.add('active');
    btnEl.textContent = '♥';
    showToast(`Added ${product ? product.name : 'item'} to favorites ♥`);
  }
  localStorage.setItem('baghdadia_wishlist', JSON.stringify(wishlist));
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */
let activeModalProductId = null;
let modalQuantity = 1;

function openProductModal(productId) {
  playUiSound('click');
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  activeModalProductId = productId;
  modalQuantity = 1;

  document.getElementById('modal-img').src = product.img;
  document.getElementById('modal-badge').textContent = product.badge;
  document.getElementById('modal-category').textContent = product.categoryLabel;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-arabic').textContent = product.arabic;
  document.getElementById('modal-desc').textContent = product.desc;
  document.getElementById('modal-ingredients').textContent = product.ingredients;
  document.getElementById('modal-serving').textContent = product.serving;
  document.getElementById('modal-weight').textContent = product.weight;
  document.getElementById('modal-price-now').textContent = product.price.toLocaleString('en-US') + ' د.ع';
  document.getElementById('modal-price-was').textContent = product.originalPrice.toLocaleString('en-US') + ' د.ع';
  document.getElementById('modal-qty-val').textContent = modalQuantity;

  document.getElementById('product-modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  playUiSound('click');
  document.getElementById('product-modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function changeModalQty(delta) {
  playUiSound('click');
  modalQuantity += delta;
  if (modalQuantity < 1) modalQuantity = 1;
  document.getElementById('modal-qty-val').textContent = modalQuantity;
}

function addModalItemToCart() {
  if (!activeModalProductId) return;
  const product = PRODUCTS_DATA.find(p => p.id === activeModalProductId);
  if (!product) return;

  addToCart(product, modalQuantity);
  closeProductModal();
  openCartDrawer();
}

/* ============================================================
   SHOPPING CART & STATE
   ============================================================ */
function saveCart() {
  localStorage.setItem('baghdadia_cart', JSON.stringify(cart));
}

function handleAddToCart(productId) {
  playUiSound('chime');
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  addToCart(product, 1);
  showToast(`Added ${product.emoji} ${product.name} to order`);
}

function addToCart(product, qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      arabic: product.arabic,
      price: product.price,
      img: product.img,
      emoji: product.emoji,
      qty: qty
    });
  }
  saveCart();
  renderCart();
  playUiSound('chime');
}

function updateCartItemQty(index, delta) {
  playUiSound('click');
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  playUiSound('click');
  if (!cart[index]) return;
  const removed = cart.splice(index, 1);
  saveCart();
  renderCart();
  if (removed[0]) showToast(`Removed ${removed[0].name} from order`);
}

function renderCart() {
  const itemsContainer = document.getElementById('cart-items-list');
  const emptyState = document.getElementById('cart-empty-state');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const deliveryEl = document.getElementById('cart-delivery-val');
  const grandTotalEl = document.getElementById('cart-grandtotal-val');
  const navBadge = document.getElementById('nav-cart-badge');
  const drawerCount = document.getElementById('drawer-items-count');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Delivery fee logic based on city
  const citySelect = document.getElementById('cart-city-select');
  const selectedCity = citySelect ? citySelect.value : 'baghdad';
  let deliveryFee = 0;
  if (totalItems > 0) {
    if (selectedCity === 'baghdad') deliveryFee = 4000;
    else if (selectedCity === 'erbil') deliveryFee = 5000;
    else deliveryFee = 6000; // other governorates
  }

  const grandTotal = subtotal + deliveryFee;

  if (navBadge) navBadge.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = `(${totalItems})`;

  if (subtotalEl) subtotalEl.textContent = subtotal.toLocaleString('en-US') + ' د.ع';
  if (deliveryEl) deliveryEl.textContent = (totalItems > 0 ? deliveryFee.toLocaleString('en-US') + ' د.ع' : '0 د.ع');
  if (grandTotalEl) grandTotalEl.textContent = grandTotal.toLocaleString('en-US') + ' د.ع';

  if (!itemsContainer) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    itemsContainer.querySelectorAll('.cart-item-row').forEach(el => el.remove());
  } else {
    if (emptyState) emptyState.style.display = 'none';
    itemsContainer.querySelectorAll('.cart-item-row').forEach(el => el.remove());

    cart.forEach((item, i) => {
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div class="cart-item-thumb">
          <img src="${item.img}" alt="${item.name}"/>
        </div>
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${(item.price * item.qty).toLocaleString('en-US')} د.ع</span>
          <div class="cart-item-qty-bar">
            <button class="qty-btn" onclick="updateCartItemQty(${i}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${i}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove-btn" onclick="removeCartItem(${i})" title="Remove">✕</button>
      `;
      itemsContainer.appendChild(row);
    });
  }
}

function openCartDrawer() {
  playUiSound('click');
  const backdrop = document.getElementById('cart-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (backdrop && drawer) {
    backdrop.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  playUiSound('click');
  const backdrop = document.getElementById('cart-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (backdrop && drawer) {
    backdrop.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   CHECKOUT & ORDER SIMULATION
   ============================================================ */
function handleCheckout() {
  if (cart.length === 0) {
    showToast('Your order bag is empty ⚠️');
    return;
  }

  playUiSound('chime');
  closeCartDrawer();

  const randomId = '#BGH-' + Math.floor(1000 + Math.random() * 9000);
  const successModal = document.getElementById('checkout-success-modal');
  const orderIdEl = document.getElementById('success-order-id-val');

  if (orderIdEl) orderIdEl.textContent = randomId;
  if (successModal) {
    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Clear cart after checkout
  cart = [];
  saveCart();
  renderCart();
}

function closeSuccessModal() {
  playUiSound('click');
  const successModal = document.getElementById('checkout-success-modal');
  if (successModal) successModal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   INTERACTIVE CATERING / COLLAB FORM
   ============================================================ */
function setupCollabPills() {
  const occasionButtons = document.querySelectorAll('[data-occasion]');
  occasionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playUiSound('click');
      occasionButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  const budgetButtons = document.querySelectorAll('[data-budget]');
  budgetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playUiSound('click');
      budgetButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}

function handleCollabSubmit(e) {
  e.preventDefault();
  playUiSound('chime');
  showToast('Inquiry sent! Our master baker will reach out via WhatsApp ✦');
  const form = document.getElementById('collab-form');
  if (form) form.reset();
}

/* ============================================================
   TOAST SYSTEM
   ============================================================ */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ============================================================
   INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  renderProducts('all');
  setupFilterButtons();
  setupCollabPills();
  renderCart();

  // Watch city change in drawer
  const citySelect = document.getElementById('cart-city-select');
  if (citySelect) {
    citySelect.addEventListener('change', () => {
      playUiSound('click');
      renderCart();
    });
  }

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeMobileNav();
      closeSuccessModal();
    }
  });
});
