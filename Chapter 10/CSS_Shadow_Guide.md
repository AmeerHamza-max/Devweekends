# CSS Shadow Complete Guide

## 1. Concept Explanation

Think of shadows as **light hitting an object**. When light hits a box or text, it creates a shadow on the opposite side. CSS gives you full control over:

- **Where** the shadow falls (offset)
- **How sharp or blurry** it is (blur radius)
- **How big** it spreads (spread radius)
- **What color** it is

---

## 2. Box Shadow — Deep Dive

### Syntax

```css
box-shadow: offsetX  offsetY  blurRadius  spreadRadius  color;
```

### What Each Value Does

| Property | What it controls | Negative allowed? |
|---|---|---|
| `offsetX` | Left/Right position | ✅ Yes |
| `offsetY` | Up/Down position | ✅ Yes |
| `blurRadius` | Softness of shadow | ❌ No (ignored) |
| `spreadRadius` | Shadow size expansion | ✅ Yes |
| `color` | Shadow color | — |

> ⚠️ **Key Rule:** `blur-radius` never accepts negative values. Browsers simply **ignore** them or treat them as `0`. Only `offsetX`, `offsetY`, and `spreadRadius` accept negatives.

---

### How Blur Radius Actually Works Internally

The browser uses a **Gaussian blur algorithm**. It takes the sharp shadow edge and spreads pixels outward mathematically:

```
blur: 0px  → sharp, hard edge (like direct sunlight)
blur: 10px → soft edges (like cloudy day)
blur: 30px → very diffused, almost glowing
blur: -5px → IGNORED → treated as 0px (hard edge)
```

---

## 3. Custom Properties (CSS Variables) with Shadows

This is where shadows become **powerful and maintainable**:

```css
:root {
  /* Define shadow tokens */
  --shadow-color: rgba(0, 0, 0, 0.25);
  --shadow-sm: 2px 4px 6px var(--shadow-color);
  --shadow-md: 4px 8px 16px var(--shadow-color);
  --shadow-lg: 8px 16px 32px var(--shadow-color);
  --shadow-inset: inset 0px 4px 8px rgba(0,0,0,0.2);
  --shadow-glow: 0px 0px 20px rgba(99, 102, 241, 0.6);
}

.card-small  { box-shadow: var(--shadow-sm); }
.card-medium { box-shadow: var(--shadow-md); }
.card-large  { box-shadow: var(--shadow-lg); }
.card-inner  { box-shadow: var(--shadow-inset); }
.card-glow   { box-shadow: var(--shadow-glow); }
```

**Why this matters:** Change `--shadow-color` once → every shadow updates. This is how real design systems (like Tailwind, Material UI) work internally.

---

## 4. Box Shadow — All Variations Explained

```css
/* ✅ Basic shadow — right + down */
box-shadow: 5px 5px 10px rgba(0,0,0,0.3);

/* ✅ Negative offsetX — shadow goes LEFT */
box-shadow: -5px 5px 10px rgba(0,0,0,0.3);

/* ✅ Negative offsetY — shadow goes UP */
box-shadow: 5px -5px 10px rgba(0,0,0,0.3);

/* ✅ Negative spread — shadow SHRINKS */
box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.3);

/* ❌ Negative blur — IGNORED, acts like 0 */
box-shadow: 5px 5px -10px rgba(0,0,0,0.3);
/* 👆 This renders as: 5px 5px 0px rgba(0,0,0,0.3) */

/* ✅ Inset shadow — shadow goes INSIDE the box */
box-shadow: inset 0px 4px 10px rgba(0,0,0,0.4);

/* ✅ Multiple shadows — separate with comma */
box-shadow:
  2px 2px 5px rgba(0,0,0,0.2),           /* outer */
  inset 0 1px 3px rgba(255,255,255,0.5); /* inner highlight */
```

---

## 5. Text Shadow — Full Explanation

### Syntax

```css
text-shadow: offsetX  offsetY  blurRadius  color;
```

> ⚠️ **Note:** `text-shadow` has **NO spreadRadius** — that's only for `box-shadow`.  
> ⚠️ **Negative blur** is also ignored here — same rule applies.

---

### Text Shadow Examples

```css
/* Basic drop shadow */
h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* Glow effect — no offset, just blur */
.glow {
  color: white;
  text-shadow: 0px 0px 15px rgba(100, 200, 255, 0.9);
}

/* Hard shadow — no blur (or blur:0) */
.retro {
  text-shadow: 3px 3px 0px #ff6b35;
}

/* Multiple text shadows = 3D effect */
.three-d {
  color: white;
  text-shadow:
    1px 1px 0px #ccc,
    2px 2px 0px #bbb,
    3px 3px 0px #aaa,
    4px 4px 0px #999;
}

/* Negative offset — shadow goes up-left */
.up-shadow {
  text-shadow: -2px -2px 5px rgba(0,0,0,0.4);
}

/* Fire text effect */
.fire {
  color: white;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #ff6600,
    0 0 40px #ff4400;
}
```

---

## 6. Custom Variables — Real Design System Pattern

```css
:root {
  /* Colors */
  --clr-shadow-dark:   rgba(0, 0, 0, 0.3);
  --clr-shadow-purple: rgba(139, 92, 246, 0.5);
  --clr-shadow-orange: rgba(251, 146, 60, 0.6);

  /* Text shadows */
  --text-shadow-soft:   1px 1px 3px var(--clr-shadow-dark);
  --text-shadow-glow:   0px 0px 12px var(--clr-shadow-purple);
  --text-shadow-retro:  3px 3px 0px var(--clr-shadow-orange);

  /* Box shadows */
  --box-shadow-card:    0px 4px 20px var(--clr-shadow-dark);
  --box-shadow-button:  0px 2px 8px var(--clr-shadow-purple);
  --box-shadow-hover:   0px 8px 30px var(--clr-shadow-purple);
}

/* Usage */
.heading-soft   { text-shadow: var(--text-shadow-soft); }
.heading-glow   { text-shadow: var(--text-shadow-glow); }
.heading-retro  { text-shadow: var(--text-shadow-retro); }

.card         { box-shadow: var(--box-shadow-card); }
.card:hover   { box-shadow: var(--box-shadow-hover); }
```

---

## 7. Common Mistakes + Edge Cases

```css
/* ❌ WRONG — negative blur, gets ignored */
box-shadow: 5px 5px -8px black;

/* ✅ CORRECT — use 0 for hard edge */
box-shadow: 5px 5px 0px black;

/* ❌ WRONG — text-shadow has no spread radius */
text-shadow: 2px 2px 10px 5px black; /* 5px is INVALID here */

/* ✅ CORRECT */
text-shadow: 2px 2px 10px black;

/* ❌ WRONG — forgetting inset kills inner shadow look */
box-shadow: 0 4px 10px rgba(0,0,0,0.5); /* This is OUTER shadow */

/* ✅ CORRECT for inner shadow */
box-shadow: inset 0 4px 10px rgba(0,0,0,0.5);
```

---

## 8. Key Takeaways

| Rule | Box Shadow | Text Shadow |
|---|---|---|
| Offset X/Y | ✅ Negative OK | ✅ Negative OK |
| Blur Radius | ❌ No negative | ❌ No negative |
| Spread Radius | ✅ Exists (negative OK) | ❌ Doesn't exist |
| Multiple shadows | ✅ Comma-separated | ✅ Comma-separated |
| Inset | ✅ Supported | ❌ Not supported |
| CSS Variables | ✅ Fully supported | ✅ Fully supported |

---

## 9. Mini Assignment

Build these **3 components** using only CSS shadows + custom variables:

1. **Glassmorphism card** — soft white box-shadow + semi-transparent background
2. **Neon text** — glowing text-shadow using a bright color like cyan or pink
3. **Pressed button effect** — use `inset` box-shadow to simulate a button being pushed in on `:active`

> **Bonus:** Define all shadow values using CSS custom properties — no hardcoded values in component classes.

---

## 10. Real-World Usage

| Where | How shadows are used |
|---|---|
| **Tailwind CSS** | `shadow-sm`, `shadow-lg` are pre-built box-shadows |
| **Material UI** | Elevation levels (1–24) are box-shadows |
| **Figma → CSS** | Exports drop shadows as `box-shadow` |
| **Login forms** | Inset shadows on focused inputs |
| **Cards/Modals** | Depth perception via layered shadows |
| **Branding pages** | Glowing text-shadow for hero headings |
