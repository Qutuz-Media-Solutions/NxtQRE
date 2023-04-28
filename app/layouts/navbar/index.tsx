import { clsx } from 'clsx';
import Link from 'next/link';
import Login from '~/components/login';

type NavLink = {
  title: string;
  url: string;
};

const navLinks: NavLink[] = [
  { title: 'About Us', url: '#about-us' },
  { title: 'Services', url: '#services' },
  { title: 'Coaches', url: '#coaches' },
  { title: 'Memberships', url: '#memberships' },
  { title: 'Testimonials', url: '#testimonials' },
  { title: 'Contact Us', url: '#contact-us' },
];
function Navbar() {
  return (
    <header
      className={clsx(
        'fixed z-20 h-[6vh] min-h-[120px] w-full bg-opacity-0 px-8 text-white',
      )}
    >
      <nav className="flex">
        <ul className="flex w-full justify-end space-x-4 text-lg hover:[&_li]:underline">
          {navLinks.map(({ title, url }) => (
            <li key={url}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
          <li>
            <Login />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
