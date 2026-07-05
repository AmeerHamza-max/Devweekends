# CSS — Complete Beginner's Guide

> By the end of this guide, you will fully understand what CSS is, how to add it, how priority works, and how to use all major selectors — with real examples.

---

## Table of Contents

1. [What is CSS?](#1-what-is-css)
2. [CSS Syntax](#2-css-syntax)
3. [Three Ways to Add CSS](#3-three-ways-to-add-css)
4. [CSS Priority (Specificity)](#4-css-priority-specificity)
5. [CSS Selectors](#5-css-selectors)
6. [Quick Reference Card](#6-quick-reference-card)
7. [Practice Exercises](#7-practice-exercises)

---

## 1. What is CSS?

**CSS = Cascading Style Sheets**

HTML builds the structure of a webpage (the skeleton). CSS makes it look good (the clothes and appearance).

```
HTML alone:                     HTML + CSS:
┌──────────────────┐            ┌──────────────────────────────┐
│  [Big Black Text]│            │  🎨 Colorful, styled heading │
│  [Plain text]    │   ──→      │  Beautiful paragraph text    │
│  [Button]        │            │  [ Rounded blue button ]     │
└──────────────────┘            └──────────────────────────────┘
```

The word **"Cascading"** means styles flow down — from parent elements to children, and rules have a priority order when there's a conflict.

---

## 2. CSS Syntax

```
selector {
    property: value;
    property: value;
}
```

| Part | Meaning | Example |
|------|---------|---------|
| `selector` | Which HTML element to target | `h1`, `p`, `.box` |
| `property` | What you want to change | `color`, `font-size` |
| `value` | What to set it to | `red`, `20px` |

### Real Example

```css
h1 {
    color: green;
    font-size: 36px;
    background-color: yellow;
}
```

This targets every `<h1>` tag and makes the text green, size 36px, with a yellow background.

---

## 3. Three Ways to Add CSS

### Method 1 — Inline CSS

CSS written **directly inside an HTML tag** using the `style` attribute.

```html
<h1 style="color: red; font-size: 40px;">Hello World</h1>
<p style="color: blue; margin: 10px;">This is a paragraph.</p>
```

✅ Quick for testing one element  
❌ Messy — hard to manage on large pages  
❌ Violates separation of concern  
❌ Cannot reuse styles  

---

### Method 2 — Internal CSS

CSS written **inside a `<style>` tag** in the `<head>` section of the HTML file.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: green;
            font-size: 36px;
        }
        p {
            color: gray;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

✅ Good for single-page projects  
✅ No extra file needed  
❌ Styles can't be shared across multiple HTML files  

---

### Method 3 — External CSS ✅ (Most Used)

CSS written in a **separate `.css` file** and linked to the HTML file.

**style.css**
```css
h1 {
    color: purple;
    font-size: 36px;
}

p {
    color: gray;
    font-size: 16px;
}
```

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

✅ **Separation of Concern** — HTML handles structure, CSS handles design  
✅ One CSS file can style hundreds of HTML pages  
✅ Easy to maintain and update  
✅ Professional standard — always used in real projects  

---

### Side-by-Side Comparison

| Feature | Inline | Internal | External |
|---------|--------|----------|----------|
| Where written | Inside HTML tag | `<style>` in `<head>` | Separate `.css` file |
| Reusability | ❌ No | ❌ One page only | ✅ All pages |
| Separation of Concern | ❌ No | ❌ No | ✅ Yes |
| Best for | Quick tests | Single pages | All real projects |
| Priority | Highest | Medium | Lowest (usually) |

---

## 4. CSS Priority (Specificity)

When the **same element** has styles from multiple sources, CSS has a clear priority order.

### Priority Rules

```
Highest Priority
      ↑
      │   1. Inline CSS       (style="...")
      │   2. Internal CSS     (<style> tag)
      │   3. External CSS     (linked .css file)
      ↓
Lowest Priority
```

### ⚠️ The Order Trick (Internal vs External)

When **both internal and external CSS** target the same element, whichever is written **last in the `<head>`** wins.

```html
<head>
    <style>
        h1 { color: blue; }    /* Internal */
    </style>
    <link rel="stylesheet" href="style.css">  /* External — written AFTER internal */
</head>
```

If `style.css` also sets `h1 { color: red; }`, the heading will be **red** because external comes after internal.

Flip the order:
```html
<head>
    <link rel="stylesheet" href="style.css">  /* External — written BEFORE internal */
    <style>
        h1 { color: blue; }   /* Internal — written AFTER, so this wins */
    </style>
</head>
```

Now the heading will be **blue**.

### Example Demonstrating Priority

```html
<!DOCTYPE html>
<html>
<head>
    <!-- External CSS says: h1 { color: green } -->
    <link rel="stylesheet" href="style.css">

    <style>
        h1 { color: blue; }    /* Internal overrides external if written after */
    </style>
</head>
<body>
    <!-- Inline overrides EVERYTHING -->
    <h1 style="color: red;">What color am I?</h1>
</body>
</html>
```

**Answer: Red** — because inline always wins.

---

## 5. CSS Selectors

Selectors are how you **target HTML elements** to apply styles. Think of them as a way to say "hey, style THIS element."

---

### Selector 1 — Element Selector

Targets **all elements** of a specific HTML tag.

```css
/* Targets ALL <h1> tags */
h1 {
    color: navy;
    font-size: 32px;
}

/* Targets ALL <p> tags */
p {
    color: gray;
    line-height: 1.6;
}

/* Targets ALL <section> tags */
section {
    background-color: #f5f5f5;
    padding: 20px;
}
```

```html
<h1>This heading is navy</h1>
<h1>This heading is also navy</h1>
<p>This paragraph is gray</p>
<p>This paragraph is also gray</p>
```

✅ Simple and quick  
❌ Styles EVERY element of that type — no control over individual ones  

---

### Selector 2 — ID Selector

Targets a **single, unique element** by its `id` attribute. Use `#` in CSS.

> Rule: An `id` must be **unique** on the page — only one element can have a given id.

```html
<h1 id="main-title">This is the Main Title</h1>
<h1>This is a regular heading</h1>
<p id="intro">This is the intro paragraph</p>
```

```css
/* Targets ONLY the element with id="main-title" */
#main-title {
    color: crimson;
    font-size: 40px;
    text-decoration: underline;
}

/* Targets ONLY the element with id="intro" */
#intro {
    color: darkblue;
    font-weight: bold;
    font-size: 18px;
}
```

**Result:**
- Only the first `<h1>` becomes crimson and underlined
- The second `<h1>` is unstyled
- The paragraph with `id="intro"` becomes dark blue and bold

✅ Very specific — targets exactly one element  
❌ Cannot reuse the same id on multiple elements  

---

### Selector 3 — Class Selector

Targets **one or more elements** that share the same `class` attribute. Use `.` in CSS.

> Rule: Multiple elements CAN share the same class. One element can also have multiple classes.

```html
<h1 class="highlight">Heading 1</h1>
<p class="highlight">Paragraph 1</p>
<p>Paragraph 2 (no class)</p>
<h2 class="highlight special">Heading 2 (two classes)</h2>
```

```css
/* Targets ALL elements with class="highlight" */
.highlight {
    color: white;
    background-color: orange;
    padding: 5px 10px;
}

/* Targets ALL elements with class="special" */
.special {
    font-style: italic;
    border: 2px solid black;
}
```

**Result:**
- `<h1>`, `<p>`, and `<h2>` with class `highlight` all get orange background + white text
- `<p>` with no class is unaffected
- `<h2>` with both classes gets orange background AND italic + border

✅ Reusable across many elements  
✅ One element can have multiple classes  
✅ Most commonly used selector in real projects  

---

### Selector 4 — Group Selector

Apply the **same styles to multiple selectors** at once using a comma `,`.

Without group selector (repetitive):
```css
h1 {
    color: teal;
    font-family: Arial;
}
h2 {
    color: teal;
    font-family: Arial;
}
p {
    color: teal;
    font-family: Arial;
}
```

With group selector (clean):
```css
h1, h2, p {
    color: teal;
    font-family: Arial;
}
```

Same result — much less code.

```html
<h1>Heading 1 — teal</h1>
<h2>Heading 2 — teal</h2>
<p>Paragraph — teal</p>
<section>Section — NOT teal (not in the group)</section>
```

✅ Reduces repetition  
✅ Easy to update — change once, applies to all grouped elements  

---

### All Selectors — Complete Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>

        /* 1. Element Selector — targets ALL h1 tags */
        h1 {
            font-family: Arial, sans-serif;
        }

        /* 2. ID Selector — targets only id="page-title" */
        #page-title {
            color: crimson;
            font-size: 40px;
            text-align: center;
        }

        /* 3. Class Selector — targets all elements with class="card" */
        .card {
            background-color: #f0f8ff;
            border: 1px solid #ccc;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
        }

        /* 4. Group Selector — targets h2 AND p together */
        h2, p {
            color: #333;
            font-family: Georgia, serif;
        }

    </style>
</head>
<body>

    <h1 id="page-title">Welcome to My Page</h1>

    <div class="card">
        <h2>Card One</h2>
        <p>This is the first card paragraph.</p>
    </div>

    <div class="card">
        <h2>Card Two</h2>
        <p>This is the second card paragraph.</p>
    </div>

    <p>This paragraph is outside any card but still styled by the group selector.</p>

</body>
</html>
```

---

### Selector Priority (Specificity Order)

When multiple selectors target the same element, this is the priority:

```
Highest Specificity
      ↑
      │   1. Inline style     style="color:red"      (always wins)
      │   2. ID Selector      #main-title            (very specific)
      │   3. Class Selector   .highlight             (moderate)
      │   4. Element Selector h1, p, div             (least specific)
      ↓
Lowest Specificity
```

### Conflict Example

```html
<p id="myId" class="myClass" style="color: pink;">What color am I?</p>
```

```css
p         { color: black; }     /* Element — least priority */
.myClass  { color: blue;  }     /* Class — medium priority */
#myId     { color: green; }     /* ID — high priority */
/* inline style="color: pink" — highest priority */
```

**Answer: Pink** — inline always wins.

---

## 6. Quick Reference Card

```
THREE WAYS TO ADD CSS
─────────────────────────────────────────────────────
Inline:    <h1 style="color:red;">Text</h1>
Internal:  <style> h1 { color: red; } </style>
External:  <link rel="stylesheet" href="style.css">

PRIORITY:  Inline > Internal/External (by order in <head>)


SELECTOR SYNTAX
─────────────────────────────────────────────────────
Element:   h1 { }           targets all <h1> tags
ID:        #myId { }        targets <tag id="myId">
Class:     .myClass { }     targets <tag class="myClass">
Group:     h1, h2, p { }   targets all three at once


SPECIFICITY ORDER (highest → lowest)
─────────────────────────────────────────────────────
1. Inline CSS
2. ID Selector      (#)
3. Class Selector   (.)
4. Element Selector (tag name)


COMMON PROPERTIES
─────────────────────────────────────────────────────
color              text color
background-color   background color
font-size          text size (px, em, rem)
font-family        font type
font-weight        bold, normal, 100–900
text-align         left, center, right
margin             space outside element
padding            space inside element
border             border: 1px solid black
border-radius      rounded corners
width / height     element size
```

---

## 7. Practice Exercises

### Beginner
1. Create an HTML page with 3 headings. Use an **element selector** to make all headings blue.
2. Give one paragraph a unique id and style only that paragraph using an **ID selector**.
3. Create two `<div>` boxes with the same class and style both using a **class selector**.

### Intermediate
4. Create a navigation bar with links. Group them with a **group selector** to remove underlines and change color.
5. Demonstrate CSS priority: give one `<h1>` all three types of CSS (inline, internal, external) targeting `color`. Predict and verify which color wins.
6. Create a card layout (title + description) using class selectors for styling.

### Advanced
7. Build a simple profile page using all four selector types together.
8. Create a button that has a default class style, but one specific button overridden by an id style.
9. Link an external stylesheet and experiment with moving `<link>` before and after `<style>` to see priority in action.

---

*CSS is the foundation of every beautiful website. Master selectors and the cascade, and you're ready for Flexbox, Grid, animations, and beyond!*
