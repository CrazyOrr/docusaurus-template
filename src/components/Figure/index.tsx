import clsx from 'clsx';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  source?: JSX.Element;
  isCentered?: boolean;
  className?: string;
};

export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  source,
  isCentered = true,
  className,
}: Props) {
  return (
    <figure className={clsx({ 'text--center': isCentered }, className)}>
      <img
        decoding="async"
        loading="lazy"
        src={src}
        alt={alt ?? caption}
        width={width}
        height={height}
        referrerPolicy="no-referrer"
      />
      {(caption || source) && (
        <figcaption className="text--light">
          {caption}
          {caption && source && ', '}
          {source}
        </figcaption>
      )}
    </figure>
  );
}
