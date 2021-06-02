import { LogoButton } from '../../elements/LogoButton';
import styles from './styles.module.scss';

type Client = {
  id: number;
  name: string;
  URL: string;
  logoSVG: string;
};

interface ClientsProps {
  clients: Client[];
}

export function Clients({ clients }: ClientsProps): JSX.Element {
  return (
    <section className={styles.section}>
      {clients.map((client) => (
        <LogoButton key={client.id} svgLogo={client.logoSVG} url={client.URL} />
      ))}
    </section>
  );
}
