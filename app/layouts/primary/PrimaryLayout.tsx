export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      {/* With Tailwind */}
      <main className="flex font-grandstander">{children}</main>
    </>
  );
};

export default PrimaryLayout;
