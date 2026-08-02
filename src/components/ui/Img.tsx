/**
 * Image with a WebP source and an explicit intrinsic size.
 *
 * Width/height are required so the browser can reserve space before the file
 * arrives — that's what keeps CLS near zero. `priority` marks the LCP image so
 * it is fetched eagerly and at high priority; everything else stays lazy.
 */
export function Img({
  src,
  alt,
  width,
  height,
  className,
  title,
  priority = false,
}: {
  /** Path to the raster fallback, e.g. /assets/img/hero.jpg */
  src: string
  alt: string
  width: number
  height: number
  className?: string
  title?: string
  priority?: boolean
}) {
  const webp = src.replace(/\.(jpg|png)$/i, '.webp')
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  )
}
