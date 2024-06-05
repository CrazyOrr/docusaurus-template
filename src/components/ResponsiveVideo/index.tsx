import styles from './index.module.css';
import clsx from 'clsx';

type Props = {
  src: string;
};

export default function ResponsiveVideo({ src }: Props) {
  return (
    <div className={clsx(styles.container, 'margin-bottom--md')}>
      <iframe
        loading="lazy"
        src={src}
        title="video player"
        scrolling="no"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.responsiveIframe}
      />
    </div>
  );
}
