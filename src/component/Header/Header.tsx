import { ReactElement } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

type NavItem = {
  title: string;
  href: string;
};
const navItems: NavItem[] = [
  { title: "خانه", href: "/" },
  { title: "درباره ما", href: "/about" },
];
export function Header(): ReactElement {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <Link to={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
