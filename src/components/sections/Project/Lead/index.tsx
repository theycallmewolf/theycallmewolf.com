import IArrow from 'assets/icons/IArrow';
import IMenu from 'assets/icons/IMenu';
import IPlus from 'assets/icons/IPlus';

import styles from './lead.module.scss';

interface LeadProps {
  title: string;
  icon: 'plus' | 'arrow' | 'menu';
}

export const Lead: React.FC<LeadProps> = ({ title, icon }) => (
  <section className={styles.lead}>
    {icon === 'plus' && <IPlus />}
    {icon === 'arrow' && <IArrow />}
    {icon === 'menu' && <IMenu />}
    <h2>{title}</h2>
  </section>
);
