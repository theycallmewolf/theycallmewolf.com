import styles from './styles.module.scss';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>@2021 theycallmewolf, all rights yada yada yada</p>
      </div>
    </footer>
  );
}
