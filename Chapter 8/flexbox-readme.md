# 📦 CSS Flexbox — Complete Guide

> **Flexbox** (Flexible Box Layout) is a one-dimensional layout method that lets you arrange items in a row or column, controlling their alignment, spacing, and sizing with ease.

---

## 🧠 Core Concept

```
┌─────────────────────────────────────────────┐
│              FLEX CONTAINER                 │
│  ┌────────┐  ┌────────┐  ┌────────┐        │
│  │  Item  │  │  Item  │  │  Item  │        │
│  └────────┘  └────────┘  └────────┘        │
└─────────────────────────────────────────────┘
```

- **Flex Container** → the parent `div` with `display: flex`
- **Flex Items** → the direct children inside the container
- **Main Axis** → the primary direction items flow (horizontal by default)
- **Cross Axis** → the perpendicular direction (vertical by default)

---

## 🚀 Quick Start

```css
.container {
  display: flex; /* Activates Flexbox */
}
```

---

## 📐 The Two Axes

```
     MAIN AXIS (row → default)
     ──────────────────────────▶
  ↑  ┌────────┐ ┌────────┐ ┌────────┐
  │  │ Item 1 │ │ Item 2 │ │ Item 3 │
C │  └────────┘ └────────┘ └────────┘
R │
O │
S │
S │
  │
A │
X │
I │
S │
  ↓
```

> When `flex-direction: column`, the axes **swap** — main becomes vertical, cross becomes horizontal.

---

## 🏗️ CONTAINER PROPERTIES

### 1. `flex-direction` — Controls Main Axis Direction

```css
.container {
  flex-direction: row;            /* → Default: left to right */
  flex-direction: row-reverse;    /* ← Right to left */
  flex-direction: column;         /* ↓ Top to bottom */
  flex-direction: column-reverse; /* ↑ Bottom to top */
}
```

**Visual:**
```
row:            [1] [2] [3] [4]
row-reverse:    [4] [3] [2] [1]
column:         [1]
                [2]
                [3]
column-reverse: [3]
                [2]
                [1]
```

---

### 2. `flex-wrap` — Controls Overflow Behavior

By default, all items stay in **one line** (even if they overflow).

```css
.container {
  flex-wrap: nowrap;       /* Default: all in one line, may overflow */
  flex-wrap: wrap;         /* Items wrap to next line when needed */
  flex-wrap: wrap-reverse; /* Items wrap to PREVIOUS line */
}
```

**Visual (5 items, small container):**
```
nowrap:        [1][2][3][4][5]  ← may overflow
wrap:          [1][2][3]
               [4][5]
wrap-reverse:  [4][5]
               [1][2][3]
```

---

### 3. `flex-flow` — Shorthand for direction + wrap

```css
/* flex-flow: <flex-direction> <flex-wrap> */
.container {
  flex-flow: row wrap;
  flex-flow: column nowrap;
  flex-flow: row-reverse wrap-reverse;
}
```

---

### 4. `justify-content` — Align Items Along MAIN AXIS

```css
.container {
  justify-content: flex-start;    /* Default: items at start */
  justify-content: flex-end;      /* Items at end */
  justify-content: center;        /* Items at center */
  justify-content: space-between; /* Equal space BETWEEN items */
  justify-content: space-around;  /* Equal space AROUND items */
  justify-content: space-evenly;  /* Equal space everywhere */
}
```

**Visual (row direction):**
```
flex-start:    [1][2][3]         ←         (space here)
flex-end:               (space)  →  [1][2][3]
center:         (space) [1][2][3] (space)
space-between: [1]     [2]     [3]
space-around:   [1]   [2]   [3]
space-evenly:  [1]  [2]  [3]
```

---

### 5. `align-items` — Align Items Along CROSS AXIS (single line)

```css
.container {
  align-items: stretch;    /* Default: items stretch to fill container height */
  align-items: flex-start; /* Items align to top of container */
  align-items: flex-end;   /* Items align to bottom of container */
  align-items: center;     /* Items align to vertical middle */
  align-items: baseline;   /* Items align by their text baseline */
}
```

**Visual (row direction, tall container):**
```
flex-start:   [1][2][3]
              
              
flex-end:     
              
              [1][2][3]

center:       
              [1][2][3]
              

stretch:      [1][2][3]  ← items fill full height
              [1][2][3]
              [1][2][3]
```

---

### 6. `align-content` — Align MULTIPLE LINES Along Cross Axis

> ⚠️ Only works when `flex-wrap: wrap` and there are multiple lines.

```css
.container {
  align-content: flex-start;    /* Lines pack to start */
  align-content: flex-end;      /* Lines pack to end */
  align-content: center;        /* Lines pack to center */
  align-content: space-between; /* Equal space between lines */
  align-content: space-around;  /* Equal space around lines */
  align-content: stretch;       /* Default: lines stretch */
}
```

---

## 🎯 ITEM PROPERTIES

### 7. `flex-grow` — How Much an Item Can Grow

```css
/* Default is 0 (no growing) */
.item {
  flex-grow: 1; /* Takes up available free space */
}

/* If item A has flex-grow: 2 and item B has flex-grow: 1,
   A gets 2x more of the free space than B */
```

**Example:**
```css
#box1 { flex-grow: 2; } /* Gets 2 parts of free space */
#box2 { flex-grow: 1; } /* Gets 1 part of free space */
/* Total: 3 parts. box1 = 66%, box2 = 33% of free space */
```

---

### 8. `flex-shrink` — How Much an Item Can Shrink

```css
/* Default is 1 (can shrink) */
.item {
  flex-shrink: 0; /* Item will NOT shrink even if container is small */
  flex-shrink: 2; /* Shrinks 2x faster than items with flex-shrink: 1 */
}
```

---

### 9. `flex-basis` — Initial Size Before Growing/Shrinking

```css
.item {
  flex-basis: auto;  /* Default: uses item's width/height */
  flex-basis: 200px; /* Item starts at 200px before growing/shrinking */
  flex-basis: 30%;   /* Item starts at 30% of container */
  flex-basis: 0;     /* Item starts at 0, then grows based on flex-grow */
}
```

---

### 10. `flex` — Shorthand (grow + shrink + basis)

```css
/* flex: <flex-grow> <flex-shrink> <flex-basis> */
.item {
  flex: 1;        /* Shorthand for: flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 0 1 auto; /* Default value */
  flex: 2 1 200px;
}
```

> ✅ **Best Practice:** Use `flex: 1` on items for equal distribution.

---

### 11. `align-self` — Override `align-items` for a Single Item

```css
.item {
  align-self: auto;       /* Default: inherits from container's align-items */
  align-self: flex-start; /* This specific item aligns to start of cross axis */
  align-self: flex-end;   /* This item aligns to end */
  align-self: center;     /* This item aligns to center */
  align-self: stretch;    /* This item stretches */
}
```

**Example — all items centered, but one item at bottom:**
```css
.container { align-items: center; }
#special    { align-self: flex-end; } /* This one breaks the rule */
```

---

### 12. `order` — Change Visual Order Without Changing HTML

```css
/* Default is 0 for all items */
/* Lower value = appears first */
.item {
  order: -1; /* Appears before items with order: 0 */
  order: 0;  /* Default */
  order: 1;  /* Appears after items with order: 0 */
  order: 500;/* Appears very last */
}
```

**Example:**
```html
<!-- HTML order: Box1, Box2, Box3, Box4 -->
<!-- CSS: Box4 gets order: -1 -->
<!-- Visual order: [Box4] [Box1] [Box2] [Box3] -->
```

---

## 📊 Complete Properties Summary Table

| Property | Applies To | Purpose |
|---|---|---|
| `display: flex` | Container | Enables flexbox |
| `flex-direction` | Container | Main axis direction |
| `flex-wrap` | Container | Allow wrapping to new lines |
| `flex-flow` | Container | Shorthand: direction + wrap |
| `justify-content` | Container | Align items on main axis |
| `align-items` | Container | Align items on cross axis (single line) |
| `align-content` | Container | Align lines on cross axis (multi-line) |
| `flex-grow` | Item | How much item grows |
| `flex-shrink` | Item | How much item shrinks |
| `flex-basis` | Item | Initial size before grow/shrink |
| `flex` | Item | Shorthand: grow + shrink + basis |
| `align-self` | Item | Override align-items for one item |
| `order` | Item | Visual order position |

---

## 💻 Complete Working Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Demo</title>
  <style>
    /* ── CONTAINER ── */
    .container {
      display: flex;
      flex-direction: row;       /* Main axis: horizontal */
      flex-wrap: wrap;           /* Wrap to next line if needed */
      justify-content: space-between; /* Space on main axis */
      align-items: center;       /* Align on cross axis */
      align-content: flex-start; /* Align wrapped lines */
      height: 300px;
      background: #f0f0f0;
      border: 2px solid #333;
      padding: 10px;
    }

    /* ── ITEMS ── */
    .box {
      width: 80px;
      height: 80px;
      border: 2px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    #box1 {
      background: aqua;
      flex-grow: 2;        /* Gets 2x more free space */
      align-self: flex-end; /* Only this item goes to bottom */
    }

    #box2 {
      background: blue;
      color: white;
      flex-shrink: 0;      /* Never shrinks */
    }

    #box3 {
      background: orange;
      order: -1;           /* Appears first despite being 3rd in HTML */
    }

    #box4 {
      background: brown;
      color: white;
      flex-basis: 150px;   /* Starts at 150px before growing */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box" id="box1">Box 1</div>
    <div class="box" id="box2">Box 2</div>
    <div class="box" id="box3">Box 3</div>
    <div class="box" id="box4">Box 4</div>
  </div>
</body>
</html>
```

---

## ⚠️ Common Mistakes & Edge Cases

| Mistake | Why It's Wrong | Fix |
|---|---|---|
| Using `justify-content` for cross-axis | `justify-content` only works on main axis | Use `align-items` for cross-axis |
| `align-content` not working | Needs `flex-wrap: wrap` AND multiple lines | Add `flex-wrap: wrap` |
| `flex-grow` not working | Items might already fill the container | Ensure there is free space available |
| `order` changing HTML order | `order` only changes visual, not DOM | Use with caution for accessibility |
| `align-self` not working | `align-items: stretch` overrides nothing | `align-self` does override correctly — check your syntax |

---

## 🌍 Real-World Usage

| Where | How Flexbox is Used |
|---|---|
| **Navigation bars** | `justify-content: space-between` for logo + links |
| **Card grids** | `flex-wrap: wrap` + `flex: 1 1 300px` for responsive cards |
| **Centering** | `justify-content: center` + `align-items: center` |
| **Sidebar layouts** | `flex-direction: row` with sidebar `flex-shrink: 0` |
| **Button groups** | `gap` + `justify-content: flex-end` |
| **Mobile menus** | `flex-direction: column` for vertical stacks |
| **Footer columns** | `justify-content: space-between` |

---

## 🧪 Practice Problems

### Beginner
1. Center a single box both horizontally and vertically using flexbox.
2. Create a navigation bar with a logo on the left and links on the right.
3. Create 4 equal-width cards using `flex: 1`.

### Intermediate
4. Make a card layout that wraps into 2 columns on smaller screens using `flex-wrap`.
5. Create a holy grail layout: header, footer, sidebar + main content + aside.
6. Build a pricing table with 3 plans — middle plan taller using `align-self`.

### Advanced
7. Build a responsive masonry-style card grid using flexbox (no CSS Grid).
8. Recreate the Twitter/X profile layout using only flexbox.

---

## 💡 Quick Cheatsheet

```css
/* CENTER EVERYTHING */
.center { display: flex; justify-content: center; align-items: center; }

/* EQUAL COLUMNS */
.cols { display: flex; }
.col  { flex: 1; }

/* NAVBAR */
.nav { display: flex; justify-content: space-between; align-items: center; }

/* RESPONSIVE WRAP */
.grid { display: flex; flex-wrap: wrap; gap: 1rem; }
.card { flex: 1 1 250px; } /* min 250px, grows to fill */

/* SIDEBAR LAYOUT */
.layout  { display: flex; }
.sidebar { flex: 0 0 250px; } /* Fixed 250px, never grow/shrink */
.main    { flex: 1; }         /* Take all remaining space */
```

---

> **Remember:** Flexbox is **one-dimensional** (one row OR one column at a time).
> For **two-dimensional** layouts (rows AND columns simultaneously), use **CSS Grid**.
