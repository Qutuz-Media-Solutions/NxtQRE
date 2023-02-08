import Login from 'components/login';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="h-[6vh] min-h-[50px] bg-white px-8 flex items-center">
      <ul className="hover:[&_li]:underline flex justify-end w-full text-lg space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <Login />
      </ul>
    </nav>
  );
}

export default Navbar;
