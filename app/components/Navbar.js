"use client"; // This is a client component 👈🏽

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {BiMenuAltRight, IoClose} from "react-icons/all";
// import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(true);
    const [navBg, setNavBg] = useState('#fff');
    const [linkColor, setLinkColor] = useState('#1f2937');
    // const [position, setPosition] = useState('fixed')
    // const router = useRouter();

    // useEffect(() => {
    //   if (
    //     router.asPath === '/property' ||
    //     router.asPath === '/crypto' ||
    //     router.asPath === '/netflix' ||
    //     router.asPath === '/twitch'
    //   ) {
    //     setNavBg('transparent');
    //     setLinkColor('#ecf0f3');
    //   } else {
    //     setNavBg('#ecf0f3');
    //     setLinkColor('#1f2937');
    //   }
    // }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className='fixed w-full h-20 shadow-custom z-[100] ease-in-out duration-300'
        >
            <div className='flex justify-between items-center w-full h-full px-10 2xl:px-16'>
                <Link href='/'>
                        <h3>André.dev</h3>
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex font-semibold'>
                        <li className='ml-5 hover:text-amber-500 ease-in duration-100'>
                            <Link to="hero" spy={true} smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className='ml-5 hover:text-amber-500 ease-in duration-100'>
                            <Link to="about" spy={true} smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className='ml-5 hover:text-amber-500 ease-in duration-100'>
                            <Link to="projects" spy={true} smooth={true} duration={500} offset={-80}>
                                Projects
                            </Link>
                        </li>
                        <li className='ml-5 hover:text-amber-500 ease-in duration-100'>
                            <Link to="contact" spy={true} smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className='md:hidden'
                    >
                        <BiMenuAltRight size={35} className='cursor-pointer hover:text-amber-500 ease-in duration-100'/>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div>
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[100%] sm:w-[100%] md:w-[100%] h-screen ease-in duration-300 bg-white'
                            : 'fixed left-[-100%] top-0 w-[100%] sm:w-[100%] md:w-[100%] h-screen ease-in duration-300'
                    }
                >
                    <div>
                        <div className='absolute top-6 right-10'>
                            <div
                                onClick={handleNav}
                                className={`transition-all duration-500 ease-in ${nav ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <IoClose size={35} className='cursor-pointer hover:text-amber-500 ease-in duration-100'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-screen text-center font-semibold text-2xl'>
                        <ul className=''>
                            <Link to="hero" spy={true} smooth={true} duration={500}>
                                <li onClick={() => setNav(false)} className='py-6 hover:text-amber-500 ease-in duration-100'>
                                    Home
                                </li>
                            </Link>

                            <Link to="about" spy={true} smooth={true} duration={500}>
                                <li onClick={() => setNav(false)} className='py-6 hover:text-amber-500 ease-in duration-100'>
                                    About
                                </li>
                            </Link>

                            <Link to="projects" spy={true} smooth={true} duration={500} offset={-80}>
                                <li onClick={() => setNav(false)} className='py-6 hover:text-amber-500 ease-in duration-100'>
                                    Projects
                                </li>
                            </Link>

                            <Link to="contact" spy={true} smooth={true} duration={500}>
                                <li onClick={() => setNav(false)} className='py-6 hover:text-amber-500 ease-in duration-100'>
                                    Contact
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;