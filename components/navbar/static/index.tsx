import { clsx } from 'clsx';
import Link from 'next/link';
import Login from '~/components/login';
import Logo from '~/components/logo';

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
        'fixed z-20 h-[6vh] min-h-[120px] w-full bg-opacity-0 py-5 text-white',
      )}
    >
      <nav className="flex">
        {/* Menu Items */}
        <ul className="flex w-full justify-end space-x-4 text-lg">
          {navLinks.map(({ title, url }) => (
            <li key={url} className="">
              <Link href={url}>
                <span
                  className="relative transition-all duration-500 hover:text-medhal-light hover:after:absolute hover:after:bottom-0 hover:after:left-0
            hover:after:h-[2px] hover:after:w-full hover:after:origin-bottom-right hover:after:scale-x-0
            hover:after:animate-animateunderline hover:after:bg-medhal-light hover:after:animation-duration-500 hover:after:fill-mode-forwards"
                >
                  {title}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Login />
          </li>
        </ul>

        {/* Logo */}
        <div className="h-[80px] w-[80px] rounded-full bg-white">
          <Logo />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
