'use client'

import Link from "next/link";

type NavLink = {
    title: string;
    url: string;
};


function Drawer() {
    const navLinks: NavLink[] = [
        { title: 'About Us', url: '#about-us' },
        { title: 'Services', url: '#services' },
        { title: 'Coaches', url: '#coaches' },
        { title: 'Memberships', url: '#memberships' },
        { title: 'Testimonials', url: '#testimonials' },
        { title: 'Contact Us', url: '#contact-us' },
    ];
    return (
        <div className="drawer fixed top-0 w-full lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content container">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate float-right top-8">

                    {/* <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox" />

                    {/* <!-- hamburger icon --> */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* <!-- close icon --> */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay" />
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {navLinks.map(({ title, url }) => (
                        <li key={url}>
                            <Link className="active:bg-medhal-dark" href={url}>
                                <span
                                    className="relative "
                                >
                                    {title}
                                </span>
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default Drawer