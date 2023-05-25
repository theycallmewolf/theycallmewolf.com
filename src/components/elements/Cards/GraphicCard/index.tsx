import { TangramCard } from "assets/tangrams";
import React from "react";

import styles from "./graphic-card.module.scss";

interface GraphicCardProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const GraphicCard: React.FC<GraphicCardProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      <div className={styles.content}>{children}</div>
      <TangramCard />
    </div>
  );
};
