/**
 * Astur Climbing — Product Catalog
 * Single source of truth for all product data.
 * Drives: shop grid, related products, and individual product pages.
 *
 * Per-product fields:
 *   filterTags   {string[]}  Categories for shop filtering
 *   badge        {string}    Optional: 'new' | 'popular' | 'save'
 *   visible      {boolean}   false = omit from shop grid (default: true)
 *   description  {string[]}  Paragraphs for the product page overview
 *   features     {object[]}  { title, text } — Key Features list
 *   specs        {object[]}  { label, value } — Technical Specifications
 *   gallery      {object[]}  { src, alt } — up to 10 images
 *   relatedSkus  {string[]}  2–4 SKUs shown in "You Might Also Like"
 */

const ASTUR_PRODUCTS = {
  'LC-D2010': {
    name: 'Classic Duo',
    tagline: 'Double-sided hardwood lifting edge — 20mm & 10mm',
    url: '/shop/products/classic-duo.html',
    image: '/assets/images/products/Classic/Classic2010/Square/actionInclineSquare.webp',
    price: '30',
    buyUrl: 'https://square.link/u/cxH5LWO2',
    category: 'Lifting Block — Classic',
    filterTags: ['lifting-blocks', 'classic'],
    description: [
      'The Classic Duo is a double-sided hardwood lifting edge offering two of the most commonly trained depths in a single block. With 20mm on one face and 10mm on the other, it covers the full range from open-hand strength work to precise crimp training.',
      'Machined from solid hardwood and finished to a smooth, consistent surface, the Classic Duo delivers the tactile feedback climbers expect from wood — natural texture, reliable friction, and a feel that evolves with use.',
    ],
    features: [
      { title: 'Two depths in one', text: '20mm & 10mm edges on a single block' },
      { title: 'Solid hardwood', text: 'Natural wood contact surface for consistent grip' },
      { title: 'Clean geometry', text: 'Flat, square edges for repeatable loading' },
      { title: 'SKU', text: 'LC-D2010' },
    ],
    specs: [
      { label: 'SKU', value: 'LC-D2010' },
      { label: 'Edge Depths', value: '20mm & 10mm' },
      { label: 'Material', value: 'Solid Hardwood' },
      { label: 'Category', value: 'Lifting Block — Classic Series' },
    ],
    gallery: [
      { src: '/assets/images/products/Classic/Classic2010/Classic2010-Main.webp', alt: 'Classic Duo main view' },
      { src: '/assets/images/products/Classic/Classic2010/Square/actionInclineSquare.webp', alt: 'Classic Duo view 1' },
      { src: '/assets/images/products/Classic/Classic2010/Square/2010-2-square.webp', alt: 'Classic Duo view 2' },
      { src: '/assets/images/products/Classic/Classic2010/Square/2010-1-square.webp', alt: 'Classic Duo view 3' },
      { src: '/assets/images/products/Classic/Classic2010/Square/2010-3-square.webp', alt: 'Classic Duo view 4' },
      { src: '/assets/images/products/Classic/Classic2010/Square/2010-4-square.webp', alt: 'Classic Duo view 5' },
      { src: '/assets/images/products/Classic/Classic2010/Square/2010-5-square.webp', alt: 'Classic Duo in use' },
    ],
    relatedSkus: ['LE-VDE', 'LF-BLK', 'FB-NMC', 'AC-SPL'],
  },

  'LC-H20': {
    name: 'Classic Hybrid',
    tagline: '20mm wood + 3DP texture edge for high friction training',
    url: '/shop/products/classic-hybrid.html',
    image: '/assets/images/products/ergo-edges-compact-placeholder.jpg',
    price: '30',
    buyUrl: '',
    category: 'Lifting Block — Classic',
    filterTags: ['lifting-blocks', 'classic'],
    visible: false,
    description: [
      'The Classic Hybrid pairs a 20mm straight hardwood edge with a 20mm 3D-printed textured face. The textured side is designed for high-friction training — the surface adds resistance that challenges skin contact and grip engagement in ways a smooth edge cannot.',
      'This makes the Classic Hybrid a versatile two-in-one block for climbers who want to train both smooth open-hand positions and the more demanding friction-dependent grip required on slopers and textured rock.',
    ],
    features: [
      { title: 'Wood face', text: '20mm straight hardwood edge' },
      { title: '3DP textured face', text: 'High-friction surface for sloper training' },
      { title: 'Two training modes', text: 'Smooth and friction in one block' },
      { title: 'SKU', text: 'LC-H20' },
    ],
    specs: [
      { label: 'SKU', value: 'LC-H20' },
      { label: 'Edge A', value: '20mm Straight — Hardwood' },
      { label: 'Edge B', value: '20mm Textured — 3D Printed' },
      { label: 'Category', value: 'Lifting Block — Classic Series' },
    ],
    gallery: [
      { src: '/assets/images/products/ergo-edges-compact-placeholder.jpg', alt: 'Classic Hybrid' },
      { src: '/assets/images/products/ergo-edges-compact-placeholder.jpg', alt: 'Classic Hybrid detail' },
      { src: '/assets/images/products/ergo-edges-compact-placeholder.jpg', alt: 'Classic Hybrid in use' },
    ],
    relatedSkus: ['LC-D2010', 'LE-VDE', 'FB-NMC', 'AC-SPL'],
  },

  'LE-VDE': {
    name: 'Ergo VDE',
    tagline: '20mm straight wood + 20mm variable depth 3DP edge',
    url: '/shop/products/ergo-vde.html',
    image: '/assets/images/products/Ergo/VDE20/2020-1-square.webp',
    price: '30',
    buyUrl: 'https://square.link/u/4VcnAAwH',
    category: 'Lifting Block — Ergo',
    filterTags: ['lifting-blocks', 'ergo'],
    description: [
      'The Ergo VDE combines a classic 20mm straight wood edge with a 20mm variable depth 3D-printed edge on the opposite face. The VDE (Variable Depth Edge) uses a sculpted surface that transitions across the width of the block, allowing you to train different finger positions with a single edge.',
      'The wood side gives you the natural feel and warmth of hardwood for open-hand training, while the 3DP side offers a progressive texture that challenges grip precision and adapts to your training focus. One block, two entirely different training stimuli.',
    ],
    features: [
      { title: 'Variable Depth Edge', text: '3DP surface that transitions across the block width' },
      { title: 'Hardwood face', text: '20mm straight wood edge for open-hand training' },
      { title: 'Dual training stimulus', text: 'Two distinct surfaces in one block' },
      { title: 'SKU', text: 'LE-VDE' },
    ],
    specs: [
      { label: 'SKU', value: 'LE-VDE' },
      { label: 'Edge A', value: '20mm Straight — Hardwood' },
      { label: 'Edge B', value: '20mm Variable Depth — 3D Printed' },
      { label: 'Category', value: 'Lifting Block — Ergo Series' },
    ],
    gallery: [
      { src: '/assets/images/products/Ergo/VDE20/2020-1-square.webp', alt: 'Ergo VDE view 1' },
      { src: '/assets/images/products/Ergo/VDE20/2020-2-square.webp', alt: 'Ergo VDE view 2' },
      { src: '/assets/images/products/Ergo/VDE20/2020-3-square.webp', alt: 'Ergo VDE view 3' },
      { src: '/assets/images/products/Ergo/VDE20/2020-4-square.webp', alt: 'Ergo VDE view 4' },
      { src: '/assets/images/products/Ergo/VDE20/2020-5-square.webp', alt: 'Ergo VDE view 5' },
      { src: '/assets/images/products/Ergo/VDE20/Crag1Square.webp', alt: 'Ergo VDE at the crag' },
    ],
    relatedSkus: ['LE-S20', 'LE-O20', 'LC-D2010', 'AC-SPL'],
  },

  'LE-S20': {
    name: 'Ergo Step',
    tagline: '20mm stepped hardwood edge for progressive loading',
    url: '/shop/products/ergo-step.html',
    image: '/assets/images/products/Ergo/Stepped/7OK4902_square.webp',
    price: '40',
    buyUrl: 'https://square.link/u/CbOyiWRU',
    category: 'Lifting Block — Ergo',
    filterTags: ['lifting-blocks', 'ergo'],
    description: [
      'The Ergo Step features a 20mm stepped hardwood edge designed for progressive loading. The stepped geometry shifts the contact point relative to the finger position, changing the mechanical advantage and making a given load feel harder or easier depending on placement.',
      'This makes it ideal for structured progressive overload — as your fingers adapt, you adjust position rather than weight, introducing new stimulus without changing the setup. Machined from solid hardwood for a familiar, consistent contact surface.',
    ],
    features: [
      { title: 'Stepped geometry', text: 'Adjusts mechanical load by finger position' },
      { title: 'Solid hardwood', text: 'Natural wood contact surface' },
      { title: 'Progressive loading', text: 'Built-in overload mechanism' },
      { title: 'SKU', text: 'LE-S20' },
    ],
    specs: [
      { label: 'SKU', value: 'LE-S20' },
      { label: 'Edge Depth', value: '20mm Stepped' },
      { label: 'Material', value: 'Solid Hardwood' },
      { label: 'Category', value: 'Lifting Block — Ergo Series' },
    ],
    gallery: [
      { src: '/assets/images/products/Ergo/Stepped/7OK4902_square.webp', alt: 'Ergo Step view 1' },
      { src: '/assets/images/products/Ergo/Stepped/7OK4903_square.webp', alt: 'Ergo Step view 2' },
      { src: '/assets/images/products/Ergo/Stepped/7OK4905_square.webp', alt: 'Ergo Step view 3' },
    ],
    relatedSkus: ['LE-VDE', 'LE-O20', 'LC-D2010', 'AC-SPL'],
  },

  'LE-O20': {
    name: 'Ergo Offset',
    tagline: '20mm stepped + offset hardwood edge for technical training',
    url: '/shop/products/ergo-offset.html',
    image: '/assets/images/products/Ergo/Offset/Black/7OK4884_square.webp',
    price: '40',
    buyUrl: 'https://square.link/u/EVqhd3uu',
    category: 'Lifting Block — Ergo',
    filterTags: ['lifting-blocks', 'ergo'],
    description: [
      'The Ergo Offset takes the stepped geometry of the Ergo Step and adds a lateral offset, creating a more demanding and technically varied training surface. The offset shifts the load axis, replicating the asymmetric hand positions common on real rock and competition walls.',
      'Available in black and white hardwood finishes. The Ergo Offset is for climbers looking to introduce technical specificity into their finger training — developing the kind of positional strength that translates directly to climbing movement.',
    ],
    features: [
      { title: 'Stepped + Offset geometry', text: 'Asymmetric loading for technical training' },
      { title: 'Available in two finishes', text: 'Black and white hardwood' },
      { title: 'Specificity-focused', text: 'Replicates real climbing hand positions' },
      { title: 'SKU', text: 'LE-O20' },
    ],
    specs: [
      { label: 'SKU', value: 'LE-O20' },
      { label: 'Edge Depth', value: '20mm Stepped + Offset' },
      { label: 'Material', value: 'Solid Hardwood (Black / White)' },
      { label: 'Category', value: 'Lifting Block — Ergo Series' },
    ],
    gallery: [
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4882_square.webp', alt: 'Ergo Offset black view 1' },
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4884_square.webp', alt: 'Ergo Offset black view 3' },
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4886_square.webp', alt: 'Ergo Offset black view 5' },
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4888_square.webp', alt: 'Ergo Offset black view 6' },
      { src: '/assets/images/products/Ergo/Offset/White/ergoOffsetWhiteSquare1.webp', alt: 'Ergo Offset white view 1' },
      { src: '/assets/images/products/Ergo/Offset/White/ergoOffsetWhiteSquare2.webp', alt: 'Ergo Offset white view 2' },
      { src: '/assets/images/products/Ergo/Offset/White/NoBack/ErgoOffsetWhite-001.webp', alt: 'Ergo Offset white detail' },
    ],
    relatedSkus: ['LE-S20', 'LE-VDE', 'LF-BLK', 'AC-SPL'],
  },

  'LF-BLK': {
    name: 'Forge Block',
    tagline: 'Metal backplate + hybrid edge system — modular',
    url: '/shop/products/forge-block.html',
    image: '/assets/images/products/Forge/ActionWhite-square.webp',
    price: '40',
    buyUrl: 'https://square.link/u/QdwRAsri',
    category: 'Lifting Block — Forge',
    filterTags: ['lifting-blocks', 'forge'],
    description: [
      'The Forge Block is built around a precision-machined metal backplate that serves as the structural core of the modular Forge system. The hybrid edge combines metal rigidity with a tactile contact surface, giving a feel distinct from both pure wood and standard plastic holds.',
      'As part of the modular Forge system, individual blocks can be swapped, reconfigured, and paired with the Nomad Forge fingerboard. Available in black and white. Built to last, with zero flex under load.',
    ],
    features: [
      { title: 'Metal backplate', text: 'Rigid structural core, zero flex under load' },
      { title: 'Hybrid edge', text: 'Combined metal + tactile contact surface' },
      { title: 'Modular', text: 'Compatible with the Nomad Forge fingerboard system' },
      { title: 'SKU', text: 'LF-BLK' },
    ],
    specs: [
      { label: 'SKU', value: 'LF-BLK' },
      { label: 'Backplate', value: 'Precision-machined metal' },
      { label: 'Edge Type', value: 'Hybrid (Metal + Contact Surface)' },
      { label: 'Category', value: 'Lifting Block — Forge Series' },
    ],
    gallery: [
      { src: '/assets/images/products/Forge/FrontBlack-square.webp', alt: 'Forge Block black front' },
      { src: '/assets/images/products/Forge/Black Action-square.webp', alt: 'Forge Block black in use' },
      { src: '/assets/images/products/Forge/FrontWhite-square.webp', alt: 'Forge Block white front' },
      { src: '/assets/images/products/Forge/ActionWhite-square.webp', alt: 'Forge Block white in use' },
    ],
    relatedSkus: ['LE-O20', 'LF-BLK', 'LC-D2010', 'AC-SPL'],
  },

  'FB-NMC': {
    name: 'Nomad Classic',
    tagline: '60cm carbon core fingerboard with magnetic Classic Duo blocks',
    url: '/shop/products/nomad-classic.html',
    image: '/assets/images/products/hangboards/classicNomad/001.webp',
    price: '55 - £60',
    buyUrl: 'https://square.link/u/NJUScIvd',
    category: 'Hangboard — Classic',
    filterTags: ['hangboards', 'classic'],
    badge: 'new',
    description: [
      'The Nomad Classic is a full 60cm fingerboard built around a carbon fibre core and equipped with magnetically-mounted Classic Duo lifting blocks. The magnetic attachment system allows blocks to be repositioned or swapped without tools, adapting your setup to any training protocol.',
      'The carbon core keeps weight minimal while ensuring the board stays rigid under load. Designed for athletes who want the structure of a full fingerboard with the flexibility of a modular block system.',
    ],
    features: [
      { title: '60cm carbon core', text: 'Lightweight and rigid under load' },
      { title: 'Magnetic block system', text: 'Reposition or swap blocks without tools' },
      { title: 'Includes Classic Duo blocks', text: '20mm & 10mm hardwood edges' },
      { title: 'SKU', text: 'FB-NMC' },
    ],
    specs: [
      { label: 'SKU', value: 'FB-NMC' },
      { label: 'Length', value: '60cm' },
      { label: 'Core', value: 'Carbon Fibre' },
      { label: 'Block System', value: 'Classic Duo — Magnetic Attachment' },
    ],
    gallery: [
      { src: '/assets/images/products/hangboards/classicNomad/001.webp', alt: 'Nomad Classic' },
      { src: '/assets/images/products/portable-hangboard-placeholder.jpg', alt: 'Nomad Classic detail' },
      { src: '/assets/images/products/portable-hangboard-placeholder.jpg', alt: 'Nomad Classic in use' },
    ],
    relatedSkus: ['LC-D2010', 'LF-BLK', 'LE-VDE', 'AC-SPL'],
  },

  'FB-NMF': {
    name: 'Nomad Forge',
    tagline: '60cm carbon core fingerboard with modular Forge blocks',
    url: '/shop/products/nomad-forge.html',
    image: '/assets/images/products/ergo-edges-pro-placeholder.jpg',
    price: '55 - £60',
    buyUrl: 'https://square.link/u/afO06iUc',
    category: 'Hangboard — Forge',
    filterTags: ['hangboards', 'forge'],
    visible: false,
    badge: 'new',
    description: [
      'The Nomad Forge combines the 60cm carbon fibre core of the Nomad system with the modular Forge block interface. Unlike the magnetic Classic system, the Forge uses a mechanical modular connection — blocks lock into position with precise alignment and can be reconfigured as your training evolves.',
      'The Forge block\'s metal backplate eliminates flex at the contact point, giving you a training surface that feels fundamentally different from wood — stiffer, more precise, and with a texture that changes how friction is distributed across your fingertips.',
    ],
    features: [
      { title: '60cm carbon core', text: 'Lightweight and rigid base' },
      { title: 'Modular Forge blocks', text: 'Mechanical connection, precise alignment' },
      { title: 'Metal backplate edges', text: 'Zero flex, unique friction profile' },
      { title: 'SKU', text: 'FB-NMF' },
    ],
    specs: [
      { label: 'SKU', value: 'FB-NMF' },
      { label: 'Length', value: '60cm' },
      { label: 'Core', value: 'Carbon Fibre' },
      { label: 'Block System', value: 'Forge — Modular Mechanical Attachment' },
    ],
    gallery: [
      { src: '/assets/images/products/ergo-edges-pro-placeholder.jpg', alt: 'Nomad Forge' },
      { src: '/assets/images/products/ergo-edges-pro-placeholder.jpg', alt: 'Nomad Forge detail' },
      { src: '/assets/images/products/ergo-edges-pro-placeholder.jpg', alt: 'Nomad Forge in use' },
    ],
    relatedSkus: ['LF-BLK', 'FB-NMC', 'LC-D2010', 'AC-SPL'],
  },

  'MT-THD': {
    name: 'Threshold',
    tagline: 'No-drill pull-up bar interface for doorway training',
    url: '/shop/products/threshold.html',
    image: '/assets/images/products/wall-mount-placeholder.jpg',
    price: '50',
    buyUrl: '',
    category: 'Mount System',
    filterTags: ['hangboards'],
    visible: false,
    description: [
      'The Threshold is a no-drill mounting interface that sits over a standard doorway pull-up bar. It allows you to attach and use Astur lifting blocks and fingerboards anywhere a pull-up bar can be fitted — no wall fixings, no permanent installation.',
      'Designed for climbers who rent, travel, or simply don\'t want to commit to a wall-mounted setup. The Threshold keeps your training mobile without compromising the quality or feel of your finger training.',
    ],
    features: [
      { title: 'No-drill', text: 'Sits over any standard doorway pull-up bar' },
      { title: 'Compatible', text: 'Works with Astur lifting blocks and Nomad boards' },
      { title: 'Portable', text: 'Set up and take down in seconds' },
      { title: 'SKU', text: 'MT-THD' },
    ],
    specs: [
      { label: 'SKU', value: 'MT-THD' },
      { label: 'Mount Type', value: 'No-drill doorway interface' },
      { label: 'Compatibility', value: 'Standard pull-up bars' },
      { label: 'Category', value: 'Mount System' },
    ],
    gallery: [
      { src: '/assets/images/products/wall-mount-placeholder.jpg', alt: 'Threshold' },
      { src: '/assets/images/products/wall-mount-placeholder.jpg', alt: 'Threshold detail' },
      { src: '/assets/images/products/wall-mount-placeholder.jpg', alt: 'Threshold in use' },
    ],
    relatedSkus: ['FB-NMC', 'LF-BLK', 'LC-D2010', 'AC-SPL'],
  },

  'AP-FRT': {
    name: 'Founders Ridge T-Shirt',
    tagline: 'Astur Climbing branded tee — 100% organic cotton',
    url: '/shop/products/founders-ridge-tshirt.html',
    image: '/assets/images/products/apparel&merch/tshirts/foundersRidge/BlackFrontBack.webp',
    price: '30',
    buyUrl: 'https://square.link/u/isoOzffu',
    category: 'Apparel',
    filterTags: ['apparel'],
    badge: 'new',
    description: [
      'The Founders Ridge T-Shirt is Astur Climbing\'s first foray into apparel — a clean, minimal tee built on the same philosophy as our hardware: no excess, nothing wasted. Named after the ridgeline that sparked the brand, it carries the Astur mark on organic cotton that moves with you on and off the wall.',
      'Cut for an athletic fit without restricting shoulder movement, it\'s the kind of shirt you wear to train in and forget to take off. Printed in-house with water-based inks, it gets softer with every wash.',
    ],
    features: [
      { title: '100% organic cotton', text: 'GOTS-certified ring-spun for softness and durability' },
      { title: 'Athletic fit', text: 'Cut for full shoulder and arm mobility' },
      { title: 'Water-based print', text: 'Breathable ink that doesn\'t crack or peel' },
      { title: 'SKU', text: 'AP-FRT' },
    ],
    specs: [
      { label: 'SKU', value: 'AP-FRT' },
      { label: 'Material', value: '100% Organic Cotton (GOTS-certified)' },
      { label: 'Print', value: 'Water-based ink, printed in-house' },
      { label: 'Sizes', value: 'XS — XXL' },
      { label: 'Category', value: 'Apparel' },
    ],
    gallery: [
      { src: '/assets/images/products/apparel&merch/tshirts/foundersRidge/BlackFrontBack.webp', alt: 'Founders Ridge T-Shirt — Black front & back' },
      { src: '/assets/images/products/apparel&merch/tshirts/foundersRidge/black.webp', alt: 'Founders Ridge T-Shirt — Black' },
      { src: '/assets/images/products/apparel&merch/tshirts/foundersRidge/white.webp', alt: 'Founders Ridge T-Shirt — White' },
      { src: '/assets/images/products/apparel&merch/tshirts/foundersRidge/darkGreen.webp', alt: 'Founders Ridge T-Shirt — Dark Green' },
      { src: '/assets/images/products/apparel&merch/tshirts/foundersRidge/lightGreen.webp', alt: 'Founders Ridge T-Shirt — Light Green' },
      { src: '/assets/images/products/apparel&merch/tshirts/foundersRidge/pink.webp', alt: 'Founders Ridge T-Shirt — Pink' },
    ],
    relatedSkus: ['AC-SPL', 'LC-D2010', 'LE-VDE','FB-NMC'],
  },

  'AC-SPL': {
    name: 'Pulley Splints',
    tagline: '3D printed finger support splints for pulley injury recovery',
    url: '/shop/products/pulley-splints.html',
    image: '/assets/images/products/PSS/pss-3-square.webp',
    price: '15 -£20',
    buyUrl: 'https://square.link/u/NVo32vJT',
    category: 'Accessories',
    filterTags: ['accessories'],
    badge: 'popular',
    description: [
      'Pulley Splints are precision 3D-printed finger supports designed specifically for climbers dealing with pulley injuries. The set provides structural support to the injured finger during the early stages of recovery, reducing load on the A2 or A4 pulley while maintaining basic finger function.',
      'Lightweight, reusable, and available in multiple sizes, these splints are designed to fit snugly without restricting circulation. Made from durable 3D-printed material that can be cleaned and reused across the full recovery timeline.',
    ],
    features: [
      { title: '3D printed', text: 'Precision fit, lightweight and durable' },
      { title: 'Multiple sizes', text: 'Fits a range of finger dimensions' },
      { title: 'Reusable', text: 'Cleanable and designed for extended use' },
      { title: 'SKU', text: 'AC-SPL' },
    ],
    specs: [
      { label: 'SKU', value: 'AC-SPL' },
      { label: 'Material', value: '3D Printed Polymer' },
      { label: 'Sizes', value: 'Multiple (see sizing guide)' },
      { label: 'Category', value: 'Accessories — Support & Recovery' },
    ],
    gallery: [
      { src: '/assets/images/products/PSS/pss-1-square.webp', alt: 'Pulley Splints view 1' },
      { src: '/assets/images/products/PSS/pss-2-square.webp', alt: 'Pulley Splints view 2' },
      { src: '/assets/images/products/PSS/pss-3-square.webp', alt: 'Pulley Splints view 3' },
      { src: '/assets/images/products/PSS/pss-4-square.webp', alt: 'Pulley Splints view 4' },
    ],
    relatedSkus: ['LC-D2010', 'LE-VDE', 'FB-NMC', 'LF-BLK'],
  },
};

// ─── Badge labels ────────────────────────────────────────────────────────────

const BADGE_LABELS = { new: 'New', popular: 'Popular', save: 'Sale' };

// ─── Shop Grid ───────────────────────────────────────────────────────────────

/**
 * Renders the main shop product grid into #shop-product-grid.
 * Products with visible: false are omitted entirely.
 */
function renderShopGrid() {
  const grid = document.getElementById('shop-product-grid');
  if (!grid) return;

  grid.innerHTML = Object.values(ASTUR_PRODUCTS)
    .filter(p => p.visible !== false)
    .map(p => {
      const categoryAttr = (p.filterTags || []).join(' ');
      const badge = p.badge
        ? `<div class="product-badge badge-${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>`
        : '';
      return `
        <div class="col-sm-6 col-md-4 col-lg-3 product-item" data-category="${categoryAttr}">
          <div class="product-card">
            <a href="${p.url}" class="product-image-link">
              <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy" />
                ${badge}
              </div>
            </a>
            <div class="product-info">
              <h3 class="product-title font-alt">
                <a href="${p.url}">${p.name}</a>
              </h3>
              <p class="product-description">${p.tagline}</p>
              <div class="product-price">£${p.price}</div>
              <a href="${p.url}" class="btn btn-primary btn-block btn-round">View Details</a>
            </div>
          </div>
        </div>`;
    }).join('');
}

// ─── Product Page ─────────────────────────────────────────────────────────────

/**
 * Renders a full product page into #product-root.
 * Reads data-sku from the #product-root element.
 */
function renderProductPage() {
  const root = document.getElementById('product-root');
  if (!root) return;

  const sku = root.getAttribute('data-sku');
  const p = ASTUR_PRODUCTS[sku];

  if (!p) {
    root.innerHTML = '<div class="container" style="padding-top:120px;"><p>Product not found.</p></div>';
    return;
  }

  // Update page meta
  document.title = p.name + ' | Astur Climbing';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', (p.description && p.description[0])
      ? p.description[0].substring(0, 160)
      : p.tagline);
  }

  const descHTML = (p.description || []).map((d, i) =>
    `<p style="font-size:1.25rem;line-height:1.8;margin-bottom:${i === (p.description.length - 1) ? '30' : '20'}px;">${d}</p>`
  ).join('');

  const featuresHTML = (p.features || []).map(f =>
    `<li><strong>${f.title}:</strong> ${f.text}</li>`
  ).join('');

  const specsHTML = (p.specs || []).map(s =>
    `<div class="spec-row"><span class="spec-label">${s.label}</span><span class="spec-value">${s.value}</span></div>`
  ).join('');

  root.innerHTML = `
    <section class="module" style="padding-top:80px;padding-bottom:20px;">
      <div class="container">

        <div class="row">
          <div class="col-sm-12">
            <div style="display:flex;align-items:center;margin-bottom:15px;">
              <div style="flex:1;"><a href="/shop/" style="color:var(--sage-green);">← Back to Shop</a></div>
              <div style="flex:0 0 auto;"><h1 class="font-alt" style="font-size:2.5rem;margin:0;text-transform:uppercase;">${p.name}</h1></div>
              <div style="flex:1;"></div>
            </div>
            <p style="font-size:1.125rem;color:var(--sage-green);margin-bottom:40px;text-align:center;">${p.tagline}</p>
          </div>
        </div>

        <div class="row product-gallery-row" style="margin-bottom:40px;">
          <div class="col-xs-3 col-md-3">
            <div class="gallery-thumb" id="gallery-thumb-left"><img src="" alt="" /></div>
          </div>
          <div class="col-xs-6 col-md-6">
            <div class="product-gallery-main">
              <img id="gallery-main-img" src="" alt="${p.name}" />
              <button class="gallery-nav gallery-prev" id="gallery-prev" aria-label="Previous image"><img src="/assets/images/components/prev-light.png" alt="" /></button>
              <button class="gallery-nav gallery-next" id="gallery-next" aria-label="Next image"><img src="/assets/images/components/next-light.png" alt="" /></button>
            </div>
          </div>
          <div class="col-xs-3 col-md-3">
            <div class="gallery-thumb" id="gallery-thumb-right"><img src="" alt="" /></div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-7">
            <h2 class="font-alt" style="font-size:1.75rem;margin-bottom:20px;text-transform:uppercase;">Overview</h2>
            ${descHTML}
            <h3 class="font-alt" style="font-size:1.5rem;margin-bottom:15px;text-transform:uppercase;color:var(--sage-green);">Key Features</h3>
            <ul class="work-details-list" style="margin-bottom:30px;">
              ${featuresHTML}
            </ul>
          </div>
          <div class="col-md-5">
            <div style="background:var(--sage-green-10);padding:30px;border-radius:8px;position:sticky;top:100px;">
              <div class="product-detail-price" style="margin-bottom:20px;">£${p.price}</div>
              <a href="${p.buyUrl || 'https://asturclimbing.square.site'}" class="btn btn-primary btn-lg btn-round btn-add-to-cart" target="_blank" style="width:100%;margin-bottom:20px;">Buy Now</a>
              <div style="padding:15px;background:var(--summit-white);border-radius:4px;margin-bottom:15px;">
                <p style="margin:0;font-size:0.95rem;"><i class="fas fa-truck" style="color:var(--sage-green);margin-right:10px;"></i><strong>Free UK Shipping</strong> on orders over £50</p>
              </div>
              <div style="padding:15px;background:var(--summit-white);border-radius:4px;">
                <p style="margin:0;font-size:0.95rem;"><i class="fas fa-shield-alt" style="color:var(--sage-green);margin-right:10px;"></i><strong>30-Day Guarantee</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="margin-top:30px;">
          <div class="col-md-12">
            <h2 class="font-alt" style="font-size:1.75rem;margin-bottom:20px;text-transform:uppercase;">Technical Specifications</h2>
            <div class="product-specs">${specsHTML}</div>
          </div>
        </div>

      </div>
    </section>
    <div class="container"><div id="related-products"></div></div>
  `;

  // Initialise gallery
  const galleryImages = p.gallery || [];
  let currentIndex = 0;

  function updateGallery() {
    const total = galleryImages.length;
    if (total === 0) return;
    document.getElementById('gallery-main-img').src = galleryImages[currentIndex].src;
    document.getElementById('gallery-main-img').alt = galleryImages[currentIndex].alt;
    document.querySelector('#gallery-thumb-left img').src = galleryImages[(currentIndex - 1 + total) % total].src;
    document.querySelector('#gallery-thumb-right img').src = galleryImages[(currentIndex + 1) % total].src;
  }

  document.getElementById('gallery-prev').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
  });
  document.getElementById('gallery-next').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGallery();
  });
  document.getElementById('gallery-thumb-left').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
  });
  document.getElementById('gallery-thumb-right').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGallery();
  });

  updateGallery();

  // Related products
  if (p.relatedSkus && p.relatedSkus.length) {
    renderRelatedProducts(p.relatedSkus);
  }
}

// ─── Related Products ─────────────────────────────────────────────────────────

/**
 * Renders a related products section into #related-products.
 * @param {string[]} skus - Array of product SKUs to display (2–4 recommended)
 */
function renderRelatedProducts(skus) {
  const container = document.getElementById('related-products');
  if (!container) return;

  const products = skus.map(sku => ASTUR_PRODUCTS[sku]).filter(Boolean);
  if (products.length === 0) return;

  container.innerHTML = `
    <div class="row" style="margin-top:20px;margin-bottom:20px;">
      <div class="col-sm-12">
        <h2 class="font-alt" style="font-size:1.75rem;margin-bottom:20px;text-transform:uppercase;border-top:1px solid var(--border-sage);padding-top:40px;">
          You Might Also Like
        </h2>
      </div>
    </div>
    <div class="row">
      ${products.map(p => `
        <div class="col-xs-6 col-sm-6 col-md-3" style="margin-bottom:30px;">
          <div class="product-card">
            <a href="${p.url}" class="product-image-link">
              <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy" />
              </div>
            </a>
            <div class="product-info">
              <h3 class="product-title font-alt"><a href="${p.url}">${p.name}</a></h3>
              <p class="product-description">${p.tagline}</p>
              <div class="product-price">£${p.price}</div>
              <a href="${p.url}" class="btn btn-primary btn-block btn-round">View Details</a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
