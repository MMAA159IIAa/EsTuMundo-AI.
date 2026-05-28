/**
 * Es Tu Mundo AI — Main Platform
 * Corporate Hub & Ecosystem Showcase
 */

const app = document.getElementById('app');

// ---- Render Application ----
function render() {
  app.innerHTML = `
    ${renderNavbar()}
    ${renderHero()}
    ${renderDivisions()}
    ${renderAIShowcase()}
    ${renderMetrics()}
    ${renderTechStack()}
    ${renderCompetition()}
    ${renderCTA()}
    ${renderFooter()}
  `;

  initParticles();
  initScrollEffects();
  initNavbarScroll();
  initTerminalAnimation();
  initCounters();
}

// ---- Navbar ----
function renderNavbar() {
  return `
    <nav class="navbar" id="main-navbar">
      <div class="navbar-inner">
        <a href="/" class="navbar-logo">
          <div class="logo-icon">🌐</div>
          <span>Es Tu Mundo AI</span>
        </a>
        <ul class="navbar-links">
          <li><a href="#divisions">Ecosystem</a></li>
          <li><a href="#ai-showcase">AI Engine</a></li>
          <li><a href="#metrics">Metrics</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="#competition">XPRIZE</a></li>
        </ul>
        <div class="navbar-actions">
          <a href="#cta" class="btn btn-primary btn-sm">Get Started</a>
          <button class="mobile-toggle" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `;
}

// ---- Hero Section ----
function renderHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="hero-orb hero-orb-3"></div>
      <canvas class="hero-canvas" id="hero-particles"></canvas>
      <div class="hero-content">
        <div class="badge">🚀 XPRIZE Build with Gemini 2026</div>
        <h1>
          The Future is<br/>
          <span class="text-gradient">AI-Native</span>
        </h1>
        <p class="hero-description">
          A next-generation startup ecosystem combining intelligent automation, 
          creative AI tools, e-commerce, and business solutions — all powered by 
          Google Gemini.
        </p>
        <div class="hero-actions">
          <a href="#divisions" class="btn btn-primary btn-lg">Explore Ecosystem →</a>
          <a href="#ai-showcase" class="btn btn-secondary btn-lg">See AI in Action</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-value" data-count="5">0</div>
            <div class="hero-stat-label">AI Divisions</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value" data-count="12">0</div>
            <div class="hero-stat-label">AI Agents</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value" data-count="24">0</div>
            <div class="hero-stat-label">AI Features</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value" data-count="100">0</div>
            <div class="hero-stat-label">% AI-Native</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---- Divisions Section ----
function renderDivisions() {
  const divisions = [
    {
      id: 'automind',
      icon: '🤖',
      name: 'AutoMind AI',
      description: 'Intelligent automation and AI agents for modern businesses. CRM, customer support, sales, and analytics — all powered by Gemini.',
      tags: ['AI Agents', 'CRM', 'Automation', 'WhatsApp', 'Analytics'],
    },
    {
      id: 'taller',
      icon: '🔧',
      name: 'Taller Pro',
      description: 'Digital transformation for automotive and local businesses. AI diagnostics, smart booking, and workshop management tools.',
      tags: ['Automotive', 'Diagnostics', 'Booking', 'Local Business'],
    },
    {
      id: 'beautly',
      icon: '💄',
      name: 'Beautly by Ana Bartolini',
      description: 'Premium vegan beauty brand powered by AI. Personalized skincare, wellness recommendations, and intelligent e-commerce.',
      tags: ['E-commerce', 'Skincare AI', 'Vegan', 'Wellness'],
    },
    {
      id: 'media',
      icon: '🎬',
      name: 'AI Media Lab',
      description: 'Where creativity meets artificial intelligence. Music generation, video creation, voice synthesis, and content automation.',
      tags: ['Music AI', 'Video', 'Voice Synthesis', 'Content'],
    },
    {
      id: 'platform',
      icon: '🌐',
      name: 'Es Tu Mundo Hub',
      description: 'The central nervous system of the ecosystem. Corporate showcase, service marketplace, and AI innovation portal.',
      tags: ['Hub', 'Marketplace', 'Innovation', 'Investors'],
    },
  ];

  return `
    <section class="section" id="divisions">
      <div class="container">
        <div class="section-header">
          <div class="badge">🏗️ Ecosystem</div>
          <h2>Five Divisions. <span class="text-gradient">One Vision.</span></h2>
          <p>Each division is a standalone AI-native business, connected through shared intelligence and infrastructure.</p>
        </div>
        <div class="divisions-grid">
          ${divisions.map(d => `
            <div class="division-card reveal" data-division="${d.id}">
              <div class="division-icon">${d.icon}</div>
              <h3>${d.name}</h3>
              <p>${d.description}</p>
              <div class="division-tags">
                ${d.tags.map(t => `<span class="division-tag">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ---- AI Showcase Section ----
function renderAIShowcase() {
  return `
    <section class="section ai-showcase" id="ai-showcase">
      <div class="container">
        <div class="ai-demo">
          <div class="ai-demo-visual">
            <div class="ai-terminal">
              <div class="ai-terminal-header">
                <div class="terminal-dot red"></div>
                <div class="terminal-dot yellow"></div>
                <div class="terminal-dot green"></div>
              </div>
              <div class="ai-terminal-body" id="terminal-output">
                <div class="comment">// Gemini AI Engine — Live Demo</div>
                <div class="comment">// Initializing agents...</div>
                <br/>
                <div><span class="prompt">gemini&gt;</span> Loading AutoMind Sales Agent...</div>
                <div class="response">✓ Agent ready — analyzing 847 leads</div>
                <br/>
                <div><span class="prompt">gemini&gt;</span> Loading Beautly Skincare Advisor...</div>
                <div class="response">✓ Agent ready — 156 product recommendations queued</div>
                <br/>
                <div><span class="prompt">gemini&gt;</span> Loading Taller Pro Diagnostics...</div>
                <div class="response">✓ Agent ready — processing 23 diagnostic requests</div>
                <br/>
                <div><span class="prompt">gemini&gt;</span> Loading Media Lab Content Creator...</div>
                <div class="response">✓ Agent ready — 12 content pipelines active</div>
                <br/>
                <div><span class="prompt">gemini&gt;</span> All systems operational <span class="cursor-blink"></span></div>
              </div>
            </div>
          </div>
          <div class="ai-demo-content">
            <div class="badge">⚡ Powered by Gemini</div>
            <h2>AI Runs <span class="text-gradient">Everything</span></h2>
            <p>
              Every division, every decision, every interaction is powered by Google Gemini. 
              Our AI agents don't just assist — they operate autonomously, making intelligent 
              decisions in real-time.
            </p>
            <div class="ai-features">
              <div class="ai-feature">
                <span class="ai-feature-icon">🧠</span>
                <span class="ai-feature-text">12+ AI agents running 24/7 across all divisions</span>
              </div>
              <div class="ai-feature">
                <span class="ai-feature-icon">⚡</span>
                <span class="ai-feature-text">Real-time decision making with Gemini 2.5 Pro</span>
              </div>
              <div class="ai-feature">
                <span class="ai-feature-icon">🔄</span>
                <span class="ai-feature-text">Autonomous workflow automation & optimization</span>
              </div>
              <div class="ai-feature">
                <span class="ai-feature-icon">📊</span>
                <span class="ai-feature-text">Continuous learning from business data & metrics</span>
              </div>
              <div class="ai-feature">
                <span class="ai-feature-icon">🌍</span>
                <span class="ai-feature-text">Multi-language support — English & Spanish native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---- Metrics Section ----
function renderMetrics() {
  return `
    <section class="section" id="metrics">
      <div class="container">
        <div class="section-header">
          <div class="badge">📊 Traction</div>
          <h2>Real Numbers. <span class="text-gradient">Real Impact.</span></h2>
          <p>Built in 90 days. Measured by results, not projections.</p>
        </div>
        <div class="metrics-grid">
          <div class="metric-card reveal">
            <div class="metric-value" data-count="5">0</div>
            <div class="metric-label">Active Divisions</div>
          </div>
          <div class="metric-card reveal">
            <div class="metric-value" data-count="12">0</div>
            <div class="metric-label">AI Agents Deployed</div>
          </div>
          <div class="metric-card reveal">
            <div class="metric-value" data-count="5">0</div>
            <div class="metric-label">Web Platforms</div>
          </div>
          <div class="metric-card reveal">
            <div class="metric-value" data-count="8">0</div>
            <div class="metric-label">API Integrations</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---- Tech Stack Section ----
function renderTechStack() {
  const techs = [
    { icon: '🤖', name: 'Gemini 2.5 Pro' },
    { icon: '⚡', name: 'Vite' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '💳', name: 'Stripe' },
    { icon: '📱', name: 'WhatsApp API' },
    { icon: '☁️', name: 'Google Cloud' },
    { icon: '🚀', name: 'Vercel' },
    { icon: '📦', name: 'Express.js' },
    { icon: '🔐', name: 'JWT Auth' },
    { icon: '🎨', name: 'CSS3 Modern' },
    { icon: '📊', name: 'Chart.js' },
  ];

  return `
    <section class="section" id="tech">
      <div class="container">
        <div class="section-header">
          <div class="badge">🛠️ Technology</div>
          <h2>Built with <span class="text-gradient">Modern Stack</span></h2>
          <p>Enterprise-grade infrastructure designed for scale and performance.</p>
        </div>
        <div class="tech-grid">
          ${techs.map(t => `
            <div class="tech-item reveal">
              <span class="tech-icon">${t.icon}</span>
              <span class="tech-name">${t.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ---- Competition Section ----
function renderCompetition() {
  return `
    <section class="section" id="competition">
      <div class="container">
        <div class="competition-banner reveal">
          <div class="badge">🏆 XPRIZE Build with Gemini</div>
          <h2>Competing for <span class="text-gradient">$2,000,000</span></h2>
          <p>
            Es Tu Mundo AI is competing in the XPRIZE Build with Gemini competition — 
            the world's premier AI startup challenge. We're building a real business with 
            real revenue, real customers, and real AI-native operations.
          </p>
          <div class="competition-stats">
            <div>
              <div class="comp-stat-value">$2M</div>
              <div class="comp-stat-label">Prize Pool</div>
            </div>
            <div>
              <div class="comp-stat-value">90</div>
              <div class="comp-stat-label">Days to Build</div>
            </div>
            <div>
              <div class="comp-stat-value">5</div>
              <div class="comp-stat-label">Categories</div>
            </div>
            <div>
              <div class="comp-stat-value">LA</div>
              <div class="comp-stat-label">Grand Finale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---- CTA Section ----
function renderCTA() {
  return `
    <section class="cta-section" id="cta">
      <div class="container">
        <h2>Ready to Build the <span class="text-gradient">Future</span>?</h2>
        <p>Join our ecosystem and leverage AI to transform your business.</p>
        <div class="hero-actions" style="margin-bottom: 24px;">
          <a href="https://github.com/MMAA159IIAa/EsTuMundo-AI." class="btn btn-primary btn-lg" target="_blank">⭐ Star on GitHub</a>
          <a href="mailto:arturo.automind@gmail.com" class="btn btn-secondary btn-lg">Contact Us</a>
        </div>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a href="https://www.youtube.com/@ESTUMUNDOTECH" target="_blank" style="color: var(--text-muted); font-size: 0.9rem;">▶ YouTube</a>
          <a href="https://www.tiktok.com/@es_tu_mundo.1" target="_blank" style="color: var(--text-muted); font-size: 0.9rem;">🎵 TikTok</a>
          <a href="https://www.instagram.com/estumundo1/?hl=es" target="_blank" style="color: var(--text-muted); font-size: 0.9rem;">📸 Instagram</a>
        </div>
      </div>
    </section>
  `;
}

// ---- Footer ----
function renderFooter() {
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
              <li><a href="#">AutoMind AI</a></li>
              <li><a href="#">Taller Pro</a></li>
              <li><a href="#">Beautly</a></li>
              <li><a href="#">AI Media Lab</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Investors</a></li>
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

// ---- Particle System ----
function initParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const particles = [];

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      hue: Math.random() > 0.5 ? 185 : 270,
    };
  }

  resize();
  for (let i = 0; i < 70; i++) particles.push(createParticle());

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

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(185, 100%, 70%, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  animate();
}

// ---- Scroll Effects ----
function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counters in this element
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          animateCount(el, parseInt(el.dataset.count));
        });
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Navbar Scroll ----
function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile toggle
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.style.display === 'flex';
      links.style.display = isOpen ? 'none' : 'flex';
      links.style.position = isOpen ? '' : 'absolute';
      links.style.top = isOpen ? '' : '70px';
      links.style.left = isOpen ? '' : '0';
      links.style.right = isOpen ? '' : '0';
      links.style.flexDirection = isOpen ? '' : 'column';
      links.style.background = isOpen ? '' : 'rgba(10,10,15,0.95)';
      links.style.padding = isOpen ? '' : '24px';
      links.style.borderBottom = isOpen ? '' : '1px solid rgba(0,245,255,0.1)';
      links.style.backdropFilter = isOpen ? '' : 'blur(20px)';
    });
  }
}

// ---- Terminal Animation ----
function initTerminalAnimation() {
  const terminal = document.getElementById('terminal-output');
  if (!terminal) return;

  // The content is already rendered — we add a subtle re-type effect
  const lines = terminal.querySelectorAll('div');
  lines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-10px)';
    line.style.transition = `all 0.3s ease ${i * 150}ms`;

    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateX(0)';
    }, 100);
  });
}

// ---- Counter Animation ----
function animateCount(el, target) {
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('[data-count]');
        counters.forEach(el => animateCount(el, parseInt(el.dataset.count)));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', render);
