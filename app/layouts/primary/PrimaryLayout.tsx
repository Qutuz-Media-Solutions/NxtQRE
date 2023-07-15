export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <main className="w-full">{children}</main>
    </>
  );
};

export default PrimaryLayout;
