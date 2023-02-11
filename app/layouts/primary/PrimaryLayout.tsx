export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      {/* With Tailwind */}
      <main className="flex overflow-scroll h-[94vh] font-grandstander">
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
