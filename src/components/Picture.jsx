/** Strip the extension so variants can be named <stem>-<width>w.<ext>. */
const stemOf = (src) => src.replace(/\.\w+$/, '');

/**
 * Reduced variants live next to the full-size file as <stem>-<width>w.webp
 * (and .jpg for the fallback), so a srcset is just the sibling filenames.
 * The full-size file stays in the list as the widest candidate.
 */
export const variantSrcSet = (src, widths = [], ext = '.webp') => {
  const stem = stemOf(src);
  return [...widths.map((w) => `${stem}-${w}w${ext} ${w}w`), `${stem}${ext}`].join(', ');
};

/**
 * WebP with a JPEG fallback. Only browsers without WebP (Safari < 14, legacy
 * Edge) ever request the .jpg, so the extra payload costs modern users nothing.
 */
export default function Picture({ src, widths, alt, ...imgProps }) {
  const hasVariants = Array.isArray(widths) && widths.length > 0;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={variantSrcSet(src, hasVariants ? widths : [])}
        sizes={imgProps.sizes}
      />
      <img
        src={stemOf(src) + '.jpg'}
        srcSet={hasVariants ? variantSrcSet(src, widths, '.jpg') : undefined}
        alt={alt}
        {...imgProps}
      />
    </picture>
  );
}