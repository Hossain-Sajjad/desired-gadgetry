import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import NavLink from '../NavLink/NavLink';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Reviews', link: '/reviews' },
        { id: 3, name: 'Dashboard', link: '/dashboard' },
        { id: 4, name: 'Blogs', link: '/blog' }
    ]
    return (
        <div className='header'>
            <nav className='pt-6 flex justify-between'>
                <div className='ml-6'>
                    <h1>Desired Gadgetry</h1>
                </div>
                <div>
                    <ul className={`md:flex justify-center md:static duration-500 ease-in absolute ${open ? 'top-6 right-0' : 'top-[-150px] right-0'}`}>
                        {
                            routes.map(route => <NavLink
                                key={route.id}
                                route={route}
                            ></NavLink>)
                        }
                    </ul>
                    <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;