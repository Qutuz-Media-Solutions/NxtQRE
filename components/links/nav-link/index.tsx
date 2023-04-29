import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  url: string;
  children?: React.ReactNode;
}

function NavLink({ url, children }: NavLinkProps) {
  return (
    <Link href={url}>
      <span
        className="relative transition-all duration-500 hover:text-medhal-light 
                    hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] 
                    hover:after:w-full hover:after:origin-bottom-right hover:after:scale-x-0 hover:after:animate-animateunderline
                  hover:after:bg-medhal-light hover:after:animation-duration-500 hover:after:fill-mode-forwards"
      >
        {children}
      </span>
    </Link>
  );
}

export default NavLink;
