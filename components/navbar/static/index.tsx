import Link from 'next/link';
import Drawer from '~/components/drawer';
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
    <header className='fixed z-20 h-[6vh] min-h-[120px] w-full bg-opacity-0 py-5 text-white'>
      <nav>
        <div className='container flex justify-between'>
          {/* Logo */}
          <div className="h-[80px] w-[80px] rounded-full bg-white">
            <Link href='/'>
              <Logo />
            </Link>
          </div>

          {/* Menu Items */}
          <ul className="space-x-6 text-lg items-center hidden lg:flex">
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
        </div>
        <Drawer />
      </nav>
    </header>
  );
}

export default Navbar;

