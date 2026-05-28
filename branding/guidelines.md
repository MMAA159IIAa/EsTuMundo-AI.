# 🎨 Es Tu Mundo AI — Brand Guidelines

## Brand Identity

**Es Tu Mundo AI** represents the intersection of artificial intelligence and Latin American entrepreneurship. Our brand conveys innovation, trust, and futuristic vision.

---

## Color System

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Neon Cyan | `#00F5FF` | 0, 245, 255 | Primary accent, CTAs, highlights |
| Deep Purple | `#8B5CF6` | 139, 92, 246 | Secondary accent, gradients |
| Electric Rose | `#F43F5E` | 244, 63, 94 | Alerts, notifications, emphasis |
| Emerald | `#10B981` | 16, 185, 129 | Success states, positive metrics |

### Dark Theme

| Name | Hex | Usage |
|------|-----|-------|
| Void Black | `#0A0A0F` | Primary background |
| Deep Space | `#0F0F1A` | Secondary background |
| Nebula | `#1A1A2E` | Card backgrounds |
| Stardust | `#16213E` | Elevated surfaces |
| Cosmic Border | `rgba(0, 245, 255, 0.1)` | Subtle borders |
| Glass Surface | `rgba(255, 255, 255, 0.05)` | Glassmorphism panels |

### Text Colors

| Name | Hex | Usage |
|------|-----|-------|
| Pure White | `#FFFFFF` | Headings |
| Soft White | `#E2E8F0` | Body text |
| Muted | `#94A3B8` | Secondary text |
| Dim | `#64748B` | Disabled/tertiary |

---

## Typography

### Font Families

- **Headings**: `Space Grotesk` — Modern geometric sans-serif
- **Body**: `Inter` — Clean, readable sans-serif  
- **Code/Data**: `JetBrains Mono` — Monospace for dashboards

### Scale

| Level | Size | Weight | Font |
|-------|------|--------|------|
| H1 | 72px | 700 | Space Grotesk |
| H2 | 48px | 700 | Space Grotesk |
| H3 | 32px | 600 | Space Grotesk |
| H4 | 24px | 600 | Space Grotesk |
| Body Large | 18px | 400 | Inter |
| Body | 16px | 400 | Inter |
| Small | 14px | 400 | Inter |
| Caption | 12px | 500 | Inter |

---

## Design Tokens

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 245, 255, 0.1);
  border-radius: 16px;
}
```

### Neon Glow

```css
.neon-glow {
  box-shadow: 
    0 0 20px rgba(0, 245, 255, 0.15),
    0 0 40px rgba(0, 245, 255, 0.05);
}

.neon-text {
  text-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
}
```

### Gradients

```css
.gradient-primary {
  background: linear-gradient(135deg, #00F5FF, #8B5CF6);
}

.gradient-accent {
  background: linear-gradient(135deg, #8B5CF6, #F43F5E);
}

.gradient-mesh {
  background: 
    radial-gradient(at 20% 80%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
    radial-gradient(at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(at 50% 50%, rgba(244, 63, 94, 0.05) 0%, transparent 50%);
}
```

### Spacing

| Token | Value |
|-------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |
| 4xl | 96px |

### Border Radius

| Token | Value |
|-------|-------|
| sm | 8px |
| md | 12px |
| lg | 16px |
| xl | 24px |
| full | 9999px |

---

## Division Branding

| Division | Primary Color | Icon |
|----------|--------------|------|
| AutoMind AI | `#00F5FF` (Cyan) | 🤖 |
| Taller Pro | `#F59E0B` (Amber) | 🔧 |
| Beautly | `#EC4899` (Pink) | 💄 |
| AI Media Lab | `#8B5CF6` (Purple) | 🎬 |
| Main Platform | `#00F5FF` (Cyan) | 🌐 |

---

## Animation Guidelines

- **Duration**: 200-400ms for micro-interactions, 600-1000ms for transitions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for standard, `cubic-bezier(0, 0, 0.2, 1)` for deceleration
- **Hover effects**: Scale 1.02-1.05, brightness boost, neon glow intensification
- **Page transitions**: Fade in with subtle upward motion (20px)
- **Loading states**: Pulsing neon glow animation

---

*Es Tu Mundo AI Brand System v1.0*
