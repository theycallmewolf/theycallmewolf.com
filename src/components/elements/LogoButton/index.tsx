import styles from './logo-button.module.scss';

interface LogoButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  svgLogo: string;
  link: string;
  name: string;
}

export const LogoButton: React.FC<LogoButton> = ({ svgLogo, link, name, ...props }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    role="button"
    aria-label={`visit ${name} website`}
    dangerouslySetInnerHTML={{ __html: svgLogo }}
    className={styles.button}
    {...props}
  />
);
