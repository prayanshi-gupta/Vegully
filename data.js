// ============================================================
//  VEGULLY — data.js  |  Products + Shared Utilities
//  All pages include this file first
// ============================================================

const PRODUCTS = [
  // FRUITS
  { id:1,  name:"Alphonso Mangoes",    category:"fruits",     price:249, unit:"1 kg",   image:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=80", badge:"Bestseller", rating:4.8 },
  { id:2,  name:"Strawberries",        category:"fruits",     price:149, unit:"250 g",  image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.7 },
  { id:3,  name:"Watermelon",          category:"fruits",     price:89,  unit:"1 pc",   image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.5 },
  { id:4,  name:"Blueberries",         category:"fruits",     price:199, unit:"200 g",  image:"https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=500&auto=format&fit=crop&q=80", badge:"Premium",    rating:4.9 },
  { id:5,  name:"Bananas",             category:"fruits",     price:49,  unit:"6 pcs",  image:"https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.4 },
  { id:6,  name:"Red Apples",          category:"fruits",     price:129, unit:"4 pcs",  image:"https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop&q=80", badge:"Organic",    rating:4.6 },
  { id:7,  name:"Kiwi Fruit",          category:"fruits",     price:119, unit:"4 pcs",  image:"https://images.unsplash.com/photo-1585059895524-72359e06133a?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.5 },
  { id:8,  name:"Pomegranate",         category:"fruits",     price:139, unit:"2 pcs",  image:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.7 },
  { id:9,  name:"Sweet Grapes",        category:"fruits",     price:109, unit:"500 g",  image:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.5 },
  { id:10, name:"Pineapple",           category:"fruits",     price:79,  unit:"1 pc",   image:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.3 },
  // VEGETABLES
  { id:11, name:"Baby Spinach",        category:"vegetables", price:59,  unit:"200 g",  image:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=80", badge:"Organic",    rating:4.8 },
  { id:12, name:"Broccoli",            category:"vegetables", price:79,  unit:"500 g",  image:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.6 },
  { id:13, name:"Cherry Tomatoes",     category:"vegetables", price:69,  unit:"250 g",  image:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.7 },
  { id:14, name:"Carrots",             category:"vegetables", price:39,  unit:"500 g",  image:"https://images.unsplash.com/photo-1447175008436-054170c2e979?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.4 },
  { id:15, name:"Bell Peppers Mix",    category:"vegetables", price:89,  unit:"3 pcs",  image:"https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?w=500&auto=format&fit=crop&q=80", badge:"Premium",    rating:4.5 },
  { id:16, name:"Cucumber",            category:"vegetables", price:29,  unit:"2 pcs",  image:"https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.3 },
  { id:17, name:"Sweet Corn",          category:"vegetables", price:49,  unit:"3 pcs",  image:"https://images.unsplash.com/photo-1550828484-958e07b994f8?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.6 },
  { id:18, name:"Avocado",             category:"vegetables", price:179, unit:"2 pcs",  image:"https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=500&auto=format&fit=crop&q=80", badge:"Premium",    rating:4.9 },
  { id:19, name:"Purple Cabbage",      category:"vegetables", price:55,  unit:"1 pc",   image:"https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.4 },
  { id:20, name:"Fresh Garlic",        category:"vegetables", price:35,  unit:"200 g",  image:"https://images.unsplash.com/photo-1501420193490-f9c4e15b0e4a?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.5 },
  // DAIRY
  { id:21, name:"Organic Full Cream Milk", category:"dairy", price:75,  unit:"1 L",    image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=80", badge:"Organic",    rating:4.8 },
  { id:22, name:"Greek Yogurt",        category:"dairy",     price:99,  unit:"400 g",  image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=80", badge:"Bestseller", rating:4.7 },
  { id:23, name:"Fresh Paneer",        category:"dairy",     price:89,  unit:"200 g",  image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.6 },
  { id:24, name:"Cheddar Cheese",      category:"dairy",     price:199, unit:"200 g",  image:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&auto=format&fit=crop&q=80", badge:"Premium",    rating:4.5 },
  { id:25, name:"Salted Butter",       category:"dairy",     price:59,  unit:"100 g",  image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.4 },
  { id:26, name:"Mango Lassi",         category:"dairy",     price:55,  unit:"300 ml", image:"https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.6 },
  // BAKERY
  { id:27, name:"Sourdough Bread",     category:"bakery",    price:149, unit:"400 g",  image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80", badge:"Artisan",    rating:4.9 },
  { id:28, name:"Butter Croissants",   category:"bakery",    price:99,  unit:"4 pcs",  image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.8 },
  { id:29, name:"Whole Wheat Bread",   category:"bakery",    price:69,  unit:"400 g",  image:"https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.5 },
  { id:30, name:"Blueberry Muffins",   category:"bakery",    price:129, unit:"6 pcs",  image:"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&auto=format&fit=crop&q=80", badge:"Premium",    rating:4.7 },
  // BEVERAGES
  { id:31, name:"Cold Brew Coffee",    category:"beverages", price:149, unit:"300 ml", image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=80", badge:"Premium",    rating:4.8 },
  { id:32, name:"Fresh Orange Juice",  category:"beverages", price:89,  unit:"500 ml", image:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=80", badge:"Fresh",      rating:4.7 },
  { id:33, name:"Green Smoothie",      category:"beverages", price:119, unit:"350 ml", image:"https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&auto=format&fit=crop&q=80", badge:"Healthy",    rating:4.6 },
  { id:34, name:"Sparkling Water",     category:"beverages", price:49,  unit:"750 ml", image:"https://images.unsplash.com/photo-1534353341901-bce5f6ce9c0d?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.4 },
  // SNACKS
  { id:35, name:"Premium Trail Mix",   category:"snacks",    price:179, unit:"200 g",  image:"https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=500&auto=format&fit=crop&q=80", badge:"Bestseller", rating:4.7 },
  { id:36, name:"Dark Chocolate Bar",  category:"snacks",    price:129, unit:"100 g",  image:"https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?w=500&auto=format&fit=crop&q=80", badge:"Premium",    rating:4.8 },
  { id:37, name:"Granola Bars",        category:"snacks",    price:89,  unit:"5 bars", image:"https://images.unsplash.com/photo-1622484211148-e3e82b03a0b1?w=500&auto=format&fit=crop&q=80", badge:"Healthy",    rating:4.5 },
  { id:38, name:"Roasted Almonds",     category:"snacks",    price:199, unit:"150 g",  image:"https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&auto=format&fit=crop&q=80", badge:"",           rating:4.6 },
];

/* ── CART ── */
function getCart() {
  try { return JSON.parse(localStorage.getItem('vegully_cart') || '[]'); } catch(e){ return []; }
}
function saveCart(cart) { localStorage.setItem('vegully_cart', JSON.stringify(cart)); }
function getCartCount() { return getCart().reduce(function(s,i){ return s+i.qty; },0); }
function getCartTotal() { return getCart().reduce(function(s,i){ return s+i.price*i.qty; },0); }

function addToCart(productId) {
  var cart = getCart();
  var product = PRODUCTS.find(function(p){ return p.id===productId; });
  if (!product) return;
  var idx = cart.findIndex(function(i){ return i.id===productId; });
  if (idx > -1) { cart[idx].qty += 1; } else { cart.push(Object.assign({},product,{qty:1})); }
  saveCart(cart);
  updateCartBadge();
  showToast('🛒 '+product.name+' added to cart!','success');
  animateCartBadge();
}
function removeFromCart(productId) {
  saveCart(getCart().filter(function(i){ return i.id!==productId; }));
  updateCartBadge();
}
function updateQty(productId, qty) {
  var cart = getCart();
  var idx = cart.findIndex(function(i){ return i.id===productId; });
  if (idx > -1) { if (qty<=0){ cart.splice(idx,1); } else { cart[idx].qty=qty; } }
  saveCart(cart); updateCartBadge();
}
function updateCartBadge() {
  var el = document.getElementById('cartCount');
  if (!el) return;
  var c = getCartCount();
  el.textContent = c;
  el.style.display = c>0 ? 'flex' : 'none';
}
function animateCartBadge() {
  var el = document.getElementById('cartCount');
  if (!el) return;
  el.classList.remove('bounce'); void el.offsetWidth; el.classList.add('bounce');
}

/* ── TOAST ── */
function showToast(msg, type) {
  type = type||'success';
  var container = document.getElementById('toastContainer');
  if (!container) return;
  var t = document.createElement('div');
  t.className = 'toast toast-'+type;
  t.innerHTML = msg;
  container.appendChild(t);
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ t.classList.add('show'); }); });
  setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); },400); },3000);
}

/* ── PRODUCT CARD ── */
function productCardHTML(p, delay) {
  delay = delay||0;
  var stars = '★'.repeat(Math.floor(p.rating)) + (p.rating%1>=0.5?'½':'');
  var badge = p.badge ? '<span class="p-badge">'+p.badge+'</span>' : '';
  return '<div class="product-card scroll-reveal" style="--delay:'+delay+'ms">'+
    badge+
    '<div class="p-img-wrap">'+
      '<img src="'+p.image+'" alt="'+p.name+'" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=60\'"/>'+
    '</div>'+
    '<div class="p-info">'+
      '<span class="p-cat">'+p.category+'</span>'+
      '<h3 class="p-name">'+p.name+'</h3>'+
      '<div class="p-meta">'+
        '<span class="p-unit">'+p.unit+'</span>'+
        '<span class="p-rating">'+stars+' '+p.rating+'</span>'+
      '</div>'+
      '<div class="p-footer">'+
        '<span class="p-price">₹'+p.price+'</span>'+
        '<button class="btn-add" onclick="addToCart('+p.id+')"><i class="fas fa-plus"></i> Add</button>'+
      '</div>'+
    '</div>'+
  '</div>';
}

/* ── SCROLL REVEAL ── */
function initScrollAnimations() {
  var els = document.querySelectorAll('.scroll-reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el){ el.classList.add('revealed'); }); return;
  }
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){
        var d = parseInt(e.target.style.getPropertyValue('--delay'))||0;
        setTimeout(function(){ e.target.classList.add('revealed'); },d);
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.1});
  els.forEach(function(el){ obs.observe(el); });
}

/* ── THEME ── */
function initTheme() {
  var saved = localStorage.getItem('vegully_theme')||'light';
  document.documentElement.setAttribute('data-theme',saved);
  _setThemeIcon(saved);
}
function toggleTheme() {
  var c = document.documentElement.getAttribute('data-theme');
  var n = c==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',n);
  localStorage.setItem('vegully_theme',n);
  _setThemeIcon(n);
}
function _setThemeIcon(theme) {
  var icon = document.getElementById('themeIcon');
  if (icon) icon.className = theme==='dark'?'fas fa-sun':'fas fa-moon';
}

/* ── NAVBAR ── */
function initNavbar() {
  var nav  = document.getElementById('navbar');
  var ham  = document.getElementById('hamburger');
  var menu = document.getElementById('navLinks');
  var btn  = document.getElementById('themeToggle');
  window.addEventListener('scroll',function(){
    if(nav) nav.classList.toggle('scrolled',window.scrollY>50);
  });
  if(btn) btn.addEventListener('click',toggleTheme);
  if(ham&&menu){
    ham.addEventListener('click',function(){ menu.classList.toggle('open'); ham.classList.toggle('active'); });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){ menu.classList.remove('open'); ham.classList.remove('active'); });
    });
  }
}

/* ── ORDERS ── */
function getOrders() {
  try { return JSON.parse(localStorage.getItem('vegully_orders')||'[]'); } catch(e){ return []; }
}
function saveOrder(order) {
  var orders = getOrders(); orders.unshift(order);
  localStorage.setItem('vegully_orders',JSON.stringify(orders));
}

/* ── SHARED INIT (called by every page) ── */
document.addEventListener('DOMContentLoaded',function(){
  initTheme(); initNavbar(); updateCartBadge();
});

// ── Wishlist helpers (available to all pages) ──
function getWishlist(){try{return JSON.parse(localStorage.getItem('vegully_wishlist')||'[]');}catch(e){return[];}}
function saveWishlist(w){localStorage.setItem('vegully_wishlist',JSON.stringify(w));}
function isWishlisted(id){return getWishlist().indexOf(id)>-1;}
function toggleWishlist(id){
  var w=getWishlist(); var idx=w.indexOf(id);
  if(idx>-1){w.splice(idx,1);showToast('Removed from wishlist','info');}
  else{w.push(id);showToast('❤️ Saved to wishlist!','success');}
  saveWishlist(w);
  // update all heart buttons on this page for this product
  document.querySelectorAll('.wish-heart-btn[data-id="'+id+'"]').forEach(function(btn){
    btn.classList.toggle('wishlisted',isWishlisted(id));
    btn.querySelector('i').className=isWishlisted(id)?'fas fa-heart':'far fa-heart';
  });
}

// Override productCardHTML to include wish-heart button
function productCardHTML(p, delay) {
  delay = delay||0;
  var stars = '★'.repeat(Math.floor(p.rating)) + (p.rating%1>=0.5?'½':'');
  var badge = p.badge ? '<span class="p-badge">'+p.badge+'</span>' : '';
  var wishlisted = isWishlisted(p.id);
  var heartCls = wishlisted ? 'wish-heart-btn wishlisted' : 'wish-heart-btn';
  var heartIcon= wishlisted ? 'fas fa-heart' : 'far fa-heart';
  return '<div class="product-card scroll-reveal" style="--delay:'+delay+'ms">'+
    badge+
    '<button class="'+heartCls+'" data-id="'+p.id+'" onclick="toggleWishlist('+p.id+')" title="Save to wishlist"><i class="'+heartIcon+'"></i></button>'+
    '<div class="p-img-wrap">'+
      '<img src="'+p.image+'" alt="'+p.name+'" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=60\'"/>'+
    '</div>'+
    '<div class="p-info">'+
      '<span class="p-cat">'+p.category+'</span>'+
      '<h3 class="p-name">'+p.name+'</h3>'+
      '<div class="p-meta">'+
        '<span class="p-unit">'+p.unit+'</span>'+
        '<span class="p-rating">'+stars+' '+p.rating+'</span>'+
      '</div>'+
      '<div class="p-footer">'+
        '<span class="p-price">₹'+p.price+'</span>'+
        '<button class="btn-add" onclick="addToCart('+p.id+')"><i class="fas fa-plus"></i> Add</button>'+
      '</div>'+
    '</div>'+
  '</div>';
}

/* ════════════════════════════════════════════════════════
   SHARED NAVBAR — renderNavbar('pageId')
   ════════════════════════════════════════════════════════ */
function renderNavbar(activePage) {
  var loggedIn = !!localStorage.getItem('vegully_user');
  var user = loggedIn ? (function(){
    try { return JSON.parse(localStorage.getItem('vegully_user')); } catch(e){ return null; }
  })() : null;

  /* Primary links */
  var primaryDefs = [
    { id:'home',   href:'index.html',  label:'Home' },
    { id:'shop',   href:'shop.html',   label:'Shop' },
    { id:'orders', href:'orders.html', label:'Orders' },
  ];
  if (loggedIn && user) {
    primaryDefs.push({ id:'profile', href:'profile.html', label:'Profile' });
  }
  var primaryLinks = primaryDefs.map(function(p){
    var cls = activePage === p.id ? ' class="active"' : '';
    return '<li><a href="'+p.href+'"'+cls+'>'+p.label+'</a></li>';
  }).join('');

  /* More dropdown — CLICK ONLY, no hover */
  var moreMenu =
    '<li class="nav-more-wrap">'+
      '<button class="nav-more-btn" id="navMoreBtn" type="button">'+
        'More <i class="fas fa-chevron-down" id="moreChevron"></i>'+
      '</button>'+
      '<div class="more-dropdown" id="moreDropdown">'+
        '<div class="more-section-label">Pages</div>'+
        '<a href="wishlist.html" class="more-link"><i class="fas fa-heart"></i><div><span>Wishlist</span><small>Saved items</small></div></a>'+
        '<a href="vendors.html" class="more-link"><i class="fas fa-store"></i><div><span>Our Vendors</span><small>Farm partners</small></div></a>'+
        '<a href="vendor-signup.html" class="more-link"><i class="fas fa-rocket"></i><div><span>Sell on Vegully</span><small>Become a vendor</small></div></a>'+
        '<a href="help.html" class="more-link"><i class="fas fa-headset"></i><div><span>Help Center</span><small>Support & FAQs</small></div></a>'+
        '<div class="more-divider"></div>'+
        '<div class="more-section-label">Categories</div>'+
        '<a href="shop.html?cat=fruits" class="more-link"><i class="fas fa-apple-alt"></i><div><span>Fruits</span><small>Fresh seasonal</small></div></a>'+
        '<a href="shop.html?cat=vegetables" class="more-link"><i class="fas fa-leaf"></i><div><span>Vegetables</span><small>Farm-direct</small></div></a>'+
        '<a href="shop.html?cat=dairy" class="more-link"><i class="fas fa-cheese"></i><div><span>Dairy</span><small>Milk & more</small></div></a>'+
        '<a href="shop.html?cat=bakery" class="more-link"><i class="fas fa-bread-slice"></i><div><span>Bakery</span><small>Artisan bakes</small></div></a>'+
        '<a href="shop.html?cat=beverages" class="more-link"><i class="fas fa-glass-water"></i><div><span>Beverages</span><small>Cold & fresh</small></div></a>'+
        '<a href="shop.html?cat=snacks" class="more-link"><i class="fas fa-cookie-bite"></i><div><span>Snacks</span><small>Healthy bites</small></div></a>'+
      '</div>'+
    '</li>';

  /* Wishlist badge */
  var wlCount = getWishlist().length;
  var wishBtn =
    '<a href="wishlist.html" class="wish-nav-btn" title="Wishlist" aria-label="Wishlist">'+
      '<i class="fas fa-heart"></i>'+
      (wlCount > 0 ? '<span class="wish-nav-count">'+wlCount+'</span>' : '')+
    '</a>';

  /* Auth area */
  var authArea;
  if (loggedIn && user) {
    authArea =
      '<div class="user-menu-wrap" id="userMenuWrap">'+
        '<button class="user-avatar-btn" id="userAvatarBtn" type="button">'+
          '<img src="'+(user.avatar||'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop&q=80')+'" alt="avatar"/>'+
          '<span>'+(user.firstName||'Me')+'</span>'+
          '<i class="fas fa-chevron-down" id="userChevron"></i>'+
        '</button>'+
        '<div class="user-dropdown" id="userDropdown">'+
          '<div class="ud-header">'+
            '<div class="ud-name">'+(user.firstName||'')+' '+(user.lastName||'')+'</div>'+
            '<div class="ud-email">'+(user.email||'')+'</div>'+
          '</div>'+
          '<a href="profile.html" class="ud-link"><i class="fas fa-user"></i> My Profile</a>'+
          '<a href="orders.html" class="ud-link"><i class="fas fa-box"></i> My Orders</a>'+
          '<a href="wishlist.html" class="ud-link"><i class="fas fa-heart"></i> Wishlist</a>'+
          '<div class="ud-divider"></div>'+
          '<a href="vendors.html" class="ud-link"><i class="fas fa-store"></i> Our Vendors</a>'+
          '<a href="help.html" class="ud-link"><i class="fas fa-headset"></i> Help Center</a>'+
          '<div class="ud-divider"></div>'+
          '<button class="ud-link danger" id="signOutBtn" type="button"><i class="fas fa-sign-out-alt"></i> Sign Out</button>'+
        '</div>'+
      '</div>';
  } else {
    authArea = '<a href="login.html" class="nav-auth-btn"><i class="fas fa-user"></i><span>Sign In</span></a>';
  }

  /* Logo SVG — fresh basket icon */
  var logoSVG =
    '<svg class="logo-svg" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">'+
      '<defs>'+
        '<linearGradient id="bgl" x1="0" y1="0" x2="1" y2="1">'+
          '<stop offset="0%" stop-color="#4dde82"/>'+
          '<stop offset="100%" stop-color="#1a7a40"/>'+
        '</linearGradient>'+
      '</defs>'+
      /* circle bg */
      '<circle cx="26" cy="26" r="26" fill="url(#bgl)"/>'+
      /* basket body */
      '<path d="M13 22h26l-3 14H16L13 22Z" fill="white" fill-opacity="0.95"/>'+
      /* basket handle left */
      '<path d="M18 22 C18 14 22 10 26 10" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>'+
      /* basket handle right */
      '<path d="M34 22 C34 14 30 10 26 10" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>'+
      /* basket lines */
      '<line x1="22" y1="22" x2="21" y2="36" stroke="url(#bgl)" stroke-width="1.5"/>'+
      '<line x1="26" y1="22" x2="26" y2="36" stroke="url(#bgl)" stroke-width="1.5"/>'+
      '<line x1="30" y1="22" x2="31" y2="36" stroke="url(#bgl)" stroke-width="1.5"/>'+
      /* leaf top */
      '<circle cx="26" cy="9" r="2.5" fill="white" fill-opacity="0.9"/>'+
    '</svg>';

  /* Assemble */
  var html =
    '<div class="nav-inner">'+
      '<a href="index.html" class="logo">'+
        logoSVG+
        '<span class="logo-wordmark">Vegully</span>'+
      '</a>'+
      '<ul class="nav-links" id="navLinks">'+
        primaryLinks+
        moreMenu+
      '</ul>'+
      '<div class="nav-actions">'+
        '<button class="theme-toggle" id="themeToggle" title="Toggle dark mode" type="button"><i class="fas fa-moon" id="themeIcon"></i></button>'+
        wishBtn+
        '<a href="cart.html" class="cart-btn" aria-label="Cart">'+
          '<i class="fas fa-shopping-basket"></i>'+
          '<span class="cart-count" id="cartCount" style="display:none">0</span>'+
        '</a>'+
        authArea+
        '<button class="hamburger" id="hamburger" aria-label="Menu" type="button"><span></span><span></span><span></span></button>'+
      '</div>'+
    '</div>';

  var navbar = document.getElementById('navbar');
  if (navbar) navbar.innerHTML = html;

  initNavbar();
  updateCartBadge();
  _setThemeIcon(localStorage.getItem('vegully_theme')||'light');

  /* ══════════════════════════════════════════
     MORE DROPDOWN — CLICK ONLY, NO HOVER
     ══════════════════════════════════════════ */
  var moreBtn  = document.getElementById('navMoreBtn');
  var moreDrop = document.getElementById('moreDropdown');
  var moreChev = document.getElementById('moreChevron');
  var moreOpen = false;

  function toggleMore(e) {
    e.stopPropagation();
    moreOpen = !moreOpen;
    moreDrop.classList.toggle('open', moreOpen);
    if (moreChev) moreChev.style.transform = moreOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    /* close user dropdown if open */
    if (moreOpen && userDrop) { userDrop.classList.remove('open'); userOpen = false; if(uChev) uChev.style.transform='rotate(0deg)'; }
  }
  function closeMore() {
    moreOpen = false;
    if (moreDrop) moreDrop.classList.remove('open');
    if (moreChev) moreChev.style.transform = 'rotate(0deg)';
  }

  if (moreBtn) moreBtn.addEventListener('click', toggleMore);

  /* ══════════════════════════════════════════
     USER DROPDOWN — CLICK ONLY, NO HOVER
     ══════════════════════════════════════════ */
  var userBtn  = document.getElementById('userAvatarBtn');
  var userDrop = document.getElementById('userDropdown');
  var uChev    = document.getElementById('userChevron');
  var userOpen = false;

  function toggleUser(e) {
    e.stopPropagation();
    userOpen = !userOpen;
    if (userDrop) userDrop.classList.toggle('open', userOpen);
    if (uChev) uChev.style.transform = userOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    /* close more dropdown if open */
    if (userOpen) closeMore();
  }
  function closeUser() {
    userOpen = false;
    if (userDrop) userDrop.classList.remove('open');
    if (uChev) uChev.style.transform = 'rotate(0deg)';
  }

  if (userBtn) userBtn.addEventListener('click', toggleUser);

  /* Wire up Sign Out button via JS (not inline onclick, so it always works) */
  var signOutBtn = document.getElementById('signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      window.logoutUser();
    });
  }

  /* Click ANYWHERE outside closes both dropdowns.
     Use capture=false so button clicks (like Sign Out) fire first. */
  document.addEventListener('click', function(e) {
    var moreEl = document.getElementById('navMoreBtn');
    var userEl = document.getElementById('userAvatarBtn');
    var morePanelEl = document.getElementById('moreDropdown');
    var userPanelEl = document.getElementById('userDropdown');

    var clickedInMore = (moreEl && moreEl.contains(e.target)) || (morePanelEl && morePanelEl.contains(e.target));
    var clickedInUser = (userEl && userEl.contains(e.target)) || (userPanelEl && userPanelEl.contains(e.target));

    if (!clickedInMore) closeMore();
    if (!clickedInUser) closeUser();
  });
}

/* ── Auth helpers ── */
function loginUser(firstName, lastName, email, avatar) {
  var user = { firstName: firstName, lastName: lastName||'', email: email||'', avatar: avatar||'' };
  localStorage.setItem('vegully_user', JSON.stringify(user));
}
/* logoutUser is on window so inline onclick can always reach it */
window.logoutUser = function() {
  localStorage.removeItem('vegully_user');
  showToast('👋 You have been signed out.', 'info');
  setTimeout(function() { window.location.href = 'index.html'; }, 900);
};
function isLoggedIn() { return !!localStorage.getItem('vegully_user'); }