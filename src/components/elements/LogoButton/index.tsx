import styles from './styles.module.scss';

interface LogoButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  svgLogo: string;
  link: string;
  name: string;
}

export function LogoButton({ svgLogo, link, name, ...rest }: LogoButton): JSX.Element {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`visit ${name} website`}
      dangerouslySetInnerHTML={{ __html: svgLogo }}
      className={styles.button}
      {...rest}
    />
  );
}
