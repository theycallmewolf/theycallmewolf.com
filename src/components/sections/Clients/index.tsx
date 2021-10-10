import { ClientsProps } from '../../../types';
import { LogoButton } from '../../elements/LogoButton';
import styles from './styles.module.scss';

export function Clients({ clients }: ClientsProps): JSX.Element {
  return (
    <section className={styles.section}>
      {clients.map(({ id, logo_svg, link, name }) => (
        <LogoButton key={id} svgLogo={logo_svg} link={link} name={name} />
      ))}
    </section>
  );
}
