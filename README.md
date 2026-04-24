![Proof HTML](https://github.com/GRAAL-Lab/graal-lab.github.io/actions/workflows/proof-html.yml/badge.svg)

# GRAAL Lab Website

A modern, responsive GitHub Pages website for the GRAAL Lab at the University of Genoa. The site showcases repositories, tools, and resources for marine robotics research, with a focus on control architectures, manipulation, and navigation.

https://graal-lab.github.io

## Features

- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Dark/Light Theme Toggle**: Built-in theme switching with local storage persistence
- **Interactive Elements**: Animated sonar visualization that responds to mouse movement
- **Modern Styling**: Clean, professional design using CSS variables and custom properties
- **Accessibility**: Semantic HTML with ARIA labels and keyboard navigation


## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/GRAAL-Lab/graal-lab.github.io.git
   cd graal-lab.github.io
   ```

2. Open the site locally:
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local server (recommended for testing):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

3. Make your changes and refresh the browser to see updates

## How to Modify the Website

### Adding/Editing Content

#### 1. Modify the Header
Edit the navigation links and branding in [index.html](index.html) within the `<header>` element:
```html
<nav class="nav" id="mobile-nav" aria-label="Primary navigation">
  <a href="https://your-url.com" target="_blank" rel="noopener noreferrer">Link Title</a>
</nav>
```

#### 2. Update Hero Section
Edit the hero section text in [index.html](index.html) (around line 44):
```html
<div class="eyebrow">Your Category</div>
<h1>Your Title</h1>
<p>Your description text here...</p>
```

#### 3. Add Repositories
Find the `<section class="section" id="repositories">` section and add new repository cards:
```html
<article class="card">
  <h3>Repository Name</h3>
  <p>Description of the repository...</p>
  <a href="https://github.com/GRAAL-Lab/repo-name" target="_blank">View on GitHub</a>
</article>
```

#### 4. Update Images
Place new images in the `img/` folder and reference them in HTML:
```html
<img src="img/your-image.png" alt="Description" />
```

### Styling and Theming

#### Color Scheme
Colors are managed with CSS custom properties in [css/styles.css](css/styles.css). Edit the `:root` variables for light mode and `body.dark-theme` for dark mode:

```css
:root {
  --bg: #f4f8fb;           /* Background color */
  --text: #0f2a33;         /* Text color */
  --accent: #2bbbd8;       /* Primary accent color */
  --accent-soft: #007f97;  /* Secondary accent */
  --accent-deep: #1f8ea3;  /* Tertiary accent */
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --radius: 24px;          /* Border radius */
}
```

#### Responsive Breakpoints
Media queries are included in the CSS. Mobile-first design means styles apply to all devices, then are overridden for larger screens:
```css
@media (max-width: 768px) {
  /* Mobile adjustments */
}
```

### JavaScript Functionality

Core features in [js/script.js](js/script.js):

1. **Current Year**: Automatically updates the year in the footer
2. **Theme Toggle**: Switch between dark/light themes with persistence
3. **Mobile Menu**: Hamburger menu for navigation
4. **Sonar Animation**: Interactive mouse-tracking animation

To add custom JavaScript:
1. Add new functions to `script.js`
2. Attach event listeners to HTML elements using their IDs or classes
3. Keep interactive code lightweight and user-friendly


## Deployment

This repository is set up for automatic GitHub Pages deployment:

1. Push changes to the `main` branch
2. GitHub automatically builds and deploys the site
3. Access your site at `https://GRAAL-Lab.github.io/`

## Customization Checklist

- [ ] Update site title and description in `<head>`
- [ ] Replace logo in `img/` folder
- [ ] Update header navigation links
- [ ] Modify hero section text and tagline
- [ ] Add your repositories to the repositories section
- [ ] Customize color scheme if desired
- [ ] Test on mobile and desktop
- [ ] Verify all links work correctly


## Troubleshooting

**Theme toggle not working**: Clear browser cache and local storage, then refresh
**Images not loading**: Check that image paths in HTML match the actual file locations
**Mobile menu not closing**: Ensure JavaScript is enabled in your browser
**Styling looks off**: Try clearing browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

