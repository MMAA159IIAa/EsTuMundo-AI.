/**
 * AutoMind AI — Dashboard Application
 * Intelligent Automation & Agent Management
 */

let currentTab = 'dashboard'; // 'dashboard' or 'ailab'

const app = document.getElementById('app');

function render() {
  app.innerHTML = `
    <div class="dashboard">
      ${renderSidebar()}
      <main class="main-content">
        ${renderTopBar()}
        <div id="tab-content-area">
          ${currentTab === 'dashboard' ? `
            ${renderKPIs()}
            ${renderContentGrid()}
            ${renderPipeline()}
          ` : renderAILabWorkstation()}
        </div>
      </main>
    </div>
  `;
  
  if (currentTab === 'dashboard') {
    initChartAnimation();
  } else {
    initAILabInteractiveFeatures();
  }
  
  attachTabNavigationEvents();
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-dot">🤖</div>
        <span>AutoMind AI</span>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-section-title">Overview</div>
          <div class="nav-item ${currentTab === 'dashboard' ? 'active' : ''}" id="nav-dashboard">
            <span class="nav-icon">📊</span> Dashboard
          </div>
          <div class="nav-item ${currentTab === 'ailab' ? 'active' : ''}" id="nav-ailab">
            <span class="nav-icon">🔬</span> AI Lab Workstation
            <span class="nav-badge">LAB</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">🤖</span> AI Agents
            <span class="nav-badge">5</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">📈</span> Analytics
          </div>
        </div>
        <div class="nav-section">
          <div class="nav-section-title">Automation</div>
          <div class="nav-item">
            <span class="nav-icon">🔄</span> Workflows
            <span class="nav-badge">12</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">👥</span> CRM
          </div>
          <div class="nav-item">
            <span class="nav-icon">💬</span> WhatsApp
            <span class="nav-badge">3</span>
          </div>
          <div class="nav-item">
            <span class="nav-icon">🎯</span> Sales Pipeline
          </div>
        </div>
        <div class="nav-section">
          <div class="nav-section-title">System</div>
          <div class="nav-item">
            <span class="nav-icon">⚙️</span> Settings
          </div>
          <div class="nav-item">
            <span class="nav-icon">📋</span> Logs
          </div>
          <div class="nav-item">
            <span class="nav-icon">🔑</span> API Keys
          </div>
        </div>
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-user">
          <div class="user-avatar">EA</div>
          <div class="user-info">
            <div class="user-name">Admin User</div>
            <div class="user-role">System Admin</div>
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
        <h1>${currentTab === 'dashboard' ? 'Dashboard' : 'AI Lab Workstation'}</h1>
        <p style="color: var(--text-dim); font-size: 0.88rem; margin-top: 4px;">
          ${currentTab === 'dashboard' ? 'Welcome back! All systems operational.' : 'AUTOmind Engineering Workstation — CAN Bus & ECU Safe Flashing OS'}
        </p>
      </div>
      <div class="top-bar-actions">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" placeholder="Search agents, workflows..." />
        </div>
        <button style="
          width: 40px; height: 40px; border-radius: 12px; border: 1px solid rgba(0,245,255,0.1);
          background: rgba(255,255,255,0.05); cursor: pointer; font-size: 1.1rem;
          display: flex; align-items: center; justify-content: center;
        ">🔔</button>
      </div>
    </div>
  `;
}

function renderKPIs() {
  const kpis = [
    { icon: '🤖', label: 'Active Agents', value: '5', trend: '+2', up: true },
    { icon: '📊', label: 'Tasks Completed', value: '1,847', trend: '+12.5%', up: true },
    { icon: '💬', label: 'Conversations', value: '342', trend: '+8.3%', up: true },
    { icon: '💰', label: 'Revenue Impact', value: '$12.4K', trend: '+23.1%', up: true },
  ];

  return `
    <div class="kpi-grid">
      ${kpis.map(k => `
        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-icon">${k.icon}</span>
            <span class="kpi-trend ${k.up ? 'up' : 'down'}">${k.up ? '↑' : '↓'} ${k.trend}</span>
          </div>
          <div class="kpi-value">${k.value}</div>
          <div class="kpi-label">${k.label}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderContentGrid() {
  return `
    <div class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <h3>📈 Performance Overview</h3>
          <button class="panel-action">Last 7 days ▾</button>
        </div>
        <div class="chart-area" id="chart">
          ${[65,45,80,55,90,70,85,60,95,75,88,72].map((h, i) => `
            <div class="chart-bar" style="height: ${h}%" data-value="${Math.round(h * 20)}"></div>
          `).join('')}
        </div>
        <div class="chart-labels">
          ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => `
            <div class="chart-label">${m}</div>
          `).join('')}
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div class="panel">
          <div class="panel-header">
            <h3>🤖 AI Agents</h3>
            <button class="panel-action">View All</button>
          </div>
          <div class="agent-list">
            ${[
              { icon: '💼', name: 'Sales Agent', role: 'Lead qualification', status: 'online' },
              { icon: '🎧', name: 'Support Agent', role: 'Customer support', status: 'online' },
              { icon: '📊', name: 'Analytics Agent', role: 'Data analysis', status: 'busy' },
              { icon: '📱', name: 'WhatsApp Agent', role: 'Messaging automation', status: 'online' },
              { icon: '✍️', name: 'Content Agent', role: 'Content creation', status: 'online' },
            ].map(a => `
              <div class="agent-card">
                <div class="agent-avatar">${a.icon}</div>
                <div class="agent-info">
                  <div class="agent-name">${a.name}</div>
                  <div class="agent-role">${a.role}</div>
                </div>
                <span class="agent-status ${a.status}">${a.status}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">
            <h3>⚡ Recent Activity</h3>
          </div>
          <div class="activity-list">
            ${[
              { color: 'cyan', text: '<strong>Sales Agent</strong> qualified 3 new leads', time: '2 min ago' },
              { color: 'emerald', text: '<strong>Support Agent</strong> resolved ticket #1247', time: '5 min ago' },
              { color: 'purple', text: '<strong>Analytics</strong> generated weekly report', time: '12 min ago' },
              { color: 'rose', text: '<strong>WhatsApp</strong> sent 45 follow-up messages', time: '18 min ago' },
            ].map(a => `
              <div class="activity-item">
                <div class="activity-dot ${a.color}"></div>
                <div>
                  <div class="activity-text">${a.text}</div>
                  <div class="activity-time">${a.time}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPipeline() {
  const stages = [
    { name: 'New Leads', count: 12, leads: [
      { name: 'Maria García', value: '$2,400' },
      { name: 'Carlos López', value: '$1,800' },
      { name: 'Ana Rodríguez', value: '$3,200' },
    ]},
    { name: 'Qualified', count: 8, leads: [
      { name: 'Roberto Silva', value: '$4,500' },
      { name: 'Laura Martínez', value: '$2,100' },
    ]},
    { name: 'Proposal', count: 5, leads: [
      { name: 'Diego Fernández', value: '$6,800' },
      { name: 'Sofia Herrera', value: '$3,400' },
    ]},
    { name: 'Negotiation', count: 3, leads: [
      { name: 'Pedro Castillo', value: '$8,200' },
    ]},
    { name: 'Closed Won', count: 7, leads: [
      { name: 'Elena Vargas', value: '$5,600' },
      { name: 'Miguel Torres', value: '$4,200' },
    ]},
  ];

  return `
    <div class="panel" style="margin-top: 0;">
      <div class="panel-header">
        <h3>🎯 Sales Pipeline — AI-Managed</h3>
        <button class="panel-action">+ Add Lead</button>
      </div>
      <div class="pipeline">
        ${stages.map(s => `
          <div class="pipeline-stage">
            <div class="pipeline-stage-header">
              <span class="stage-name">${s.name}</span>
              <span class="stage-count">${s.count}</span>
            </div>
            ${s.leads.map(l => `
              <div class="pipeline-lead">
                <div class="lead-name">${l.name}</div>
                <div class="lead-value">${l.value}</div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function initChartAnimation() {
  const bars = document.querySelectorAll('.chart-bar');
  bars.forEach((bar, i) => {
    const height = bar.style.height;
    bar.style.height = '0';
    setTimeout(() => { bar.style.transition = 'height 0.6s ease'; bar.style.height = height; }, i * 80);
  });
}

function attachTabNavigationEvents() {
  const dashBtn = document.getElementById('nav-dashboard');
  const labBtn = document.getElementById('nav-ailab');
  
  if (dashBtn) {
    dashBtn.addEventListener('click', () => {
      currentTab = 'dashboard';
      render();
    });
  }
  
  if (labBtn) {
    labBtn.addEventListener('click', () => {
      currentTab = 'ailab';
      render();
    });
  }
}

// Global simulator states for AI Lab Workstation
let voltage = 13.2;
let canLines = [];
let flashProgress = 0;
let isFlashing = false;
let checksumStatus = 'PENDING';
let pinState = 'IDLE';
let activeRelearn = '';
let selectedRelearnStep = 0;
let canBusPaused = false;
let dtRiskScore = 12;
let dtStatus = 'OPERATIONAL';

function renderAILabWorkstation() {
  return `
    <div class="ailab-layout">
      <!-- Left Column: Lab Operations & CAN Analyzer -->
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Telemetry bar -->
        <div class="panel telemetry-bar">
          <div class="telemetry-item">
            <span class="tele-dot green"></span>
            <span class="tele-label">DB9 HW CONNECTION</span>
            <span class="tele-val text-primary" id="hw-status">ESTABLE (115200 bps)</span>
          </div>
          <div class="telemetry-item">
            <span class="tele-label">ECU VOLTAGE</span>
            <span class="tele-val" id="voltage-display" style="color: var(--color-cyan); font-weight: bold;">13.20 V</span>
          </div>
          <div class="telemetry-item">
            <span class="tele-label">BUS LOAD</span>
            <span class="tele-val text-emerald" id="bus-load">24%</span>
          </div>
          <div class="telemetry-item">
            <span class="tele-label">TERMINATION RESISTOR</span>
            <span class="tele-val text-primary">120 Ω (MATCHED)</span>
          </div>
        </div>

        <!-- ECU Flash Pipeline -->
        <div class="panel">
          <div class="panel-header">
            <h3>⚡ Safe ECU Flashing & EEPROM Programming Pipeline</h3>
            <span class="pipeline-badge status-failsafe">FAILSAFE ACTIVE</span>
          </div>
          
          <div class="flash-pipeline-steps">
            <div class="pipeline-step-card active" id="step-detect">
              <span class="step-num">1</span>
              <div class="step-meta">
                <span class="step-name">ECU Detection</span>
                <span class="step-status">COMPATIBLE (MED17.5)</span>
              </div>
            </div>
            <div class="pipeline-step-card" id="step-backup">
              <span class="step-num">2</span>
              <div class="step-meta">
                <span class="step-name">Automatic Backup</span>
                <span class="step-status" id="status-backup">PENDING</span>
              </div>
            </div>
            <div class="pipeline-step-card" id="step-sim">
              <span class="step-num">3</span>
              <div class="step-meta">
                <span class="step-name">Digital Twin Simulation</span>
                <span class="step-status" id="status-sim">PENDING</span>
              </div>
            </div>
            <div class="pipeline-step-card" id="step-write">
              <span class="step-num">4</span>
              <div class="step-meta">
                <span class="step-name">Safe Write & Flashing</span>
                <span class="step-status" id="status-write">PENDING</span>
              </div>
            </div>
          </div>

          <div class="flash-actions" style="margin-top: 24px;">
            <div class="progress-bar-container" style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
                <span>Pipeline Progress</span>
                <span id="flash-percent">0%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" id="flash-progress-bar" style="width: 0%;"></div>
              </div>
            </div>
            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <button class="btn btn-primary" id="btn-start-flash">⚡ Start Flash Pipeline</button>
              <button class="btn btn-secondary" id="btn-trigger-rollback" disabled>🔄 Rollback Firmware</button>
              <button class="btn btn-secondary" id="btn-volt-drop" style="border-color: var(--color-rose); color: var(--color-rose);">⚠️ Simular Caída Voltaje</button>
            </div>
          </div>
          
          <div id="flash-console" class="terminal-log" style="margin-top: 16px; height: 120px; overflow-y: auto;">
            <div class="term-line">> Ready for operation. Input file check: [STAGE1_V1.04.bin] OK.</div>
          </div>
        </div>

        <!-- CAN Bus traffic analyzer -->
        <div class="panel">
          <div class="panel-header">
            <h3>📡 Realtime CAN Bus Traffic Analyzer</h3>
            <div>
              <button class="panel-action" id="btn-pause-can" style="margin-right: 8px;">Pause</button>
              <button class="panel-action" id="btn-inject-can" style="border-color: var(--color-cyan);">Inject Diagnostic Frame</button>
            </div>
          </div>
          <div class="can-monitor" id="can-monitor-log">
            <!-- Simulated CAN bus traffic lines -->
          </div>
        </div>
      </div>

      <!-- Right Column: Digital Twin & Calibration Relearns -->
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <!-- Digital Twin Simulator -->
        <div class="panel">
          <div class="panel-header">
            <h3>🔬 ECU Digital Twin Model</h3>
            <span class="badge" id="dt-status-badge" style="background: rgba(16,185,129,0.15); color: var(--color-emerald);">${dtStatus}</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px; font-size: 0.85rem;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
              <span>Simulated Engine Speed</span>
              <span class="text-primary font-mono" id="dt-rpm">850 RPM</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
              <span>EEPROM Sector State</span>
              <span class="text-emerald font-mono">SECTOR_A_VERIFIED</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
              <span>AI Est. Failure Risk</span>
              <span class="font-mono" id="dt-risk" style="color: var(--color-emerald); font-weight: bold;">12% (LOW)</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 8px;">
              <span>ECU Core Temp</span>
              <span class="text-amber font-mono" id="dt-temp">38.4 °C</span>
            </div>
            
            <div class="digital-twin-visual" style="
              height: 80px; background: rgba(0,245,255,0.02); border: 1px solid var(--border-subtle);
              border-radius: var(--radius-md); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;
            ">
              <div class="pulse-ring"></div>
              <span style="font-family: var(--font-mono); font-size: 0.8rem; z-index: 2; color: var(--color-cyan);" id="dt-visual-label">TWIN ACTIVE & SYNCED</span>
            </div>
          </div>
        </div>

        <!-- Adaptations & Relearns panel -->
        <div class="panel">
          <div class="panel-header">
            <h3>⚙️ Coding, Relearns & Adaptations</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <button class="btn btn-relearn" id="btn-injector-coding" data-relearn="injector">Injector Coding (IMA)</button>
            <button class="btn btn-relearn" id="btn-throttle-relearn" data-relearn="throttle">Electronic Throttle Relearn</button>
            <button class="btn btn-relearn" id="btn-steering-calib" data-relearn="steering">Steering Angle (SAS) Calibration</button>
            
            <div id="relearn-modal" class="relearn-status-box" style="display: none; margin-top: 12px; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
              <h4 id="relearn-title" style="font-size: 0.9rem; color: var(--color-cyan); margin-bottom: 8px;">Relearn Title</h4>
              <p id="relearn-desc" style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 12px;">Relearn description</p>
              <button class="btn btn-primary btn-sm" id="btn-run-relearn-step" style="width: 100%;">Execute Step 1</button>
            </div>
          </div>
        </div>

        <!-- AI Copilot Technical Assistant -->
        <div class="panel">
          <div class="panel-header">
            <h3>🧠 AI Copilot Engineering Assistant</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div id="copilot-history" style="height: 120px; overflow-y: auto; background: rgba(0,0,0,0.2); padding: 8px; border-radius: var(--radius-md); font-size: 0.8rem; display: flex; flex-direction: column; gap: 8px; border: 1px solid rgba(255,255,255,0.03);">
              <div style="color: var(--color-cyan);"><strong>Copilot:</strong> Hello! Ask me about DTC codes, wiring schematics, checksum calculations or recovery procedures.</div>
            </div>
            <div style="display: flex; gap: 8px;">
              <input type="text" id="copilot-input" placeholder="Ask copilot..." style="flex: 1; background: var(--surface-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 8px 12px; color: var(--text-primary); font-size: 0.82rem; outline: none;" />
              <button class="btn btn-primary" id="btn-ask-copilot" style="padding: 0 16px;">Ask</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initAILabInteractiveFeatures() {
  // 1. Interactive CAN traffic loop
  const canMonitor = document.getElementById('can-monitor-log');
  if (canMonitor) {
    canLines = [
      { id: '18DAF110', data: '02 10 03 00 00 00 00 00', desc: 'UDS: DiagnosticSessionControl (Extended)' },
      { id: '18DA10F1', data: '06 50 03 00 32 01 F4 00', desc: 'UDS: PositiveResponse' },
      { id: '0CF00400', data: 'FF 7C 12 1A FF FF FF FF', desc: 'J1939: Engine Speed Control / Status' },
      { id: '18FEF100', data: '12 05 3F 2C FF FF FF FF', desc: 'J1939: Cruise Control / Vehicle Speed' }
    ];

    function appendRandomCanFrame() {
      if (canBusPaused) return;
      const ids = ['0CF00400', '18DAF110', '18DA10F1', '18FEF611', '0C000000', '18FEAE30', '218A1FF1'];
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      let randomBytes = [];
      for (let i = 0; i < 8; i++) {
        randomBytes.push(Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0'));
      }
      const dataStr = randomBytes.join(' ');
      
      const p = document.createElement('p');
      p.className = 'can-frame-line';
      p.innerHTML = `<span class="can-time font-mono">[${new Date().toLocaleTimeString()}]</span> <span class="can-id font-mono text-primary">${randomId}</span> <span class="can-data font-mono text-secondary">${dataStr}</span>`;
      
      canMonitor.appendChild(p);
      if (canMonitor.children.length > 20) {
        canMonitor.removeChild(canMonitor.firstChild);
      }
      canMonitor.scrollTop = canMonitor.scrollHeight;
    }

    // Set interval for CAN bus
    const canInterval = setInterval(appendRandomCanFrame, 400);
    // Cleanup if switching back
    const checkTabInterval = setInterval(() => {
      if (currentTab !== 'ailab') {
        clearInterval(canInterval);
        clearInterval(checkTabInterval);
      }
    }, 1000);
  }

  // 2. Play Pause Buttons
  const pauseCanBtn = document.getElementById('btn-pause-can');
  if (pauseCanBtn) {
    pauseCanBtn.addEventListener('click', () => {
      canBusPaused = !canBusPaused;
      pauseCanBtn.textContent = canBusPaused ? 'Resume' : 'Pause';
    });
  }

  const injectCanBtn = document.getElementById('btn-inject-can');
  if (injectCanBtn) {
    injectCanBtn.addEventListener('click', () => {
      if (canMonitor) {
        const p = document.createElement('p');
        p.className = 'can-frame-line injected';
        p.style.background = 'rgba(0, 245, 255, 0.1)';
        p.innerHTML = `<span class="can-time font-mono">[${new Date().toLocaleTimeString()}]</span> <span class="can-id font-mono" style="color: var(--color-cyan);">18DAF110</span> <span class="can-data font-mono text-primary">02 27 01 00 00 00 00 00</span> <span class="can-desc font-mono" style="color: var(--color-rose); margin-left: 8px;">[INJECTED UDS: SecurityAccess Seed Request]</span>`;
        canMonitor.appendChild(p);
        canMonitor.scrollTop = canMonitor.scrollHeight;
      }
    });
  }

  // 3. Simulated Voltage Control
  const voltDropBtn = document.getElementById('btn-volt-drop');
  const voltageDisplay = document.getElementById('voltage-display');
  if (voltDropBtn) {
    voltDropBtn.addEventListener('click', () => {
      voltage = 10.85;
      if (voltageDisplay) {
        voltageDisplay.textContent = `${voltage.toFixed(2)} V`;
        voltageDisplay.style.color = 'var(--color-rose)';
      }
      writeFlashConsole('<span style="color: var(--color-rose);">[ALERT] Severe voltage drop detected! Bus voltage = 10.85V (Requires >= 12.8V). Failsafe triggered.</span>');
      
      if (isFlashing) {
        isFlashing = false;
        writeFlashConsole('<span style="color: var(--color-rose);">[FAILSAFE] FLASH PIPELINE TERMINATED PREMATURELY. BOOT SECTOR PROTECTED. RUN ROLLBACK TO ENSURE RECOVERY.</span>');
        document.getElementById('btn-trigger-rollback').disabled = false;
        // Reset pipeline steps visual
        document.getElementById('step-write').className = 'pipeline-step-card error';
        document.getElementById('status-write').textContent = 'HALTED (VOLTAGE)';
        document.getElementById('status-write').style.color = 'var(--color-rose)';
      }
    });
  }

  // 4. Safe Flash Pipeline trigger
  const startFlashBtn = document.getElementById('btn-start-flash');
  const rollbackBtn = document.getElementById('btn-trigger-rollback');
  const progressBar = document.getElementById('flash-progress-bar');
  const progressPercent = document.getElementById('flash-percent');

  if (startFlashBtn) {
    startFlashBtn.addEventListener('click', () => {
      if (voltage < 12.8) {
        writeFlashConsole('<span style="color: var(--color-rose);">[ERROR] Voltage stability check failed. Connect vehicle to stabilizer (minimum 12.8V required). Current: 10.85V</span>');
        return;
      }

      isFlashing = true;
      flashProgress = 0;
      startFlashBtn.disabled = true;
      rollbackBtn.disabled = true;
      writeFlashConsole('Initiating AUTOmind AI Controlled Flash Pipeline...');

      // Step 1: Detect & verify checksum
      document.getElementById('step-detect').className = 'pipeline-step-card active';
      setTimeout(() => {
        if (!isFlashing) return;
        writeFlashConsole('✓ Step 1 Complete: Bosch MED17.5 ECU Connected. Checksum validation: PASS.');
        
        // Step 2: Auto Backup
        document.getElementById('step-detect').className = 'pipeline-step-card complete';
        document.getElementById('step-backup').className = 'pipeline-step-card active';
        document.getElementById('status-backup').textContent = 'IN PROGRESS';
        writeFlashConsole('Saving original EEPROM and Flash dump to backup/MED17.5_STOCK.bin...');
      }, 1500);

      setTimeout(() => {
        if (!isFlashing) return;
        document.getElementById('step-backup').className = 'pipeline-step-card complete';
        document.getElementById('status-backup').textContent = 'SAVED';
        document.getElementById('status-backup').style.color = 'var(--color-emerald)';
        writeFlashConsole('✓ Step 2 Complete: Full backup stored successfully. Recovery map indexed.');
        
        // Step 3: Simulation
        document.getElementById('step-sim').className = 'pipeline-step-card active';
        document.getElementById('status-sim').textContent = 'RUNNING';
        writeFlashConsole('Loading firmware into Digital Twin Simulator. Analyzing compatibility...');
      }, 3000);

      setTimeout(() => {
        if (!isFlashing) return;
        document.getElementById('step-sim').className = 'pipeline-step-card complete';
        document.getElementById('status-sim').textContent = 'PASS';
        document.getElementById('status-sim').style.color = 'var(--color-emerald)';
        writeFlashConsole('✓ Step 3 Complete: Digital Twin simulator reports 0% risk score. Compatibility Verified.');
        
        // Step 4: Write
        document.getElementById('step-write').className = 'pipeline-step-card active';
        document.getElementById('status-write').textContent = 'WRITING';
        writeFlashConsole('Erasing sector 0x00020000. Commencing safe write...');
        
        let progressInterval = setInterval(() => {
          if (!isFlashing) {
            clearInterval(progressInterval);
            return;
          }
          flashProgress += 10;
          if (progressBar) progressBar.style.width = `${flashProgress}%`;
          if (progressPercent) progressPercent.textContent = `${flashProgress}%`;
          writeFlashConsole(`Flashing blocks: ${flashProgress}%`);
          
          if (flashProgress >= 100) {
            clearInterval(progressInterval);
            document.getElementById('step-write').className = 'pipeline-step-card complete';
            document.getElementById('status-write').textContent = 'SUCCESS';
            document.getElementById('status-write').style.color = 'var(--color-emerald)';
            writeFlashConsole('✓ Step 4 Complete: Firmware flashing success. ECU boot verification: OK.');
            writeFlashConsole('<strong>[SYSTEM] ECU PROGRAMMING COMPLETED SUCCESSFULLY. ALL SECTORS LOCKED.</strong>');
            startFlashBtn.disabled = false;
            isFlashing = false;
            
            // Sync digital twin
            document.getElementById('dt-rpm').textContent = '850 RPM (STAGE 1)';
            document.getElementById('dt-visual-label').textContent = 'TWIN SYNCED - STAGE 1 ACTIVE';
          }
        }, 300);
      }, 4500);
    });
  }

  if (rollbackBtn) {
    rollbackBtn.addEventListener('click', () => {
      voltage = 13.2;
      if (voltageDisplay) {
        voltageDisplay.textContent = '13.20 V';
        voltageDisplay.style.color = 'var(--color-cyan)';
      }
      writeFlashConsole('Restoring recovery map: MED17.5_STOCK.bin...');
      progressBar.style.width = '0%';
      progressPercent.textContent = '0%';
      
      setTimeout(() => {
        document.getElementById('step-detect').className = 'pipeline-step-card complete';
        document.getElementById('step-backup').className = 'pipeline-step-card complete';
        document.getElementById('status-backup').textContent = 'RESTORED';
        document.getElementById('step-sim').className = 'pipeline-step-card complete';
        document.getElementById('status-sim').textContent = 'STOCK';
        document.getElementById('step-write').className = 'pipeline-step-card complete';
        document.getElementById('status-write').textContent = 'RESTORED';
        document.getElementById('status-write').style.color = 'var(--color-cyan)';
        
        writeFlashConsole('✓ Rollback recovery completed. Boot sector restored to factory defaults.');
        rollbackBtn.disabled = true;
        startFlashBtn.disabled = false;
        
        // Reset digital twin
        document.getElementById('dt-rpm').textContent = '850 RPM';
        document.getElementById('dt-visual-label').textContent = 'TWIN ACTIVE & SYNCED';
      }, 1500);
    });
  }

  // 5. Relearns & Adaptations trigger
  const relearnButtons = document.querySelectorAll('.btn-relearn');
  const relearnModal = document.getElementById('relearn-modal');
  const relearnTitle = document.getElementById('relearn-title');
  const relearnDesc = document.getElementById('relearn-desc');
  const relearnStepBtn = document.getElementById('btn-run-relearn-step');

  relearnButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const type = e.target.dataset.relearn;
      activeRelearn = type;
      selectedRelearnStep = 1;
      
      if (relearnModal) relearnModal.style.display = 'block';
      
      if (type === 'injector') {
        relearnTitle.textContent = 'Injector Coding (IMA Calibration)';
        relearnDesc.textContent = 'Step 1 of 2: Connect DB9 probe and input the 7-digit alphanumeric calibration code for Cyl 1 injector.';
        relearnStepBtn.textContent = 'Validate Injector 1 code';
      } else if (type === 'throttle') {
        relearnTitle.textContent = 'Electronic Throttle Valve Relearn';
        relearnDesc.textContent = 'Step 1 of 3: Ensure ignition is ON, engine is OFF, and intake temperature is below 80°C.';
        relearnStepBtn.textContent = 'Confirm Engine Off / Ignition On';
      } else if (type === 'steering') {
        relearnTitle.textContent = 'Steering Angle Sensor (SAS) Zero Calibration';
        relearnDesc.textContent = 'Step 1 of 3: Align front wheels completely straight and level the steering wheel.';
        relearnStepBtn.textContent = 'Confirm Wheels Aligned Straight';
      }
    });
  });

  if (relearnStepBtn) {
    relearnStepBtn.addEventListener('click', () => {
      selectedRelearnStep++;
      if (activeRelearn === 'injector') {
        if (selectedRelearnStep === 2) {
          relearnDesc.textContent = 'Step 2 of 2: Writing calibration value [7A1E93D] into ECU flash register 0x301FF. Press button to complete.';
          relearnStepBtn.textContent = 'Write register';
        } else {
          relearnModal.style.display = 'none';
          writeFlashConsole('✓ Relearn completed: Cylinder 1 Injector IMA coding successfully updated.');
        }
      } else if (activeRelearn === 'throttle') {
        if (selectedRelearnStep === 2) {
          relearnDesc.textContent = 'Step 2 of 3: Commanding Throttle Valve to fully open and closed limits. Keep battery voltage stable.';
          relearnStepBtn.textContent = 'Command limits';
        } else if (selectedRelearnStep === 3) {
          relearnDesc.textContent = 'Step 3 of 3: Measuring zero-voltage spring feedback. Storing calibration maps.';
          relearnStepBtn.textContent = 'Store calibrations';
        } else {
          relearnModal.style.display = 'none';
          writeFlashConsole('✓ Relearn completed: Electronic Throttle Valve Adaptation finished.');
        }
      } else if (activeRelearn === 'steering') {
        if (selectedRelearnStep === 2) {
          relearnDesc.textContent = 'Step 2 of 3: Calibrating steering optical reader zero offset... Keep wheels static.';
          relearnStepBtn.textContent = 'Store zero offset';
        } else if (selectedRelearnStep === 3) {
          relearnDesc.textContent = 'Step 3 of 3: Verifying yaw and lateral G-sensor correlation...';
          relearnStepBtn.textContent = 'Verify offset';
        } else {
          relearnModal.style.display = 'none';
          writeFlashConsole('✓ Relearn completed: Steering SAS Sensor reset successful.');
        }
      }
    });
  }

  // 6. Copilot Assistant Chat
  const askBtn = document.getElementById('btn-ask-copilot');
  const copilotInput = document.getElementById('copilot-input');
  const copilotHistory = document.getElementById('copilot-history');

  if (askBtn && copilotInput && copilotHistory) {
    askBtn.addEventListener('click', () => {
      const q = copilotInput.value.trim();
      if (!q) return;

      // Add user query
      const userDiv = document.createElement('div');
      userDiv.style.color = '#fff';
      userDiv.innerHTML = `<strong>You:</strong> ${q}`;
      copilotHistory.appendChild(userDiv);
      copilotInput.value = '';

      // Simulate Gemini Response
      setTimeout(() => {
        let answer = '';
        if (q.toLowerCase().includes('dtc') || q.toLowerCase().includes('u0100')) {
          answer = '<strong>Copilot:</strong> Code U0100 indicates Lost Communication with ECM/PCM. Check CAN-High/CAN-Low signals on OBD pins 6/14. Resistance across pins should measure 60 Ohms (in parallel).';
        } else if (q.toLowerCase().includes('flash') || q.toLowerCase().includes('flashing')) {
          answer = '<strong>Copilot:</strong> Ensure stable battery backup power supply is active (min 12.8V). Bosch MED17 ECUs require bootpin verification or UDS session 0x02 security access before memory writes.';
        } else {
          answer = `<strong>Copilot:</strong> Based on the vehicle profile and diagnostic twin, I suggest verifying the CAN bus network stability first. Let me know if you want to execute a component active test.`;
        }
        
        const copilotDiv = document.createElement('div');
        copilotDiv.style.color = 'var(--color-cyan)';
        copilotDiv.innerHTML = answer;
        copilotHistory.appendChild(copilotDiv);
        copilotHistory.scrollTop = copilotHistory.scrollHeight;
      }, 800);
    });
  }
}

function writeFlashConsole(text) {
  const consoleEl = document.getElementById('flash-console');
  if (consoleEl) {
    const div = document.createElement('div');
    div.className = 'term-line';
    div.innerHTML = `> ${text}`;
    consoleEl.appendChild(div);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', render);
