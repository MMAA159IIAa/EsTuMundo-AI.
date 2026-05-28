/**
 * EsTuTanda — Digitalizing savings groups with AI
 * Main Application Script
 */

const app = document.getElementById('app');

// State variables for simulator
let paymentAmount = 1000;
let frequency = 'semanal';
let participants = 10;
let reputationScore = 950;
let logLines = [
  'System initialized: EsTuTanda core online.',
  'Gemini Risk Assessor active - monitoring all groups.',
  'Stripe Payment Gateway ready.',
  'Mercado Pago API connected.'
];

function render() {
  app.innerHTML = `
    <div class="app-container">
      ${renderSidebar()}
      <main class="main-content">
        ${renderTopBar()}
        
        <div class="dashboard-grid">
          <!-- Main Left Column -->
          <div style="display: flex; flex-direction: column; gap: 32px;">
            ${renderSimulator()}
            ${renderActiveTandas()}
          </div>
          
          <!-- Sidebar Right Column -->
          <div style="display: flex; flex-direction: column; gap: 32px;">
            ${renderReputation()}
            ${renderGatewayLog()}
            ${renderAIInsurance()}
          </div>
        </div>
      </main>
    </div>
  `;

  attachEventListeners();
  updateSimulatorResults();
  updateProgressBars();
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div>
        <a href="/" class="sidebar-logo">
          <span class="logo-icon">💵</span>
          <span>EsTuTanda</span>
        </a>
        <nav class="sidebar-nav">
          <div class="nav-section-title">Fintech Core</div>
          <div class="nav-item active">
            <span class="nav-icon">📊</span> Ahorro Rotativo
          </div>
          <div class="nav-item">
            <span class="nav-icon">👥</span> Mis Grupos
            <span class="nav-badge">3</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">🛡️</span> Garantía AI
          </div>
          <div class="nav-section-title">Ajustes</div>
          <div class="nav-item">
            <span class="nav-icon">⚙️</span> Configuración
          </div>
        </nav>
      </div>
      <div class="sidebar-footer">
        <div class="nav-item" style="padding: 0;">
          <div class="user-avatar">AE</div>
          <div style="margin-left: 12px;">
            <div style="font-size: 0.85rem; font-weight: 600;">Arturo Estrada</div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">CEO EsTuMundo</div>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function renderTopBar() {
  return `
    <div class="top-bar">
      <div>
        <h1>EsTuTanda AI Portal</h1>
        <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 4px;">
          Digitalización y confianza para el ahorro informal en Latinoamérica.
        </p>
      </div>
      <div class="user-badge">
        <span style="font-size: 0.85rem; font-weight: 500;">Modo Administrador</span>
        <div class="user-avatar" style="background: var(--primary);">✓</div>
      </div>
    </div>
  `;
}

function renderSimulator() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h2>⚡ Simulador de Tanda Inteligente</h2>
      </div>
      <div class="simulator-controls">
        <div class="control-group">
          <label>Monto por Aportación ($)</label>
          <select id="sim-amount">
            <option value="500">$500 MXN</option>
            <option value="1000" selected>$1,000 MXN</option>
            <option value="2000">$2,000 MXN</option>
            <option value="5000">$5,000 MXN</option>
          </select>
        </div>
        <div class="control-group">
          <label>Frecuencia de Pago</label>
          <select id="sim-freq">
            <option value="semanal" selected>Semanal</option>
            <option value="quincenal">Quincenal</option>
            <option value="mensual">Mensual</option>
          </select>
        </div>
        <div class="control-group">
          <label>Número de Participantes</label>
          <input type="number" id="sim-participants" value="10" min="5" max="20" />
        </div>
        <div class="control-group" style="justify-content: flex-end;">
          <button class="btn" id="btn-simulate-pay">✓ Simular Pago Semanal</button>
        </div>
      </div>
      
      <div class="results-grid">
        <div class="result-card">
          <div class="result-value" id="res-total-pool">$0.00</div>
          <div class="result-label">Fondo de Ahorro Total</div>
        </div>
        <div class="result-card">
          <div class="result-value" id="res-individual-payout">$0.00</div>
          <div class="result-label">Entrega por Turno</div>
        </div>
        <div class="result-card">
          <div class="result-value" id="res-fee">$0.00</div>
          <div class="result-label">Comisión de Gestión (5%)</div>
        </div>
      </div>
    </div>
  `;
}

function renderReputation() {
  return `
    <div class="panel" style="align-items: center; text-align: center;">
      <div class="panel-header" style="width: 100%;">
        <h2>🛡️ Motor de Reputación</h2>
      </div>
      <div class="reputation-gauge">
        <div class="gauge-circle" id="rep-gauge">
          <div class="gauge-inner">
            <div class="reputation-score" id="rep-score">950</div>
            <div class="reputation-label">Nivel AAA</div>
          </div>
        </div>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-dim); margin-top: 10px;">
        Tu score aumenta con cada pago puntual. ¡Desbloquea micro-créditos garantizados!
      </p>
    </div>
  `;
}

function renderGatewayLog() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h2>💻 Stripe & Mercado Pago Gateway Log</h2>
      </div>
      <div class="terminal" id="terminal-log">
        <div class="terminal-header">
          <div class="terminal-dot red"></div>
          <div class="terminal-dot yellow"></div>
          <div class="terminal-dot green"></div>
        </div>
        <div id="terminal-content"></div>
      </div>
    </div>
  `;
}

function renderAIInsurance() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h2>🛡️ Fondo de Garantía Inteligente</h2>
      </div>
      <div style="font-size: 0.9rem; color: var(--text-dim); display: flex; flex-direction: column; gap: 12px;">
        <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); padding: 12px; border-radius: var(--radius-md);">
          <strong style="color: var(--primary);">Cobertura Activa:</strong> En caso de que un participante se atrase, el fondo cubre el ciclo automáticamente.
        </div>
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--surface-border); padding-bottom: 8px;">
          <span>Pool de Garantía:</span>
          <span style="font-weight: bold; color: #fff;">$24,500.00 MXN</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>Tasa de Riesgo AI:</span>
          <span style="font-weight: bold; color: var(--primary);">0.85% (Extremadamente Bajo)</span>
        </div>
      </div>
    </div>
  `;
}

function renderActiveTandas() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h2>👥 Grupos de Ahorro Activos</h2>
      </div>
      <div class="tanda-list">
        <div class="tanda-item">
          <div class="tanda-item-header">
            <span class="tanda-title">Tanda Emprendedoras Sonorenses</span>
            <span class="tanda-status active">En Curso</span>
          </div>
          <div class="tanda-progress-bar">
            <div class="tanda-progress-fill" style="width: 70%;"></div>
          </div>
          <div class="tanda-details">
            <span>Fondo: $10,000 MXN</span>
            <span>Turno actual: 7/10</span>
          </div>
        </div>
        <div class="tanda-item">
          <div class="tanda-item-header">
            <span class="tanda-title">Tanda AutoMind Devs</span>
            <span class="tanda-status active">En Curso</span>
          </div>
          <div class="tanda-progress-bar">
            <div class="tanda-progress-fill" style="width: 40%;"></div>
          </div>
          <div class="tanda-details">
            <span>Fondo: $20,000 MXN</span>
            <span>Turno actual: 4/10</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function attachEventListeners() {
  const selectAmount = document.getElementById('sim-amount');
  const selectFreq = document.getElementById('sim-freq');
  const inputParticipants = document.getElementById('sim-participants');
  const btnSimulate = document.getElementById('btn-simulate-pay');

  if (selectAmount) selectAmount.addEventListener('change', (e) => {
    paymentAmount = parseFloat(e.target.value);
    updateSimulatorResults();
  });

  if (selectFreq) selectFreq.addEventListener('change', (e) => {
    frequency = e.target.value;
    updateSimulatorResults();
  });

  if (inputParticipants) inputParticipants.addEventListener('input', (e) => {
    participants = parseInt(e.target.value) || 10;
    updateSimulatorResults();
  });

  if (btnSimulate) btnSimulate.addEventListener('click', triggerPaymentSimulation);
}

function updateSimulatorResults() {
  const totalPool = paymentAmount * participants;
  const payout = totalPool; // In rotating savings, payout is the total pool
  const fee = totalPool * 0.05;

  const elTotal = document.getElementById('res-total-pool');
  const elPayout = document.getElementById('res-individual-payout');
  const elFee = document.getElementById('res-fee');

  if (elTotal) elTotal.textContent = `$${totalPool.toLocaleString()} MXN`;
  if (elPayout) elPayout.textContent = `$${payout.toLocaleString()} MXN`;
  if (elFee) elFee.textContent = `$${fee.toLocaleString()} MXN`;
}

function updateProgressBars() {
  const fills = document.querySelectorAll('.tanda-progress-fill');
  fills.forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0';
    setTimeout(() => {
      fill.style.width = width;
    }, 200);
  });

  // Render terminal log
  const content = document.getElementById('terminal-content');
  if (content) {
    content.innerHTML = logLines.map(line => `
      <div class="terminal-line"><span class="terminal-prompt">></span> ${line}</div>
    `).join('');
  }
}

function triggerPaymentSimulation() {
  addTerminalLine('Simulación de pago manual iniciada por administrador...');
  addTerminalLine(`Preparando pago de $${paymentAmount.toLocaleString()} MXN para el grupo 'Tanda AutoMind Devs'...`);
  
  setTimeout(() => {
    addTerminalLine('Conectando a pasarela de pagos de Stripe...');
  }, 1000);

  setTimeout(() => {
    addTerminalLine('Tokenizando credenciales de cliente...');
  }, 2000);

  setTimeout(() => {
    addTerminalLine('<span class="terminal-success">✓ Transacción aprobada exitosamente por Stripe. ID: ch_3M8yX4Ld9Vz</span>');
    // Boost reputation score
    reputationScore = Math.min(reputationScore + 10, 1000);
    const scoreEl = document.getElementById('rep-score');
    if (scoreEl) scoreEl.textContent = reputationScore;
    
    // Update gauge style
    const gaugeEl = document.getElementById('rep-gauge');
    if (gaugeEl) {
      const percentage = (reputationScore / 1000) * 100;
      gaugeEl.style.background = `conic-gradient(var(--primary) ${percentage}%, rgba(255, 255, 255, 0.05) 0)`;
    }
    
    addTerminalLine('Motor de reputación actualizado: Score +10 puntos.');
  }, 3500);
}

function addTerminalLine(line) {
  logLines.push(line);
  if (logLines.length > 8) logLines.shift();
  
  const content = document.getElementById('terminal-content');
  if (content) {
    content.innerHTML = logLines.map(l => `
      <div class="terminal-line"><span class="terminal-prompt">></span> ${l}</div>
    `).join('');
    
    // Auto-scroll
    const term = document.getElementById('terminal-log');
    if (term) term.scrollTop = term.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', render);
