import { LogoButton } from '../../elements/LogoButton';
import styles from './styles.module.scss';

type ClientData = {
  id: string;
  name: string;
  logo_svg: string;
  link: string;
};

interface ClientsProps {
  clients: ClientData[];
}

export function Clients({ clients }: ClientsProps): JSX.Element {
  return (
    <section className={styles.section}>
      {clients.map(({ id, logo_svg, link }) => (
        <LogoButton key={id} svgLogo={logo_svg} link={link} />
      ))}
    </section>
  );
}
