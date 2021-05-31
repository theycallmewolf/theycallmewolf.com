import styles from './styles.module.scss';

type LogoButton = {
  svgLogo: string;
  url: string;
};

export const LogoButton: React.FC<LogoButton> = ({ svgLogo, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      dangerouslySetInnerHTML={{ __html: svgLogo }}
      className={styles.button}
    />
  );
};
