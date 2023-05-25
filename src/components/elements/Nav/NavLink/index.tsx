import { useTheme } from "hooks";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./nav-link.module.scss";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  label: string;
}
export const NavLink: React.FC<NavLinkProps> = ({ link, label, ...props }) => {
  const { hasDarkMode } = useTheme();
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Link href={link}>
      <a
        className={`${styles.link} ${
          slug === link.split("/")[2] ? styles.selected : ""
        } ${hasDarkMode ? styles.dark : styles.light}`}
        {...props}
      >
        {label}
      </a>
    </Link>
  );
};
