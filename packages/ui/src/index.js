/**
 * Es Tu Mundo AI — Shared UI Components
 * Reusable component factory functions
 */

// ---- Particle Background ----
export function createParticleBackground(container) {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  container.style.position = 'relative';
  container.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      hue: Math.random() > 0.5 ? 185 : 270,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, createParticle);
    animate();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
      ctx.fill();

      // Draw connections
      particles.slice(i + 1).forEach(p2 => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(185, 100%, 70%, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  init();

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', resize);
  };
}

// ---- Scroll Reveal ----
export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// ---- Navbar Scroll Effect ----
export function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ---- Mobile Menu ----
export function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.navbar-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('mobile-open');
    toggle.classList.toggle('active');
  });
}

// ---- Smooth Counter Animation ----
export function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString();
    }
  }

  requestAnimationFrame(update);
}

// ---- Typing Effect ----
export function typeWriter(element, text, speed = 50) {
  return new Promise(resolve => {
    let i = 0;
    element.textContent = '';

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }

    type();
  });
}

// ---- Toast Notification ----
export function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
    <span class="toast-message">${message}</span>
  `;

  toast.style.cssText = `
    position: fixed; bottom: 24px; right: 24px; z-index: 500;
    display: flex; align-items: center; gap: 12px;
    padding: 14px 24px;
    background: rgba(15, 15, 26, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid ${type === 'success' ? 'rgba(16,185,129,0.3)' : type === 'error' ? 'rgba(244,63,94,0.3)' : 'rgba(0,245,255,0.3)'};
    border-radius: 12px;
    color: #E2E8F0;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    animation: fadeInUp 0.3s ease-out;
  `;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'fadeIn 0.3s ease-out reverse';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ---- Render Navbar ----
export function renderNavbar(config = {}) {
  const {
    brand = '🌐 Es Tu Mundo AI',
    links = [],
    ctaText = 'Get Started',
    ctaHref = '#'
  } = config;

  return `
    <nav class="navbar" id="main-navbar">
      <div class="navbar-inner">
        <a href="/" class="navbar-logo">
          <div class="logo-icon">🌐</div>
          <span>${brand}</span>
        </a>
        <ul class="navbar-links">
          ${links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
        </ul>
        <div class="navbar-actions">
          <a href="${ctaHref}" class="btn btn-primary btn-sm">${ctaText}</a>
          <div class="mobile-toggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </nav>
  `;
}

// ---- Render Footer ----
export function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>🌐 Es Tu Mundo AI</h3>
            <p>The Future is AI-Native. Building the next generation of intelligent businesses from Latin America to the world.</p>
          </div>
          <div class="footer-column">
            <h4>Ecosystem</h4>
            <ul>
              <li><a href="/automind">AutoMind AI</a></li>
              <li><a href="/taller-pro">Taller Pro</a></li>
              <li><a href="/beautly">Beautly</a></li>
              <li><a href="/media-lab">AI Media Lab</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/api">API Reference</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/changelog">Changelog</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/investors">Investors</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Es Tu Mundo AI. All rights reserved.</p>
          <p>Powered by Google Gemini · Built for XPRIZE</p>
        </div>
      </div>
    </footer>
  `;
}
