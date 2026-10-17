export const garmentsData = [
  {
    id: 'garment-1',
    name: 'Illustrated Ocean Starfish Tank',
    category: 'Tops',
    image: '/assets/portfolio/garment_ocean_star_tank.webp',
    season: '2025SS',
    code: 'CNM-SS25-TOP-01',
    composition: '100% Organic Pima Cotton Single Jersey',
    details: 'Custom hand-drawn marine botanical and celestial starfish motifs with watercolor gradients. Relaxed crew neckline with bound armholes.',
    color: 'Ivory / Multi Marine',
    silhouette: 'Sleeveless relaxed drape'
  },
  {
    id: 'garment-2',
    name: 'Tiered Denim Ruffle Mini Skirt',
    category: 'Skirts & Bottoms',
    image: '/assets/portfolio/garment_denim_ruffle_skirt.webp',
    season: '2025SS',
    code: 'CNM-SS25-SKT-02',
    composition: '12.5oz Japanese Selvedge Cotton Denim',
    details: 'Vintage enzyme washed indigo finish with double-stitch darting, contrast raw-edge pleated ruffle hem, and antiqued brass hardware.',
    color: 'Washed Deep Indigo',
    silhouette: 'Mid-rise A-line with tiered frill'
  },
  {
    id: 'garment-3',
    name: 'Striped Knit Star Halterneck',
    category: 'Knitwear',
    image: '/assets/portfolio/garment_striped_halter.webp',
    season: '2025SS',
    code: 'CNM-SS25-KNT-03',
    composition: 'Cotton-Linen Fine Gauge Knit Blend',
    details: 'Hand-crocheted multicolor contrast stripe pattern with embroidered white felt starfish patches and braided tie cords with tassels.',
    color: 'Multi Earth / Fuchsia / Olive',
    silhouette: 'Open-back halterneck crop'
  },
  {
    id: 'garment-4',
    name: 'Jellyfish Buckle Hardware Tank',
    category: 'Tops',
    image: '/assets/portfolio/garment_jellyfish_tank.webp',
    season: '2025SS',
    code: 'CNM-SS25-TOP-04',
    composition: '95% Compact Rib Cotton, 5% Elastane',
    details: 'Silver rhinestone jellyfish centerpiece illustration flanked by dual adjustable roller buckle strap hardware at shoulders.',
    color: 'Chalk White',
    silhouette: 'Fitted scoop neckline tank'
  },
  {
    id: 'garment-5',
    name: 'Botanical Color-Blocked Camisole',
    category: 'Tops',
    image: '/assets/portfolio/garment_patterned_camisole.webp',
    season: '2025SS',
    code: 'CNM-SS25-TOP-05',
    composition: 'Silk-Cotton Voile with Micro Ribbing',
    details: 'Tiered horizontal colorway featuring Scandinavian floral woodblock prints, sky blue panels, and delicate spaghetti straps.',
    color: 'Cerulean / Sage / Earth Black',
    silhouette: 'Straight square neck cami'
  }
];

/**
 * Lookbook Duo Stage — the two large hero cards.
 * Kept separate from `portfolioLooks` on purpose: the archive grid below still
 * renders the original looks, so swapping these two must not touch it.
 * Credits are omitted rather than invented; Lightbox hides the block when absent.
 */
export const lookbookStageLooks = [
  {
    id: 'stage-1',
    title: 'Look 01 — Red Studio Set',
    campaign: 'Studio Set',
    image: '/assets/portfolio/lookbook_stage_red_set.webp',
    fullImage: '/assets/portfolio/lookbook_stage_red_set.webp',
    category: 'Lookbook',
    description: 'Seated studio portrait against a solid red backdrop, with a wooden cabinet and record player to the left and a vintage case to the right. Black graphic tee, loose sand-toned trousers, ribbed green socks and dark green sneakers, worn with sunglasses throughout.'
  },
  {
    id: 'stage-2',
    title: 'Look 02 — Yellow Doodle Set',
    campaign: 'Studio Set',
    image: '/assets/portfolio/lookbook_stage_yellow_doodle.webp',
    fullImage: '/assets/portfolio/lookbook_stage_yellow_doodle.webp',
    category: 'Lookbook',
    description: 'Full-length standing portrait against a solid yellow backdrop, framed by illustrated poppy, trailing vine, bees, rabbits and mushrooms. Grey graphic tee, black shorts, ribbed green socks and dark green sneakers, worn with sunglasses throughout.'
  }
];

/**
 * Brand collaboration product looks — the two-piece pairing that sits under the
 * Studio Set on the Brand Collaborations page. Replaces the former capsule
 * garment flatlays.
 *
 * "GOZEAL" is read off the logo printed on both product flatlays, and the
 * festival pairing from the film's own end card. The film is a standalone brand
 * piece, not a per-product clip - only the black tee appears in it - so it sits
 * centred under the pair rather than inside one product card.
 */
export const brandProducts = [
  {
    id: 'brand-01',
    name: 'Black Tee',
    image: '/assets/brand/black-tee.webp'
  },
  {
    id: 'brand-02',
    name: 'Grey Tee',
    image: '/assets/brand/grey-tee.webp'
  }
];

export const brandCampaign = {
  thumbnail: '/assets/brand/gozeal-campaign.webp',
  instagramUrl: 'https://www.instagram.com/reel/DVtT6o2gYE2/',
  label: 'GOZEAL × BANTEN CREATIVE FEST.'
  // The film at public/assets/brand/campaign-film.mp4 is kept on disk but is no
  // longer played on the page - the Reel below is the live destination.
};

export const brandCollectionLabel = 'GOZEAL';

/**
 * Complete Archive → Collaborated Works.
 * Deliberately a separate export from `portfolioLooks`: that array still backs
 * the Lookbook Duo archive lookups and the global search, so it must not be
 * edited to swap this grid out. Only this section reads `collaboratedWorks`.
 *
 * Titles describe what is visible in each frame. No campaign, credit or client
 * is claimed, because none is verifiable from the photographs themselves.
 */
export const collaboratedWorks = [
  { id: 'work-01', title: 'Group Portrait 01', category: 'Selected', image: '/assets/collaborated-works/work_01.webp' },
  { id: 'work-02', title: 'Group Portrait 02', category: 'Selected', image: '/assets/collaborated-works/work_02.webp' },
  { id: 'work-03', title: 'Group Portrait 03', category: 'Selected', image: '/assets/collaborated-works/work_03.webp' },
  { id: 'work-04', title: 'Group Portrait 04', category: 'Selected', image: '/assets/collaborated-works/work_04.webp' },
  { id: 'work-05', title: 'Group Portrait 05', category: 'Selected', image: '/assets/collaborated-works/work_05.webp' }
];

export const portfolioLooks = [
  {
    id: 'look-1',
    title: 'Look 01 — White Balloon Silhouette',
    campaign: '2025SS FANTASY ABOUT THE OCEAN',
    image: '/assets/portfolio/look_white_balloon_front.webp',
    fullImage: '/assets/portfolio/look_white_balloon_front.webp',
    category: 'Lookbook',
    description: 'Front-facing stance showcasing the hand-illustrated celestial starfish top paired with the exaggerated parachute bubble skirt and studded leather belt.',
    pieces: ['Illustrated Ocean Starfish Tank', 'Taffeta Balloon Bubble Skirt', 'Embossed Leather Eyelet Belt', 'Glossy Mary Jane Buckle Shoes'],
    credits: {
      photographer: 'Min-Woo Park',
      stylist: 'Chloe Rim',
      artDirection: 'Studio CONENM'
    }
  },
  {
    id: 'look-2',
    title: 'Look 02 — Denim Ruffle Profile',
    campaign: '2025SS FANTASY ABOUT THE OCEAN',
    image: '/assets/portfolio/look_denim_ruffle_side.webp',
    fullImage: '/assets/portfolio/look_denim_ruffle_side.webp',
    category: 'Lookbook',
    description: 'Dynamic profile perspective in motion, highlighting the tiered denim ruffle skirt, crisp white athletic crew socks, and patent leather mary janes.',
    pieces: ['Illustrated Ocean Starfish Tank', 'Tiered Denim Ruffle Mini Skirt', 'Ribbed Cotton Crew Socks', 'Patent Leather Buckle Shoes'],
    credits: {
      photographer: 'Min-Woo Park',
      stylist: 'Chloe Rim',
      artDirection: 'Studio CONENM'
    }
  },
  {
    id: 'look-3',
    title: 'Editorial Lookbook Duo — Full Spread',
    campaign: '2025SS FANTASY ABOUT THE OCEAN',
    image: '/assets/portfolio/editorial_lookbook_duo.webp',
    fullImage: '/assets/halaman_the_portofolio.webp',
    category: 'Editorial',
    description: 'Two complementary silhouettes captured side-by-side in high-key studio light, embodying the youthful subversion of luxury lookbooks.',
    pieces: ['Full Capsule Collection SS25', 'Custom Accessories & Eyewear'],
    credits: {
      photographer: 'Min-Woo Park',
      stylist: 'Chloe Rim',
      artDirection: 'Studio CONENM'
    }
  },
  {
    id: 'look-4',
    title: 'Denim Lounge Editorial — Casual Muse',
    campaign: 'PORTFOLIO DEBUT CAMPAIGN',
    image: '/assets/home.webp',
    fullImage: '/assets/home.webp',
    category: 'Campaign',
    description: 'Signature Y2K denim set featuring oversized distressed denim beanbag seating, tailored pinstripe sleeveless shirt, and tortoiseshell acetate optical frames.',
    pieces: ['Pinstripe Cotton Sleeveless Blouse', 'Tailored Black Mini Skort', 'Tortoiseshell Optical Glasses', 'Retro Suede Blue Runners'],
    credits: {
      photographer: 'Jin-Kyu Lee',
      stylist: 'Hana Sato',
      artDirection: 'CONENM Studio'
    }
  },
  {
    id: 'look-5',
    title: 'Analog Telephone Portraiture',
    campaign: 'ABOUT THE MODEL EDITORIAL',
    image: '/assets/about/model_telephone_hero.webp',
    fullImage: '/assets/about/model_telephone_hero.webp',
    category: 'Editorial',
    description: 'Relaxed studio composition featuring vintage rotary telephone handset, striped ribbed knit crop sweater, silver chain waist accessory, and fur-trimmed heels.',
    pieces: ['Multi-Stripe Ribbed Cropped Cardigan', 'High-Waisted Mini Skirt', 'Dangling Silver Chain Belt', 'Feathered Strappy Mule Heels'],
    credits: {
      photographer: 'Sora Kang',
      stylist: 'CONENM Collective',
      artDirection: 'Creative Bureau'
    }
  },
  {
    id: 'look-6',
    title: '35mm Filmstrip Contact Sheet',
    campaign: 'BEHIND THE SCENES & INTIMATE MOMENTS',
    image: '/assets/about/filmstrip_vertical.png',
    fullImage: '/assets/about/filmstrip_vertical.png',
    category: 'Polaroids',
    description: 'Triple-frame black and white analog filmstrip capturing spontaneous expressions, gaze shifts, and unguarded beauty.',
    pieces: ['35mm Kodak Tri-X 400 Film', 'Raw Unretouched Studio Lighting'],
    credits: {
      photographer: 'Self-Directed / 35mm Archive',
      stylist: 'Personal Wardrobe',
      artDirection: 'Archive Diary'
    }
  }
];