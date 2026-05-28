/**
 * AutoMind AI — Dashboard Application
 * Intelligent Automation & Agent Management
 */

const app = document.getElementById('app');

function render() {
  app.innerHTML = `
    <div class="dashboard">
      ${renderSidebar()}
      <main class="main-content">
        ${renderTopBar()}
        ${renderKPIs()}
        ${renderContentGrid()}
        ${renderPipeline()}
      </main>
    </div>
  `;
  initChartAnimation();
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
          <div class="nav-item active">
            <span class="nav-icon">📊</span> Dashboard
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
        <h1>Dashboard</h1>
        <p style="color: var(--text-dim); font-size: 0.88rem; margin-top: 4px;">
          Welcome back! All systems operational.
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

document.addEventListener('DOMContentLoaded', render);
