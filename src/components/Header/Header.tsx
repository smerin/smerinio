import Link from "next/link";
import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Frontend Tutorials</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/tutorials">Tutorials</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;