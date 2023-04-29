import Link from 'next/link';
import Drawer from '~/components/drawer';
import NavLink from '~/components/links/nav-link';
import Login from '~/components/login';
import Logo from '~/components/logo';

type NavLinkInfo = {
  title: string;
  url: string;
};

const navLinks: NavLinkInfo[] = [
  { title: 'About Us', url: '#about-us' },
  { title: 'Services', url: '#services' },
  { title: 'Coaches', url: '#coaches' },
  { title: 'Memberships', url: '#memberships' },
  { title: 'Testimonials', url: '#testimonials' },
  { title: 'Contact Us', url: '#contact-us' },
];

function Navbar() {
  return (
    <header className="fixed z-20 h-[6vh] min-h-[120px] w-full bg-opacity-0 py-5 text-white">
      <nav>
        <div className="container flex justify-between">
          {/* Logo */}
          <div className="h-[80px] w-[80px] rounded-full bg-white">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu Items */}
          <ul className="hidden items-center space-x-6 text-lg lg:flex">
            {navLinks.map(({ title, url }) => (
              <li key={url}>
                <NavLink url={url}>{title}</NavLink>
              </li>
            ))}
            <li>
              <Login />
            </li>
          </ul>
        </div>
        <Drawer />
      </nav>
    </header>
  );
}

export default Navbar;
