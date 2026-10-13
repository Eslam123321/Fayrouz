/**
 * Al Fayrouz Steel - Master Application Script
 * Product Catalog, Modals, Full i18n Bilingual Engine (AR & EN), WhatsApp Message Generator & Smooth Page Transitions
 */

(function () {
  'use strict';

  // Constants & Safe Fallbacks
  const DEFAULT_WHATSAPP = '201108314970';
  const DEFAULT_PHONE = '01012047521';

  function getWhatsAppNumber() {
    return (typeof COMPANY_INFO !== 'undefined' && COMPANY_INFO && COMPANY_INFO.whatsappNumber)
      ? COMPANY_INFO.whatsappNumber
      : DEFAULT_WHATSAPP;
  }

  // State
  let selectedProduct = null;
  let currentCategory = 'all';
  let searchQuery = '';
  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  if (paramLang === 'ar' || paramLang === 'en') {
    localStorage.setItem('alfayrouz_lang', paramLang);
  }
  let currentLang = localStorage.getItem('alfayrouz_lang') || 'ar';

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileNav();
    initScrollTop();
    initFacebookDropdowns();
    initCounters();
    initLanguageEngine();
    initProductCatalog();
    initModals();
    initContactForms();
  });

  // 2. Header scroll detection
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 3. Mobile navigation drawer
  function initMobileNav() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (!hamburgerBtn || !mobileNav) return;

    hamburgerBtn.addEventListener('click', () => {
      // Close open Facebook dropdowns when opening mobile nav
      document.querySelectorAll('.fb-dropdown-wrapper').forEach(w => {
        w.classList.remove('active');
        const t = w.querySelector('.fb-dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
        const m = w.querySelector('.fb-dropdown-menu');
        if (m) m.style.transform = '';
      });

      const isOpen = mobileNav.classList.toggle('open');
      hamburgerBtn.innerHTML = isOpen 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // 4. Scroll to top button
  function initScrollTop() {
    const scrollBtn = document.querySelector('.btn-scroll-top');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4b. Facebook Dropdown Toggle (Header & Footer)
  function initFacebookDropdowns() {
    const dropdownWrappers = document.querySelectorAll('.fb-dropdown-wrapper');
    if (!dropdownWrappers.length) return;

    function closeAllDropdowns() {
      dropdownWrappers.forEach(w => {
        w.classList.remove('active');
        const t = w.querySelector('.fb-dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
        const m = w.querySelector('.fb-dropdown-menu');
        if (m) m.style.transform = '';
      });
    }

    dropdownWrappers.forEach(wrapper => {
      const trigger = wrapper.querySelector('.fb-dropdown-trigger');
      const menu = wrapper.querySelector('.fb-dropdown-menu');
      if (!trigger) return;

      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const wasActive = wrapper.classList.contains('active');

        // Close mobile nav drawer if open
        const mobileNav = document.querySelector('.mobile-nav');
        const hamburgerBtn = document.querySelector('.hamburger-btn');
        if (mobileNav && mobileNav.classList.contains('open')) {
          mobileNav.classList.remove('open');
          if (hamburgerBtn) hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }

        // Close all dropdowns
        closeAllDropdowns();

        // Toggle clicked dropdown
        if (!wasActive) {
          wrapper.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');

          // Ensure menu is strictly within viewport horizontal bounds
          if (menu) {
            requestAnimationFrame(() => {
              const rect = menu.getBoundingClientRect();
              if (rect.left < 10) {
                menu.style.transform = `translateX(${Math.round(10 - rect.left)}px)`;
              } else if (rect.right > window.innerWidth - 10) {
                menu.style.transform = `translateX(-${Math.round(rect.right - (window.innerWidth - 10))}px)`;
              }
            });
          }
        }
      });

      // Close dropdown immediately when any link inside is clicked
      const items = wrapper.querySelectorAll('.fb-dropdown-item');
      items.forEach(item => {
        item.addEventListener('click', () => {
          closeAllDropdowns();
        });
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.fb-dropdown-wrapper')) {
        closeAllDropdowns();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDropdowns();
      }
    });
  }

  // 5. Bilingual Language Engine (100% Comprehensive Coverage)
  function initLanguageEngine() {
    // Apply saved language immediately
    applyLanguage(currentLang);

    // Bind all toggle buttons
    const langBtns = document.querySelectorAll('.lang-toggle');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const nextLang = currentLang === 'ar' ? 'en' : 'ar';
        applyLanguage(nextLang);
      });
    });
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('alfayrouz_lang', lang);

    const isEn = (lang === 'en');
    document.documentElement.lang = lang;
    document.documentElement.dir = isEn ? 'ltr' : 'rtl';
    document.body.classList.toggle('ltr-mode', isEn);

    // Dictionary lookup
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) {
      const dict = TRANSLATIONS[lang];

      // Translate all [data-i18n]
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });

      // Translate all [data-i18n-placeholder]
      document.querySelectorAll('[data-i18n-placeholder]').forEach(input => {
        const key = input.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
          input.placeholder = dict[key];
        }
      });

      // Update Language Switcher Button Text
      document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.innerHTML = `<i class="fas fa-globe"></i> <span class="lang-text">${dict.lang_toggle_text}</span>`;
      });
    }

    // Re-render product catalog if on catalog or home page
    const gridContainer = document.getElementById('products-grid');
    if (gridContainer && typeof PRODUCTS_DATA !== 'undefined') {
      renderProducts(gridContainer);
      updateCategoryCounts();
    }

    // Reveal page immediately without flicker
    document.documentElement.classList.remove('lang-en-init');
  }

  // Synchronous immediate translation execution prior to render
  if (currentLang === 'en') {
    applyLanguage('en');
  } else {
    document.documentElement.classList.remove('lang-en-init');
  }

  // 6. Products Catalog Rendering & Filtering
  function initProductCatalog() {
    const gridContainer = document.getElementById('products-grid');
    if (!gridContainer || typeof PRODUCTS_DATA === 'undefined') return;

    const tabButtons = document.querySelectorAll('.tab-btn');

    function scrollToSection() {
      const targetEl = document.querySelector('.catalog-toolbar') || 
                       document.getElementById('products-catalog-section') || 
                       document.getElementById('products-grid');
      if (!targetEl) return;
      const header = document.querySelector('.site-header');
      const navOffset = header ? (header.offsetHeight + 15) : 95;
      const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }

    // Helper to switch category and scroll smoothly
    function setCategory(cat, shouldScroll) {
      if (!cat) cat = 'all';
      currentCategory = cat;
      tabButtons.forEach(b => {
        if ((b.dataset.category || 'all') === cat) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      renderProducts(gridContainer);

      if (shouldScroll) {
        requestAnimationFrame(() => {
          scrollToSection();
        });
      }
    }

    // Check URL parameters on load
    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('category');
    if (initialCat && ['all', 'kitchen', 'architectural'].includes(initialCat)) {
      setCategory(initialCat, false);
      setTimeout(() => {
        scrollToSection();
      }, 150);
    } else if (window.location.hash === '#products-catalog-section') {
      renderProducts(gridContainer);
      setTimeout(() => {
        scrollToSection();
      }, 150);
    } else {
      renderProducts(gridContainer);
    }
    updateCategoryCounts();

    // Tab buttons filtering & smooth scroll to beginning of section
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.category || 'all';
        setCategory(cat, true);
        // Update URL query without full reload
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('category', cat);
        window.history.replaceState({}, '', newUrl);
      });
    });

    // Intercept category links in footer or elsewhere on products page
    document.querySelectorAll('a[href*="category="]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && (href.startsWith('products.html') || href.startsWith('?category='))) {
          e.preventDefault();
          const match = href.match(/category=([a-zA-Z0-9_-]+)/);
          const cat = match ? match[1] : 'all';
          setCategory(cat, true);
          const newUrl = new URL(window.location);
          newUrl.searchParams.set('category', cat);
          newUrl.hash = 'products-catalog-section';
          window.history.pushState({}, '', newUrl);
        }
      });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      const p = new URLSearchParams(window.location.search);
      setCategory(p.get('category') || 'all', true);
    });

    // Search filter
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderProducts(gridContainer);
      });
    }
  }

  function updateCategoryCounts() {
    if (typeof PRODUCTS_DATA === 'undefined') return;

    const totalCount = PRODUCTS_DATA.length;
    const arcCount = PRODUCTS_DATA.filter(p => p.category === 'architectural').length;
    const kitCount = PRODUCTS_DATA.filter(p => p.category === 'kitchen').length;

    const countAll = document.getElementById('count-all');
    const countArc = document.getElementById('count-arc');
    const countKit = document.getElementById('count-kit');

    if (countAll) countAll.textContent = totalCount;
    if (countArc) countArc.textContent = arcCount;
    if (countKit) countKit.textContent = kitCount;
  }

  function renderProducts(container) {
    if (!container || typeof PRODUCTS_DATA === 'undefined') return;

    const isEn = (currentLang === 'en');
    let filtered = PRODUCTS_DATA;

    // Filter by Category
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    // Filter by Search Query
    if (searchQuery) {
      filtered = filtered.filter(p => 
        (p.name && p.name.toLowerCase().includes(searchQuery)) ||
        (p.nameEn && p.nameEn.toLowerCase().includes(searchQuery)) ||
        (p.id && p.id.toLowerCase().includes(searchQuery)) ||
        (p.grade && p.grade.toLowerCase().includes(searchQuery)) ||
        (p.shortDesc && p.shortDesc.toLowerCase().includes(searchQuery)) ||
        (p.shortDescEn && p.shortDescEn.toLowerCase().includes(searchQuery))
      );
    }

    if (filtered.length === 0) {
      const noResTitle = isEn ? "No Matching Products Found" : "لم يتم العثور على منتجات مطابقة";
      const noResDesc = isEn ? "Try searching with keywords like 'stair', 'hood', 'sink', or 'railing'" : "جرب البحث بكلمة أخرى مثل 'سلم'، 'هود'، 'حوض'، أو 'درابزين'";

      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; color: #cbd5e1; margin-bottom: 1rem;"><i class="fas fa-search"></i></div>
          <h3 style="font-size: 1.4rem; color: #0f172a; margin-bottom: 0.5rem;">${noResTitle}</h3>
          <p style="color: #64748b;">${noResDesc}</p>
        </div>
      `;
      return;
    }

    const isHomePage = !document.getElementById('product-search');
    const itemsToRender = (isHomePage && currentCategory === 'all' && !searchQuery)
      ? [
          ...filtered.filter(p => p.category === 'kitchen').slice(0, 3),
          ...filtered.filter(p => p.category === 'architectural').slice(0, 3)
        ]
      : filtered;

    const btnDetailsText = isEn ? "View Specs & Quote" : "عرض المواصفات والمقايسة";
    const btnWaText = isEn ? "Order via WhatsApp" : "طلب عبر واتساب";
    const arrowIcon = isEn ? "fa-arrow-right" : "fa-arrow-left";

    container.innerHTML = itemsToRender.map(prod => {
      const prodName = isEn ? (prod.nameEn || prod.name) : prod.name;
      const catName = isEn ? (prod.categoryNameEn || prod.categoryName) : prod.categoryName;

      // Ensure WebP image path
      const imgPath = prod.image.replace(/\.(jpg|png)$/, '.webp');

      const specsPills = (prod.badgeSpecs || []).map(s => {
        const specText = isEn ? (s.textEn || s.textAr || s.text) : (s.textAr || s.text);
        return `
          <div class="spec-col">
            <i class="fas ${s.icon}"></i>
            <span>${specText}</span>
          </div>
        `;
      }).join('');

      return `
        <div class="product-card" data-id="${prod.id}">
          <div class="card-img-wrap">
            <img src="${imgPath}" alt="${prodName}" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="card-category">${catName}</span>
            <h3 class="card-title">${prodName}</h3>
            
            <div class="card-specs-grid">
              ${specsPills}
            </div>

            <div class="card-actions">
              <button class="btn-card-details" onclick="window.AlFayrouzApp.openDetailModal('${prod.id}')">
                <span>${btnDetailsText}</span>
                <i class="fas ${arrowIcon}"></i>
              </button>
              <button class="btn-card-wa" onclick="window.AlFayrouzApp.openWhatsAppOrderModal('${prod.id}')">
                <i class="fab fa-whatsapp"></i>
                <span>${btnWaText}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 7. Modals Management (Product Details & WhatsApp Form)
  function initModals() {
    const detailOverlay = document.getElementById('detail-modal-overlay');
    const waOverlay = document.getElementById('wa-modal-overlay');

    [detailOverlay, waOverlay].forEach(overlay => {
      if (!overlay) return;
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeModals();
        }
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModals();
    });

    const waForm = document.getElementById('wa-order-form');
    if (waForm) {
      waForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitWhatsAppOrder();
      });
    }
  }

  function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(el => {
      el.classList.remove('open');
      el.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  function openDetailModal(productId) {
    if (typeof PRODUCTS_DATA === 'undefined') return;
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    selectedProduct = prod;
    const overlay = document.getElementById('detail-modal-overlay');
    const container = document.getElementById('detail-modal-content');
    if (!overlay || !container) return;

    const isEn = (currentLang === 'en');
    const prodName = isEn ? (prod.nameEn || prod.name) : prod.name;
    const catName = isEn ? (prod.categoryNameEn || prod.categoryName) : prod.categoryName;
    const descText = isEn ? (prod.shortDescEn || prod.shortDesc) : prod.shortDesc;
    const featuresArr = isEn ? (prod.featuresEn || prod.features || []) : (prod.features || []);
    const specsObj = isEn ? (prod.specsEn || prod.specs || {}) : (prod.specs || {});
    const imgPath = prod.image.replace(/\.(jpg|png)$/, '.webp');

    const codeLabel = isEn ? "Fabricated by Al Fayrouz Steel" : "تصنيع شركة الفايروز استيل";
    const featHeader = isEn ? "Key Technical Features:" : "أبرز المميزات الفنية:";
    const specsHeader = isEn ? "Specifications & Materials Sheet:" : "جدول المواصفات والخامات:";
    const btnWaNowText = isEn ? "Order Product via WhatsApp Now" : "طلب المنتج عبر واتساب الآن";
    const btnCallText = isEn ? "Phone Call" : "اتصال هاتفي";

    const featuresList = featuresArr.map(f => `
      <li><i class="fas fa-check-circle" style="color: #10b981;"></i> ${f}</li>
    `).join('');

    const specsRows = Object.entries(specsObj).map(([key, val]) => `
      <tr>
        <td style="font-weight: 700; width: 38%;">${key}</td>
        <td>${val}</td>
      </tr>
    `).join('');

    container.innerHTML = `
      <div class="detail-modal-header">
        <img src="${imgPath}" alt="${prodName}" />
      </div>
      <div class="detail-modal-body">
        <span class="detail-cat-badge">${catName}</span>
        <h2 class="detail-modal-title">${prodName}</h2>
        <div class="detail-modal-code">${codeLabel}</div>
        
        <p style="color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">
          ${descText}
        </p>

        <h4 style="font-size: 1.1rem; font-weight: 800; color: #0f172a; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fas fa-star" style="color: #f59e0b;"></i> ${featHeader}
        </h4>
        <ul class="detail-features-list">
          ${featuresList}
        </ul>

        <h4 style="font-size: 1.1rem; font-weight: 800; color: #0f172a; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fas fa-ruler-combined" style="color: #0f172a;"></i> ${specsHeader}
        </h4>
        <table class="detail-specs-table">
          <tbody>
            ${specsRows}
          </tbody>
        </table>

        <!-- Responsive Action Buttons (WhatsApp & Phone Call) -->
        <div class="detail-modal-actions">
          <button type="button" class="btn-action-whatsapp" onclick="window.AlFayrouzApp.openWhatsAppOrderModal('${prod.id}')">
            <i class="fab fa-whatsapp"></i>
            <span>${btnWaNowText}</span>
          </button>
          <a href="tel:01012047521" class="btn-action-call">
            <i class="fas fa-phone-alt"></i>
            <span>${btnCallText}</span>
          </a>
        </div>
      </div>
    `;

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function openWhatsAppOrderModal(productId) {
    if (typeof PRODUCTS_DATA === 'undefined') return;
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    selectedProduct = prod;
    const overlay = document.getElementById('wa-modal-overlay');
    if (!overlay) return;

    const detailOverlay = document.getElementById('detail-modal-overlay');
    if (detailOverlay) {
      detailOverlay.classList.remove('open');
      detailOverlay.setAttribute('aria-hidden', 'true');
    }

    const isEn = (currentLang === 'en');
    const prodName = isEn ? (prod.nameEn || prod.name) : prod.name;
    const imgPath = prod.image.replace(/\.(jpg|png)$/, '.webp');

    const thumb = document.getElementById('wa-modal-thumb');
    const nameEl = document.getElementById('wa-modal-prod-name');
    const codeEl = document.getElementById('wa-modal-prod-code');
    const prodInput = document.getElementById('wa-modal-prod-input');

    if (thumb) thumb.src = imgPath;
    if (nameEl) nameEl.textContent = prodName;
    if (codeEl) {
      codeEl.textContent = isEn 
        ? `Material: ${prod.gradeEn || prod.grade} | Fabricated by Al Fayrouz Steel`
        : `خامة ستانلس ${prod.grade} | تصنيع شركة الفايروز استيل`;
    }
    if (prodInput) {
      prodInput.value = prodName;
    }

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const nameInput = document.getElementById('wa-client-name');
      if (nameInput) nameInput.focus();
    }, 150);
  }

  function submitWhatsAppOrder() {
    if (!selectedProduct) return;

    const nameInput = document.getElementById('wa-client-name');
    const phoneInput = document.getElementById('wa-client-phone');
    const addressInput = document.getElementById('wa-client-address');
    const notesInput = document.getElementById('wa-client-notes');

    const clientName = nameInput ? nameInput.value.trim() : '';
    const clientPhone = phoneInput ? phoneInput.value.trim() : '';
    const clientAddress = addressInput ? addressInput.value.trim() : '';
    const clientNotes = notesInput ? notesInput.value.trim() : '';

    const isEn = (currentLang === 'en');

    if (!clientName || !clientPhone) {
      alert(isEn ? 'Please enter your name and phone number.' : 'يرجى كتابة الاسم ورقم الهاتف للتواصل معك');
      return;
    }

    const message = isEn
      ? `Hello Al Fayrouz Steel Co.,
I would like to place an order and request a quote for the following product:

📌 *Product Details:*
• Name: ${selectedProduct.nameEn || selectedProduct.name}
• Category: ${selectedProduct.categoryNameEn || selectedProduct.categoryName}
• Grade: ${selectedProduct.gradeEn || selectedProduct.grade}
• Finish: ${selectedProduct.finishEn || selectedProduct.finish}

👤 *Client Information:*
• Name: ${clientName}
• Phone: ${clientPhone}
${clientAddress ? `• Address / City: ${clientAddress}\n` : ''}${clientNotes ? `• Additional Details: ${clientNotes}\n` : ''}
📍 *Sent via Al Fayrouz Steel Official Website*`
      : `السلام عليكم ورحمة الله - شركة الفايروز استيل
أود الاستفسار وطلب عرض سعر / مقايسة للمنتج التالي:

📌 *بيانات المنتج المطلوب:*
• الاسم: ${selectedProduct.name}
• التصنيف: ${selectedProduct.categoryName}
• سبيكة الستانلس: ${selectedProduct.grade}
• نوع التشطيب: ${selectedProduct.finish}

👤 *بيانات العميل للتواصل:*
• اسم العميل: ${clientName}
• رقم الهاتف: ${clientPhone}
${clientAddress ? `• العنوان: ${clientAddress}\n` : ''}${clientNotes ? `• تفاصيل إضافية / الكمية والمقاس: ${clientNotes}\n` : ''}
📍 *مرسل عبر الموقع الرسمي لشركة الفايروز استيل*`;

    const targetNumber = getWhatsAppNumber();
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${targetNumber}?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
    closeModals();

    if (nameInput) nameInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (addressInput) addressInput.value = '';
    if (notesInput) notesInput.value = '';
  }

  // 8. Contact Us Page Form Handler
  function initContactForms() {
    const contactForm = document.getElementById('general-contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isEn = (currentLang === 'en');
      const name = document.getElementById('contact-name')?.value.trim() || '';
      const phone = document.getElementById('contact-phone')?.value.trim() || '';
      const subject = document.getElementById('contact-subject')?.value.trim() || '';
      const msg = document.getElementById('contact-msg')?.value.trim() || '';

      if (!name || !phone) {
        alert(isEn ? 'Please fill in your name and phone number.' : 'يرجى ملء الاسم ورقم الهاتف على الأقل');
        return;
      }

      const waText = isEn
        ? `Hello Al Fayrouz Steel Co.,
General inquiry and quotation request from official website:

👤 *Client Details:*
• Name: ${name}
• Phone: ${phone}
• Subject / Project: ${subject || 'Stainless Steel Equipment & Survey'}
• Message / Notes: ${msg || 'Please contact me to schedule a site inspection'}

📍 *Sent via Contact Form - Al Fayrouz Steel Website*`
        : `السلام عليكم ورحمة الله - شركة الفايروز استيل
طلب استفسار ومقايسة عامة من الموقع:

👤 *بيانات العميل:*
• الاسم: ${name}
• رقم الهاتف: ${phone}
• نوع الاستفسار / المشروع: ${subject || 'تجهيزات ومقايسات ستانلس ستيل'}
• الرسالة والملاحظات: ${msg || 'يرجى التواصل لتحديد موعد المعاينة'}

📍 *مرسل عبر نموذج تواصل معنا - موقع الفايروز استيل*`;

      const encoded = encodeURIComponent(waText);
      const targetNumber = getWhatsAppNumber();
      window.open(`https://wa.me/${targetNumber}?text=${encoded}`, '_blank');
      contactForm.reset();
      alert(isEn ? 'Your inquiry has been prepared! Opening WhatsApp chat now...' : 'تم تجهيز رسالتك وسيتم فتح الواتساب للتواصل الفوري مع الإدارة!');
    });
  }

  // 9. Animated Counting Numbers
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const duration = 1600;
          const startTime = performance.now();

          function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - (1 - progress) * (1 - progress);
            const current = Math.floor(ease * target);
            el.textContent = current.toLocaleString('en-US');

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              el.textContent = target.toLocaleString('en-US');
            }
          }

          requestAnimationFrame(update);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => observer.observe(c));
  }

  function requestInspection(prodName, prodId) {
    const isEn = (currentLang === 'en');
    const text = isEn
      ? `Hello Al Fayrouz Steel Co.,
I would like to book an on-site engineering survey and dimension check for:
• Product: ${prodName}
• Code: ${prodId}

Please contact me to schedule the survey visit.
Sent via Al Fayrouz Steel Official Website`
      : `السلام عليكم ورحمة الله - شركة الفايروز استيل
أود حجز موعد معاينة هندسية في موقع المشروع لمنتج:
• المنتج: ${prodName}
• كود المنتج: ${prodId}

يرجى التواصل لتحديد موعد الزيارة لمطابقة الأبعاد والمواصفات.
مرسل عبر الموقع الرسمي لشركة الفايروز استيل`;

    const targetNumber = getWhatsAppNumber();
    const waUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  }

  // Expose global methods
  window.AlFayrouzApp = {
    openDetailModal,
    openWhatsAppOrderModal,
    requestInspection,
    closeModals,
    setLanguage: applyLanguage,
    toggleLanguage: () => {
      const next = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(next);
    }
  };

})();
