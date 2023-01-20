import Head from 'next/head';
import styles from './styles.module.sass';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Ex.</title>
      </Head>
      {/* With react modules */}
      {/* <main className={styles.main}>{children}</main> */}

      {/* With Tailwind */}
      <main className="flex overflow-scroll h-screen ">{children}</main>
    </>
  );
};

export default PrimaryLayout;
