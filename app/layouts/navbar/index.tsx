import Login from 'components/login';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex h-[6vh] min-h-[50px] items-center bg-white px-8">
      <ul className="flex w-full justify-end space-x-4 text-lg hover:[&_li]:underline">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
