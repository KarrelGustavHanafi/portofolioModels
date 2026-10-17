/**
 * Lookbook Duo Stage — the two large hero cards.
 * Kept separate from the archive grid on purpose: swapping these two hero
 * cards must not disturb the Complete Archive list below.
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
 * Only the Collaborated Works archive belongs here. The Denim Lounge and Analog
 * Telephone looks are not brand collaborations - they are shown on Home and
 * About The Model instead, so they are deliberately absent from this list.
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