// ================================================
// MOBILE NAV TOGGLE
// ================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ================================================
// TERMINAL TAB SWITCHING (dev / bio signature element)
// ================================================
const tabs = document.querySelectorAll('.tab');
const panes = document.querySelectorAll('.code-pane');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const target = document.getElementById(`pane-${tab.dataset.tab}`);
    if (target) target.classList.add('active');
  });
});

// Auto-cycle the terminal tabs every 6s so both identities surface
// without requiring the visitor to click.
let autoTabIndex = 0;
setInterval(() => {
  autoTabIndex = (autoTabIndex + 1) % tabs.length;
  tabs[autoTabIndex].click();
}, 6000);

// ================================================
// SCROLL REVEAL (with safety fallbacks — content must
// never get stuck invisible if JS is slow, blocked, or
// IntersectionObserver isn't supported)
// ================================================
const revealEls = document.querySelectorAll('[data-reveal]');

function revealAllNow() {
  revealEls.forEach(el => el.classList.add('in-view'));
}

if ('IntersectionObserver' in window) {
  try {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), i * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  } catch (e) {
    revealAllNow();
  }
} else {
  revealAllNow();
}

// Belt-and-suspenders: if anything is still hidden after 2.5s
// (slow script load, an observer that never fires, etc.) show it anyway.
setTimeout(revealAllNow, 2500);

// ================================================
// AMBIENT CURSOR GLOW (desktop only, respects motion pref)
// ================================================
const glow = document.getElementById('cursorGlow');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
} else if (glow) {
  glow.style.display = 'none';
}

// ================================================
// NAV BACKGROUND ON SCROLL
// ================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.borderBottomColor = 'rgba(201,255,61,0.15)';
  } else {
    nav.style.borderBottomColor = '';
  }
});
