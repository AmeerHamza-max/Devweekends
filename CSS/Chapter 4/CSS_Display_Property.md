# CSS Display Property

> **Core Idea:** The `display` property controls how an element behaves in the layout — does it start on a new line? Can you set its width and height? How does it sit next to other elements?

There are 3 main values to understand: `block`, `inline`, and `inline-block`.

---

## 1. Block Elements

Block elements are like **building bricks stacked vertically**. Each one takes up the full available width and forces the next element onto a new line.

### Default Block Elements

```
<div>, <p>, <h1>–<h6>, <section>, <article>, <header>, <footer>, <ul>, <li>
```

### Characteristics

| Feature | Block Behavior |
|---|---|
| New line | ✅ Always starts on a new line |
| Width | ✅ Stretches full width of parent by default |
| Custom Width | ✅ You can set custom `width` |
| Custom Height | ✅ You can set custom `height` |
| Margin (all sides) | ✅ Works on all 4 sides |
| Padding (all sides) | ✅ Works on all 4 sides |

### Example

```html
<style>
  div {
    background-color: steelblue;
    color: white;
    width: 300px;       /* ✅ works */
    height: 80px;       /* ✅ works */
    margin: 20px;       /* ✅ works on all sides */
    padding: 15px;      /* ✅ works on all sides */
  }
</style>

<div>Block Element 1</div>
<div>Block Element 2</div>
<div>Block Element 3</div>
```

**Result:**
```
┌──────────────────────────────────────┐
│  Block Element 1                     │
└──────────────────────────────────────┘
                                         ← new line automatically
┌──────────────────────────────────────┐
│  Block Element 2                     │
└──────────────────────────────────────┘
                                         ← new line automatically
┌──────────────────────────────────────┐
│  Block Element 3                     │
└──────────────────────────────────────┘
```

Each `<div>` goes to its own line and respects width, height, margin, and padding perfectly.

---

## 2. Inline Elements

Inline elements are like **words in a sentence** — they sit next to each other on the same line and only take up as much space as their content needs.

### Default Inline Elements

```
<span>, <a>, <strong>, <em>, <img>, <button>, <label>, <input>
```

### Characteristics

| Feature | Inline Behavior |
|---|---|
| New line | ❌ Does NOT start on a new line — stays inline |
| Width | ❌ Width is determined by content only, cannot be set custom |
| Custom Height | ❌ Does NOT work — ignored by browser |
| Top/Bottom Margin | ❌ Does NOT work |
| Left/Right Margin | ⚠️ May show a small horizontal margin, but unreliable |
| Padding | ⚠️ Padding applies visually but top/bottom may overlap other lines |

### Example

```html
<style>
  span {
    background-color: tomato;
    color: white;
    width: 300px;    /* ❌ IGNORED — inline doesn't respect this */
    height: 80px;    /* ❌ IGNORED */
    margin: 30px;    /* ❌ top/bottom ignored, horizontal may partially work */
    padding: 10px;   /* ⚠️ applies but can bleed into other lines */
  }
</style>

<span>Inline 1</span>
<span>Inline 2</span>
<span>Inline 3</span>
```

**Result:**
```
[Inline 1] [Inline 2] [Inline 3]   ← all on same line, width = content only
```

No matter what width or height you set on a `<span>`, the browser ignores it. The element stays as wide as its text.

---

## 3. Converting Between Block and Inline

Yes — conversion is 100% possible using the `display` property.

```css
/* Make a block element behave like inline */
div {
  display: inline;
}

/* Make an inline element behave like block */
span {
  display: block;
}
```

### Example — Converting `<span>` to Block

```html
<style>
  span {
    display: block;       /* ✅ Convert to block */
    width: 200px;         /* ✅ Now works! */
    height: 60px;         /* ✅ Now works! */
    margin: 20px;         /* ✅ Now works on all 4 sides! */
    padding: 10px;        /* ✅ Now works! */
    background-color: mediumseagreen;
    color: white;
  }
</style>

<span>I am now a block!</span>
<span>I am also a block!</span>
```

**Result:**
```
┌────────────────────┐
│  I am now a block! │
└────────────────────┘

┌──────────────────────┐
│  I am also a block!  │
└──────────────────────┘
```

Once you write `display: block` on an inline element, it gains all block powers — width, height, margin, padding all work.

---

## 4. `display: inline-block` — The Best of Both Worlds

`inline-block` is a **hybrid**. The element:
- **stays on the same line** as its neighbors (like inline)
- **but respects width, height, margin, and padding** (like block)

Think of it like words in a sentence that can also have a fixed box size.

### Comparison Table

| Feature | `inline` | `block` | `inline-block` |
|---|---|---|---|
| Stays on same line | ✅ | ❌ | ✅ |
| Custom Width | ❌ | ✅ | ✅ |
| Custom Height | ❌ | ✅ | ✅ |
| Margin (all sides) | ❌ | ✅ | ✅ |
| Padding (all sides) | ⚠️ | ✅ | ✅ |

### Example

```html
<style>
  .box {
    display: inline-block;
    width: 120px;         /* ✅ works — unlike inline */
    height: 60px;         /* ✅ works */
    margin: 10px;         /* ✅ works on all sides */
    padding: 8px;         /* ✅ works */
    background-color: mediumpurple;
    color: white;
    text-align: center;
    line-height: 44px;
  }
</style>

<span class="box">Box 1</span>
<span class="box">Box 2</span>
<span class="box">Box 3</span>
```

**Result:**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│  Box 1   │  │  Box 2   │  │  Box 3   │   ← all on same line
└──────────┘  └──────────┘  └──────────┘
```

All three boxes sit side by side (inline behavior), yet each has a custom width and height (block behavior). This is why `inline-block` is extremely common for navigation menus, buttons, cards, and tags.

---

## 5. Real-World Use Cases

### Navigation Menu (using `inline-block`)

```html
<style>
  nav a {
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #333;
    color: white;
    text-decoration: none;
    margin-right: 5px;
    border-radius: 4px;
  }
</style>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

### Centering a Block Element (using `margin: 0 auto`)

```html
<style>
  .container {
    display: block;
    width: 600px;
    margin: 0 auto;   /* centers horizontally */
    background-color: lightyellow;
    padding: 20px;
  }
</style>

<div class="container">I am centered on the page!</div>
```

---

## 6. Complete Side-by-Side Demo

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, padding: 20px; }

    /* BLOCK */
    .block-demo {
      display: block;
      width: 250px;
      height: 60px;
      background-color: steelblue;
      color: white;
      margin: 10px;
      padding: 10px;
    }

    /* INLINE — width and height are ignored */
    .inline-demo {
      display: inline;
      width: 250px;    /* ❌ ignored */
      height: 60px;    /* ❌ ignored */
      background-color: tomato;
      color: white;
      margin: 10px;    /* ❌ top/bottom ignored */
      padding: 10px;
    }

    /* INLINE-BLOCK — best of both */
    .inline-block-demo {
      display: inline-block;
      width: 120px;    /* ✅ works */
      height: 60px;    /* ✅ works */
      background-color: mediumseagreen;
      color: white;
      margin: 10px;    /* ✅ works */
      padding: 10px;   /* ✅ works */
      text-align: center;
    }
  </style>
</head>
<body>

  <h2>Block Elements</h2>
  <div class="block-demo">Block 1 — new line, full control</div>
  <div class="block-demo">Block 2 — new line, full control</div>

  <h2>Inline Elements</h2>
  <span class="inline-demo">Inline 1</span>
  <span class="inline-demo">Inline 2</span>
  <span class="inline-demo">Inline 3</span>

  <h2>Inline-Block Elements</h2>
  <span class="inline-block-demo">IB 1</span>
  <span class="inline-block-demo">IB 2</span>
  <span class="inline-block-demo">IB 3</span>

</body>
</html>
```

---

## Summary

```
display: block
  → New line each time
  → Full width by default
  → Custom width ✅  height ✅  margin ✅  padding ✅

display: inline
  → Same line, content width only
  → Custom width ❌  height ❌  top/bottom margin ❌
  → Horizontal margin ⚠️  padding ⚠️ (visual only)

display: inline-block
  → Same line (like inline) ✅
  → Custom width ✅  height ✅  margin ✅  padding ✅
  → Perfect hybrid for buttons, nav links, cards

Conversion
  → Any element can be changed: span { display: block } or div { display: inline }
  → inline-block is the most useful conversion for UI elements
```

---

## Quick Mental Model

```
Think of a book:

BLOCK  =  A paragraph — starts on its own line, full width, stacks vertically.

INLINE =  A word inside a paragraph — sits next to other words, 
          no control over its exact size.

INLINE-BLOCK = A sticky note placed inside the text — sits 
               next to others BUT you can set a fixed size on it.
```
