# Media Queries — Notes & Examples

Media queries let your CSS adapt based on the screen/viewport it's being shown on — width, height, orientation, resolution, etc. This README walks through the three examples you wrote, explains what's good, what's missing, and fixes one subtle bug.

---

## 1. Basic Syntax

```css
@media (condition) {
    /* CSS rules that apply ONLY when the condition is true */
}
```

The most common condition is screen width:

| Feature | Meaning |
|---|---|
| `min-width: 640px` | Applies when viewport is **640px or wider** |
| `max-width: 640px` | Applies when viewport is **640px or narrower** |
| `min-width: 300px) and (max-width: 600px` | Applies only **between** 300px–600px |

---

## 2. Example 1 — Flex Direction Switch (Your `box1–box4` layout)

```css
.container{
    display: flex;
    flex-direction: column; /* default: stacked, for small screens */
}

@media (min-width:640px) {
    .container{
        flex-direction: row; /* wide screens: side by side */
    }
}
@media (max-width:640px) {
    .container{
        flex-direction: column; /* narrow screens: stacked */
    }
}
```

**What this does:** boxes stack vertically by default, then become a horizontal row once the screen is 640px or wider.

### ⚠️ Bug found: overlapping breakpoint at exactly 640px

You wrote **two separate** media queries that both include `640px`:
- `min-width: 640px` → true when width is **≥ 640**
- `max-width: 640px` → true when width is **≤ 640**

At *exactly* 640px, **both** are true at the same time. Whichever rule appears **later** in the stylesheet wins (CSS cascade — last rule wins on equal specificity). In your file, `max-width` comes second, so at exactly 640px you'd get `column`, even though your intent was probably "row from 640px upward."

**Fix:** you only need ONE media query, not two — they're describing the same breakpoint from opposite directions. Just set the desktop layout as the override:

```css
.container{
    display: flex;
    flex-direction: column; /* mobile-first default */
}

@media (min-width: 640px) {
    .container{
        flex-direction: row; /* desktop override */
    }
}
```

No second query needed — anything *below* 640px naturally falls back to the default `column` since no media query overrides it. This approach (default styles + `min-width` overrides) is called **mobile-first** and is the modern standard.

---

## 3. Example 2 — Two-Column Layout with Image (`boxleft` / `boxright`)

```css
.container{
    display: flex;
    flex-direction: row; /* side-by-side by default (desktop-first) */
}

@media (max-width:640px) {
    .container{
        flex-direction: column; /* stack on small screens */
    }
}
```

**What this does:** two side-by-side boxes (text on the left, image on the right) collapse into a stacked layout on phones (≤640px).

This is the opposite strategy from Example 1 — here you're starting with desktop (`row`) and using `max-width` to override for *small* screens. This is called **desktop-first**. Both strategies are valid; you generally pick one and stick with it across a project rather than mixing them (mixing causes confusion like the bug above).

### 🟡 Missing piece: the image isn't responsive

```css
img{
    height: 200px;
    width: 200px;
}
```

This is a **fixed size**. On a small phone screen, a 200px-wide image inside a column that's now much narrower than 200px can overflow or look disproportionate. A responsive image should use:

```css
img{
    max-width: 100%;
    height: auto;
}
```

This lets the image shrink to fit its container instead of forcing a fixed size regardless of screen width.

### 🟡 Also missing: `#boxright` has no `display: flex` styling issues

`#boxleft` has `display: flex; flex-direction: column;` so its two `<p>` tags stack — that's intentional and fine. `#boxright` doesn't need it since it only holds one image, so that's correct as-is.

---

## 4. Example 3 — Single Box with Commented-Out Breakpoints

This example shows **three different patterns** for using a single breakpoint value, but they were all commented out, so right now the box is **always aqua** regardless of screen size. Here's what each one does if you uncomment it:

```css
.box{
    background-color: aqua; /* current: always aqua, no responsiveness */
    height: 400px;
    width: 400px;
}
```

### Pattern A — `min-width` only
```css
@media (min-width:500px) {
    .box{ background-color: green; }
}
```
Box is **aqua below 500px**, **green at 500px and above**.

### Pattern B — `max-width` only
```css
@media (max-width:500px) {
    .box{ background-color: green; }
}
```
Box is **green at 500px and below**, **aqua above 500px**. (Opposite of Pattern A.)

### Pattern C — Range (`min-width` AND `max-width`)
```css
@media (min-width:300px) and (max-width:500px){
    .box{ background-color: green; }
}
```
Box is **green only between 300px and 500px**. Outside that window (smaller than 300px OR larger than 500px), it stays aqua.

**Use range queries (Pattern C)** when you want a style to apply *only* to tablet-sized screens, for instance, and have a different rule for phones and a different rule again for desktops.

---

## 5. Common Real-World Breakpoints

There's no single "correct" set of breakpoints, but these are widely used as a starting reference:

| Device category | Typical width range |
|---|---|
| Small phones | up to 480px |
| Phones (general) | up to 640px |
| Tablets | 641px – 1024px |
| Laptops / small desktops | 1025px – 1440px |
| Large desktops | 1441px and up |

Frameworks like Tailwind CSS and Bootstrap use similar but slightly different cutoffs — the numbers themselves matter less than being **consistent** across your own project.

---

## 6. Mobile-First vs Desktop-First (the strategy your two examples accidentally mixed)

| | Mobile-First | Desktop-First |
|---|---|---|
| Default styles target | Smallest screen | Largest screen |
| Media query used | `min-width` | `max-width` |
| Direction of override | Small → large | Large → small |
| Used in | Example 1 (after fix) | Example 2 |

**Pick one strategy per project.** Mobile-first is generally recommended today because most traffic is mobile, and it keeps your base CSS lean (you add complexity as screens get bigger, rather than overriding it away).

---

## 7. Other Media Features Worth Knowing (not in your examples)

Your examples only use `width`. A few other commonly used features:

```css
/* Orientation: portrait vs landscape (e.g. rotating a phone) */
@media (orientation: landscape) { }

/* Height instead of width */
@media (max-height: 500px) { }

/* High-resolution screens (Retina displays etc.) */
@media (min-resolution: 2dppx) { }

/* User prefers dark mode at the OS level */
@media (prefers-color-scheme: dark) { }

/* User has enabled "reduce motion" accessibility setting */
@media (prefers-reduced-motion: reduce) { }
```

These aren't required for basic layout responsiveness, but `prefers-color-scheme` and `prefers-reduced-motion` are increasingly considered best practice for accessibility.

---

## 8. Quick Reference Summary

```
min-width: Npx   → "N and up"        (mobile-first overrides)
max-width: Npx   → "N and down"      (desktop-first overrides)
min-width AND max-width → "only between the two" (range targeting)
```

Avoid writing a `min-width: X` and `max-width: X` query with the **same** X value as two separate blocks (the bug in Example 1) — instead use the range pattern (Example 3, Pattern C) if you genuinely need a bounded window, or just rely on cascade with a single `min-width` or `max-width` query if you want a simple "before/after" split.
