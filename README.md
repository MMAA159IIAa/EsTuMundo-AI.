<div align="center">

# 🌐 Es Tu Mundo AI

### *The Future is AI-Native*

[![Built with Gemini](https://img.shields.io/badge/Built%20with-Gemini%202.5-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![XPRIZE](https://img.shields.io/badge/XPRIZE-Build%20with%20Gemini-FF6B35?style=for-the-badge)](https://www.xprize.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00F5FF?style=for-the-badge)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)

<br/>

**A next-generation AI-native startup ecosystem that combines intelligent automation, creative AI tools, e-commerce, and business solutions — all powered by Google Gemini.**

<br/>

[🚀 Live Demo](https://estumundoai.vercel.app) · [📖 Docs](docs/) · [🤝 Contributing](CONTRIBUTING.md) · [🔒 Security](SECURITY.md)

</div>

---

## 🏗️ Ecosystem Architecture

```
                          ┌──────────────────────────┐
                          │    ES TU MUNDO AI HUB    │
                          │   Corporate & Showcase    │
                          └────────────┬─────────────┘
                                       │
              ┌────────────────────────┼────────────────────────┐
              │                        │                        │
    ┌─────────┴──────────┐  ┌─────────┴──────────┐  ┌─────────┴──────────┐
    │   🤖 AUTOMIND AI   │  │  🔧 TALLER PRO     │  │  💄 BEAUTLY        │
    │   AI Automation    │  │  Auto & Local Biz   │  │  Vegan Beauty AI   │
    │   & Agents         │  │  Solutions          │  │  E-commerce        │
    └────────────────────┘  └─────────────────────┘  └────────────────────┘
              │                        │                        │
              └────────────────────────┼────────────────────────┘
                                       │
                          ┌────────────┴─────────────┐
                          │   🎬 AI MEDIA LAB        │
                          │   Creative AI Studio     │
                          └──────────────────────────┘
                                       │
                          ┌────────────┴─────────────┐
                          │   ⚡ GEMINI AI ENGINE    │
                          │   Shared Intelligence    │
                          └──────────────────────────┘
```

---

## 🌟 Divisions

### 🤖 AutoMind AI
> *Intelligent automation for the modern business*

- Gemini-powered AI assistants & chatbots
- CRM automation with smart lead scoring
- Customer support agents (24/7 AI-first)
- Business workflow automation engine
- Real-time analytics dashboards
- WhatsApp Business AI integration
- AI-driven sales pipeline management

### 🔧 Taller Pro
> *Digital transformation for automotive & local businesses*

- Premium AI-powered landing pages
- Workshop management & scheduling tools
- AI diagnostics assistant for vehicles
- Intelligent booking & appointment system
- Business automation for local services

### 💄 Beautly by Ana Bartolini
> *Premium vegan beauty, powered by AI intelligence*

- Vegan e-commerce with AI curation
- AI skincare recommendation engine
- Brand identity & visual system
- AI nutrition & wellness assistant
- Automated customer support chatbot
- Social media AI content generation

### 🎬 AI Media Lab
> *Where creativity meets artificial intelligence*

- AI music generation & composition
- AI video creation & editing pipelines
- Voice synthesis & cloning technology
- Cinematic content production
- TikTok/Reels automated content systems
- Brand visual asset generation

### 🌐 Es Tu Mundo Main Platform
> *The ecosystem hub — where everything connects*

- Corporate vision & mission showcase
- Startup portfolio & division showcase
- AI service marketplace
- Investor presentation & metrics
- AI innovation portal with live demos

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| 🎨 Frontend | Vite + Vanilla JS + CSS3 | Fast, modern UI |
| 🤖 AI Engine | Google Gemini 2.5 Pro | Core intelligence |
| ⚙️ Backend | Node.js + Express | API services |
| 🗄️ Database | Firebase / Firestore | Real-time data |
| 💳 Payments | Stripe | E-commerce transactions |
| 📱 Messaging | WhatsApp Business API | Customer communication |
| ☁️ Cloud | Google Cloud Platform | Infrastructure |
| 🚀 Deploy | Vercel + GitHub Actions | CI/CD pipeline |
| 🎨 Design | Glassmorphism + Neon UI | Futuristic aesthetics |

---

## 📁 Repository Structure

```
EsTuMundo-AI/
├── 📂 apps/                    # Frontend applications
│   ├── main-platform/          # Corporate hub
│   ├── automind/               # AI automation dashboard
│   ├── taller-pro/             # Automotive solutions
│   ├── beautly/                # Beauty e-commerce
│   └── media-lab/              # Creative AI studio
├── 📂 packages/                # Shared libraries
│   ├── ui/                     # Component library
│   ├── gemini-sdk/             # Gemini AI wrapper
│   └── config/                 # Shared configurations
├── 📂 api/                     # Backend services
│   ├── gateway/                # API gateway
│   ├── ai-engine/              # AI processing
│   └── integrations/           # Third-party APIs
├── 📂 docs/                    # Documentation
│   ├── architecture/           # Technical docs
│   ├── competition/            # XPRIZE materials
│   └── pitch/                  # Investor materials
├── 📂 evidence/                # Competition evidence
├── 📂 branding/                # Brand assets
└── 📂 .github/                 # CI/CD & templates
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm 9+
- A Gemini API key ([Get one here](https://aistudio.google.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/EsTuMundo-AI/estumundo-ecosystem.git
cd estumundo-ecosystem

# Install all dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Start the main platform
npm run dev

# Or start a specific division
npm run dev:automind    # AutoMind AI Dashboard
npm run dev:taller      # Taller Pro
npm run dev:beautly     # Beautly E-commerce
npm run dev:media       # AI Media Lab
```

---

## 🤖 Gemini Integration

Es Tu Mundo AI is built **AI-native** with Google Gemini at its core:

```javascript
import { GeminiClient, Agent } from '@estumundo/gemini-sdk';

// Initialize the AI engine
const gemini = new GeminiClient({
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-2.5-pro'
});

// Create an intelligent agent
const salesAgent = new Agent({
  name: 'AutoMind Sales',
  role: 'AI Sales Representative',
  capabilities: ['lead-scoring', 'follow-up', 'negotiation'],
  gemini
});

// Let AI handle the conversation
const response = await salesAgent.process({
  input: customerMessage,
  context: crmData
});
```

---

## 🏆 Competition: XPRIZE Build with Gemini

This ecosystem is competing in the **XPRIZE Build with Gemini** competition:

- **Prize Pool**: $2,000,000 USD
- **Category**: Entrepreneurship
- **Build Period**: May 19 — August 17, 2026
- **Grand Finale**: September 25, 2026 — Los Angeles

### Evaluation Criteria
| Criteria | Weight | Our Approach |
|----------|--------|-------------|
| Commercial Viability | 33% | Real revenue, real customers |
| AI-Native Operations | 33% | Gemini powers every decision |
| Category Impact | 33% | Empowering entrepreneurs globally |

---

## 📊 Metrics & Traction

| Metric | Status |
|--------|--------|
| 🏢 Divisions | 5 active |
| 🤖 AI Agents | 12+ deployed |
| 📱 Platforms | 5 web apps |
| 🔗 Integrations | Gemini, WhatsApp, Stripe |
| ☁️ Infrastructure | Google Cloud + Vercel |

---

## 👥 Team

Built by a passionate team of entrepreneurs and AI engineers from Latin America, combining technical expertise with business acumen.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ and 🤖 by Es Tu Mundo AI**

*Powered by Google Gemini · Competing in XPRIZE Build with Gemini*

[![Google Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)

</div>
