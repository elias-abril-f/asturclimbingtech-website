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
    url: '/shop/products/classic-duo/',
    image: '/assets/images/products/Classic/Classic2010/Square/actionInclineSquare.webp',
    price: '30',
    buyUrl: 'https://square.link/u/kTr9Dosf',
    category: 'Lifting Block — Classic',
    filterTags: ['lifting-blocks', 'classic'],
     description: [
      'Build serious finger strength wherever you climb. The Astur Classic Duo is a compact wooden hangboard trainer designed for climbers who want real performance in a pocket-sized tool. With two precisely crafted wooden edges and an integrated jug, it\'s the ideal portable fingerboard for travel training, crag warmups, and focused hang workouts.',
      'Two straight oak edges cover the full spectrum from comfortable warmup hangs to high-intensity max-hangs. The 20mm edge is ideal for open-hand strength work and extended sessions, while the 10mm edge targets precise crimp training and high-intensity loading. Each edge features a 5mm roundover, more skin-friendly than a flat edge, while actively promoting proper finger engagement for better strength development.',
      'With contact points machined from solid hardwood and finished to a smooth, consistent surface, the Classic Duo delivers the tactile feedback climbers expect from wood. Natural texture, reliable friction, and a feel that improves with use.',
      'Why the Classic Duo — Most portable hangboards sacrifice feel for size. The Classic Duo doesn\'t. Two perfectly balanced wooden edges in a body small enough to live in your chalk bag — it\'s the finger training tool you\'ll actually take everywhere.',
    ],
    features: [
      { title: 'Dual Wooden Edges, 20 mm and 10 mm', text: 'Two straight oak edges cover the full spectrum from comfortable warmup hangs to high-intensity max-hangs. Each edge features a 5 mm roundover , more skin-friendly than a flat edge, while actively discouraging passive skin-hanging and promoting proper finger engagement for better strength development.' },
      { title: 'World-Class Portability', text: 'The lightest and most compact tool in the Astur range. Fits in a chalk bag, jacket pocket, or carry-on. No other wooden hangboard comes close at this size and weight.' },
      { title: 'Integrated Jug Hold', text: 'The rounded back doubles as a full-hand jug for pull-ups, shoulder warmups, and active recovery hangs — a complete three-grip system in a single tool.' },
      { title: 'Natural Oak Surface ', text: 'Real wood provides a skin-friendly, natural-friction surface that improves with use. Consistent, predictable contact across every session.' },
    ],
    specs: [
      { label: 'SKU', value: 'LC-D2010' },
      { label: 'Edge Depths', value: '20 mm edge & 10 mm edge (5 mm roundover on each) and jug hold' },
      { label: 'Material', value: 'Solid Hardwood' },
      { label: 'Dimensions', value: '25 × 44 × 120 mm' },
      { label: 'Weight', value: '75g' },
    ],
    gallery: [
      { src: '/assets/images/products/Classic/Classic2010/Square/001.webp', alt: 'Classic Duo 001' },
      { src: '/assets/images/products/Classic/Classic2010/Square/002.webp', alt: 'Classic Duo 002' },
      { src: '/assets/images/products/Classic/Classic2010/Square/003.webp', alt: 'Classic Duo 003' },
      { src: '/assets/images/products/Classic/Classic2010/Square/004.webp', alt: 'Classic Duo 004' },

    ],
    relatedSkus: ['LE-VDE', 'LF-BLK', 'FB-NMC', 'AC-SPL'],
  },

  'LC-H20': {
    name: 'Classic Hybrid',
    tagline: '20mm wood + 3DP texture edge for high friction training',
    url: '/shop/products/classic-hybrid/',
    image: '/assets/images/products/ergo-edges-compact-placeholder.jpg',
    price: '30',
    buyUrl: '',
    category: 'Lifting Block — Classic',
    filterTags: ['lifting-blocks', 'classic'],
    visible: false,
    description: [
      'The Astur Classic Hybrid pairs a smooth natural oak edge with a precision-textured 3D-printed edge, delivering two fundamentally different grip experiences in a single pocket-sized trainer. Train on the familiar warmth of wood, then step up to the nuanced friction of engineered rock texture. Same 20mm depth. Completely different feel.',
      'The oak side delivers the warm, consistent contact climbers know and trust, ideal for warmup hangs, repeaters, and longer sessions where comfort matters. The textured side features an intricate micro-grain surface designed with enough bite to challenge contact strength, refined enough to feel intentional under load',
      'Why the Classic Hybrid: If you already own a single-surface portable edge, the Hybrid gives you something it cannot. Genuine variety in a single tool. Warm up on wood, then switch to texture to train contact strength and friction response in the same session.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Natural oak edge', text: '20mm straight hardwood face for baseline strength training' },
      { title: 'Textured 3D-printed edge', text: '20mm micro-grain surface that mimics the friction of natural rock' },
      { title: 'Two training modes', text: 'Switch between smooth wood and textured surface in the same session' },
      { title: 'Integrated jug hold', text: 'Rounded back for pull-ups, shoulder work, and active warmups' },
    ],
    specs: [
      { label: 'SKU', value: 'LC-H20' },
      { label: 'Edge A', value: '20mm Straight — Hardwood' },
      { label: 'Edge B', value: '20mm Textured — 3D Printed' },
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
    url: '/shop/products/ergo-vde/',
    image: '/assets/images/products/Ergo/VDE20/2020-1-square.webp',
    price: '30',
    buyUrl: 'https://square.link/u/4VcnAAwH',
    category: 'Lifting Block — Ergo',
    filterTags: ['lifting-blocks', 'ergo'],
    description: [
      'The Astur Ergo VDE combines a natural oak straight edge with a curved ergonomic edge in one compact, lightweight trainer. Two 20mm edges, one for precision grip training and one for joint-friendly comfort, giving you the versatility to train hard and recover well without carrying two tools.',
      'Designed for climbers who understand that sustainable training is built on smart load management, the Ergo VDE adapts to how your body feels on any given day. Push hard on the straight edge when fresh. Shift to the curved side when managing load or easing into a session.',
      'Why the Ergo VDE: Straight edges train strength. Curved edges protect joints. The Ergo VDE gives you both, so you can push when you are fresh and manage load when you are not, all with one tool in your chalk bag.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Straight oak edge', text: '20mm hardwood edge for max hangs, contact strength, and precise grip training' },
      { title: 'Curved ergonomic edge', text: '20mm gentle radius that reduces tendon and joint pressure for warmups and high-volume sessions' },
      { title: 'Integrated jug hold', text: 'Rounded back for pull-ups, mobility work, and shoulder warmups' },
      { title: 'Ultra-portable', text: '90g and fits in a chalk bag, pack, or jacket pocket' },
    ],
    specs: [
      { label: 'SKU', value: 'LE-VDE' },
      { label: 'Edge A', value: '20mm Straight — Hardwood' },
      { label: 'Edge B', value: '20mm Curved — Ergonomic' },
      { label: 'Dimensions', value: '35 x 44 x 120mm' },
      { label: 'Weight', value: '90g' },

    ],
    gallery: [
      { src: '/assets/images/products/Ergo/VDE20/2020-1-square.webp', alt: 'Ergo VDE — front view showing straight oak edge and curved ergonomic edge' },
      { src: '/assets/images/products/Ergo/VDE20/2020-2-square.webp', alt: 'Ergo VDE — top profile comparing straight and curved edge depths' },
      { src: '/assets/images/products/Ergo/VDE20/2020-3-square.webp', alt: 'Ergo VDE — close-up of 20mm curved ergonomic edge' },
      { src: '/assets/images/products/Ergo/VDE20/2020-4-square.webp', alt: 'Ergo VDE — close-up of 20mm straight oak edge' },
      { src: '/assets/images/products/Ergo/VDE20/2020-5-square.webp', alt: 'Ergo VDE — integrated jug hold on rounded back' },
      { src: '/assets/images/products/Ergo/VDE20/Crag1Square.webp', alt: 'Ergo VDE clipped to chalk bag at the crag' },
    ],
    relatedSkus: ['LE-S20', 'LE-O20', 'LC-D2010', 'AC-SPL'],
  },

  'LE-S20': {
    name: 'Ergo Step',
    tagline: '20mm stepped hardwood edge for progressive loading',
    url: '/shop/products/ergo-step/',
    image: '/assets/images/products/Ergo/Stepped/001.webp',
    price: '40',
    buyUrl: 'https://square.link/u/CbOyiWRU',
    category: 'Lifting Block — Ergo',
    filterTags: ['lifting-blocks', 'ergo'],
    description: [
      'The Astur Ergo Step is a lifting block engineered around one goal: putting every finger into a perfect half crimp at the same time. A stepped edge profile matches the natural length differences between fingers, so the index, middle, ring, and little finger all contact the wood at exactly 20mm depth simultaneously. No compromises, no finger lagging behind or reaching further than the others.',
      'Most lifting blocks treat all fingers the same. The Ergo Step treats them as what they are, four different lengths that need four different positions. The result is a cleaner, more symmetrical loading position and a training stimulus that applies equally across the whole hand, session after session.',
      'Why the Ergo Step: Half crimp is the most trainable and transferable grip position in climbing. The Ergo Step is the first lifting block designed to put every finger into it at once, correctly, every single rep.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Finger-length stepped profile', text: 'Four stepped positions matched to the natural length of each finger. Index, middle, ring, and little finger all reach 20mm depth simultaneously in a clean half crimp' },
      { title: '20mm oak contact surface', text: 'Natural oak across the full stepped edge for consistent, skin-friendly friction at every position' },
      { title: 'Symmetrical loading across the hand', text: 'Every finger loads at the same depth and the same angle. No dominant finger carrying more than its share' },
      { title: 'Available in black and white', text: 'Two colourway options with identical geometry and performance' },
    ],
    specs: [
      { label: 'SKU', value: 'LE-S20' },
      { label: 'Edge Depth', value: '20mm across all steps' },
      { label: 'Contact Surface', value: 'Natural oak' },
      { label: 'Step Profile', value: 'Matched to index, middle, ring, and little finger lengths' },
      { label: 'Available In', value: 'Black, White' },
    ],
    gallery: [
      { src: '/assets/images/products/Ergo/Stepped/001.webp', alt: 'Ergo Step — front view showing finger-length stepped oak edge profile' },
      { src: '/assets/images/products/Ergo/Stepped/002.webp', alt: 'Ergo Step — front view showing finger-length stepped oak edge profile' },
      { src: '/assets/images/products/Ergo/Stepped/003.webp', alt: 'Ergo Step — top-down view of stepped edge positions for each finger' },
      { src: '/assets/images/products/Ergo/Stepped/004.webp', alt: 'Ergo Step — side profile showing 20mm depth across all steps' },
    ],
    relatedSkus: ['LE-VDE', 'LE-O20', 'LC-D2010', 'AC-SPL'],
  },

  'LE-O20': {
    name: 'Ergo Offset',
    tagline: '20mm stepped + offset hardwood edge for technical training',
    url: '/shop/products/ergo-offset/',
    image: '/assets/images/products/Ergo/Offset/White/001.webp',
    price: '45',
    buyUrl: 'https://square.link/u/EVqhd3uu',
    category: 'Lifting Block — Ergo',
    filterTags: ['lifting-blocks', 'ergo'],
    description: [
      'The Astur Ergo Offset takes the stepped finger-length profile of the Ergo Step and adds a second dimension. Each step is not only positioned to match finger length, it is also offset in depth to follow the natural curve of a relaxed hand. The result is a 20mm edge that conforms to the shape of your hand rather than asking your hand to conform to it.',
      'Every step remains at 20mm contact depth, achieved through precise lateral offsets that mirror the arc your fingers naturally form when hanging. The middle finger sits forward, the index and ring fingers step back to their natural positions, and the little finger follows its own shorter arc. All four fingers arrive at the same depth, the same grip angle, and the same half crimp position, with no reaching, no tucking, and no tension from trying to match a geometry that was never designed for a human hand.',
      'Why the Ergo Offset: Comfort in training is not a luxury, it is a signal that the loading is correct. The Ergo Offset is built for climbers who want the most natural, repeatable half crimp position available in a lifting block, and are willing to train with the precision to match.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Anatomical depth offset profile', text: 'Steps are offset in both length and depth to follow the natural curve of the hand. Every finger reaches 20mm contact depth from its own natural position without adjustment' },
      { title: 'Perfect half crimp for all four fingers', text: 'The geometry of the Offset places each finger into half crimp simultaneously for consistent loading and more transferable strength gains' },
      { title: '20mm oak contact surface', text: 'Natural oak across the full contoured edge. Skin-friendly, warm, and reliable across every step' },
      { title: 'Available in black and white', text: 'Two colourway options with identical geometry and performance' },
    ],
    specs: [
      { label: 'SKU', value: 'LE-O20' },
      { label: 'Edge Depth', value: '20mm at every step (via anatomical offsets)' },
      { label: 'Contact Surface', value: 'Natural oak' },
      { label: 'Step Profile', value: 'Length and depth offset matched to natural hand curve' },
      { label: 'Available In', value: 'Black, White' },
    ],
    gallery: [
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4882_square.webp', alt: 'Ergo Offset black view 1' },
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4884_square.webp', alt: 'Ergo Offset black view 3' },
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4886_square.webp', alt: 'Ergo Offset black view 5' },
      { src: '/assets/images/products/Ergo/Offset/Black/7OK4888_square.webp', alt: 'Ergo Offset black view 6' },
      { src: '/assets/images/products/Ergo/Offset/Black/001.webp', alt: 'Ergo Offset black 001' },
      { src: '/assets/images/products/Ergo/Offset/Black/main.webp', alt: 'Ergo Offset black main' },
      { src: '/assets/images/products/Ergo/Offset/White/001.webp', alt: 'Ergo Offset white 001' },
      { src: '/assets/images/products/Ergo/Offset/White/ergoOffsetWhiteSquare1.webp', alt: 'Ergo Offset white view 1' },
      { src: '/assets/images/products/Ergo/Offset/White/ergoOffsetWhiteSquare2.webp', alt: 'Ergo Offset white view 2' },
    ],
    relatedSkus: ['LE-S20', 'LE-VDE', 'LF-BLK', 'AC-SPL'],
  },

  'LF-BLK': {
    name: 'Forge Block',
    tagline: 'Metal backplate + hybrid edge system — modular',
    url: '/shop/products/forge-block/',
    image: '/assets/images/products/Forge/ActionWhite-square.webp',
    price: '40',
    buyUrl: 'https://square.link/u/QdwRAsri',
    category: 'Lifting Block — Forge',
    filterTags: ['lifting-blocks', 'forge'],
   description: [
      'The Astur Forge Block is a precision-engineered modular hangboard unit built around a machined metal backplate and interchangeable wooden contact edges, giving you the rigidity and consistent feel of a fixed board in a compact, portable format. Use it as a single-hand edge, or connect two units with a carbon rod to build a full two-hand portable fingerboard.',
      'The precision-machined metal backplate eliminates the flex found in plastic and composite boards, delivering a rock-solid feel under load session after session. The 20mm edge features a 3D-printed internal structure with a real wood contact surface, combining the skin-friendly feel of wood with the dimensional accuracy of modern manufacturing. Available in multiple colours, every edge shares identical geometry and performance.',
      'Why the Forge Block: Most portable edges are fixed tools. The Forge Block is a system, one that grows with your training, adapts to your goals, and never asks you to compromise between portability and performance.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Precision-machined metal backplate', text: 'Eliminates flex for a rock-solid feel under load. Accepts the full range of Astur Forge edges via bolt-on interface' },
      { title: 'Interchangeable 20mm wooden edge', text: '3D-printed internal structure with real wood contact surface. Skin-friendly, friction-consistent, available in multiple colours' },
      { title: 'Expandable to two-hand fingerboard', text: 'Connect two Forge Blocks with a carbon fibre rod (sold separately) for symmetrical hangs and structured sessions anywhere' },
      { title: 'Upgradeable edge system', text: 'Swap in metal edges for durability or premium hardwood for a refined feel as your training evolves' },
    ],
    specs: [
      { label: 'SKU', value: 'LF-BLK' },
      { label: 'Edge Depth', value: '20mm' },
      { label: 'Contact Surface', value: 'Real wood over 3D-printed core' },
      { label: 'Backplate', value: 'Precision-machined metal' },
      { label: 'Includes', value: 'Backplate, edge, fixing hardware, decoration sets (black and white)' },
      { label: 'Optional Upgrades', value: 'Precision metal edges, premium exotic hardwood edges' },
    ],
    gallery: [
      { src: '/assets/images/products/Forge/FrontBlack-square.webp', alt: 'Forge Block black front' },
      { src: '/assets/images/products/Forge/Black Action-square.webp', alt: 'Forge Block black in use' },
      { src: '/assets/images/products/Forge/FrontWhite-square.webp', alt: 'Forge Block white front' },
      { src: '/assets/images/products/Forge/ActionWhite-square.webp', alt: 'Forge Block white in use' },
      { src: '/assets/images/products/Forge/back.webp', alt: 'Forge Block back' },
    ],
    relatedSkus: ['LE-O20', 'FB-NMC', 'LC-D2010', 'AC-SPL'],
  },

  'FB-NMC': {
    name: 'Nomad Classic',
    tagline: '60cm carbon core fingerboard with magnetic Classic Duo blocks',
    url: '/shop/products/nomad-classic/',
    image: '/assets/images/products/hangboards/classicNomad/001.webp',
    price: '55 - £60',
    buyUrl: 'https://square.link/u/NJUScIvd',
    category: 'Hangboard — Classic',
    filterTags: ['hangboards', 'classic'],
    badge: 'new',
    description: [
      'The Astur Classic Nomad joins two Classic Duo blocks to a precision carbon fibre connector, creating a complete, full-width portable fingerboard in seconds with no tools required. At just 186g for the carbon version, it may be the lightest full-size fingerboard available anywhere.',
      'Each Classic Duo block offers a distinct grip surface: a 20mm curved ergonomic edge with a smooth radius for joint-friendly hangs, warmups, and rehab training, and a 20mm natural oak edge for the classic wooden hangboard feel. Use them independently for single-hand training or connect them with the carbon rod for a full-width two-hand fingerboard. The rounded back of each unit provides an integrated jug for pull-ups and recovery hangs.',
      'Why the Classic Nomad: Traditional fingerboards are heavy, fixed, and require installation. The Classic Nomad gives you full hangboard functionality in a system light enough to travel in your carry-on. For climbers who train seriously and refuse to leave their hangboard at home.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Modular full-size design', text: 'Use edges independently or connect with the carbon rod to create a full-width fingerboard. No tools required' },
      { title: 'Ultralight performance', text: '186g (carbon connector) or 206g (aluminium). Lighter than traditional hangboards without sacrificing feel' },
      { title: 'Dual-edge system', text: '20mm curved ergonomic edge for joint-friendly training and 20mm natural oak edge for classic hangboard feel' },
      { title: 'Integrated jug hold', text: 'Rounded back of each unit for pull-ups, shoulder warmups, and recovery hangs' },
    ],
    specs: [
      { label: 'SKU', value: 'FB-NMC' },
      { label: 'Edge A', value: '20mm Curved — Ergonomic' },
      { label: 'Edge B', value: '20mm Straight — Natural Oak' },
      { label: 'Weight', value: '186g (carbon) / 206g (aluminium)' },
      { label: 'Includes', value: '2 x Classic Duo blocks, connector rod, setup cord' },
    ],
    gallery: [
      { src: '/assets/images/products/hangboards/classicNomad/001.webp', alt: 'Nomad Classic 001' },
      { src: '/assets/images/products/hangboards/classicNomad/006.webp', alt: 'Nomad Classic 006' },
      { src: '/assets/images/products/hangboards/classicNomad/002.webp', alt: 'Nomad Classic 002' },
      { src: '/assets/images/products/hangboards/classicNomad/003.webp', alt: 'Nomad Classic 003' },
      { src: '/assets/images/products/hangboards/classicNomad/004.webp', alt: 'Nomad Classic 004' },
      { src: '/assets/images/products/hangboards/classicNomad/005.webp', alt: 'Nomad Classic 005' },
      { src: '/assets/images/products/hangboards/classicNomad/007.webp', alt: 'Nomad Classic 007' },
    ],
    relatedSkus: ['LC-D2010', 'LF-BLK', 'LE-VDE', 'AC-SPL'],
  },

  'FB-NME': {
    name: 'Nomad Ergo',
    tagline: '60cm carbon core fingerboard with magnetic Ergo VDE blocks',
    url: '/shop/products/nomad-ergo/',
    image: '/assets/images/products/Ergo/VDE20/2020-1-square.webp',
    price: '55 - £60',
    buyUrl: '',
    visible: false,
    category: 'Hangboard — Ergo',
    filterTags: ['hangboards', 'ergo'],
    badge: 'new',
    description: [
      'The Astur Nomad Ergo joins two Ergo VDE blocks to a precision carbon fibre connector, creating a complete, full-width portable fingerboard in seconds with no tools required. Each Ergo VDE contributes two distinct 20mm edges — a straight oak edge and a curved ergonomic edge — giving the Nomad Ergo four total training surfaces across a full hangboard width.',
      'Straight edges train strength. Curved edges protect joints. With two Ergo VDE blocks connected side by side, the Nomad Ergo lets you push hard on the oak edges when fresh and shift to the ergonomic curve when managing load or easing into a session. Use the blocks independently for single-hand training or connect them for a symmetrical two-hand fingerboard anywhere you climb.',
      'Why the Nomad Ergo: The Classic Nomad is built for oak traditionalists. The Nomad Ergo is built for climbers who train smarter — those who want to manage load on the fly without swapping tools. Two surfaces, one system, full hangboard width, and light enough to travel in your carry-on.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Two Ergo VDE blocks included', text: 'Each block provides a 20mm straight oak edge and a 20mm curved ergonomic edge — four training surfaces across a full hangboard width' },
      { title: 'Load management built in', text: 'Switch between straight and curved edges to match how your fingers feel on any given day, without carrying extra tools' },
      { title: 'Modular full-size design', text: 'Use blocks independently for single-hand training or connect with the carbon rod for a complete two-hand fingerboard. No tools required' },
      { title: 'Integrated jug hold', text: 'Rounded back of each Ergo VDE for pull-ups, shoulder warmups, and recovery hangs' },
    ],
    specs: [
      { label: 'SKU', value: 'FB-NME' },
      { label: 'Edge A', value: '20mm Straight — Hardwood' },
      { label: 'Edge B', value: '20mm Curved — Ergonomic' },
      { label: 'Weight', value: '~225g (carbon connector) / ~255g (aluminium)' },
      { label: 'Includes', value: '2 x Ergo VDE blocks, connector rod, setup cord' },
    ],
    gallery: [
      { src: '/assets/images/products/Ergo/VDE20/2020-1-square.webp', alt: 'Nomad Ergo — front view' },
      { src: '/assets/images/products/Ergo/VDE20/2020-2-square.webp', alt: 'Nomad Ergo — detail' },
      { src: '/assets/images/products/Ergo/VDE20/2020-3-square.webp', alt: 'Nomad Ergo — in use' },
    ],
    relatedSkus: ['LE-VDE', 'FB-NMC', 'LC-D2010', 'AC-SPL'],
  },

  'FB-NMF': {
    name: 'Nomad Forge',
    tagline: '60cm carbon core fingerboard with modular Forge blocks',
    url: '/shop/products/nomad-forge/',
    image: '/assets/images/products/ergo-edges-pro-placeholder.jpg',
    price: '55 - £60',
    buyUrl: 'https://square.link/u/afO06iUc',
    category: 'Hangboard — Forge',
    filterTags: ['hangboards', 'forge'],
    visible: false,
    badge: 'new',
    description: [
      'The Astur Forge Nomad expands the Forge system into a full two-hand portable fingerboard, connected by a carbon fibre rod for a rigid, stable, zero-swing training platform that travels anywhere. With dual precision-machined metal backplates and a fully interchangeable edge system, it is the most capable portable fingerboard Astur makes.',
      'Unlike cord-connected systems that move under load, the carbon fibre rod joins the two units into a full-width fingerboard with zero swing and zero bounce, giving you the stable, symmetrical feel of a wall-mounted hangboard wherever you train. Standard 20mm wooden contact edges are included, but the platform accepts precision metal edges and premium exotic hardwood edges for climbers who want the finest contact surfaces available.',
      'Why the Forge Nomad: The Classic Nomad is the lightest portable fingerboard. The Forge Nomad is the best. Metal stiffness, interchangeable edges, carbon stability, in a format that travels. One platform. Infinite configurations. Uncompromised performance.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Dual precision-machined metal backplates', text: 'No flex. No movement. The stiffness and stability of a fixed board in a portable format' },
      { title: 'Carbon fibre connecting rod', text: 'Zero swing, zero bounce. Stable and symmetrical feel of a wall-mounted hangboard anywhere you train' },
      { title: 'Fully interchangeable edge system', text: 'Standard 20mm wooden edges included, compatible with precision metal edges and premium exotic hardwoods' },
      { title: 'Integrated jug holds', text: 'Rounded back of each unit provides a comfortable full-hand grip for pull-ups and warmup hangs' },
    ],
    specs: [
      { label: 'SKU', value: 'FB-FNM' },
      { label: 'Edge Depth', value: '20mm (wooden, included)' },
      { label: 'Backplate', value: '2 x precision-machined metal' },
      { label: 'Connector', value: 'Carbon fibre rod' },
      { label: 'Optional Upgrades', value: 'Precision metal edges, premium exotic hardwood edges' },
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
    url: '/shop/products/threshold/',
    image: '/assets/images/products/wall-mount-placeholder.jpg',
    price: '50',
    buyUrl: '',
    category: 'Mount System',
    filterTags: ['hangboards'],
    visible: false,
description: [
      'The Astur Threshold mounts directly onto your existing doorway pull-up bar, turning it into a fixed, stable fingerboard station without drilling a single hole. Two precision training blocks lock onto the bar using an engineered spacer system, eliminating the swing, instability, and frustration of hanging blocks while keeping your walls completely intact.',
      'This is the problem the Threshold was built to solve. Hanging fingerboards and suspended blocks move under load, making it impossible to train with the consistency a fixed hangboard provides. The Threshold locks to the bar and eliminates movement entirely, giving you a contact feel closer to a wall-mounted hangboard than any other no-drill solution.',
      'Why the Threshold: Two problems with home fingerboard setups, drilling and instability. The Threshold solves both at once. If you own a pull-up bar, you are one step away from a complete finger training station.',
      'Disclaimer: Natural variations in grain, colour, and texture do not affect performance or durability.',
    ],
    features: [
      { title: 'Fits any standard doorway pull-up bar', text: 'Spacer system accommodates a range of bar diameters. Secure, rattle-free fit with no tools required' },
      { title: 'Fixed and stable', text: 'Locks to the bar and eliminates movement under load. Closer to a wall-mounted hangboard than any other no-drill solution' },
      { title: 'Professional-grade wooden edges', text: 'Same quality natural wood contact surfaces as the rest of the Astur range, tested to 150kg' },
      { title: 'No drilling required', text: 'Zero permanent modification to your door frame or walls. Installs and removes in under a minute' },
    ],
    specs: [
      { label: 'SKU', value: 'FB-THR' },
      { label: 'Edge Options', value: '20mm wooden edges and jug hold per block' },
      { label: 'Includes', value: '2 x training blocks, spacer set, mounting hardware' },
      { label: 'Installation', value: 'Tool-free, no drilling required' },
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
    url: '/shop/products/founders-ridge-tshirt/',
    image: '/assets/images/products/apparel-merch/tshirts/foundersRidge/BlackFrontBack.webp',
    price: '30',
    buyUrl: 'https://square.link/u/isoOzffu',
    category: 'Apparel',
    filterTags: ['apparel'],
    badge: 'new',
  description: [
      'The Founders Ridge T-Shirt is built around the silhouette of Picu Urriellu, the defining peak of the Picos de Europa and the mountain at the heart of the Astur Climbing identity. The original Astur logo, reworked into a clean mountain graphic that stands on its own. Simple geometry. Real meaning.',
      'This is not branded merchandise. It is a piece of where Astur Climbing began, made for climbers who want to wear the brand with intention rather than just a logo.',
      'Why the Founders Ridge: Most climbing brand tees lead with the logo. This one leads with the mountain.',
      'Disclaimer: Fabric may appear slightly translucent in lighter colours or under strong lighting.',
    ],
    features: [
      { title: 'Picu Urriellu graphic', text: 'The defining peak of the Picos de Europa, reworked from the original Astur Climbing logo into a clean standalone mountain design' },
      { title: 'Premium cotton construction', text: '100% combed and ring-spun cotton. Pre-shrunk for a consistent fit' },
      { title: 'Tailored details', text: 'Side-seamed construction and shoulder-to-shoulder taping for shape retention and a cleaner silhouette' },
    ],
    specs: [
      { label: 'SKU', value: 'AP-FRT' },
      { label: 'Material', value: '100% combed and ring-spun cotton (heather colours contain polyester)' },
      { label: 'Fabric Weight', value: '4.2 oz/yd2 (142 g/m2)' },
      { label: 'Construction', value: 'Pre-shrunk, side-seamed, shoulder-to-shoulder taping' },
    ],
    gallery: [
      { src: '/assets/images/products/apparel-merch/tshirts/foundersRidge/BlackFrontBack.webp', alt: 'Founders Ridge T-Shirt — Black front & back' },
      { src: '/assets/images/products/apparel-merch/tshirts/foundersRidge/black.webp', alt: 'Founders Ridge T-Shirt — Black' },
      { src: '/assets/images/products/apparel-merch/tshirts/foundersRidge/white.webp', alt: 'Founders Ridge T-Shirt — White' },
      { src: '/assets/images/products/apparel-merch/tshirts/foundersRidge/darkGreen.webp', alt: 'Founders Ridge T-Shirt — Dark Green' },
      { src: '/assets/images/products/apparel-merch/tshirts/foundersRidge/lightGreen.webp', alt: 'Founders Ridge T-Shirt — Light Green' },
      { src: '/assets/images/products/apparel-merch/tshirts/foundersRidge/pink.webp', alt: 'Founders Ridge T-Shirt — Pink' },
    ],
    relatedSkus: ['AC-SPL', 'LC-D2010', 'LE-VDE','FB-NMC'],
  },

  'AC-SPL': {
    name: 'Pulley Splints',
    tagline: '3D printed finger support splints for pulley injury recovery',
    url: '/shop/products/pulley-splints/',
    image: '/assets/images/products/PSS/pss-3-square.webp',
    price: '15 -£20',
    buyUrl: 'https://square.link/u/NVo32vJT',
    category: 'Accessories',
    filterTags: ['accessories'],
    badge: 'popular',
    description: [
      'Astur finger pulley splints are purpose-designed for climbers managing A2 and A4 pulley injuries, the most common finger injuries in climbing. Anatomically targeted to replicate the mechanical function of the injured pulley, they provide direct tendon support without restricting circulation, nerve function, or the rest of your hand.',
      'Pulley splints work by holding the flexor tendon close to the bone, replicating the mechanical role of the damaged A2 or A4 pulley. Unlike tape or full-coverage supports, Astur splints apply targeted compression only where it is needed, leaving blood flow, nerve sensation, and finger mobility intact. Breathable, lightweight, reusable, and washable, built for long-term rehab use rather than single-session taping.',
      'Why the Pulley Splints: Most climbing finger supports either restrict too much or support too little. Astur splints are engineered specifically for pulley injuries, targeting only the damaged structure while leaving everything else free to function.',
      'Disclaimer: These splints are a training and recovery aid and do not replace professional medical advice. Consult a physiotherapist or sports medicine professional for diagnosis and treatment.',
    ],
    features: [
      { title: 'Anatomically targeted', text: 'Support applied directly at the pulley system only. No pressure on finger sides or adjacent joints' },
      { title: 'Circulation-safe design', text: 'Engineered to support without restricting blood flow or nerve function, unlike tape or wrap solutions' },
      { title: 'Breathable and lightweight', text: 'Comfortable enough to wear during climbing, training, or daily activity' },
      { title: 'Reusable and washable', text: 'Built for long-term rehab use, not single-session tape jobs' },
    ],
    specs: [
      { label: 'SKU', value: 'AC-SPL' },
      { label: 'Sizing measured by', value: 'Finger height, nail side to palm side' },
      {
        label: 'Size chart',
        value: [
          { height: '10mm', width: '15mm', circumference: '41mm' },
          { height: '11mm', width: '16mm', circumference: '44mm' },
          { height: '12mm', width: '17mm', circumference: '47.5mm' },
          { height: '13mm', width: '18mm', circumference: '50.5mm' },
          { height: '14mm', width: '19mm', circumference: '53.5mm' },
          { height: '15mm', width: '20mm', circumference: '56.5mm' },
          { height: '16mm', width: '21mm', circumference: '59.5mm' },
          { height: '17mm', width: '22mm', circumference: '62.5mm' },
          { height: '18mm', width: '23mm', circumference: '65.5mm' },
          { height: '19mm', width: '24mm', circumference: '68.5mm' },
        ],
      },
      { label: 'Standard Set', value: 'Sizes 12-19mm (8 splints)' },
      { label: 'Custom Set', value: '5 splints in chosen sizes, specify in order notes' },
    ],
    gallery: [
      { src: '/assets/images/products/PSS/pss-1-square.webp', alt: 'Astur Pulley Splints — 3D printed A2 and A4 pulley injury support for climbers' },
      { src: '/assets/images/products/PSS/pss-2-square.webp', alt: 'Pulley Splints — worn on finger showing targeted compression placement' },
      { src: '/assets/images/products/PSS/pss-3-square.webp', alt: 'Pulley Splints — side view showing lightweight breathable design' },
      { src: '/assets/images/products/PSS/pss-4-square.webp', alt: 'Pulley Splints — size range from 10mm to 19mm finger height' },
    ],
    relatedSkus: ['LC-D2010', 'LE-VDE', 'FB-NMC', 'LF-BLK'],
  },
};

// ─── Badge labels ────────────────────────────────────────────────────────────

const BADGE_LABELS = { new: 'New', popular: 'Popular', save: 'Sale' };

// ─── Shop Schema ─────────────────────────────────────────────────────────────

/**
 * Injects an ItemList JSON-LD schema into the shop page <head>.
 * Lists all visible products so Google can surface them as rich results.
 */
function renderShopSchema() {
  var BASE = 'https://asturclimbing.com';
  var items = Object.values(ASTUR_PRODUCTS)
    .filter(function (p) { return p.visible !== false; })
    .map(function (p, i) {
      return {
        '@type': 'ListItem',
        'position': i + 1,
        'url': BASE + p.url,
        'name': p.name
      };
    });

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Astur Climbing — Climbing Training Equipment',
    'description': 'Premium climbing training equipment including hardwood lifting blocks, ergo hangboards, and finger training tools.',
    'url': BASE + '/shop/',
    'itemListElement': items
  });
  document.head.appendChild(script);
}

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

  // ── Page meta ──────────────────────────────────────────────────────────────
  const BASE_URL = 'https://asturclimbing.com';
  const pageUrl  = BASE_URL + p.url;
  const imgUrl   = BASE_URL + p.image;
  const descText = (p.description && p.description[0])
    ? p.description[0].substring(0, 160)
    : p.tagline;

  document.title = p.name + ' | ' + p.category + ' | Astur Climbing';

  // Helper: set an existing <meta> or create it
  function setMeta(attr, attrVal, content) {
    var el = document.querySelector('meta[' + attr + '="' + attrVal + '"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  // Helper: set <link rel="..."> or create it
  function setLink(rel, href) {
    var el = document.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  setMeta('name', 'description', descText);
  setLink('canonical', pageUrl);

  // Open Graph
  setMeta('property', 'og:title',       p.name + ' | Astur Climbing');
  setMeta('property', 'og:description', descText);
  setMeta('property', 'og:url',         pageUrl);
  setMeta('property', 'og:type',        'product');
  setMeta('property', 'og:image',       imgUrl);
  setMeta('property', 'og:image:alt',   p.name + ' — ' + p.tagline);

  // Twitter Card
  setMeta('name', 'twitter:card',        'summary_large_image');
  setMeta('name', 'twitter:title',       p.name + ' | Astur Climbing');
  setMeta('name', 'twitter:description', descText);
  setMeta('name', 'twitter:image',       imgUrl);

  // Product + BreadcrumbList JSON-LD schema
  var schema = document.createElement('script');
  schema.type = 'application/ld+json';
  schema.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        'name': p.name,
        'sku': sku,
        'description': (p.description && p.description[0]) ? p.description[0] : p.tagline,
        'image': imgUrl,
        'brand': { '@type': 'Brand', 'name': 'Astur Climbing' },
        'offers': (function() {
          var priceStr = String(p.price);
          var parts = priceStr.replace(/£/g, '').split('-').map(function(s) { return parseFloat(s.trim()); });
          if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            return {
              '@type': 'AggregateOffer',
              'priceCurrency': 'GBP',
              'lowPrice': parts[0],
              'highPrice': parts[1],
              'availability': 'https://schema.org/InStock',
              'url': pageUrl
            };
          }
          return {
            '@type': 'Offer',
            'priceCurrency': 'GBP',
            'price': parseFloat(priceStr.replace(/£/g, '')) || priceStr,
            'availability': 'https://schema.org/InStock',
            'url': pageUrl
          };
        })()
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home',  'item': BASE_URL + '/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Shop',  'item': BASE_URL + '/shop/' },
          { '@type': 'ListItem', 'position': 3, 'name': p.name,  'item': pageUrl }
        ]
      }
    ]
  });
  document.head.appendChild(schema);

  const descHTML = (p.description || []).map((d, i) =>
    `<p style="font-size:1.5rem;line-height:1.8;margin-bottom:${i === (p.description.length - 1) ? '30' : '20'}px;">${d}</p>`
  ).join('');

  const featuresHTML = (p.features || []).map(f =>
    `<li><strong>${f.title}:</strong> ${f.text}</li>`
  ).join('');

  const specsHTML = (p.specs || []).map(s => {
    if (Array.isArray(s.value)) {
      const headers = Object.keys(s.value[0]);
      const thead = `<tr>${headers.map(h => `<th>${h.charAt(0).toUpperCase() + h.slice(1)}</th>`).join('')}</tr>`;
      const tbody = s.value.map(row =>
        `<tr>${headers.map(h => `<td>${row[h]}</td>`).join('')}</tr>`
      ).join('');
      return `<div class="spec-row spec-row--table"><span class="spec-label">${s.label}</span><span class="spec-value"><table class="size-chart-table"><thead>${thead}</thead><tbody>${tbody}</tbody></table></span></div>`;
    }
    return `<div class="spec-row"><span class="spec-label">${s.label}</span><span class="spec-value">${s.value}</span></div>`;
  }).join('');

  root.innerHTML = `
    <section class="module" style="padding-top:80px;padding-bottom:20px;">
      <div class="container">

        <div class="row">
          <div class="col-sm-12">
            <div class="product-page-header">
              <div class="product-back-link"><a href="/shop/" style="color:var(--sage-green);">← Back to Shop</a></div>
              <div class="product-page-title"><h1 class="font-alt" style="font-size:2.5rem;margin:0;text-transform:uppercase;">${p.name}</h1></div>
              <div class="product-header-spacer"></div>
            </div>
            <p style="font-size:1.5rem;color:var(--sage-green);margin-bottom:40px;text-align:center;">${p.tagline}</p>
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
              <div class="product-detail-price" style="text-align:center;margin-bottom:12px;">£${p.price}</div>
              <a href="${p.buyUrl || 'https://asturclimbing.square.site'}" class="btn btn-primary btn-lg btn-round btn-add-to-cart" target="_blank" style="width:100%;display:block;margin:0 0 20px;">Buy Now</a>
              <div style="padding:15px;background:var(--summit-white);border-radius:4px;margin-bottom:15px;">
                <p style="margin:0;font-size:1.2rem;"><i class="fas fa-truck" style="color:var(--sage-green);margin-right:10px;"></i><strong>Free UK Shipping</strong> on orders over £50</p>
              </div>
              <div style="padding:15px;background:var(--summit-white);border-radius:4px;">
                <p style="margin:0;font-size:1.2rem;"><i class="fas fa-shield-alt" style="color:var(--sage-green);margin-right:10px;"></i><strong>30-Day Guarantee</strong></p>
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
