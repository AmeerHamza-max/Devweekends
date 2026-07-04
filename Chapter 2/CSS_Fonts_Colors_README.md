# CSS Fonts & Colors — Complete Beginner's Guide

> By the end of this guide, you will fully understand every font property, all four ways to define colors, and how to use Google Fonts in your projects.

---

## Table of Contents

1. [CSS Fonts](#1-css-fonts)
   - [font-style](#font-style)
   - [font-size](#font-size)
   - [font-family](#font-family)
   - [font-weight](#font-weight)
   - [line-height](#line-height)
   - [Web Safe Fonts](#web-safe-fonts)
   - [Google Fonts (External)](#google-fonts-external)
2. [CSS Colors](#2-css-colors)
   - [Named Colors](#named-colors)
   - [RGB](#rgb--red-green-blue)
   - [Hex](#hex--hexadecimal)
   - [HSL](#hsl--hue-saturation-lightness)
3. [Combining Fonts & Colors](#3-combining-fonts--colors)
4. [Quick Reference Card](#4-quick-reference-card)
5. [Practice Exercises](#5-practice-exercises)

---

## 1. CSS Fonts

Fonts control how your text **looks** — its shape, size, thickness, and spacing.

---

### font-style

Controls whether text is normal, italic, or oblique.

```css
p.normal {
    font-style: normal;     /* Default — upright text */
}

p.italic {
    font-style: italic;     /* Slanted, uses the italic version of the font */
}

p.oblique {
    font-style: oblique;    /* Slanted, artificially tilted (no true italic needed) */
}
```

```html
<p class="normal">This is normal text.</p>
<p class="italic">This is italic text.</p>
<p class="oblique">This is oblique text.</p>
```

**Output:**
```
This is normal text.
This is italic text.
This is oblique text.  ← (visually slanted)
```

> **italic vs oblique:** `italic` uses the font's built-in slanted design. `oblique` just mechanically tilts the regular font. Most of the time, use `italic`.

| Value | Effect |
|-------|--------|
| `normal` | Regular upright text (default) |
| `italic` | Uses the font's italic variant |
| `oblique` | Forces a slant on the regular font |

---

### font-size

Controls how **big or small** the text is.

```css
h1 { font-size: 40px; }     /* Pixels — fixed size */
h2 { font-size: 2rem; }     /* rem — relative to root (html) font size */
p  { font-size: 1em; }      /* em — relative to parent element's font size */
small { font-size: 80%; }   /* Percentage — relative to parent */
```

```html
<h1>40px Heading</h1>
<h2>2rem Heading</h2>
<p>1em paragraph (inherits parent size)</p>
<small>80% of parent size</small>
```

### Size Units Explained

| Unit | Full Name | Relative To | Best Used For |
|------|-----------|-------------|---------------|
| `px` | Pixels | Screen pixels (fixed) | Precise, fixed sizes |
| `rem` | Root em | `html` element font-size | Consistent scaling across page |
| `em` | Em | Parent element font-size | Components that scale with parent |
| `%` | Percent | Parent element font-size | Flexible, responsive text |
| `vw` | Viewport Width | 1% of screen width | Responsive hero headings |

```css
/* Most common beginner setup */
html { font-size: 16px; }   /* 1rem = 16px */
h1   { font-size: 2.5rem; } /* 40px */
h2   { font-size: 2rem; }   /* 32px */
p    { font-size: 1rem; }   /* 16px */
```

---

### font-family

Controls the **typeface** (the design/shape of the letters).

```css
p {
    font-family: Arial, Helvetica, sans-serif;
}

h1 {
    font-family: "Times New Roman", Times, serif;
}

code {
    font-family: "Courier New", Courier, monospace;
}
```

### Why Multiple Font Names?

```css
font-family: Arial, Helvetica, sans-serif;
/*              ↑         ↑          ↑
          First choice  Fallback  Generic fallback
          (try this)  (if Arial   (if nothing else
                      not found)   works, use any
                                  sans-serif font) */
```

This is called a **font stack**. The browser tries each font left to right and uses the first one it finds on the user's computer.

### Three Generic Font Families

```css
/* 1. Serif — has small decorative strokes at ends of letters */
p { font-family: "Times New Roman", Times, serif; }

/* 2. Sans-serif — clean, no decorative strokes (most used on web) */
p { font-family: Arial, Helvetica, sans-serif; }

/* 3. Monospace — every character has equal width (used for code) */
code { font-family: "Courier New", Courier, monospace; }
```

```
Serif:      T  ← notice the small "feet" at the bottom
Sans-serif: T  ← clean, no feet
Monospace:  T  ← same width as every other character
```

---

### font-weight

Controls how **thick or thin** (bold or light) the text appears.

```css
p.thin     { font-weight: 100; }
p.light    { font-weight: 300; }
p.normal   { font-weight: 400; }   /* Same as: font-weight: normal */
p.medium   { font-weight: 500; }
p.semibold { font-weight: 600; }
p.bold     { font-weight: 700; }   /* Same as: font-weight: bold */
p.black    { font-weight: 900; }
```

```html
<p class="thin">100 — Thin text</p>
<p class="normal">400 — Normal text</p>
<p class="bold">700 — Bold text</p>
<p class="black">900 — Black (extra bold) text</p>
```

| Value | Keyword Equivalent | Appearance |
|-------|-------------------|------------|
| `100` | — | Hairline thin |
| `300` | `lighter` | Light |
| `400` | `normal` | Regular (default) |
| `700` | `bold` | Bold |
| `900` | `bolder` | Extra bold / Black |

> **Note:** Not all fonts support all 9 weights. If a weight is unavailable, the browser picks the closest one.

---

### line-height

Controls the **vertical space between lines** of text. Makes text easier to read.

```css
p.tight    { line-height: 1; }     /* Lines touching each other */
p.normal   { line-height: 1.5; }   /* Comfortable (recommended) */
p.relaxed  { line-height: 2; }     /* Double-spaced */
p.fixed    { line-height: 32px; }  /* Exact pixel value */
```

```html
<p class="tight">
    This text has tight line spacing.
    Lines are very close together and harder to read.
</p>

<p class="normal">
    This text has comfortable line spacing.
    Much easier to read on screen.
</p>

<p class="relaxed">
    This text has relaxed double spacing.
    Feels very open and airy.
</p>
```

> **Best practice:** Use `1.5` to `1.7` for body text. This is what most websites and books use for readability.

```css
/* Professional body text setup */
body {
    font-size: 16px;
    line-height: 1.6;
    font-family: Arial, sans-serif;
}
```

---

### Web Safe Fonts

**Web Safe Fonts** are fonts that come **pre-installed** on almost every computer and device — Windows, Mac, Android, iOS. You can use them without loading anything external.

```css
/* Web Safe Serif Fonts */
h1 { font-family: "Times New Roman", Times, serif; }
h2 { font-family: Georgia, "Times New Roman", serif; }

/* Web Safe Sans-Serif Fonts */
p  { font-family: Arial, Helvetica, sans-serif; }
p  { font-family: Verdana, Geneva, sans-serif; }
p  { font-family: Tahoma, Geneva, sans-serif; }
p  { font-family: "Trebuchet MS", Helvetica, sans-serif; }

/* Web Safe Monospace Fonts */
code { font-family: "Courier New", Courier, monospace; }
```

### Complete Web Safe Font List

| Font Name | Category | Notes |
|-----------|----------|-------|
| Arial | Sans-serif | Most widely used |
| Helvetica | Sans-serif | Mac's default |
| Verdana | Sans-serif | Very readable at small sizes |
| Tahoma | Sans-serif | Common on Windows |
| Trebuchet MS | Sans-serif | Slightly humanist feel |
| Times New Roman | Serif | Classic newspaper font |
| Georgia | Serif | Elegant, great for reading |
| Courier New | Monospace | Classic typewriter / code font |

---

### Google Fonts (External)

Google Fonts gives you **1,000+ free fonts** that are not pre-installed on devices. Google hosts them — you just link to them.

**Step 1 — Go to:** [fonts.google.com](https://fonts.google.com)

**Step 2 — Add the `<link>` tag to your HTML `<head>`:**

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Google Fonts link — paste this BEFORE your CSS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>This uses Playfair Display</h1>
    <p>This uses Roboto</p>
</body>
</html>
```

**Step 3 — Use it in your CSS:**

```css
h1 {
    font-family: "Playfair Display", serif;
    font-weight: 700;
}

p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
}
```

### Popular Google Font Combinations

```css
/* Clean & Modern */
h1 { font-family: "Montserrat", sans-serif; font-weight: 700; }
p  { font-family: "Open Sans", sans-serif;  font-weight: 400; }

/* Elegant & Editorial */
h1 { font-family: "Playfair Display", serif; }
p  { font-family: "Lato", sans-serif; }

/* Minimal & Tech */
h1 { font-family: "Poppins", sans-serif; font-weight: 600; }
p  { font-family: "Roboto", sans-serif; font-weight: 300; }
```

> **Web Safe vs Google Fonts:**
> - Web safe = instant, no loading, limited choice
> - Google Fonts = requires internet, small load time, 1000+ beautiful options
> - In real projects, Google Fonts is almost always used

---

## 2. CSS Colors

CSS gives you four ways to define any color. They all work — just different ways to describe the same thing.

---

### Named Colors

CSS has **140+ built-in color names** you can use directly.

```css
h1 { color: red; }
h2 { color: navy; }
p  { color: gray; }
div { background-color: lightyellow; }
button { background-color: dodgerblue; color: white; }
```

```html
<h1 style="color: tomato;">Tomato</h1>
<h1 style="color: steelblue;">Steel Blue</h1>
<h1 style="color: mediumseagreen;">Medium Sea Green</h1>
<h1 style="color: goldenrod;">Goldenrod</h1>
<h1 style="color: mediumpurple;">Medium Purple</h1>
```

### Commonly Used Named Colors

| Color Name | Looks Like | Use Case |
|------------|-----------|----------|
| `red` | Red | Errors, warnings |
| `crimson` | Deep red | Headings, accents |
| `tomato` | Orange-red | Buttons, highlights |
| `navy` | Dark blue | Professional text |
| `steelblue` | Medium blue | Links, UI |
| `dodgerblue` | Bright blue | Buttons |
| `mediumseagreen` | Green | Success messages |
| `goldenrod` | Yellow-gold | Highlights, badges |
| `gray` / `grey` | Medium gray | Body text, borders |
| `whitesmoke` | Off-white | Backgrounds |
| `black` / `white` | — | Text, backgrounds |

✅ Easy to read and write  
❌ Limited — only 140 colors  
❌ Not precise enough for design systems  

---

### RGB — Red, Green, Blue

Mix **Red, Green, and Blue** light to create any color. Each value goes from `0` (none) to `255` (full).

```css
/* rgb(red, green, blue) */

p { color: rgb(255, 0, 0); }      /* Pure red */
p { color: rgb(0, 255, 0); }      /* Pure green */
p { color: rgb(0, 0, 255); }      /* Pure blue */
p { color: rgb(0, 0, 0); }        /* Black (no light) */
p { color: rgb(255, 255, 255); }  /* White (all light) */
p { color: rgb(128, 128, 128); }  /* Gray */
```

### How RGB Works

```
rgb(R,   G,   B)
    ↑    ↑    ↑
  0-255 0-255 0-255

Red only:    rgb(255, 0,   0  ) → 🔴
Green only:  rgb(0,   255, 0  ) → 🟢
Blue only:   rgb(0,   0,   255) → 🔵
Red + Green: rgb(255, 255, 0  ) → 🟡 Yellow
All equal:   rgb(128, 128, 128) → ⬜ Gray
All max:     rgb(255, 255, 255) → ⬜ White
All zero:    rgb(0,   0,   0  ) → ⬛ Black
```

### RGB with Transparency — rgba()

Add a 4th value (alpha) from `0` (invisible) to `1` (fully visible):

```css
/* rgba(red, green, blue, alpha) */

div { background-color: rgba(255, 0, 0, 1);    }  /* Solid red */
div { background-color: rgba(255, 0, 0, 0.5);  }  /* 50% transparent red */
div { background-color: rgba(255, 0, 0, 0.1);  }  /* Nearly invisible red */
div { background-color: rgba(0, 0, 0, 0.3);    }  /* Semi-transparent overlay */
```

```css
/* Common use: dark overlay on images */
.overlay {
    background-color: rgba(0, 0, 0, 0.6);   /* 60% black overlay */
    color: white;
}
```

---

### Hex — Hexadecimal

The **most widely used** color format in web development. A `#` followed by 6 characters representing RGB in base-16.

```css
h1 { color: #ff0000; }   /* Red */
h1 { color: #00ff00; }   /* Green */
h1 { color: #0000ff; }   /* Blue */
h1 { color: #000000; }   /* Black */
h1 { color: #ffffff; }   /* White */
h1 { color: #808080; }   /* Gray */
```

### How Hex Works

```
  # R  R  G  G  B  B
  # ff 00 00
    ↑↑  ↑↑  ↑↑
    Red Green Blue
    (each pair is 00–ff, which is 0–255 in base-16)
```

| Hex Pair | Decimal | Meaning |
|----------|---------|---------|
| `00` | 0 | None of this color |
| `80` | 128 | Half of this color |
| `ff` | 255 | Full of this color |

### Shorthand Hex (3 characters)

When each pair has identical digits, you can shorten it:

```css
#ff0000 → #f00   /* Red */
#ffffff → #fff   /* White */
#000000 → #000   /* Black */
#aabbcc → #abc   /* Any color with repeated digits */
```

### Hex with Transparency (8-character hex)

```css
/* #RRGGBBAA — last two digits are alpha (00=transparent, ff=solid) */
div { background-color: #ff000080; }  /* 50% transparent red */
div { background-color: #00000099; }  /* 60% transparent black */
```

### Real-World Hex Colors

```css
/* Common design system colors */
:root {
    --primary:   #3b82f6;   /* Blue */
    --success:   #22c55e;   /* Green */
    --warning:   #f59e0b;   /* Amber */
    --danger:    #ef4444;   /* Red */
    --dark:      #1f2937;   /* Dark gray */
    --light:     #f9fafb;   /* Off-white */
}
```

✅ Most used format in real projects  
✅ Copy-paste from design tools (Figma, Photoshop)  
✅ Compact  
❌ Hard to read/adjust mentally  

---

### HSL — Hue, Saturation, Lightness

The most **human-friendly** way to think about color. Describe color the way a painter or designer would.

```css
/* hsl(hue, saturation%, lightness%) */

p { color: hsl(0,   100%, 50%); }    /* Red */
p { color: hsl(120, 100%, 50%); }    /* Green */
p { color: hsl(240, 100%, 50%); }    /* Blue */
p { color: hsl(60,  100%, 50%); }    /* Yellow */
p { color: hsl(300, 100%, 50%); }    /* Magenta */
```

### How Each Value Works

**Hue (0–360)** — The color angle on the color wheel:
```
    0°  = Red
   60°  = Yellow
  120°  = Green
  180°  = Cyan
  240°  = Blue
  300°  = Magenta
  360°  = Red again (full circle)
```

**Saturation (0%–100%)** — How vivid or washed-out:
```
hsl(240, 0%,   50%)  → Gray (no color at all)
hsl(240, 50%,  50%)  → Muted blue
hsl(240, 100%, 50%)  → Vivid blue
```

**Lightness (0%–100%)** — How dark or light:
```
hsl(240, 100%, 0%)   → Black
hsl(240, 100%, 50%)  → Normal blue
hsl(240, 100%, 100%) → White
```

### Why HSL is Powerful

Adjusting shades is intuitive — just change one number:

```css
/* A button in different states — same hue, different lightness */
.btn-normal  { background-color: hsl(220, 90%, 55%); }   /* Normal blue */
.btn-hover   { background-color: hsl(220, 90%, 45%); }   /* Darker on hover */
.btn-active  { background-color: hsl(220, 90%, 35%); }   /* Even darker when clicked */
.btn-light   { background-color: hsl(220, 90%, 85%); }   /* Light tint version */
```

### HSL with Transparency — hsla()

```css
/* hsla(hue, saturation%, lightness%, alpha) */

div { background-color: hsla(240, 100%, 50%, 0.5); }  /* 50% transparent blue */
div { background-color: hsla(0,   100%, 50%, 0.3); }  /* 30% transparent red */
```

---

### Color Format Comparison

| Format | Example | Best For |
|--------|---------|---------|
| Named | `red`, `dodgerblue` | Quick prototyping, simple projects |
| RGB | `rgb(255, 99, 71)` | When you think in light values |
| RGBA | `rgba(0, 0, 0, 0.5)` | Transparency / overlays |
| Hex | `#ff6347` | Real projects, copying from Figma |
| HSL | `hsl(9, 100%, 64%)` | Creating color palettes, theming |
| HSLA | `hsla(9, 100%, 64%, 0.5)` | Transparent version of HSL |

> **All four of these are identical — all produce the same tomato red:**
> ```css
> color: tomato;
> color: rgb(255, 99, 71);
> color: #ff6347;
> color: hsl(9, 100%, 64%);
> ```

---

## 3. Combining Fonts & Colors

A full example using everything covered in this guide:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

    <style>
        /* Base styles */
        body {
            font-family: "Poppins", Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #1f2937;
            background-color: hsl(210, 20%, 98%);
            margin: 0;
            padding: 20px;
        }

        /* Heading */
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            font-style: normal;
            color: #1e3a8a;
            line-height: 1.2;
        }

        /* Subheading */
        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: hsl(220, 60%, 40%);
        }

        /* Body text */
        p {
            font-size: 1rem;
            font-weight: 400;
            color: rgb(75, 85, 99);
            line-height: 1.7;
        }

        /* Highlighted note */
        .note {
            font-style: italic;
            font-weight: 300;
            color: #6b7280;
            background-color: rgba(59, 130, 246, 0.1);
            padding: 10px 15px;
            border-left: 4px solid #3b82f6;
        }

        /* Button */
        .btn {
            font-family: "Poppins", sans-serif;
            font-size: 1rem;
            font-weight: 600;
            color: #ffffff;
            background-color: hsl(220, 90%, 55%);
            padding: 10px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        code {
            font-family: "Courier New", monospace;
            font-size: 0.9rem;
            color: #dc2626;
            background-color: #fef2f2;
            padding: 2px 6px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>CSS Fonts & Colors</h1>
    <h2>Everything in one page</h2>
    <p>This paragraph uses <code>Poppins</code> from Google Fonts with a comfortable line-height of 1.7.</p>
    <p class="note">This is a styled note using italic, light weight, and a semi-transparent blue background.</p>
    <button class="btn">Click Me</button>
</body>
</html>
```

---

## 4. Quick Reference Card

```
FONT PROPERTIES
────────────────────────────────────────────────
font-style:   normal | italic | oblique
font-size:    16px | 1rem | 1.2em | 120%
font-family:  "Poppins", Arial, sans-serif
font-weight:  100 | 300 | 400 | 600 | 700 | 900
line-height:  1 | 1.5 | 2 | 24px

GENERIC FAMILIES
────────────────────────────────────────────────
serif       → Times New Roman, Georgia
sans-serif  → Arial, Verdana, Poppins
monospace   → Courier New, Roboto Mono

FONT SIZE UNITS
────────────────────────────────────────────────
px   → fixed pixels
rem  → relative to html font-size (recommended)
em   → relative to parent font-size
%    → relative to parent font-size

GOOGLE FONTS — How to use
────────────────────────────────────────────────
1. Go to fonts.google.com
2. Pick a font → copy the <link> tag
3. Paste in <head> BEFORE your CSS
4. Use font-family: "Font Name", fallback, generic;


COLOR FORMATS
────────────────────────────────────────────────
Named:  color: tomato;
RGB:    color: rgb(255, 99, 71);
RGBA:   color: rgba(255, 99, 71, 0.5);
Hex:    color: #ff6347;
Hex+A:  color: #ff634780;
HSL:    color: hsl(9, 100%, 64%);
HSLA:   color: hsla(9, 100%, 64%, 0.5);

HUE VALUES (HSL)
────────────────────────────────────────────────
  0° = Red     60° = Yellow   120° = Green
180° = Cyan   240° = Blue    300° = Magenta

ALPHA (Transparency)
────────────────────────────────────────────────
0   = fully transparent (invisible)
0.5 = 50% transparent
1   = fully solid (no transparency)
```

---

## 5. Practice Exercises

### Beginner
1. Create a paragraph with `font-style: italic`, `font-size: 20px`, and `color: steelblue`.
2. Set `font-weight: 700` on one heading and `font-weight: 300` on another. Compare the difference.
3. Add `line-height: 2` to a long paragraph. Notice how much more readable it becomes.
4. Use all four color formats to produce the **same red color** on four different elements.

### Intermediate
5. Create a page using a Google Font. Use two weights (400 and 700) of the same font.
6. Build a color palette div — 5 boxes using `hsl()` with the same hue but different lightness values (20%, 40%, 60%, 80%, 95%).
7. Create an image overlay using `rgba(0, 0, 0, 0.5)` over a colored background.

### Advanced
8. Build a full typography system — define `h1` through `h4`, `p`, and `code` with different sizes (in `rem`), weights, line-heights, and a consistent color palette using `hsl`.
9. Create a dark mode version of a page by switching background to `hsl(220, 20%, 10%)` and text to `hsl(220, 20%, 90%)`.
10. Create a button that uses `hsl()` and varies only the `lightness` value for its normal, hover, and active states.

---

*Fonts and colors are the soul of visual design. Get comfortable with these and every webpage you build will feel polished and professional.*
