import styles from './styles.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <small>@2021 theycallmewolf, all rights yada yada yada</small>
      </div>
    </footer>
  );
};
