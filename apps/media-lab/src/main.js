/**
 * AI Media Lab — Main Application Script
 * Music Generation, Video Production, Voice Synthesis
 */

const app = document.getElementById('app');

let activeTab = 'music';
let visualizerInterval = null;
let generatingMusic = false;
let generatingVideo = false;
let balance = 20.00;

function render() {
  app.innerHTML = `
    <div class="app-container">
      ${renderSidebar()}
      <main class="main-content">
        ${renderTopBar()}
        
        <div class="dashboard-grid">
          <!-- Left Column: Generator Panels -->
          <div style="display: flex; flex-direction: column; gap: 32px;">
            ${renderGeneratorTabs()}
            ${activeTab === 'music' ? renderMusicGenerator() : renderVideoGenerator()}
          </div>
          
          <!-- Right Column: Queue & Pipeline Status -->
          <div style="display: flex; flex-direction: column; gap: 32px;">
            ${renderVisualizer()}
            ${renderReelsPipeline()}
          </div>
        </div>
      </main>
    </div>
  `;

  attachEventListeners();
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div>
        <a href="/" class="sidebar-logo">
          <span class="logo-icon">🎬</span>
          <span>AI Media Lab</span>
        </a>
        <nav class="sidebar-nav">
          <div class="nav-section-title">Generators</div>
          <div class="nav-item ${activeTab === 'music' ? 'active' : ''}" id="nav-music">
            <span class="nav-icon">🎵</span> Music & Voice
          </div>
          <div class="nav-item ${activeTab === 'video' ? 'active' : ''}" id="nav-video">
            <span class="nav-icon">🎥</span> Video Studio
          </div>
          <div class="nav-section-title">Automation</div>
          <div class="nav-item">
            <span class="nav-icon">📱</span> TikTok/Reels Pipeline
            <span class="nav-badge">4</span>
          </div>
        </nav>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-dim); text-align: center;">
        v1.0 Media Console
      </div>
    </aside>
  `;
}

function renderTopBar() {
  return `
    <div class="top-bar">
      <div>
        <h1>Creative Studio</h1>
        <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 4px;">
          Multi-modal content generation engine powered by Google Gemini.
        </p>
      </div>
      <div style="display: flex; gap: 12px; align-items: center;">
        <div style="background: rgba(0, 245, 255, 0.08); border: 1px solid rgba(0, 245, 255, 0.2); padding: 8px 16px; border-radius: 8px; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-dim); font-family: monospace;">Saldo:</span>
          <strong id="balance-val" style="color: #00f5ff; font-family: monospace; font-size: 1rem;">$${balance.toFixed(2)} MXN</strong>
        </div>
        <button class="btn" id="btn-recharge" style="background: linear-gradient(135deg, #10b981, #059669); color: #fff;">
          ⚡ Recargar $20 MXN
        </button>
        <button class="btn" style="background: rgba(255,255,255,0.05); border: 1px solid var(--surface-border); color: #fff;">
          ⚡ System Ready
        </button>
      </div>
    </div>
  `;
}

function renderGeneratorTabs() {
  return `
    <div style="display: flex; gap: 16px; border-bottom: 1px solid var(--surface-border); padding-bottom: 8px;">
      <button class="btn" id="btn-tab-music" style="background: ${activeTab === 'music' ? 'var(--primary)' : 'rgba(255,255,255,0.05)'}; color: #fff;">
        🎵 Music & Voice AI
      </button>
      <button class="btn" id="btn-tab-video" style="background: ${activeTab === 'video' ? 'var(--primary)' : 'rgba(255,255,255,0.05)'}; color: #fff;">
        🎥 Cinematic Video AI
      </button>
    </div>
  `;
}

function renderMusicGenerator() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>🎵 AI Music & Voice Synthesizer</h3>
        <span style="font-size: 0.8rem; color: var(--text-dim);">Costo: $5.00 MXN</span>
      </div>
      <div class="control-group">
        <label>Describa el estilo musical / ritmo deseado</label>
        <textarea id="music-prompt" rows="3" placeholder="Ej: Ritmo de corrido moderno con sintetizadores futuristas y bajo profundo de 120 bpm..."></textarea>
      </div>
      <div class="control-group">
        <label>Estilo de Voz (Narración)</label>
        <select id="voice-style">
          <option value="david">David - Voz Corporativa / Profesional</option>
          <option value="ana">Ana - Voz Cálida / Promocional</option>
          <option value="gemini">Gemini Voice Core - Autómata</option>
        </select>
      </div>
      <button class="btn" id="btn-generate-music">Generar Pista de Audio ($5.00 MXN)</button>
    </div>
  `;
}

function renderVideoGenerator() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>🎥 Cinematic Video Generator</h3>
        <span style="font-size: 0.8rem; color: var(--text-dim);">Costo: $10.00 MXN</span>
      </div>
      <div class="control-group">
        <label>Indicaciones del Prompt de Video</label>
        <textarea id="video-prompt" rows="3" placeholder="Ej: Video estilo corporativo de alta calidad, paneo lento de servidor con luces neon parpadeantes, estética cyberpunk..."></textarea>
      </div>
      <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div class="control-group">
          <label>Relación de Aspecto</label>
          <select id="video-ratio">
            <option value="916">9:16 (Vertical Reels/TikTok)</option>
            <option value="169">16:9 (Horizontal YouTube)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Duración</label>
          <select id="video-duration">
            <option value="15">15 Segundos</option>
            <option value="30">30 Segundos</option>
            <option value="60">60 Segundos</option>
          </select>
        </div>
      </div>
      <button class="btn" id="btn-generate-video">Renderizar Escena de Video ($10.00 MXN)</button>
    </div>
  `;
}

function renderVisualizer() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>📊 Audio & Rendering Visualizer</h3>
      </div>
      <div class="visualizer-container">
        <div class="visualizer-waves" id="visualizer-waves">
          ${Array.from({ length: 25 }).map(() => `
            <div class="wave-bar"></div>
          `).join('')}
        </div>
        <div style="font-size: 0.8rem; text-align: center; color: var(--text-dim);" id="visualizer-status">
          Estudio ocioso. Esperando generación...
        </div>
      </div>
    </div>
  `;
}

function renderReelsPipeline() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>📱 TikTok/Reels Automated Queue</h3>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--surface-border); padding-bottom: 8px;">
          <div>
            <div style="font-weight: 600; font-size: 0.9rem;">5 Razones de Beautly by Ana Bartolini</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">Duración: 15s · Formato: 9:16</div>
          </div>
          <span style="color: var(--primary); font-size: 0.8rem; font-weight: 600;">✓ Listo</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--surface-border); padding-bottom: 8px;">
          <div>
            <div style="font-weight: 600; font-size: 0.9rem;">AutoMind AI Real-time Data Analytics</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">Duración: 30s · Formato: 9:16</div>
          </div>
          <span style="color: var(--accent); font-size: 0.8rem; font-weight: 600;">✓ Listo</span>
        </div>
      </div>
    </div>
  `;
}

function attachEventListeners() {
  const tabMusic = document.getElementById('btn-tab-music');
  const tabVideo = document.getElementById('btn-tab-video');
  const navMusic = document.getElementById('nav-music');
  const navVideo = document.getElementById('nav-video');

  const btnMusic = document.getElementById('btn-generate-music');
  const btnVideo = document.getElementById('btn-generate-video');
  const btnRecharge = document.getElementById('btn-recharge');

  if (tabMusic) tabMusic.addEventListener('click', () => { activeTab = 'music'; render(); });
  if (tabVideo) tabVideo.addEventListener('click', () => { activeTab = 'video'; render(); });
  if (navMusic) navMusic.addEventListener('click', () => { activeTab = 'music'; render(); });
  if (navVideo) navVideo.addEventListener('click', () => { activeTab = 'video'; render(); });

  if (btnMusic) btnMusic.addEventListener('click', startMusicGeneration);
  if (btnVideo) btnVideo.addEventListener('click', startVideoGeneration);
  if (btnRecharge) btnRecharge.addEventListener('click', showRechargeModal);
}

function updateBalanceDOM() {
  const val = document.getElementById('balance-val');
  if (val) val.textContent = `$${balance.toFixed(2)} MXN`;
}

function showRechargeModal() {
  let modal = document.getElementById('recharge-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'recharge-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3>⚡ Recargar Saldo — Es Tu Mundo AI</h3>
        <span class="modal-close" onclick="closeRechargeModal()">&times;</span>
      </div>
      <div class="modal-body" style="font-family: 'Inter', sans-serif;">
        <p style="margin-bottom: 16px; font-size: 0.95rem; line-height: 1.5; color: var(--text-dim);">Para continuar generando pistas y renderizando videos premium con Gemini, necesitas saldo en tu cuenta.</p>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--surface-border); padding: 18px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.05em;">Paquete Recomendado</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #00f5ff; margin: 10px 0;">$20.00 MXN</div>
          <div style="font-size: 0.85rem; color: var(--text-dim);">Te rinde para <strong>2 Videos Cinemáticos</strong> o <strong>4 Pistas de Audio</strong></div>
        </div>
        <button class="btn" onclick="simulatePayment(20)" style="width: 100%; background: linear-gradient(135deg, #10b981, #059669); font-weight: 600; padding: 14px;">
          💳 Simular Pago $20.00 MXN con Stripe / Mercado Pago
        </button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

window.closeRechargeModal = function() {
  const modal = document.getElementById('recharge-modal');
  if (modal) modal.style.display = 'none';
};

window.simulatePayment = function(amount) {
  balance += amount;
  updateBalanceDOM();
  alert(`✓ ¡Pago simulado exitosamente! Se han abonado $${amount.toFixed(2)} MXN a tu cuenta.`);
  closeRechargeModal();
};

function startMusicGeneration() {
  const prompt = document.getElementById('music-prompt').value.trim();
  if (!prompt) {
    alert('Por favor introduce un prompt de música primero.');
    return;
  }
  if (balance < 5) {
    alert('Saldo insuficiente ($5.00 MXN requeridos). Por favor haz clic en "Recargar $20 MXN" para continuar.');
    showRechargeModal();
    return;
  }

  balance -= 5;
  updateBalanceDOM();
  generatingMusic = true;
  document.getElementById('visualizer-status').innerHTML = 'Generando ritmo y sintetizadores con Gemini Engine...';
  
  let p = 0;
  clearInterval(visualizerInterval);
  
  visualizerInterval = setInterval(() => {
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach(bar => {
      const height = Math.floor(Math.random() * 80) + 10;
      bar.style.height = `${height}%`;
    });
  }, 150);

  setTimeout(() => {
    clearInterval(visualizerInterval);
    generatingMusic = false;
    document.getElementById('visualizer-status').innerHTML = `
      <span style="color: #4ade80;">✓ Generación de audio completada (Costo: $5.00 MXN).</span><br/>
      Archivo: <strong>Corrido_Sintetico_${Date.now().toString().slice(-4)}.mp3</strong>
    `;
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach(bar => bar.style.height = '10%');
  }, 4000);
}

function startVideoGeneration() {
  const prompt = document.getElementById('video-prompt').value.trim();
  if (!prompt) {
    alert('Por favor introduce un prompt de video primero.');
    return;
  }
  if (balance < 10) {
    alert('Saldo insuficiente ($10.00 MXN requeridos). Por favor haz clic en "Recargar $20 MXN" para continuar.');
    showRechargeModal();
    return;
  }

  balance -= 10;
  updateBalanceDOM();
  generatingVideo = true;
  document.getElementById('visualizer-status').innerHTML = 'Iniciando pipeline de renderizado de video AI...';
  
  let p = 0;
  clearInterval(visualizerInterval);
  
  visualizerInterval = setInterval(() => {
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach(bar => {
      const height = Math.floor(Math.random() * 40) + 10;
      bar.style.height = `${height}%`;
    });
  }, 200);

  setTimeout(() => {
    clearInterval(visualizerInterval);
    generatingVideo = false;
    document.getElementById('visualizer-status').innerHTML = `
      <span style="color: #00f5ff;">✓ Renderizado de escena finalizado (Costo: $10.00 MXN).</span><br/>
      Archivo: <strong>Scene_Cinematic_${Date.now().toString().slice(-4)}.mp4</strong>
    `;
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach(bar => bar.style.height = '10%');
  }, 5000);
}

document.addEventListener('DOMContentLoaded', render);
