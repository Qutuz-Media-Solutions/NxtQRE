// import styles from './styles.module.sass';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      {/* With react modules */}
      {/* <main className={styles.main}>{children}</main> */}

      {/* With Tailwind */}
      <main className="flex overflow-scroll h-screen font-grandstander">
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
