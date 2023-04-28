export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      {/* With Tailwind */}
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
