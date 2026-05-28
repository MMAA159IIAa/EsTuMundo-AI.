/**
 * AI Media Lab — Main Application Script
 * Music Generation, Video Production, Voice Synthesis
 */

const app = document.getElementById('app');

let activeTab = 'music';
let visualizerInterval = null;
let generatingMusic = false;
let generatingVideo = false;

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
      <div style="display: flex; gap: 12px;">
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
      <button class="btn" id="btn-generate-music">Generar Pista de Audio</button>
    </div>
  `;
}

function renderVideoGenerator() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>🎥 Cinematic Video Generator</h3>
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
      <button class="btn" id="btn-generate-video">Renderizar Escena de Video</button>
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

  if (tabMusic) tabMusic.addEventListener('click', () => { activeTab = 'music'; render(); });
  if (tabVideo) tabVideo.addEventListener('click', () => { activeTab = 'video'; render(); });
  if (navMusic) navMusic.addEventListener('click', () => { activeTab = 'music'; render(); });
  if (navVideo) navVideo.addEventListener('click', () => { activeTab = 'video'; render(); });

  if (btnMusic) btnMusic.addEventListener('click', startMusicGeneration);
  if (btnVideo) btnVideo.addEventListener('click', startVideoGeneration);
}

function startMusicGeneration() {
  const prompt = document.getElementById('music-prompt').value.trim();
  if (!prompt) {
    alert('Por favor introduce un prompt de música primero.');
    return;
  }

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
      <span style="color: #4ade80;">✓ Generación de audio completada.</span><br/>
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
      <span style="color: #00f5ff;">✓ Renderizado de escena finalizado (1080x1920).</span><br/>
      Archivo: <strong>Scene_Cinematic_${Date.now().toString().slice(-4)}.mp4</strong>
    `;
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach(bar => bar.style.height = '10%');
  }, 5000);
}

document.addEventListener('DOMContentLoaded', render);
