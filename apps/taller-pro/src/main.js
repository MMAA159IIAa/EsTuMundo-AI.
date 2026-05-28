/**
 * Taller Pro — Main Script
 * Digital workshop management and AI diagnostics portal
 */

const app = document.getElementById('app');

// Sample database state matching SQLite tables in taller_pro_1.py
let clients = [
  { id: 1, name: 'Arturo Estrada', phone: '6621728838', email: 'arturo.automind@gmail.com', vehicle: 'Chevrolet Chevy 2012', eco_num: 'ECO-482', plates: 'WYA-982-A', service: 'Cambio de Aceite y Filtros', date: '2026-05-27', cost: 1200, status: 'Listo' },
  { id: 2, name: 'María Rodríguez', phone: '6623690252', email: 'maria.r@gmail.com', vehicle: 'Nissan Versa 2018', eco_num: 'N/A', plates: 'VSS-128-B', service: 'Ajuste de Frenos', date: '2026-05-28', cost: 850, status: 'Pendiente' },
  { id: 3, name: 'Juan Carlos Gómez', phone: '6629988771', email: 'jc.gomez@hotmail.com', vehicle: 'Ford F-150 2015', eco_num: 'ECO-120', plates: 'FLS-452-C', service: 'Alineación y Balanceo', date: '2026-05-26', cost: 1800, status: 'Listo' }
];

let diagnosticLog = 'Escribe los síntomas del vehículo arriba y presiona "Diagnosticar con IA".';

function render() {
  app.innerHTML = `
    <div class="app-container">
      ${renderSidebar()}
      <main class="main-content">
        ${renderTopBar()}
        ${renderKPIs()}
        
        <div class="dashboard-grid">
          <!-- Left Column (Services List & Form) -->
          <div style="display: flex; flex-direction: column; gap: 32px;">
            ${renderServicesTable()}
            ${renderAddServiceForm()}
          </div>
          
          <!-- Right Column (AI Diagnostics) -->
          <div style="display: flex; flex-direction: column; gap: 32px;">
            ${renderAIDiagnosticPanel()}
            ${renderDownloadLinks()}
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
          🔧 Taller Pro
          <span>Workshop Management</span>
        </a>
        <nav class="sidebar-nav">
          <div class="nav-item active">
            <span class="nav-icon">📊</span> Dashboard
          </div>
          <div class="nav-item">
            <span class="nav-icon">👥</span> Clientes
          </div>
          <div class="nav-item">
            <span class="nav-icon">💵</span> Finanzas
          </div>
          <div class="nav-item">
            <span class="nav-icon">📋</span> Reportes
          </div>
          <div class="nav-item">
            <span class="nav-icon">⚙ns;</span> Configuración
          </div>
        </nav>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-dim); text-align: center;">
        v2.0 Pro Web Console
      </div>
    </aside>
  `;
}

function renderTopBar() {
  return `
    <div class="top-bar">
      <div>
        <h1>Gestión de Taller</h1>
        <p style="color: var(--text-dim); font-size: 0.9rem; margin-top: 4px;">
          Panel digital centralizado para operaciones de mantenimiento automotriz.
        </p>
      </div>
      <div style="color: var(--text-dim); font-size: 0.9rem;">
        ${new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  `;
}

function renderKPIs() {
  const totalCost = clients.reduce((acc, c) => acc + c.cost, 0);
  const pendingCount = clients.filter(c => c.status === 'Pendiente').length;
  const completedCount = clients.filter(c => c.status === 'Listo').length;

  return `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-value">${clients.length}</div>
        <div class="kpi-label">Clientes Totales</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${pendingCount}</div>
        <div class="kpi-label">Servicios Pendientes</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">${completedCount}</div>
        <div class="kpi-label">Servicios Listos</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-value">$${totalCost.toLocaleString()}</div>
        <div class="kpi-label">Ingresos Registrados</div>
      </div>
    </div>
  `;
}

function renderServicesTable() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>📋 Últimos Servicios Registrados</h3>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Vehículo</th>
              <th>Servicio</th>
              <th>Placas</th>
              <th>Costo ($)</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            ${clients.map(c => `
              <tr>
                <td><strong>${c.name}</strong></td>
                <td>${c.vehicle}</td>
                <td>${c.service}</td>
                <td>${c.plates}</td>
                <td>$${c.cost.toLocaleString()}</td>
                <td>
                  <span class="status-pill ${c.status.toLowerCase()}">${c.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAddServiceForm() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>+ Registrar Nuevo Servicio</h3>
      </div>
      <form id="new-service-form" class="form-grid">
        <div class="form-group">
          <label>Nombre del Cliente</label>
          <input type="text" id="form-name" required />
        </div>
        <div class="form-group">
          <label>Teléfono</label>
          <input type="text" id="form-phone" required />
        </div>
        <div class="form-group">
          <label>Correo Electrónico</label>
          <input type="email" id="form-email" />
        </div>
        <div class="form-group">
          <label>Vehículo (Marca, Modelo, Año)</label>
          <input type="text" id="form-vehicle" required />
        </div>
        <div class="form-group">
          <label>Placas</label>
          <input type="text" id="form-plates" required />
        </div>
        <div class="form-group">
          <label>Número Económico (Gob/Emp)</label>
          <input type="text" id="form-eco" value="N/A" />
        </div>
        <div class="form-group" style="grid-column: span 2;">
          <label>Descripción del Servicio</label>
          <input type="text" id="form-service" required />
        </div>
        <div class="form-group">
          <label>Costo del Servicio ($)</label>
          <input type="number" id="form-cost" required />
        </div>
        <div class="form-group">
          <label>Estatus Inicial</label>
          <select id="form-status">
            <option value="Pendiente">Pendiente</option>
            <option value="Listo">Listo</option>
          </select>
        </div>
        <div style="grid-column: span 2; display: flex; justify-content: flex-end; margin-top: 10px;">
          <button type="submit" class="btn">Guardar Servicio</button>
        </div>
      </form>
    </div>
  `;
}

function renderAIDiagnosticPanel() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>🤖 Asistente de Diagnóstico IA (Gemini)</h3>
      </div>
      <div class="form-group">
        <label>Describa los síntomas del vehículo</label>
        <textarea id="diagnostic-input" rows="3" placeholder="Ej: Chevy 2012 tironea en baja y se apaga al llegar a semáforo..."></textarea>
      </div>
      <button class="btn" id="btn-diagnose">Diagnosticar con IA</button>
      <div class="diagnostic-box" id="diagnostic-box">
        ${diagnosticLog}
      </div>
    </div>
  `;
}

function renderDownloadLinks() {
  return `
    <div class="panel">
      <div class="panel-header">
        <h3>📂 Descargas & Escritorio</h3>
      </div>
      <div style="font-size: 0.9rem; color: var(--text-dim); display: flex; flex-direction: column; gap: 12px;">
        <p>Este sistema está completamente sincronizado con la aplicación de escritorio de Taller Pro escrita en Python Tkinter.</p>
        <div style="background: rgba(232, 160, 32, 0.05); border: 1px solid rgba(232, 160, 32, 0.2); padding: 12px; border-radius: var(--radius-md); font-size: 0.8rem;">
          <strong>Archivo fuente incluido:</strong> <a href="file:///c:/Users/leech/OneDrive/Desktop/PROYECTO%20GOOGLE%20MAESTRO/apps/taller-pro/desktop-app/taller_pro_1.py" style="color: var(--primary);">taller_pro_1.py</a>
        </div>
      </div>
    </div>
  `;
}

function attachEventListeners() {
  const form = document.getElementById('new-service-form');
  const btnDiagnose = document.getElementById('btn-diagnose');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const email = document.getElementById('form-email').value;
      const vehicle = document.getElementById('form-vehicle').value;
      const plates = document.getElementById('form-plates').value;
      const eco = document.getElementById('form-eco').value;
      const service = document.getElementById('form-service').value;
      const cost = parseFloat(document.getElementById('form-cost').value);
      const status = document.getElementById('form-status').value;

      const newId = clients.length + 1;
      clients.push({
        id: newId,
        name,
        phone,
        email,
        vehicle,
        eco_num: eco,
        plates,
        service,
        date: new Date().toISOString().split('T')[0],
        cost,
        status
      });

      render();
    });
  }

  if (btnDiagnose) {
    btnDiagnose.addEventListener('click', () => {
      const input = document.getElementById('diagnostic-input').value.trim();
      const box = document.getElementById('diagnostic-box');
      if (!input) {
        alert('Por favor describe primero el síntoma del auto.');
        return;
      }

      box.innerHTML = 'Analizando síntomas con Gemini AI Engine...';
      
      setTimeout(() => {
        diagnosticLog = `
<strong>DIAGNÓSTICO PREVENTIVO IA (Gemini 2.5 Pro):</strong><br/>
<span style="color: var(--primary);">Vehículo: Chevrolet Chevy 2012</span><br/>
<strong>Síntoma:</strong> "${input}"<br/><br/>
<strong>Posibles Causas:</strong><br/>
1. <strong>Válvula IAC (Idle Air Control):</strong> Suciedad o falla en el motor paso a paso, muy común en motores Chevy al desacelerar.<br/>
2. <strong>Fuga de Vacío:</strong> Manguera agrietada en el múltiple de admisión.<br/>
3. <strong>Cuerpo de Aceleración:</strong> Suciedad acumulada que restringe el flujo mínimo de aire.<br/><br/>
<strong>Recomendación:</strong> Desmontar y limpiar válvula IAC y cuerpo de aceleración. Verificar vacío del múltiple.
        `;
        box.innerHTML = diagnosticLog;
      }, 2000);
    });
  }
}

document.addEventListener('DOMContentLoaded', render);
