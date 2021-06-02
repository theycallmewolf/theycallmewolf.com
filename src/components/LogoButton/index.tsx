import styles from './styles.module.scss';

type LogoButton = {
  svgLogo: string;
  url: string;
};

export function LogoButton({ svgLogo, url }: LogoButton): JSX.Element {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      dangerouslySetInnerHTML={{ __html: svgLogo }}
      className={styles.button}
    />
  );
}
