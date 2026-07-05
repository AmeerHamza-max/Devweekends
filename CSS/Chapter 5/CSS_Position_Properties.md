# CSS Position Properties

> The `position` property in CSS controls how an element is placed in the document. It determines the **positioning context** — whether the element flows normally, is nudged from its spot, anchored to a parent, fixed to the viewport, or sticks while scrolling.

---

## Table of Contents

1. [Static](#1-static-default)
2. [Relative](#2-relative)
3. [Absolute](#3-absolute)
4. [Fixed](#4-fixed)
5. [Sticky](#5-sticky)
6. [Quick Comparison Table](#quick-comparison-table)
7. [Real-World Use Cases](#real-world-use-cases)
8. [Common Gotchas](#common-gotchas)

---

## 1. Static (Default)

### What It Is
Every HTML element is `position: static` by default. Static elements follow the **normal document flow** — block elements stack vertically, inline elements flow horizontally.

### Key Behavior
- `top`, `right`, `bottom`, `left`, and `z-index` have **no effect**
- Cannot be used as a positioning context for `absolute` children
- No gap or offset is created

### Syntax
```css
.element {
  position: static; /* default — same as not writing it */
}
```

### Code Example
```html
<div class="box-one">Box 1 (static)</div>
<div class="box-two">Box 2 (static)</div>
```

```css
.box-one {
  position: static;
  background: #3498db;
  top: 50px; /* ❌ Has NO effect */
}

.box-two {
  position: static;
  background: #e74c3c;
}
```

**Result:** Both boxes stack normally in order. `top: 50px` on `.box-one` is completely ignored.

### Real-World Example
Normal paragraph text, headings, and standard page content — anything that just flows naturally on the page.

---

## 2. Relative

### What It Is
The element stays in the **normal document flow** but can be **offset** from its original position using `top`, `right`, `bottom`, or `left`.

### Key Behavior
- The element is offset **from where it would normally be**
- The original space is **preserved** (a "ghost" gap remains)
- Establishes a **positioning context** for absolutely positioned children
- Other elements are NOT affected by the visual shift

### Syntax
```css
.element {
  position: relative;
  top: 20px;   /* moves DOWN 20px from its original spot */
  left: 30px;  /* moves RIGHT 30px from its original spot */
}
```

### Code Example
```html
<p>This is normal text.</p>
<span class="shifted">I am shifted!</span>
<p>This text doesn't know the span moved.</p>
```

```css
.shifted {
  position: relative;
  top: 10px;
  left: 20px;
  color: crimson;
  font-weight: bold;
}
```

**Result:** The red span visually shifts down 10px and right 20px, but the surrounding text treats it as if it never moved — the original space is preserved.

### Real-World Example
```css
/* Nudging an icon to align with text */
.icon {
  position: relative;
  top: 3px; /* fine-tune vertical alignment */
}

/* Creating a "badge" offset on a button */
.notification-badge {
  position: relative;
  top: -8px;
  left: 4px;
  font-size: 0.7rem;
}
```

---

## 3. Absolute

### What It Is
The element is **removed from the normal document flow** entirely and positioned relative to its **nearest positioned ancestor** (an ancestor with `position` other than `static`). If no such ancestor exists, it positions relative to the **initial containing block** (the `<html>` element).

### Key Behavior
- Taken **out of document flow** — no space is reserved for it
- Positioned relative to the **nearest non-static ancestor**
- `top`, `right`, `bottom`, `left` control exact placement
- Other elements act as if it doesn't exist

### Syntax
```css
.parent {
  position: relative; /* establishes positioning context */
}

.child {
  position: absolute;
  top: 0;
  right: 0; /* anchored to top-right of .parent */
}
```

### Code Example
```html
<div class="card">
  <img src="profile.jpg" alt="Profile" />
  <span class="badge">NEW</span>
</div>
```

```css
.card {
  position: relative; /* 👈 establishes the context */
  width: 200px;
  height: 200px;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}
```

**Result:** The `NEW` badge floats in the top-right corner of the card, regardless of the card's content.

### Real-World Examples

```css
/* Tooltip that appears above a button */
.tooltip {
  position: absolute;
  bottom: 110%; /* 10% gap above the button */
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  white-space: nowrap;
}

/* Dropdown menu anchored to a nav link */
.dropdown-menu {
  position: absolute;
  top: 100%; /* directly below the parent link */
  left: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  min-width: 200px;
}

/* Close (×) button on a modal */
.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}
```

---

## 4. Fixed

### What It Is
The element is **removed from document flow** and positioned relative to the **browser viewport** — not any parent element. It **stays in place** when the user scrolls.

### Key Behavior
- Positioned relative to the **viewport** (the visible screen area)
- Stays **fixed during scrolling**
- Does not affect other elements (removed from flow)
- `top`, `right`, `bottom`, `left` are relative to the screen edges

### Syntax
```css
.element {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

### Code Example
```html
<nav class="top-nav">My Website Nav</nav>
<main class="content">
  <!-- lots of scrollable content -->
</main>
```

```css
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 1000;
}

.content {
  margin-top: 60px; /* offset so content doesn't hide under nav */
}
```

**Result:** The navbar stays locked at the top of the screen as the user scrolls through the page.

### Real-World Examples

```css
/* Floating "Back to Top" button */
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index: 999;
}

/* Cookie consent banner */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
  color: white;
  padding: 16px 24px;
  z-index: 9999;
}

/* Chat widget (bottom-right corner) */
.chat-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}
```

---

## 5. Sticky

### What It Is
A hybrid of `relative` and `fixed`. The element behaves as **relative** until it reaches a scroll threshold, then behaves like **fixed** — but **only within its parent container**. Once the parent scrolls out of view, the sticky element leaves with it.

### Key Behavior
- Acts as `relative` until the scroll threshold is hit
- Then "sticks" at the defined offset (`top`, `left`, etc.)
- Only sticks **within the bounds of its parent container**
- The element's original space is **preserved** in the flow
- **Requires** at least one of `top`, `right`, `bottom`, or `left` to be set

### Syntax
```css
.element {
  position: sticky;
  top: 0; /* sticks when it hits the top of the viewport */
}
```

### Code Example
```html
<div class="section">
  <h2 class="section-header">Section A</h2>
  <p>Content...</p>
  <p>More content...</p>
</div>

<div class="section">
  <h2 class="section-header">Section B</h2>
  <p>Content...</p>
</div>
```

```css
.section {
  /* the sticky element is confined to THIS parent */
  border-bottom: 1px solid #ddd;
}

.section-header {
  position: sticky;
  top: 0;
  background: #f8f8f8;
  padding: 12px 0;
  margin: 0;
  font-size: 1.2rem;
}
```

**Result:** Each section header sticks to the top while its section is visible. When a section scrolls away, its header goes with it and the next section's header takes over.

### Real-World Examples

```css
/* Sticky table header — stays visible while scrolling a long table */
thead th {
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
}

/* Sticky sidebar TOC that stays in view while reading */
.table-of-contents {
  position: sticky;
  top: 80px; /* 80px gap from viewport top (accounts for fixed navbar) */
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}

/* Sticky "Add to Cart" button in a product page */
.buy-button-bar {
  position: sticky;
  bottom: 0;
  background: white;
  padding: 16px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
}

/* Sticky alphabet index in a contacts list (like on a phone) */
.letter-group-header {
  position: sticky;
  top: 60px; /* just below the fixed search bar */
  background: #eee;
  padding: 4px 16px;
  font-weight: bold;
}
```

---

## Quick Comparison Table

| Property   | In Flow? | Positioned Relative To | Scrolls With Page? | Gap Preserved? |
|------------|----------|------------------------|-------------------|----------------|
| `static`   | ✅ Yes   | N/A (no offset)         | ✅ Yes            | N/A            |
| `relative` | ✅ Yes   | Its own original spot   | ✅ Yes            | ✅ Yes         |
| `absolute` | ❌ No    | Nearest positioned ancestor | ✅ Yes        | ❌ No          |
| `fixed`    | ❌ No    | Viewport (screen)       | ❌ No (stays put) | ❌ No          |
| `sticky`   | ✅ Yes   | Viewport (after threshold), parent container boundary | 🔀 Both | ✅ Yes |

---

## Real-World Use Cases

### 🔼 Sticky Navigation Bar
```css
/* Stays at top after scrolling past a hero banner */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 🗂️ Modal / Dialog Box
```css
.modal-overlay {
  position: fixed;
  inset: 0; /* shorthand for top:0; right:0; bottom:0; left:0 */
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-box {
  position: relative; /* for the close button inside */
  background: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 500px;
  width: 90%;
}
```

### 🔔 Notification Badge on Icon
```css
.icon-wrapper {
  position: relative;
  display: inline-block;
}

.notification-dot {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
}
```

### 📌 Pinned Sidebar Filters
```css
.filters-sidebar {
  position: sticky;
  top: 16px;
  align-self: flex-start; /* important in flex containers */
}
```

### 💬 Tooltip on Hover
```css
.has-tooltip {
  position: relative;
}

.has-tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.has-tooltip:hover::after {
  opacity: 1;
}
```

---

## Common Gotchas

### ⚠️ Sticky Not Working?

1. **No `top`/`bottom` value set** — sticky requires at least one threshold offset.
2. **Parent has `overflow: hidden` or `overflow: auto`** — this breaks sticky behavior.
3. **Parent is too short** — sticky only works while the parent is in view.
4. **Parent has no defined height** — sticky needs room to "stick" within.

```css
/* ✅ Fix: ensure parent allows overflow */
.parent {
  overflow: visible; /* not hidden or auto */
}

.sticky-child {
  position: sticky;
  top: 0; /* required! */
}
```

### ⚠️ Absolute Jumping to Wrong Place?

The element anchors to the **nearest non-static ancestor**, not necessarily the direct parent. Always verify the positioning context:

```css
/* ✅ Explicitly set the parent as the context */
.parent {
  position: relative; /* 👈 this is your anchor */
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

### ⚠️ Fixed Element Covered by Content?

Use `z-index` to control stacking. Fixed navbars should have a high `z-index`:

```css
.fixed-nav {
  position: fixed;
  top: 0;
  z-index: 1000;
}
```

### ⚠️ `z-index` Not Working?

`z-index` only works on **positioned elements** (anything except `static`). A `z-index` on a static element has no effect.

```css
/* ❌ z-index ignored */
.box { position: static; z-index: 999; }

/* ✅ z-index works */
.box { position: relative; z-index: 999; }
```

---

## Summary

```
static   → normal flow, no offset possible
relative → normal flow + offset from self, gap preserved, good anchor for absolute children
absolute → out of flow, anchored to nearest positioned parent
fixed    → out of flow, anchored to viewport, ignores scrolling
sticky   → relative until scroll threshold, then fixed within parent container
```

> 💡 **Pro Tip:** The most powerful combination in CSS layout is a `position: relative` parent with `position: absolute` children. Master this pattern and you can build almost any overlay, badge, tooltip, or dropdown.
