# CSS Size Units

> In CSS, **size units** tell the browser *how big* something should be — its width, height, font size, padding, margin, and more. Choosing the right unit is the difference between a layout that breaks on mobile and one that adapts beautifully to every screen.

---

## Table of Contents

1. [The Big Picture — Absolute vs Relative](#the-big-picture--absolute-vs-relative)
2. [px — Pixels](#px--pixels)
3. [% — Percentage](#-percentage)
4. [vw & vh — Viewport Units](#vw--vh--viewport-units)
5. [em — Relative to Parent](#em--relative-to-parent)
6. [rem — Relative to Root](#rem--relative-to-root)
7. [Physical vs Logical Pixels](#physical-vs-logical-pixels)
8. [PPI vs DPI](#ppi-vs-dpi)
9. [Making Designs Responsive](#making-designs-responsive)
10. [Quick Reference Table](#quick-reference-table)
11. [Real-World Cheat Sheet](#real-world-cheat-sheet)
12. [Common Mistakes](#common-mistakes)

---

## The Big Picture — Absolute vs Relative

CSS units fall into two families:

```
CSS Units
│
├── Absolute  →  Fixed size. Never changes no matter what.
│   └── px  (most common absolute unit)
│
└── Relative  →  Size depends on something else.
    ├── %    (relative to parent element)
    ├── em   (relative to parent's font size)
    ├── rem  (relative to root/html font size)
    ├── vw   (relative to viewport width)
    └── vh   (relative to viewport height)
```

**Rule of thumb:**
- Use **absolute** units when you need pixel-perfect precision (borders, icons)
- Use **relative** units when you want things to scale — for responsive, accessible design

---

## px — Pixels

### What It Is
`px` stands for **CSS pixel**. It is defined as exactly **1/96th of an inch** — a fixed, absolute measurement.

```
1 inch = 96px
1px    = 1/96 inch ≈ 0.01042 inch
```

### Key Behavior
- Always the **same size** regardless of screen, parent, or user settings
- Does **not** scale when the user changes their browser font size preference
- Great for things that should never change: borders, shadows, icons
- Avoid for font sizes and layout widths — it hurts accessibility

### Syntax
```css
.box {
  width: 300px;
  height: 150px;
  border: 2px solid #333;
  font-size: 16px;
}
```

### Code Example
```html
<div class="card">Fixed 300px wide card</div>
```

```css
.card {
  width: 300px;       /* always 300 pixels wide */
  height: 120px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}
```

**What happens on a small phone screen?**  
The card is still 300px wide. If the phone screen is only 320px, the card nearly fills the screen. If it's 280px, it overflows. This is the problem with using `px` for layout.

### Real-World Use Cases
```css
/* ✅ Good uses of px */
border: 1px solid #e0e0e0;       /* thin borders */
border-radius: 8px;              /* corner rounding */
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
outline: 2px solid blue;         /* focus ring */
gap: 16px;                       /* spacing in flex/grid */

/* ⚠️ Avoid px for font-size — user can't override it */
font-size: 16px;   /* blocks browser zoom for accessibility */
```

---

## % — Percentage

### What It Is
A percentage value is always **relative to the same property of the immediate parent element**.

```
child width: 50%  →  50% of the PARENT'S width
child height: 50% →  50% of the PARENT'S height
font-size: 150%   →  150% of the PARENT'S font-size
```

### Key Behavior
- Always measured against the **direct parent**
- For `width` and `height` — relative to parent's width/height
- For `font-size` — relative to parent's font-size
- For `margin` and `padding` — always relative to the **parent's WIDTH** (even for top/bottom margin!)
- Makes elements fluid and flexible

### Syntax
```css
.child {
  width: 50%;   /* half of parent's width */
  height: 100%; /* same height as parent */
}
```

### Code Example — Fluid Layout
```html
<div class="container">
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
</div>
```

```css
.container {
  width: 900px;
  display: flex;
}

.sidebar {
  width: 30%;   /* 30% of 900px = 270px */
  background: #f0f0f0;
}

.main {
  width: 70%;   /* 70% of 900px = 630px */
  background: #ffffff;
}
```

If you resize the container to 600px, sidebar becomes 180px and main becomes 420px — automatically, no media queries needed.

### Code Example — Percentage Height Gotcha
```css
/* ❌ This does NOT work */
.child {
  height: 50%; /* parent has no defined height, so 50% of "nothing" = 0 */
}

/* ✅ Parent must have a defined height */
.parent {
  height: 400px;
}
.child {
  height: 50%; /* 50% of 400px = 200px — works! */
}
```

### Real-World Use Cases
```css
/* Fluid image that never overflows its container */
img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

/* A centered container that breathes on large screens */
.wrapper {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Two equal columns */
.col {
  width: 50%;
}

/* Progress bar fill */
.progress-fill {
  width: 75%; /* fills 75% of the bar */
  height: 100%;
  background: #3498db;
}
```

---

## vw & vh — Viewport Units

### What They Are
`vw` and `vh` are based on the **size of the browser window (viewport)** — the visible area of the page.

```
1vw  =  1% of the viewport WIDTH
1vh  =  1% of the viewport HEIGHT
100vw = full viewport width
100vh = full viewport height
```

### Key Behavior
- **Always relative to the screen/window**, not any parent element
- Resize the browser window → elements using vw/vh resize too
- `100vh` is a full-screen height regardless of content
- Also available: `vmin` (smaller of vw/vh) and `vmax` (larger of vw/vh)

### Syntax
```css
.hero {
  width: 100vw;   /* full browser width */
  height: 100vh;  /* full browser height */
}
```

### Code Example — Full-Screen Hero Section
```html
<section class="hero">
  <h1>Welcome</h1>
  <p>Full screen landing section</p>
</section>

<section class="content">
  Normal content below...
</section>
```

```css
.hero {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
```

**Result:** The hero section fills exactly the entire screen — no more, no less — on any device, any screen size.

### Code Example — Fluid Typography with vw
```css
/* Font scales with screen width */
h1 {
  font-size: 5vw;
  /* On 1200px screen: 5% of 1200 = 60px */
  /* On 768px screen:  5% of 768  = 38px */
  /* On 375px screen:  5% of 375  = 18px */
}

/* Better: clamp() keeps it within safe bounds */
h1 {
  font-size: clamp(1.5rem, 5vw, 4rem);
  /* min: 1.5rem, preferred: 5vw, max: 4rem */
}
```

### Real-World Use Cases
```css
/* Full-screen modal overlay */
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
}

/* Sidebar that's always 25% of the screen */
.sidebar {
  width: 25vw;
  min-width: 200px;
}

/* Section that takes up 80% of screen height */
.section {
  min-height: 80vh;
}

/* Responsive font that scales smoothly */
.tagline {
  font-size: clamp(1rem, 3vw, 2.5rem);
}
```

---

## em — Relative to Parent

### What It Is
`em` is a **relative unit** based on the **font-size of the current element's parent**.

```
If parent font-size = 16px
  1em   = 16px
  2em   = 32px
  0.5em = 8px
  1.5em = 24px
```

### Key Behavior
- For `font-size`: relative to the **parent's font-size**
- For `padding`, `margin`, `width`: relative to the **element's own font-size**
- Can **compound** — `em` values nest and multiply through the DOM tree
- Useful when you want padding/margin to scale with the element's own text

### Syntax
```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 1.5em;  /* 1.5 × 16px = 24px */
  padding: 1em;      /* 1 × 24px = 24px (own font-size, not parent's) */
}
```

### Code Example — The Compounding Problem
```html
<ul class="list">
  <li>Level 1
    <ul>
      <li>Level 2
        <ul>
          <li>Level 3 — getting very small!</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css
ul {
  font-size: 0.85em; /* 85% of parent's font-size */
}

/*
  Root:    16px (browser default)
  Level 1: 0.85 × 16px = 13.6px
  Level 2: 0.85 × 13.6px = 11.56px
  Level 3: 0.85 × 11.56px = 9.83px  ← getting tiny!
*/
```

This compounding effect is why `rem` was invented.

### Real-World Use Cases
```css
/* Button padding scales with button's own font size */
.btn {
  font-size: 1rem;
  padding: 0.75em 1.5em; /* always proportional to text size */
}

.btn-large {
  font-size: 1.25rem;
  padding: 0.75em 1.5em; /* automatically larger because font is larger */
}

.btn-small {
  font-size: 0.875rem;
  padding: 0.75em 1.5em; /* automatically smaller */
}

/* Component-scoped spacing */
.card {
  font-size: 1rem;
  padding: 1.5em;         /* 24px — scales if you change font-size */
  border-radius: 0.5em;   /* 8px */
  margin-bottom: 1em;
}
```

---

## rem — Relative to Root

### What It Is
`rem` stands for **Root Em**. It is always relative to the **font-size of the `<html>` (root) element**, no matter how deeply nested the element is.

```
html { font-size: 16px; }  ← the root

1rem = 16px  (always, everywhere, regardless of nesting)
2rem = 32px
0.5rem = 8px
```

### Key Behavior
- **Never compounds** — always goes back to the root
- Consistent and predictable across the entire page
- Respects browser font-size user preferences (accessibility!)
- Best for font sizes and global spacing

### Syntax
```css
html {
  font-size: 16px; /* 1rem = 16px everywhere */
}

h1 { font-size: 2rem; }    /* 32px */
p  { font-size: 1rem; }    /* 16px */
small { font-size: 0.75rem; } /* 12px */
```

### Code Example — rem vs em Side by Side
```html
<div class="box-em">
  Using em
  <div class="nested-em">Nested em</div>
</div>

<div class="box-rem">
  Using rem
  <div class="nested-rem">Nested rem</div>
</div>
```

```css
html { font-size: 16px; }

.box-em   { font-size: 1.5em; }  /* 24px */
.nested-em { font-size: 1.5em; } /* 1.5 × 24 = 36px — compounds! */

.box-rem   { font-size: 1.5rem; } /* 24px */
.nested-rem { font-size: 1.5rem; } /* still 24px — no compounding! */
```

### The 62.5% Trick — Easy rem Math
```css
html {
  font-size: 62.5%; /* 62.5% of 16px = 10px */
}

/* Now: 1rem = 10px — easy mental math! */
h1 { font-size: 3.2rem; }   /* 32px */
p  { font-size: 1.6rem; }   /* 16px */
.btn { padding: 1rem 2rem; } /* 10px 20px */
```

### Real-World Use Cases
```css
/* ✅ Best: use rem for all font sizes */
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
p  { font-size: 1rem; }
small { font-size: 0.875rem; }
label { font-size: 0.75rem; }

/* Global spacing scale using rem */
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
}
```

---

## Physical vs Logical Pixels

### Physical Pixels
A **physical pixel** is a single, real, microscopic light-emitting dot on your screen hardware — the smallest unit the display can produce.

```
A 1920×1080 monitor has 1920 × 1080 = 2,073,600 physical pixels
```

### CSS / Logical Pixels
A **CSS (logical) pixel** is what `px` actually means in your stylesheet. It is a **software abstraction** — a unit designed to look roughly the same size across different screens.

### Device Pixel Ratio (DPR)
Modern high-resolution screens (Retina, 4K) pack more physical pixels per CSS pixel:

```
Device Pixel Ratio (DPR) = Physical Pixels ÷ CSS Pixels

Standard screen:    DPR = 1   →  1 CSS px = 1 physical px
iPhone (Retina):    DPR = 2   →  1 CSS px = 2×2 = 4 physical px
iPhone Pro Max:     DPR = 3   →  1 CSS px = 3×3 = 9 physical px
```

### Why This Matters
```
iPhone 14 Pro Max:
  Physical resolution: 2796 × 1290 physical pixels
  CSS resolution:       430 × 932  CSS pixels   (DPR = 3)

Your CSS only "sees" 430 × 932 — the device handles the rest internally.
This is why a `width: 390px` div fills an iPhone screen.
```

### Visual Example
```
Standard Screen (DPR 1)      Retina Screen (DPR 2)
┌──┐                         ┌────┐
│  │  ← 1 CSS pixel          │████│ ← 1 CSS pixel
└──┘   = 1 physical pixel    │████│   = 4 physical pixels
                             └────┘
```

Images and icons look sharper on high-DPR screens because more real pixels are available to render them. This is why you need `@2x` and `@3x` images for retina displays.

---

## PPI vs DPI

### PPI — Pixels Per Inch
**PPI** measures the **pixel density of a screen** — how many pixels fit in one inch of the display panel.

```
PPI = √(horizontal² + vertical²) ÷ screen size in inches

iPhone 14:  460 PPI  (very sharp)
MacBook:    227 PPI
HD Monitor: ~90 PPI  (standard desktop monitor)
4K Monitor: ~140 PPI
```

Higher PPI = sharper, crisper display. Above ~300 PPI, human eyes can't distinguish individual pixels at normal viewing distance (Apple's "Retina" threshold).

### DPI — Dots Per Inch
**DPI** is a **printing term** that measures how many ink dots a printer places per inch.

```
Standard document print:  72 DPI
Office/home printing:     300 DPI
Professional photo print: 600 DPI
High-end commercial:      1200 DPI+
```

### PPI vs DPI Summary

| | PPI | DPI |
|---|---|---|
| Full form | Pixels Per Inch | Dots Per Inch |
| Used for | Screens & displays | Printers & printing |
| Unit | Pixel (light) | Ink dot |
| Typical values | 90–500+ PPI | 72–1200+ DPI |
| Higher = | Sharper screen | More detailed print |

### Why Web Developers Care
```css
/* For crisp images on retina displays, provide 2x resolution */
/* A 200×200 CSS image needs a 400×400 source file at DPR 2 */

.logo {
  width: 100px;
  height: 100px;
  /* The image file itself should be 200×200px or 300×300px */
}

/* Or use srcset to serve the right resolution */
```
```html
<img
  src="logo.png"
  srcset="logo.png 1x, logo@2x.png 2x, logo@3x.png 3x"
  alt="Logo"
/>
```

---

## Making Designs Responsive

Responsiveness means your design **adapts gracefully** to any screen size, orientation, or device. Here are the key techniques:

### 1. Use Relative Units for Layout
```css
/* ❌ Fixed — breaks on small screens */
.container { width: 960px; }

/* ✅ Fluid — adapts to screen */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
```

### 2. Use rem for Font Sizes (Accessibility)
```css
/* ❌ Fixed — ignores user browser settings */
body { font-size: 16px; }

/* ✅ Scales with user preferences */
body { font-size: 1rem; }
```

### 3. Responsive Images
```css
img, video {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 4. Media Queries — Breakpoints
```css
/* Mobile first: start with smallest screen styles */
.grid {
  display: grid;
  grid-template-columns: 1fr;    /* 1 column on mobile */
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;  /* 2 columns */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;  /* 3 columns */
  }
}
```

### 5. Fluid Typography with clamp()
```css
/* clamp(minimum, preferred, maximum) */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* never smaller than 1.5rem, never larger than 3rem */
  /* smoothly scales between them based on screen width */
}

p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}
```

### 6. CSS Custom Properties for a Spacing Scale
```css
:root {
  --space-sm: clamp(0.5rem, 1vw, 1rem);
  --space-md: clamp(1rem, 2vw, 2rem);
  --space-lg: clamp(2rem, 5vw, 4rem);
}

section {
  padding: var(--space-lg) var(--space-md);
}
```

### 7. Flexible Units Summary for Responsive Design

| What you're sizing | Best unit | Why |
|--------------------|-----------|-----|
| Font sizes | `rem` | Consistent, accessible |
| Component padding/margin | `em` or `rem` | Scales with text |
| Layout widths | `%` or `vw` | Fluid containers |
| Full-screen sections | `vh` | Viewport-aware |
| Border, shadow, radius | `px` | Precise, never needs to scale |
| Spacing scale | `rem` | Predictable |
| Responsive typography | `clamp()` + `vw` | Smooth scaling |
| Media query breakpoints | `em` | Respects browser zoom |

---

## Quick Reference Table

| Unit | Full Name | Relative To | Example | Result (at 16px base) |
|------|-----------|-------------|---------|----------------------|
| `px` | Pixel | Nothing (absolute) | `font-size: 16px` | Always 16px |
| `%` | Percent | Parent element | `width: 50%` | 50% of parent width |
| `vw` | Viewport Width | Browser window width | `width: 50vw` | 50% of screen width |
| `vh` | Viewport Height | Browser window height | `height: 100vh` | Full screen height |
| `em` | Em | Parent's font-size | `font-size: 1.5em` | 1.5 × parent font |
| `rem` | Root Em | Root `<html>` font-size | `font-size: 1.5rem` | 1.5 × 16px = 24px |
| `vmin` | Viewport Min | Smaller of vw or vh | `font-size: 5vmin` | 5% of shorter dimension |
| `vmax` | Viewport Max | Larger of vw or vh | `width: 50vmax` | 50% of longer dimension |

---

## Real-World Cheat Sheet

```css
/* ─────────────────────────────────────────────
   TYPOGRAPHY — always use rem
───────────────────────────────────────────── */
html   { font-size: 100%; }      /* = 16px (respects browser default) */
h1     { font-size: 2.5rem; }    /* 40px */
h2     { font-size: 2rem; }      /* 32px */
h3     { font-size: 1.5rem; }    /* 24px */
p      { font-size: 1rem; }      /* 16px */
small  { font-size: 0.875rem; }  /* 14px */
label  { font-size: 0.75rem; }   /* 12px */

/* ─────────────────────────────────────────────
   LAYOUT — use % and max-width
───────────────────────────────────────────── */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* ─────────────────────────────────────────────
   COMPONENTS — use em for padding (scales with font)
───────────────────────────────────────────── */
.btn {
  padding: 0.75em 1.5em;
  font-size: 1rem;        /* change this and padding scales too */
  border-radius: 0.375em;
}

/* ─────────────────────────────────────────────
   FULL-SCREEN SECTIONS — use vh
───────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  width: 100%;
}

/* ─────────────────────────────────────────────
   BORDERS & DETAILS — use px
───────────────────────────────────────────── */
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* ─────────────────────────────────────────────
   RESPONSIVE FONT — use clamp()
───────────────────────────────────────────── */
.hero-title {
  font-size: clamp(2rem, 5vw + 1rem, 5rem);
}
```

---

## Common Mistakes

### ❌ Using px for font-size on body
```css
/* Bad — user can't override with browser settings */
body { font-size: 14px; }

/* Good — respects user preference */
body { font-size: 1rem; } /* or font-size: 100% */
```

### ❌ Mixing em deeply without realizing compounding
```css
/* This quietly gets tiny */
.list { font-size: 0.9em; }
.list .list { font-size: 0.9em; } /* now 0.81× root */
.list .list .list { font-size: 0.9em; } /* now 0.729× root */

/* Fix: use rem */
.list { font-size: 0.9rem; } /* always 90% of root — stays consistent */
```

### ❌ Expecting height: 100% to work without a parent height
```css
/* Parent has no height → child 100% = 0px */
.wrapper { } /* no height defined */
.child { height: 100%; } /* does nothing */

/* Fix: define parent height or use vh */
.wrapper { height: 100vh; }
.child { height: 100%; }  /* now works */
```

### ❌ Using vw without accounting for scrollbar width
```css
/* Can cause horizontal scroll on some browsers */
.full { width: 100vw; }

/* Safer for most cases */
.full { width: 100%; }
```

---

## Summary

```
px    → fixed, precise, for borders and details
%     → relative to parent, great for fluid layouts
vw/vh → relative to screen size, great for full-screen sections
em    → relative to parent font, great for component-level spacing
rem   → relative to root font, great for consistent typography

For responsive design: prefer rem, %, and clamp() over fixed px.
```

> 💡 **Golden Rule:** Use `rem` for fonts, `%` for layout widths, `em` for component padding, `px` for borders/details, and `vh`/`vw` for full-screen effects. When in doubt — `rem`.
