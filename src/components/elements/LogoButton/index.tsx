import styles from './styles.module.scss';

type LogoButton = {
  svgLogo: string;
  link: string;
};

export function LogoButton({ svgLogo, link }: LogoButton): JSX.Element {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      dangerouslySetInnerHTML={{ __html: svgLogo }}
      className={styles.button}
    />
  );
}
