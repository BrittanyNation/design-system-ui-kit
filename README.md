# Slate & Teal Design System — UI Kit

A small design system and style guide presented as a single-page static site: design tokens, a color and type scale, a spacing system, and a documented set of core components with their interactive states.

**Live demo:** https://brittanynation.github.io/design-system-ui-kit/

## Roles this supports

Built to support applications for **UI Designer**, **Front-End Designer**, and **Web Designer** roles — work that sits between visual design and front-end implementation.

## What it demonstrates

- **Design tokens** — colors, spacing, radii, shadows, and type sizes defined once as CSS custom properties and reused everywhere, the same approach as token-based systems in design tools
- **Component consistency** — buttons, cards, form elements, badges, and alerts that share one set of values and behaviors across the page
- **States, documented** — default, hover, focus-visible, disabled, and error states shown explicitly, not left implied
- **Accessibility-minded choices** — contrast-safe slate/teal pairings, visible focus outlines, text-paired status colors (never color alone), visible labels, `aria` labeling, and a skip link
- **Responsive, mobile-first layout** — grids that step from two columns to five, and cards that stack on small screens
- **Restraint** — semantic HTML, one stylesheet, a few lines of vanilla JavaScript (click a swatch to copy its hex), no frameworks and no external images; all visuals are CSS-only

## Contents

| Section | What it covers |
| --- | --- |
| Color palette | Slate scale (50–900) and teal accent family (50–900), each swatch named with its hex code |
| Typography | H1–H6 specimens, body copy, and captions with sizes |
| Spacing scale | 4px-based scale from 4px to 64px, visualized as bars |
| Buttons | Primary, secondary, outline, hover-state demo, and disabled |
| Cards | Basic card, card with image placeholder area, stat card |
| Form elements | Text input, input with error state and message, select, checkbox, radio, toggle, textarea |
| Badges & alerts | Success, info, warning, and error variants |

## Workflow note

My design workflow runs in **Sketch and Webflow**, where I build component libraries and style guides visually. This demo is hand-built in HTML/CSS to show the same system thinking — tokens, components, and states — expressed directly in code.

## Files

- `index.html` — the style guide page (semantic HTML)
- `styles.css` — the design tokens and component classes
- `app.js` — swatch click-to-copy (vanilla JS, no dependencies)

## Note

This is an original portfolio concept created by Brittany Nation. It is not affiliated with any company, product, or existing design system.
