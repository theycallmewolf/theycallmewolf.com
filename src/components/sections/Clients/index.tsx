import { LogoButton } from '../../elements/LogoButton';
import styles from './styles.module.scss';

type Client = {
  id: string;
  name: string;
  link: string;
  logoSVG: string;
};

interface ClientsProps {
  clients: Client[];
}

export function Clients({ clients }: ClientsProps): JSX.Element {
  return (
    <section className={styles.section}>
      {clients.map((client) => (
        <LogoButton key={client.id} svgLogo={client.logoSVG} link={client.link} />
      ))}
    </section>
  );
}
