import CatCard from '@/components/cards/cat';
import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/layouts/sidebar/SidebarLayout';
import Image from 'next/image';
import { mockCatCardProps } from 'stories/components/cards/cat/index.mock';
import styles from '../styles/Home.module.css';
import type { NextPageWithLayout } from './types/page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div className={styles.grid}>
        {Array(4)
          .fill('')
          .map((_, i) => (
            <CatCard key={i} {...mockCatCardProps.primary} />
          ))}
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
