# Astur Climbing — Shop Guide

## File Structure

```text
Website/
├── index.html                        Main landing page
├── shop/
│   ├── index.html                    Shop listing page
│   ├── product-template.html         Template for new product pages
│   └── products/                     Individual product pages
│       ├── classic-duo.html
│       ├── classic-hybrid.html
│       ├── ergo-vde.html
│       ├── ergo-step.html
│       ├── ergo-offset.html
│       ├── forge-block.html
│       ├── nomad-classic.html
│       ├── nomad-forge.html
│       ├── threshold.html
│       ├── pulley-splints.html
│       └── founders-ridge-tshirt.html
└── assets/
    ├── css/
    │   ├── style.css                 Global styles
    │   ├── shop.css                  Shop-specific styles
    │   ├── typography.css            Font definitions
    │   ├── brand-overrides.css       Brand customisations
    │   └── colors/default.css        CSS color variables
    ├── js/
    │   ├── main.js                   Global JS (navbar, scroll etc.)
    │   ├── shop.js                   Filter logic for shop listing
    │   └── products.js               Product catalog · renderShopGrid() · renderProductPage() · renderRelatedProducts()
    └── images/
        └── products/
            ├── Classic/Classic2010/  Classic Duo & Hybrid images
            ├── Ergo/VDE20/           Ergo VDE images
            ├── Ergo/Stepped/         Ergo Step images
            ├── Ergo/Offset/          Ergo Offset images (Black + White)
            ├── Forge/                Forge Block images
            ├── PSS/                  Pulley Splints images
            ├── hangboards/           Nomad hangboard images
            └── apparel&merch/        Apparel images
```

---

## Product Catalog

All product data lives in one place: `assets/js/products.js`

`products.js` exposes three render functions:

| Function | Called from | What it does |
|---|---|---|
| `renderShopGrid()` | `shop/index.html` (inline, before `shop.js`) | Populates `#shop-product-grid` with all visible product cards |
| `renderProductPage()` | Each `shop/products/*.html` (inline) | Reads `data-sku` on `#product-root`, builds the full product page HTML |
| `renderRelatedProducts(skus)` | Called internally by `renderProductPage()` | Fills `#related-products` with 2–4 related product cards |

Each product entry has two groups of fields — shop card fields (used everywhere) and page fields (used only by `renderProductPage()`):

```js
'SKU': {
  // ── Shop card fields ──────────────────────────────────────────────────────
  name: 'Product Name',
  tagline: 'Short one-line description',
  url: '/shop/products/product-page.html',
  image: '/assets/images/products/.../image.webp',  // absolute path — requires a web server
  price: '[PRICE]',
  category: 'Category Label',
  filterTags: ['parent-category', 'sub-category'],  // maps to data-category on the card
  badge: 'new',    // optional: 'new' | 'popular' | 'save'
  visible: false,  // optional: omit from shop listing (default is visible)

  // ── Product page fields ───────────────────────────────────────────────────
  description: ['Paragraph 1.', 'Paragraph 2.'],
  features: [{ title: 'Feature name', text: 'Description' }],
  specs: [{ label: 'Material', value: 'Solid Hardwood' }],
  gallery: [{ src: '/assets/images/products/.../img.webp', alt: 'Alt text' }],
  relatedSkus: ['SKU1', 'SKU2', 'SKU3'],
},
```

**To update a price, image, tagline, or badge** — edit `products.js` only. Changes propagate automatically to the shop listing and all related product sections across every product page.

**To hide a product** (e.g. not ready to sell) — add `visible: false`. The card is omitted from the shop grid entirely. Remove the field when ready to go live.

### Current Products

| SKU      | Name                    | Category               | Visible |
|----------|-------------------------|------------------------|---------|
| LC-D2010 | Classic Duo             | Lifting Block — Classic | Yes |
| LC-H20   | Classic Hybrid          | Lifting Block — Classic | No  |
| LE-VDE   | Ergo VDE                | Lifting Block — Ergo   | Yes |
| LE-S20   | Ergo Step               | Lifting Block — Ergo   | Yes |
| LE-O20   | Ergo Offset             | Lifting Block — Ergo   | Yes |
| LF-BLK   | Forge Block             | Lifting Block — Forge  | Yes |
| FB-NMC   | Nomad Classic           | Hangboard — Classic    | Yes |
| FB-NMF   | Nomad Forge             | Hangboard — Forge      | Yes |
| MT-THD   | Threshold               | Mount System           | No  |
| AP-FRT   | Founders Ridge T-Shirt  | Apparel                | Yes |
| AC-SPL   | Pulley Splints          | Accessories            | Yes |

---

## Adding a New Product

### Step 1 — Add the product to products.js

Add a new entry to `assets/js/products.js` with all product content:

```js
'YOUR-SKU': {
  name: 'Your Product Name',
  tagline: 'One-line description',
  url: '/shop/products/your-product-name.html',
  image: '/assets/images/products/YourFolder/main-image.webp',
  price: '34.99',
  category: 'Category Label',
  filterTags: ['parent-category', 'sub-category'],
  description: [
    'First paragraph of the product overview.',
    'Second paragraph with materials and design details.',
  ],
  features: [
    { title: 'Feature Name', text: 'Description of the feature and benefit' },
    { title: 'Feature Name', text: 'Description of the feature and benefit' },
  ],
  specs: [
    { label: 'SKU', value: 'YOUR-SKU' },
    { label: 'Material', value: 'e.g. Solid Hardwood' },
  ],
  gallery: [
    { src: '/assets/images/products/YourFolder/image1.webp', alt: 'Product view 1' },
    { src: '/assets/images/products/YourFolder/image2.webp', alt: 'Product view 2' },
    // ... up to 10 images
  ],
  relatedSkus: ['SKU1', 'SKU2', 'SKU3'],
},
```

The gallery shows one large centre image with one thumbnail on each side. Clicking a thumbnail or the arrows cycles through all images.

### Step 2 — Create the product page shell

Copy the template and rename it:

```text
shop/product-template.html  →  shop/products/your-product-name.html
```

The shell is ~65 lines. The only things to change:

1. Set `data-sku` on `#product-root`:

   ```html
   <div id="product-root" data-sku="YOUR-SKU"></div>
   ```

2. Update `<title>` and `<meta name="description">` in `<head>` (JS also overwrites these at runtime, but having them in the HTML is good for crawlers).

The script order in every product shell must be:

```html
<script src="../../assets/js/products.js"></script>
<script src="../../assets/js/main.js"></script>
<script>renderProductPage();</script>
```

`renderProductPage()` runs synchronously after `products.js` loads, before the browser fires any `DOMContentLoaded` or `load` events. `main.js` uses jQuery's `$(document).ready()` / `$(window).on('load')`, so the gallery elements created by `renderProductPage()` already exist when jQuery initialises.

That's it — the full page (gallery, overview, features, specs, related products) is generated automatically from `products.js`.

---

## Filter System

The shop listing uses a flat multi-select filter system defined in `assets/js/shop.js`.

### Available filters

| Button | `data-filter` | Matches products tagged with |
|---|---|---|
| All Products | `all` | Clears all active filters |
| Lifting Blocks | `lifting-blocks` | `lifting-blocks` |
| Hangboards | `hangboards` | `hangboards` |
| Classic | `classic` | `classic` (both lifting blocks and hangboards) |
| Ergo | `ergo` | `ergo` (both lifting blocks and hangboards) |
| Forge | `forge` | `forge` (both lifting blocks and hangboards) |
| Accessories | `accessories` | `accessories` |
| Apparel & Merch | `apparel` | `apparel` |

### How filtering works

- Every filter button is an independent toggle — click any combination
- Multiple active filters show the **union** of matching products (OR logic)
- **Classic**, **Ergo**, and **Forge** match across both Lifting Blocks and Hangboards
- Clicking **All Products** clears all active filters

### Linking to the shop with filters pre-applied

Append `?filter=` to the shop URL. Supports a single tag or a comma-separated list:

```text
/shop/?filter=lifting-blocks
/shop/?filter=classic
/shop/?filter=ergo,forge
/shop/?filter=lifting-blocks,hangboards
```

### filterTags

Set in `products.js` per product. The array becomes the space-separated `data-category` attribute on the generated card — each value corresponds to a filter button's `data-filter`.

```js
filterTags: ['lifting-blocks', 'classic']   // matches "Lifting Blocks" and "Classic"
filterTags: ['lifting-blocks', 'ergo']
filterTags: ['hangboards', 'forge']
filterTags: ['accessories']
filterTags: ['apparel']
```

A product with `filterTags: ['lifting-blocks', 'classic']` will appear when either **Lifting Blocks** or **Classic** is active.

### Adding a new filter

1. Add a button in `shop/index.html`:

   ```html
   <button class="filter-btn" data-filter="new-category">New Category</button>
   ```

2. Add the matching tag to `filterTags` on the relevant products in `products.js`
3. No JS changes needed

---

## Image Guidelines

**Product page gallery** — up to 10 images per product:

- Preferred format: `.webp`
- All images display square (1:1) in the gallery containers — use square crops where possible
- The centre image is larger; side thumbnails are smaller but the same aspect ratio

**Shop listing card image:**

- Aspect ratio: **1:1** (square) — use the `-square` variants in assets
- The card applies `object-fit: cover` automatically
- Image path must be absolute: `/assets/images/products/...`

**Hero banner images** (in `shop/index.html`):

- Container is locked at `320px` tall on desktop
- Use landscape/square images to avoid cropping

---

## Brand Colors

Defined as CSS variables in `assets/css/colors/default.css`:

| Variable | Hex | Use |
|---|---|---|
| `--sage-green` | `#848E78` | Buttons, prices, accents |
| `--astur-dark` | `#252323` | Dark backgrounds, text |
| `--summit-white` | `#FFFFFF` | Light backgrounds |
| `--crimson-cliff` | `#BD6B73` | Secondary accents |
| `--rose-quartz` | `#DB93B0` | Light accent |

---

## Responsive Breakpoints

| Width | Shop listing | Product hero banner |
|---|---|---|
| ≥ 992px (md) | 3 columns | Full split layout |
| 768–991px (sm) | 2 columns | Text + images side by side |
| < 768px | 1 column | Stacked (text above, images below) |
| < 480px | 1 column | Title + button in a row |

---

## Launch Checklist

- [ ] All `£[PRICE]` placeholders replaced with real prices in `products.js`
- [ ] All placeholder images replaced with real product photos
- [ ] Product descriptions written (both paragraphs + features)
- [ ] Technical specifications filled in
- [ ] Square links updated per product (not just the generic site)
- [ ] Footer year updated from 2024
- [ ] Related products reviewed for relevance
- [ ] Tested on mobile (< 768px)
- [ ] Tested on tablet (768–991px)
