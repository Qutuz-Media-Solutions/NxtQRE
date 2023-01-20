import Link from 'next/link';
import styles from './styles.module.sass';

export interface ISidebarLayout {
  children?: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default SidebarLayout;
