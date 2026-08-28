// =========================================================
// This one file runs on every page. Each block checks whether
// the element it needs actually exists before doing anything,
// so it's safe to include on pages that don't have, say, a
// typewriter, a skill bar, or a testimonial carousel.
// =========================================================

const SITE_PAGES = [
  { name: 'Home', href: 'index.html', icon: 'fa-house' },
  { name: 'About', href: 'about.html', icon: 'fa-user' },
  { name: 'Skills', href: 'skills.html', icon: 'fa-flask-vial' },
  { name: 'Projects', href: 'projects.html', icon: 'fa-diagram-project' },
  { name: 'Experience', href: 'experience.html', icon: 'fa-clock-rotate-left' },
  { name: 'Blog', href: 'blog.html', icon: 'fa-pen-nib' },
  { name: 'Contact', href: 'contact.html', icon: 'fa-envelope' },
  { name: 'Download CV', href: 'assets/Obioma_Chibueze_Justice_CV.pdf', icon: 'fa-download' },
  { name: 'WhatsApp', href: 'https://wa.me/2349133058119', icon: 'fa-brands fa-whatsapp' },
  { name: 'GitHub', href: 'https://github.com/Justixxprime', icon: 'fa-brands fa-github' },
];

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  // ---- preloader ----------
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const hide = () => preloader.classList.add('fade-out');
    window.addEventListener('load', () => setTimeout(hide, 350));
    setTimeout(hide, 1800); // safety net so it never gets stuck
  }

  // ---- footer year --------------------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- mobile menu: full-screen, toggle + outside click + Escape ----------
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const iconOpen = document.getElementById('iconOpen');
  const iconClose = document.getElementById('iconClose');
  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    if (iconOpen) iconOpen.classList.add('hidden');
    if (iconClose) iconClose.classList.remove('hidden');
  }
  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.documentElement.style.overflow = '';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    if (iconOpen) iconOpen.classList.remove('hidden');
    if (iconClose) iconClose.classList.add('hidden');
  }
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
    });
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileMenu(); });
  }

  // ---- sticky nav background on scroll -------------------
  const nav = document.getElementById('siteNav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('bg-ink/90', 'backdrop-blur', 'border-white/10');
      } else {
        nav.classList.remove('bg-ink/90', 'backdrop-blur', 'border-white/10');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // ---- highlight the current page in the nav -------------
  const here = document.body.dataset.page;
  if (here) {
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.page === here) link.classList.add('active');
    });
  }

  // ---- scroll reveal, with safety nets --------------------
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    function revealAllNow() { revealEls.forEach(el => el.classList.add('in')); }
    if ('IntersectionObserver' in window) {
      try {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        revealEls.forEach(el => io.observe(el));
      } catch (e) { revealAllNow(); }
    } else {
      revealAllNow();
    }
    setTimeout(revealAllNow, 2500);
  }

  // ---- assay / skill bar fill on scroll --------------------
  const fills = document.querySelectorAll('.assay-fill');
  if (fills.length) {
    const fillIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.fill + '%';
          fillIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(el => fillIo.observe(el));
  }

  // ---- hero typewriter (home page only) --------------------
  const twEl = document.getElementById('typewriter');
  if (twEl) {
    const lines = [
      'const stack = ["HTML5","Tailwind","JS","React"];',
      'assay.result === "within spec"; // pass',
      'deploy(site).to("Netlify | Vercel | cPanel");',
      'four years of SOPs, now shipping in CSS.'
    ];
    let li = 0, ci = 0, deleting = false;
    function typeLoop() {
      const current = lines[li];
      if (!deleting) {
        ci++;
        twEl.textContent = current.slice(0, ci);
        if (ci === current.length) { deleting = true; setTimeout(typeLoop, 1600); return; }
      } else {
        ci--;
        twEl.textContent = current.slice(0, ci);
        if (ci === 0) { deleting = false; li = (li + 1) % lines.length; }
      }
      setTimeout(typeLoop, deleting ? 25 : 45);
    }
    typeLoop();
  }

  // ---- animated number counters, synced with an SVG progress ring ----------
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const ringFill = el.closest('.stat-ring')?.querySelector('.stat-ring-fill');
        const ringMax = ringFill ? parseFloat(ringFill.dataset.circumference) : null;
        // for the ring, treat the target itself as "100%" of its own scale (a nice visual, not a literal percentage)
        let cur = 0;
        const step = Math.max(1, Math.round(target / 40));
        const tick = () => {
          cur += step;
          if (cur >= target) {
            el.textContent = target + suffix;
            if (ringFill && ringMax) ringFill.style.strokeDashoffset = '0';
            el.style.transition = 'transform .3s cubic-bezier(.34,1.56,.64,1)';
            el.style.transform = 'scale(1.15)';
            setTimeout(() => { el.style.transform = 'scale(1)'; }, 300);
            return;
          }
          el.textContent = cur + suffix;
          if (ringFill && ringMax) {
            const progress = cur / target;
            ringFill.style.strokeDashoffset = String(ringMax * (1 - progress));
          }
          requestAnimationFrame(tick);
        };
        tick();
        countIo.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countIo.observe(el));
  }

  // ---- ambient cursor glow ----------
  const glow = document.getElementById('cursorGlow');
  if (glow) {
    if (!prefersReducedMotion && isFinePointer) {
      window.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      });
    } else {
      glow.style.display = 'none';
    }
  }

  // ---- custom cursor: dot + lagging ring ----------
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  if (cursorDot && cursorRing && !prefersReducedMotion && isFinePointer) {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    });
    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();
    document.querySelectorAll('a, button, .tilt, .skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('grow'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('grow'));
    });
  } else if (cursorDot && cursorRing) {
    cursorDot.style.display = 'none';
    cursorRing.style.display = 'none';
  }

  // ---- scroll progress bar ----------
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // ---- back-to-top button ----------
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 600);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- floating WhatsApp button hides itself near the footer's own WhatsApp
  // CTA, so the two never sit on screen together (was reading as a duplicate
  // icon, especially on narrow mobile viewports) ----------
  const waFloat = document.querySelector('.whatsapp-float');
  const waFooterCta = document.querySelector('.footer-cta');
  if (waFloat && waFooterCta && 'IntersectionObserver' in window) {
    const waIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        waFloat.classList.toggle('is-hidden', entry.isIntersecting);
      });
    }, { threshold: 0.15 });
    waIo.observe(waFooterCta);
  }

  // ---- tilt + spotlight for cards (no extra markup needed) ----------
  if (isFinePointer && !prefersReducedMotion) {
    document.querySelectorAll('.skill-card, .info-card, .testimonial-card, .photo-frame').forEach(card => {
      card.classList.add('tilt');
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
        card.style.setProperty('--x', `${e.clientX - r.left}px`);
        card.style.setProperty('--y', `${e.clientY - r.top}px`);
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  // ---- magnetic buttons ----------
  if (isFinePointer && !prefersReducedMotion) {
    document.querySelectorAll('.btn-prime').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.25;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // ---- terminal tab switching (home hero) ----------
  const tabs = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.code-pane');
  if (tabs.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active', 'text-spectro'));
        panes.forEach(p => p.classList.remove('active'));
        tab.classList.add('active', 'text-spectro');
        const target = document.getElementById(`pane-${tab.dataset.tab}`);
        if (target) target.classList.add('active');
      });
    });
    let autoTabIndex = 0;
    setInterval(() => {
      autoTabIndex = (autoTabIndex + 1) % tabs.length;
      tabs[autoTabIndex].click();
    }, 6000);
  }

  // ---- testimonial carousel ----------
  const testiTrack = document.getElementById('testiTrack');
  const testiDots = document.querySelectorAll('.testi-dot');
  if (testiTrack && testiDots.length) {
    let testiIndex = 0;
    const goTo = (i) => {
      testiIndex = (i + testiDots.length) % testiDots.length;
      testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
      testiDots.forEach((d, di) => d.classList.toggle('bg-spectro', di === testiIndex));
      testiDots.forEach((d, di) => d.classList.toggle('bg-white/20', di !== testiIndex));
    };
    testiDots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    setInterval(() => goTo(testiIndex + 1), 6000);
    goTo(0);
  }

  // ---- skill preview cards (home page) — whole card clickable ----------
  document.querySelectorAll('.skill-card[data-href]').forEach(card => {
    card.addEventListener('click', () => { window.location.href = card.dataset.href; });
    card.addEventListener('keypress', (e) => { if (e.key === 'Enter') window.location.href = card.dataset.href; });
  });

  // ---- confetti burst (used on contact form success) ----------
  function fireConfetti() {
    if (prefersReducedMotion) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'confettiCanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const colors = ['#33E6C9', '#F2A65A', '#F3F1EA'];
    const pieces = Array.from({ length: 120 }, () => ({
      x: canvas.width / 2, y: canvas.height / 3,
      vx: (Math.random() - 0.5) * 14, vy: Math.random() * -10 - 4,
      size: Math.random() * 6 + 4, color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360, spin: (Math.random() - 0.5) * 12, gravity: 0.35,
    }));
    let frame = 0;
    function draw() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.vy += p.gravity; p.x += p.vx; p.y += p.vy; p.rotation += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      if (frame < 130) requestAnimationFrame(draw);
      else canvas.remove();
    }
    draw();
  }

  // ---- phone field: country-code selector (contact page) ----------
  function initCountryCodeSelect() {
    const trigger = document.getElementById('countryCodeTrigger');
    const panel = document.getElementById('countryCodePanel');
    const wrap = trigger ? trigger.closest('.country-code-select') : null;
    const flagEl = document.getElementById('countryFlag');
    const dialEl = document.getElementById('countryDialCode');
    const numberInput = document.getElementById('phoneNumberInput');
    const hiddenField = document.getElementById('phoneFullValue');
    if (!trigger || !panel || !wrap || !numberInput || !hiddenField) return;

    const countries = [
      { name: 'Nigeria', code: 'NG', dial: '+234', flag: '\u{1F1F3}\u{1F1EC}' },
      { name: 'United States', code: 'US', dial: '+1', flag: '\u{1F1FA}\u{1F1F8}' },
      { name: 'United Kingdom', code: 'GB', dial: '+44', flag: '\u{1F1EC}\u{1F1E7}' },
      { name: 'Canada', code: 'CA', dial: '+1', flag: '\u{1F1E8}\u{1F1E6}' },
      { name: 'Ghana', code: 'GH', dial: '+233', flag: '\u{1F1EC}\u{1F1ED}' },
      { name: 'Kenya', code: 'KE', dial: '+254', flag: '\u{1F1F0}\u{1F1EA}' },
      { name: 'South Africa', code: 'ZA', dial: '+27', flag: '\u{1F1FF}\u{1F1E6}' },
      { name: 'Egypt', code: 'EG', dial: '+20', flag: '\u{1F1EA}\u{1F1EC}' },
      { name: 'Germany', code: 'DE', dial: '+49', flag: '\u{1F1E9}\u{1F1EA}' },
      { name: 'France', code: 'FR', dial: '+33', flag: '\u{1F1EB}\u{1F1F7}' },
      { name: 'Netherlands', code: 'NL', dial: '+31', flag: '\u{1F1F3}\u{1F1F1}' },
      { name: 'Ireland', code: 'IE', dial: '+353', flag: '\u{1F1EE}\u{1F1EA}' },
      { name: 'Spain', code: 'ES', dial: '+34', flag: '\u{1F1EA}\u{1F1F8}' },
      { name: 'Portugal', code: 'PT', dial: '+351', flag: '\u{1F1F5}\u{1F1F9}' },
      { name: 'United Arab Emirates', code: 'AE', dial: '+971', flag: '\u{1F1E6}\u{1F1EA}' },
      { name: 'Saudi Arabia', code: 'SA', dial: '+966', flag: '\u{1F1F8}\u{1F1E6}' },
      { name: 'India', code: 'IN', dial: '+91', flag: '\u{1F1EE}\u{1F1F3}' },
      { name: 'Singapore', code: 'SG', dial: '+65', flag: '\u{1F1F8}\u{1F1EC}' },
      { name: 'Australia', code: 'AU', dial: '+61', flag: '\u{1F1E6}\u{1F1FA}' },
      { name: 'New Zealand', code: 'NZ', dial: '+64', flag: '\u{1F1F3}\u{1F1FF}' },
      { name: 'Brazil', code: 'BR', dial: '+55', flag: '\u{1F1E7}\u{1F1F7}' },
      { name: 'Japan', code: 'JP', dial: '+81', flag: '\u{1F1EF}\u{1F1F5}' },
      { name: 'China', code: 'CN', dial: '+86', flag: '\u{1F1E8}\u{1F1F3}' },
    ];

    let selected = countries[0];

    panel.innerHTML = `
      <input type="text" class="country-code-panel-search" placeholder="Search country or code..." aria-label="Search country">
      <div class="country-code-panel-list"></div>`;
    const searchInput = panel.querySelector('.country-code-panel-search');
    const listEl = panel.querySelector('.country-code-panel-list');

    function renderList(filter) {
      const f = (filter || '').trim().toLowerCase();
      const filtered = countries.filter(c =>
        !f || c.name.toLowerCase().includes(f) || c.dial.includes(f) || c.code.toLowerCase() === f
      );
      listEl.innerHTML = (filtered.length ? filtered : countries).map(c => `
        <button type="button" class="country-option ${c.dial === selected.dial && c.name === selected.name ? 'is-active' : ''}" data-dial="${c.dial}" data-flag="${c.flag}" data-code="${c.code}" data-name="${c.name}">
          <span class="country-code-badge">${c.code}</span><span>${c.name}</span><span class="dial">${c.dial}</span>
        </button>`).join('') || '<p class="text-paper/40 text-xs px-2 py-3">No matches</p>';
      listEl.querySelectorAll('.country-option').forEach(btn => {
        btn.addEventListener('click', () => {
          selected = { name: btn.dataset.name, dial: btn.dataset.dial, flag: btn.dataset.flag, code: btn.dataset.code };
          syncTrigger();
          closePanel();
        });
      });
    }

    function syncTrigger() {
      flagEl.textContent = selected.code;
      dialEl.textContent = selected.dial;
      updateHidden();
    }

    function updateHidden() {
      const num = numberInput.value.trim();
      hiddenField.value = num ? `${selected.dial} ${num}` : '';
    }

    function openPanel() {
      wrap.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      renderList('');
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 50);
    }
    function closePanel() {
      wrap.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      wrap.classList.contains('is-open') ? closePanel() : openPanel();
    });
    searchInput.addEventListener('input', () => renderList(searchInput.value));
    document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) closePanel(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });
    numberInput.addEventListener('input', updateHidden);

    renderList('');
    syncTrigger();
  }
  initCountryCodeSelect();

  // ---- contact form: AJAX submit to Web3Forms with inline status + confetti ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const statusBox = document.getElementById('formStatus');
    const submitBtn = document.getElementById('formSubmitBtn');
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const accessKey = contactForm.querySelector('[name="access_key"]').value;
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        if (statusBox) {
          statusBox.textContent = "This form needs a free Web3Forms access key before it can send. See the README.";
          statusBox.className = 'form-status show text-assay text-sm mt-3';
        }
        return;
      }
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
        });
        const data = await res.json();
        if (statusBox) {
          if (data.success) {
            statusBox.textContent = "Message sent, I'll get back to you soon.";
            statusBox.className = 'form-status show text-spectro text-sm mt-3';
            contactForm.reset();
            fireConfetti();
          } else {
            statusBox.textContent = "Something went wrong sending that, try emailing me directly instead.";
            statusBox.className = 'form-status show text-assay text-sm mt-3';
          }
        }
      } catch (err) {
        if (statusBox) {
          statusBox.textContent = "Couldn't reach the server, try emailing me directly instead.";
          statusBox.className = 'form-status show text-assay text-sm mt-3';
        }
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message'; }
      }
    });
  }

  // ---- theme switcher: Dark / Light / Auto · Device / Auto · Location ----------
  function initThemeToggle() {
    const desktopMount = document.querySelector('#siteNav nav > div.hidden.lg\\:flex');
    const mobileMount = document.getElementById('mobileThemeSlot');
    if (!desktopMount && !mobileMount) return;

    const mql = window.matchMedia('(prefers-color-scheme: light)');
    const mqd = window.matchMedia('(prefers-color-scheme: dark)');

    const MODES = {
      dark:     { label: 'Dark',            icon: 'fa-moon' },
      light:    { label: 'Light',           icon: 'fa-sun' },
      device:   { label: 'Auto \u00b7 Device',   icon: 'fa-mobile-screen-button' },
      location: { label: 'Auto \u00b7 Location', icon: 'fa-location-dot' },
    };
    const order = ['dark', 'light', 'device', 'location'];

    function currentMode() { return localStorage.getItem('themeMode') || 'device'; }
    function localHourSaysLight() {
      const h = new Date().getHours();
      return h >= 6 && h < 18;
    }

    // ---- minimal sunrise/sunset estimate from lat/lon, good enough for a
    // day/night theme switch (not a navigation-grade ephemeris) ----------
    function sunIsUp(lat, lon, date) {
      const rad = Math.PI / 180;
      const dayMs = 86400000;
      const start = Date.UTC(date.getUTCFullYear(), 0, 0);
      const dayOfYear = Math.floor((date.getTime() - start) / dayMs);
      const decl = 23.44 * rad * Math.sin(rad * 360 * (284 + dayOfYear) / 365);
      const latR = lat * rad;
      const cosH = (Math.sin(-0.83 * rad) - Math.sin(latR) * Math.sin(decl)) / (Math.cos(latR) * Math.cos(decl));
      if (cosH >= 1) return false;   // sun never rises
      if (cosH <= -1) return true;   // sun never sets
      const hourAngle = Math.acos(cosH) / rad;
      const solarNoonUTC = 12 - lon / 15;
      const sunriseUTC = solarNoonUTC - hourAngle / 15;
      const sunsetUTC = solarNoonUTC + hourAngle / 15;
      const nowUTCHours = date.getUTCHours() + date.getUTCMinutes() / 60;
      let h = nowUTCHours;
      if (sunriseUTC < 0 || sunsetUTC > 24) { h = ((h + 24) % 24); }
      return h >= sunriseUTC && h <= sunsetUTC;
    }

    function getCachedCoords() {
      try {
        const raw = localStorage.getItem('themeCoords');
        if (!raw) return null;
        const c = JSON.parse(raw);
        if (Date.now() - c.t > 24 * 60 * 60 * 1000) return null; // refresh daily
        return c;
      } catch (e) { return null; }
    }

    function isLightNow(mode) {
      if (mode === 'light') return true;
      if (mode === 'dark') return false;
      if (mode === 'device') {
        if (mqd.matches) return false;
        if (mql.matches) return true;
        return localHourSaysLight();
      }
      if (mode === 'location') {
        const c = getCachedCoords();
        if (c) return sunIsUp(c.lat, c.lon, new Date());
        return localHourSaysLight(); // fallback until/unless permission is granted
      }
      return localHourSaysLight();
    }

    function paint() {
      const mode = currentMode();
      if (isLightNow(mode)) {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      renderTriggers(mode);
    }

    function requestLocationThenPaint() {
      if (!('geolocation' in navigator)) { paint(); return; }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          localStorage.setItem('themeCoords', JSON.stringify({ lat: pos.coords.latitude, lon: pos.coords.longitude, t: Date.now() }));
          paint();
        },
        () => { paint(); },  // permission denied or unavailable — silently fall back to time-of-day
        { timeout: 8000, maximumAge: 3600000 }
      );
    }

    function setMode(mode) {
      localStorage.setItem('themeMode', mode);
      if (mode === 'location' && !getCachedCoords()) {
        requestLocationThenPaint();
      } else {
        paint();
      }
      closeAllPanels();
    }

    // ---- builds one switcher instance (trigger button + dropdown panel) ----------
    function buildSwitcher(mount, variant) {
      if (!mount) return null;
      const wrap = document.createElement('div');
      wrap.className = 'theme-switcher' + (variant === 'mobile' ? ' theme-switcher-mobile' : '');

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'theme-trigger';
      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');

      const panel = document.createElement('div');
      panel.className = 'theme-panel';
      panel.setAttribute('role', 'menu');

      order.forEach(m => {
        const opt = document.createElement('button');
        opt.type = 'button';
        opt.className = 'theme-option';
        opt.dataset.mode = m;
        opt.setAttribute('role', 'menuitemradio');
        opt.innerHTML = `<span class="theme-option-icon"><i class="fa-solid ${MODES[m].icon}"></i></span><span class="theme-option-label">${MODES[m].label}</span><span class="theme-option-check"><i class="fa-solid fa-check"></i></span>`;
        opt.addEventListener('click', () => setMode(m));
        panel.appendChild(opt);
      });

      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = wrap.classList.contains('is-open');
        closeAllPanels();
        if (!isOpen) { wrap.classList.add('is-open'); trigger.setAttribute('aria-expanded', 'true'); }
      });

      wrap.appendChild(trigger);
      wrap.appendChild(panel);
      mount.appendChild(wrap);
      return { wrap, trigger, panel };
    }

    const instances = [];
    if (desktopMount) instances.push(buildSwitcher(desktopMount, 'desktop'));
    if (mobileMount) instances.push(buildSwitcher(mobileMount, 'mobile'));

    function closeAllPanels() {
      instances.forEach(inst => {
        if (!inst) return;
        inst.wrap.classList.remove('is-open');
        inst.trigger.setAttribute('aria-expanded', 'false');
      });
    }
    document.addEventListener('click', closeAllPanels);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAllPanels(); });

    function renderTriggers(mode) {
      instances.forEach(inst => {
        if (!inst) return;
        inst.trigger.innerHTML = `<i class="fa-solid ${MODES[mode].icon}"></i><span class="theme-trigger-label">${MODES[mode].label}</span>`;
        inst.trigger.setAttribute('aria-label', 'Theme: ' + MODES[mode].label + ', click to change');
        inst.panel.querySelectorAll('.theme-option').forEach(opt => {
          opt.classList.toggle('is-active', opt.dataset.mode === mode);
        });
      });
    }

    // if the mode is device or location and OS/system state changes, repaint live
    if (mql.addEventListener) {
      mql.addEventListener('change', () => { if (currentMode() === 'device') paint(); });
      mqd.addEventListener('change', () => { if (currentMode() === 'device') paint(); });
    }
    setInterval(() => { const m = currentMode(); if (m === 'device' || m === 'location') paint(); }, 5 * 60 * 1000);
    document.addEventListener('visibilitychange', () => {
      const m = currentMode();
      if (!document.hidden && (m === 'device' || m === 'location')) paint();
    });

    // initial paint; if location mode was chosen previously and coords are stale, refresh quietly
    if (currentMode() === 'location' && !getCachedCoords()) {
      requestLocationThenPaint();
    } else {
      paint();
    }
  }
  initThemeToggle();

  // ---- live local time (Lagos, WAT) ----------
  function initLocalTime() {
    const ctaGroup = document.querySelector('#siteNav nav > div.hidden.lg\\:flex');
    if (!ctaGroup) return;
    const el = document.createElement('span');
    el.id = 'localTime';
    el.innerHTML = '<span class="pulse-dot"></span><span id="localTimeText"></span>';
    ctaGroup.insertBefore(el, ctaGroup.firstChild);
    function update() {
      const text = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit',
      }).format(new Date());
      const target = document.getElementById('localTimeText');
      if (target) target.textContent = `${text} WAT, Lagos`;
    }
    update();
    setInterval(update, 30000);
  }
  initLocalTime();

  // ---- command palette (Cmd+K / Ctrl+K) ----------
  function initCommandPalette() {
    const overlay = document.createElement('div');
    overlay.id = 'cmdkOverlay';
    overlay.innerHTML = `
      <div id="cmdkBox">
        <input id="cmdkInput" type="text" placeholder="Jump to a page, or search..." autocomplete="off">
        <div id="cmdkList"></div>
      </div>`;
    document.body.appendChild(overlay);

    // small trigger hint in the nav
    const ctaGroup = document.querySelector('#siteNav nav > div.hidden.lg\\:flex');
    if (ctaGroup) {
      const hint = document.createElement('button');
      hint.className = 'cmdk-hint';
      hint.type = 'button';
      hint.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> <span>&#8984;K</span>';
      hint.addEventListener('click', () => openPalette());
      const cvLink = ctaGroup.querySelector('a');
      ctaGroup.insertBefore(hint, cvLink || null);
    }

    const input = overlay.querySelector('#cmdkInput');
    const list = overlay.querySelector('#cmdkList');
    let activeIndex = 0;
    let filtered = SITE_PAGES;

    function render() {
      list.innerHTML = filtered.map((p, i) => `
        <div class="cmdk-item ${i === activeIndex ? 'active' : ''}" data-href="${p.href}" data-external="${p.href.startsWith('http')}">
          <i class="fa-solid ${p.icon.startsWith('fa-brands') ? '' : p.icon}"></i>
          <i class="${p.icon.startsWith('fa-brands') ? p.icon : ''}"></i>
          <span>${p.name}</span>
        </div>`).join('') || '<div class="cmdk-item">No matches</div>';
      list.querySelectorAll('.cmdk-item[data-href]').forEach((item, i) => {
        item.addEventListener('click', () => go(filtered[i]));
        item.addEventListener('mousemove', () => { activeIndex = i; render(); });
      });
    }

    function go(page) {
      if (!page) return;
      if (page.href.startsWith('http')) window.open(page.href, '_blank');
      else window.location.href = page.href;
    }

    function openPalette() {
      overlay.classList.add('open');
      input.value = ''; filtered = SITE_PAGES; activeIndex = 0; render();
      setTimeout(() => input.focus(), 50);
      document.documentElement.style.overflow = 'hidden';
    }
    function closePalette() {
      overlay.classList.remove('open');
      document.documentElement.style.overflow = '';
    }

    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      filtered = SITE_PAGES.filter(p => p.name.toLowerCase().includes(q));
      activeIndex = 0; render();
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        overlay.classList.contains('open') ? closePalette() : openPalette();
      }
      if (overlay.classList.contains('open')) {
        if (e.key === 'Escape') closePalette();
        if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); render(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); render(); }
        if (e.key === 'Enter') { e.preventDefault(); go(filtered[activeIndex]); }
      }
    });

    overlay.addEventListener('click', (e) => { if (e.target === overlay) closePalette(); });
  }
  initCommandPalette();

  // ---- project category + tech filter (projects.html only) ----------
  function initProjectFilter() {
    const bar = document.getElementById('projectFilters');
    if (!bar) return;
    const buttons = bar.querySelectorAll('.filter-btn');
    const techSelect = document.getElementById('techFilter');
    const cards = document.querySelectorAll('article[data-category]');
    const emptyMsg = document.getElementById('projectFilterEmpty');
    let activeCategory = 'all';

    function applyFilter() {
      const activeTech = techSelect ? techSelect.value : 'all';
      let visibleCount = 0;
      cards.forEach(card => {
        const categoryMatch = activeCategory === 'all' || card.dataset.category === activeCategory;
        const techList = (card.dataset.tech || '').split(' ');
        const techMatch = activeTech === 'all' || techList.includes(activeTech);
        const show = categoryMatch && techMatch;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });
      if (emptyMsg) emptyMsg.classList.toggle('hidden', visibleCount !== 0);
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeCategory = btn.dataset.filter;
        applyFilter();
      });
    });

    if (techSelect) {
      techSelect.addEventListener('change', applyFilter);
    }
  }
  initProjectFilter();

  // ---- smooth cross-page transition: fade out before an internal link
  // navigates, instead of the browser cutting straight to a blank page ----------
  function initPageTransitions() {
    if (prefersReducedMotion) return;
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (a.target === '_blank' || a.hasAttribute('download')) return;
      if (a.origin && a.origin !== window.location.origin) return; // external link, no transition
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let the user open in a new tab normally
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(() => { window.location.href = a.href; }, 260);
    });
  }
  initPageTransitions();

});
