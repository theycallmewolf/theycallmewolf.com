import { ClientsProps } from "types";

import { LogoButton } from "../../../elements/LogoButton";
import styles from "./clients.module.scss";

export const Clients: React.FC<ClientsProps> = ({ clients }) => (
  <section className={styles.section}>
    {clients.map((c) => (
      <LogoButton
        key={c.id.toString()}
        svgLogo={c.logo_svg}
        link={c.link}
        name={c.name}
      />
    ))}
  </section>
);
