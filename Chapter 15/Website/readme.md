# Eduford University Website

A multi-page university website built with HTML and CSS as a frontend web development assignment.

---

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us |
| `course.html` | Courses |
| `blog.html` | Blog Post |
| `styles.css` | Shared Stylesheet |

---

## Concepts Covered

### Semantic HTML
Used proper semantic tags throughout all pages — `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` to give the document meaningful structure.

### Box Model
Applied `margin`, `padding`, `border`, and `box-sizing: border-box` across all sections to control spacing and layout precisely.

### Positioning
Used `position: relative` and `position: absolute` with `transform: translate(-50%, -50%)` to center the hero text box on the home page. The campus hover overlay also uses absolute positioning inside a relative parent.

### Flexbox
Used flexbox for the navbar, course cards, campus images, facilities, testimonials, and the about page two-column layout. Properties used include `display: flex`, `justify-content`, `align-items`, `flex-basis`, and `gap`.

### CSS Grid
Used `display: grid` with `grid-template-columns` in the footer social icons and the course cards section.

### Margin & Padding
Controlled spacing between all sections, cards, and text elements using margin and padding throughout the stylesheet.

### Multi-Section Layout
Each page contains multiple sections with consistent structure. The home page includes a hero, courses, campus, facilities, testimonials, and a call-to-action section.

### Responsive Design
Used `@media (max-width: 700px)` breakpoints to stack layouts on mobile, reduce font sizes, and switch the navbar to a slide-in menu.

---

## Extra Features

- **CSS Variables** — colors, gradients, and shadows defined in `:root` for easy theming
- **CSS Transitions** — smooth hover effects on nav links, course cards, campus overlay, and buttons
- **Mobile Navigation** — JavaScript-powered hamburger menu that slides in and out on small screens
- **Google Fonts** — Poppins font loaded via Google Fonts API
- **Font Awesome Icons** — used for the hamburger menu, close icon, star ratings, social media icons, and heart icon

---


## How to Run

Open `index.html` in any browser. No installation or build step needed.

---

Made by Ameer Hamza