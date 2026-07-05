# CSS Box Model & Fundamentals

> **Core Idea:** In HTML, **everything is rendered as a rectangle (box)**. Every element — text, images, divs, buttons — is a box. CSS gives you tools to control the size, spacing, and appearance of these boxes.

---

## 1. Universal Selector (`*`)

The `*` selector targets **every single element** on the page.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Why use it?**
Browsers add default margin and padding to elements (like `<h1>`, `<p>`, `<body>`). The universal selector resets everything so you start with a clean, predictable layout.

**`box-sizing: border-box`** is the most important reset — explained below.

---

## 2. The Box Model

Every HTML element is a rectangular box made of **4 layers**, from inside to outside:

```
┌──────────────────────────────────┐
│            MARGIN                │  ← Outermost (transparent gap between boxes)
│  ┌────────────────────────────┐  │
│  │          BORDER            │  │  ← The visible edge/line
│  │  ┌──────────────────────┐  │  │
│  │  │       PADDING        │  │  │  ← Space inside border, around content
│  │  │  ┌────────────────┐  │  │  │
│  │  │  │    CONTENT     │  │  │  │  ← Your actual text/image
│  │  │  │  width/height  │  │  │  │
│  │  │  └────────────────┘  │  │  │
│  │  └──────────────────────┘  │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

---

## 3. Width & Height

Controls the size of the **content area** of the box.

```css
div {
  width: 300px;
  height: 150px;
}
```

### ⚠️ Important: Inline vs Block Elements

| Element Type | Examples | Can set Width/Height? |
|---|---|---|
| **Block** | `<div>`, `<p>`, `<h1>` | ✅ Yes |
| **Inline** | `<span>`, `<a>`, `<strong>` | ❌ No — ignored by browser |

**If your element is inline and width/height isn't working**, convert it to block:

```css
span {
  display: block;      /* or display: inline-block */
  width: 200px;
  height: 50px;
}
```

`inline-block` is a middle ground — the element stays on the same line as neighbors, but respects width and height.

---

## 4. Padding

**Padding** is the space **inside** the border, between the content and the border edge. It creates breathing room around your content.

```css
div {
  padding: 20px;                        /* all 4 sides */
  padding: 10px 20px;                   /* top/bottom | left/right */
  padding: 10px 20px 15px 5px;         /* top | right | bottom | left (clockwise) */

  /* Or individually: */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

**Visual result:** makes the box feel less cramped; background color fills the padding area.

---

## 5. Border

**Border** is the visible line that wraps around padding and content.

```css
div {
  border: 2px solid black;       /* shorthand: width | style | color */

  /* Or individually: */
  border-width: 2px;
  border-style: solid;           /* solid | dashed | dotted | none */
  border-color: red;

  /* Or per-side: */
  border-top: 3px dashed blue;
  border-bottom: 1px solid gray;

  border-radius: 10px;           /* rounds the corners */
}
```

---

## 6. Margin

**Margin** is the space **outside** the border. It creates a gap between your element and neighboring elements. The margin area is always **transparent**.

```css
div {
  margin: 20px;                        /* all 4 sides */
  margin: 10px 20px;                   /* top/bottom | left/right */
  margin: 10px 20px 15px 5px;         /* top | right | bottom | left */

  /* Or individually: */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;

  margin: 0 auto;     /* centers a block element horizontally */
}
```

**Key difference from padding:** Margin is outside the box; padding is inside. Background color does NOT fill margin.

---

## 7. `box-sizing` — The Most Important Property

By default (`box-sizing: content-box`), when you set `width: 300px`, the border and padding are **added on top** of that, making the box larger than expected.

```
/* content-box (default) — confusing! */
width: 300px + padding: 20px + border: 2px = actual width of 344px
```

With `box-sizing: border-box`, the width you set **includes** padding and border:

```
/* border-box — predictable! */
width: 300px = actual width of 300px (padding and border fit inside)
```

**Always use this reset:**

```css
* {
  box-sizing: border-box;
}
```

---

## Full Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Universal selector reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .card {
      width: 300px;
      height: 200px;
      padding: 20px;
      border: 3px solid steelblue;
      margin: 40px auto;
      background-color: lightyellow;
    }

    /* Inline element — width/height won't work yet */
    span {
      background-color: pink;
      width: 100px;   /* IGNORED because span is inline */
    }

    /* Fix: make it inline-block */
    .fixed-span {
      display: inline-block;
      width: 100px;
      height: 30px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>
  <div class="card">
    I am a box with padding, border, and margin.
  </div>
  <span>I ignore width (inline)</span>
  <span class="fixed-span">I respect width (inline-block)</span>
</body>
</html>
```

---

## Quick Reference Cheatsheet

| Property | What it does | Affects layout? |
|---|---|---|
| `width` / `height` | Size of content area | Yes |
| `padding` | Space inside the border | Yes (expands box) |
| `border` | Visible edge around padding | Yes (expands box) |
| `margin` | Space outside the border | Yes (pushes neighbors) |
| `box-sizing: border-box` | Makes width include padding+border | Yes (fixes sizing) |
| `*` (universal selector) | Targets all elements | Depends on rules |
| `display: block` | Makes inline element respect width/height | Yes |

---

## Summary

1. Everything in HTML is a **rectangle/box**.
2. Each box has **4 layers**: content → padding → border → margin.
3. **Margin** = gap between boxes (outside). **Padding** = gap inside the box.
4. **Inline elements** (like `<span>`) ignore `width` and `height` — use `display: block` or `display: inline-block` to fix this.
5. Always add `* { box-sizing: border-box; }` at the top of your CSS for predictable sizing.
