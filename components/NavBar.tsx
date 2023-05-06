import * as React from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { RxLinkedinLogo, RxGithubLogo, RxSize } from "react-icons/rx";
import styles from "@/components/NavBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <Link
        className="flex-1 text-2xl font-bold bg-gradient-to-r from-emerald-200 to-blue-400 bg-clip-text text-transparent "
        href="/"
      >
        Roshen's Webfolio
      </Link>
      <div className={styles.socials}>
        <Link href="https://github.com/Richrosh3">
          <RxGithubLogo className={styles.logo} size={35} />
        </Link>
        <Link href="https://www.linkedin.com/in/roshen-a-230722114/">
          <RxLinkedinLogo className={styles.logo} size={35} />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link className = "text-emerald-200" href="/content/about">About</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className = "text-emerald-500" href="/content/projects">Projects</Link>
        </li>
        <li className={styles.menuItem}>
          <Link className = "text-cyan-400" href="/content/books">Books</Link>
        </li>
        <Link className={styles.resumeButton} href = "/RoshenAbrahamResume2023.pdf">Resume</Link>
      </ul>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default NavBar;
