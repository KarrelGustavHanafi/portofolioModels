/**
 * 02. THE CREATIVE PORTFOLIO — single-page creative archive.
 * Every image, title, year and credit below is sourced from existing project
 * assets (portfolioData.js / collabData.js / about assets) or from the
 * editorial-series photo set. Nothing is invented — where a source carries no
 * credit, the `credit` field is omitted rather than filled in.
 * Shortcut: discipline tags are section-level taxonomy, credits only appear where
 * the project data actually contains them.
 *
 * Layout order per section follows the 12-column grid: 7 / 4 (offset) / 4 / 7 (offset).
 * Section 01 instead uses `tall` (span 4) throughout, so three cards fill a row
 * exactly and the alternating `offset` gives the editorial stagger.
 */
/**
 * 03 — Audio Visual & Editing, external content.
 *
 * Thumbnails are downloaded from each post's own og:image and stored locally, so
 * nothing is hotlinked and nothing expires. Company Content covers came through
 * cleanly. The Cafe reels only resolve to Instagram's generic placeholder for
 * anonymous clients and the TikTok pages serve no og:image at all, so those six
 * tiles keep the styled fallback until real stills are supplied.
 *
 * Declared BEFORE `creativeSections` on purpose: section 03 references it as
 * `linkGroups`, and `const` is not hoisted, so declaring it afterwards throws
 * "Cannot access 'avContentGroups' before initialization" and blanks the page.
 *
 * Adding a third TikTok post = append one more object to the TikTok `items`
 * below, then flip that group's `enabled` to true. `thumbnail: null` stays;
 * set it to '/assets/...' if a real still is supplied.
 */
export const avContentGroups = [
  {
    id: 'av-company',
    title: 'Company Content',
    platform: 'Instagram',
    items: [
      { id: 'av-co-01', title: 'Reel 01', thumbnail: '/assets/av-content/av-ig-01.webp', instagramUrl: 'https://www.instagram.com/reel/DcOTXWAI6K_/' },
      { id: 'av-co-02', title: 'Reel 02', thumbnail: '/assets/av-content/av-ig-02.webp', instagramUrl: 'https://www.instagram.com/reel/DcS3P2rI0lg/' },
      { id: 'av-co-03', title: 'Reel 03', thumbnail: '/assets/av-content/av-ig-03.webp', instagramUrl: 'https://www.instagram.com/reel/DdiKaMKIb4E/' },
      { id: 'av-co-04', title: 'Reel 04', thumbnail: '/assets/av-content/av-ig-04.webp', instagramUrl: 'https://www.instagram.com/reel/DeLy-DyoSOx/' },
      { id: 'av-co-05', title: 'Reel 05', thumbnail: '/assets/av-content/av-ig-05.webp', instagramUrl: 'https://www.instagram.com/reel/DeOf6x0KWPP/' }
    ]
  },
  {
    id: 'av-cafe',
    title: 'Cafe Content',
    platform: 'Instagram',
    // Instagram serves an identical generic placeholder for every /reels/ URL
    // to anonymous clients, so the stills are exported locally instead. Each
    // av-ca-0N thumbnail is the frame from the reel whose post code is in its
    // igexport-* filename - matched by code, never by file order.
    enabled: true,
    items: [
      { id: 'av-ca-01', title: 'Cafe Social Media Content 01', thumbnail: '/assets/av-content/av-ca-01.webp', instagramUrl: 'https://www.instagram.com/reels/C-48UPuMXXS/' },
      { id: 'av-ca-02', title: 'Cafe Social Media Content 02', thumbnail: '/assets/av-content/av-ca-02.webp', instagramUrl: 'https://www.instagram.com/reels/DGA2Va4JA3s/' },
      { id: 'av-ca-03', title: 'Cafe Social Media Content 03', thumbnail: '/assets/av-content/av-ca-03.webp', instagramUrl: 'https://www.instagram.com/reels/DAnGBd7sNqB/' },
      { id: 'av-ca-04', title: 'Cafe Social Media Content 04', thumbnail: '/assets/av-content/av-ca-04.webp', instagramUrl: 'https://www.instagram.com/reels/DFM_t2tJ2Gz/' }
    ]
  },
  {
    id: 'av-tiktok',
    title: 'TikTok Creator Content',
    platform: 'TikTok',
    // Parked for now: TikTok serves no og:image to anonymous clients, so these
    // would render as bare fallbacks. Flip to true once real stills exist.
    enabled: false,
    items: [
      { id: 'av-tt-01', title: 'Video 01', thumbnail: null, tiktokUrl: 'https://www.tiktok.com/@/video/7624720959961910546' },
      { id: 'av-tt-02', title: 'Video 02', thumbnail: null, tiktokUrl: 'https://www.tiktok.com/@/video/7626609044597296402' }
    ]
  }
];

export const creativeSections = [
  {
    number: '01',
    title: 'Talent & Performance',
    disciplines: ['Modeling', 'Acting', 'Cast', 'Talent'],
    intro: 'Studio posing, casting and campaign presence — from high-key lookbook poses to expressive portrait performance.',
    compact: true,
    items: [
      {
        id: 'cp-series-01',
        title: 'Frame 01 — Garden Path',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_01.webp',
        ratio: 'series',
        layout: 'tall',
        caption: 'Walking a stone path under flowering bougainvillea, white bag in hand.'
      },
      {
        id: 'cp-series-02',
        title: 'Frame 02 — Patio Veil',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_02.webp',
        ratio: 'series',
        layout: 'tall',
        offset: true,
        caption: 'Seated on a veranda chair, holding a lace veil above the head.'
      },
      {
        id: 'cp-series-03',
        title: 'Frame 03 — Night Rail',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_03.webp',
        ratio: 'series',
        layout: 'tall',
        caption: 'Night setting beside a white garden rail, head turned to camera.'
      },
      {
        id: 'cp-series-04',
        title: 'Frame 04 — Crouched Portrait',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_04.webp',
        ratio: 'series',
        layout: 'tall',
        offset: true,
        caption: 'Crouched by a brick window frame, holding a bare branch.'
      },
      {
        id: 'cp-series-05',
        title: 'Frame 05 — Chain Bag Pose',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_05.webp',
        ratio: 'series',
        layout: 'tall',
        caption: 'Standing against dense foliage, lifting a quilted chain bag.'
      },
      {
        id: 'cp-series-06',
        title: 'Frame 06 — Reaching for Bloom',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_06.webp',
        ratio: 'series',
        layout: 'tall',
        offset: true,
        caption: 'Reaching up toward a blossom on the garden path, looking back.'
      },
      {
        id: 'cp-series-07',
        title: 'Frame 07 — Lattice Lean',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_07.webp',
        ratio: 'series',
        layout: 'tall',
        caption: 'Leaning on a timber post at night, adjusting round frames.'
      },
      {
        id: 'cp-series-08',
        title: 'Frame 08 — Rail Stance',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_08.webp',
        ratio: 'series',
        layout: 'tall',
        offset: true,
        caption: 'Standing at the white rail after dark, one hand at the glasses.'
      },
      {
        id: 'cp-series-09',
        title: 'Frame 09 — Veranda Seated',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_09.webp',
        ratio: 'series',
        layout: 'tall',
        caption: 'Seated at a veranda table, lit by hanging plants overhead.'
      },
      {
        id: 'cp-series-10',
        title: 'Frame 10 — Lounge Veil',
        discipline: 'Modeling',
        meta: 'Series',
        image: '/assets/editorial-series/series_10.webp',
        ratio: 'series',
        layout: 'tall',
        offset: true,
        caption: 'Reclining on a cushioned veranda seat with the lace veil in hand.'
      }
    ]
  },
  {
    number: '02',
    title: 'Film & Storytelling',
    disciplines: ['Short Films', 'Narrative Work'],
    intro: 'Short-form narrative work published as a single film project.',
    // Title and thumbnail come from YouTube's own oEmbed data for this video ID.
    // Nothing about anyone's role in the production is claimed here.
    linkGroups: [
      {
        id: 'film-youtube',
        title: 'Short Film',
        platform: 'YouTube',
        items: [
          {
            id: 'yt-gift',
            title: '\u201cGift\u201d \u2014 Short Movie',
            ratio: 'wide',
            thumbnail: '/assets/av-content/av-yt-gift.webp',
            youtubeUrl: 'https://www.youtube.com/watch?v=B2OVoQYKZ_M'
          }
        ]
      }
    ],
    items: []
  },
  {
    number: '03',
    title: 'Audio Visual & Editing',
    disciplines: ['Video Editing', 'Color Grading', 'Motion Graphics', 'Sound Design'],
    intro: 'Post-production craft — frame compositing, selective colour, graphic overlays and art-directed layout.',
    linkGroups: avContentGroups,
    items: []
  }
];

/**
 * Home landing strip — three frames from section 01 (the modelling archive) used
 * to represent The Creative Portfolio on the front page. Additive only: nothing
 * in this file's `creativeSections` changes, so the archive page is unaffected.
 *
 * All three are 2:3, matching the card frame exactly, so nothing is cropped.
 * Chosen for the front page because they are the only recent assets at a size
 * that survives being rendered into a card without upscaling.
 */
export const creativeHighlights = [
  {
    id: 'home-hl-01',
    title: 'Frame 06 — Reaching for Bloom',
    image: '/assets/editorial-series/series_06.webp'
  },
  {
    id: 'home-hl-02',
    title: 'Frame 02 — Patio Veil',
    image: '/assets/editorial-series/series_02.webp'
  },
  {
    id: 'home-hl-03',
    title: 'Frame 10 — Lounge Veil',
    image: '/assets/editorial-series/series_10.webp'
  }
];