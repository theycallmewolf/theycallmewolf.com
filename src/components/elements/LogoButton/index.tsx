import styles from './styles.module.scss';

interface LogoButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  svgLogo: string;
  link: string;
}

export function LogoButton({ svgLogo, link, ...rest }: LogoButton): JSX.Element {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      dangerouslySetInnerHTML={{ __html: svgLogo }}
      className={styles.button}
      {...rest}
    />
  );
}
