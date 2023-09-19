import React, { useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import NextLink from 'next/link';
import Image from 'next/image';
import useDarkSide from '@/components/UseDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {usePathname} from "next/navigation";

interface NAV_ITEMS {
    title: string;
    href: string;
}

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light');
    const [isOpen, setIsOpen] = useState(false);
    const menuAnimation = useAnimation();

    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? 'dark' : 'light');
        setDarkSide(checked);
    };



    const toggleMenu = () => {
        setIsOpen(!isOpen);
        menuAnimation.start(isOpen ? { x: '100%' } : { x: 0 });
    };

    const NAV_ITEMS: Array<NAV_ITEMS> = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Team',
            href: '/team',
        },
        {
            title: 'Faculty',
            href: '/faculty',
        },
        {
            title: 'Events',
            href: '/events',
        },
    ];

    const path = usePathname();
    const splitPath = path?.split('/') || [];
    const currentPage = splitPath[1];

    return (
        <>
            <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 1,
                }}
                variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                    },
                    exitState: {
                        clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                    },
                }}
                className={`z-50 fixed w-full ${isOpen ? 'h-full' : null}  md:h-auto`}
            >
                <div
                    className={'hidden md:flex bg-[#ECDBFF] border-zinc-300 dark:border-zinc-800 rounded-xl dark:bg-[#000015]  text-black dark:text-white items-center justify-between py-4 px-10 drop-shadow-md shadow-slate-100 dark:shadow-white '}
                >
                    <NextLink href={'/'}>
                        <Image
                            src={'/TASCLogo.png'}
                            width={100}
                            height={100}
                            alt={'TASC'}
                            className={'cursor-pointer hover:scale-110 duration-200'}
                        />
                    </NextLink>

                    <ul className={'flex space-x-5'}>
                        {NAV_ITEMS.map((item) => (
                            <NextLink key={item.title} href={item.href}>
                                <li className={`text-xl font-bold hover:dark:bg-[#ECDBFF] hover:dark:text-black hover:bg-[#000015] hover:text-white px-3 py-2 rounded-xl hover:scale-110 duration-200 ${currentPage === item.title.toLowerCase() ? 'underline underline-offset-4' : 'no-underline'}`}>
                                    {item.title}
                                </li>
                            </NextLink>
                        ))}
                    </ul>

                    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={28} className="duration-200" />
                </div>

                <div className=" flex md:hidden bg-[#ECDBFF] rounded-b-xl dark:bg-[#000015]  text-black dark:text-white items-center justify-between py-6 px-10 relative border border-zinc-300 dark:border-zinc-800 shadow-lg">
                    <NextLink href={'/'}>
                        <Image
                            src={'/TASCLogo.png'}
                            width={80}
                            height={80}
                            alt={'TASC'}
                            className={'cursor-pointer hover:scale-110 duration-200'}
                        />
                    </NextLink>


                    <div className={'flex space-x-10 cursor-pointer'}>
                        <DarkModeSwitch
                            checked={darkSide}
                            onChange={toggleDarkMode}
                            size={28}
                            className="duration-200"
                        />
                        <AiOutlineMenu size={30} onClick={toggleMenu} />
                    </div>

                    <motion.div
                        className={`h-full fixed  w-64 text-white dark:text-black dark:bg-[#ECDBFF] rounded-l-xl bg-[#000015] p-4 top-0 right-0 transform ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                        initial={false}
                        animate={menuAnimation}
                    >
                        <div className={'flex w-full justify-end px-8 py-6'}>
                            <AiOutlineClose
                                size={30}
                                onClick={toggleMenu}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>

                        <ul className="h-full text-2xl pt-10 text-center">
                            {NAV_ITEMS.map((item) => (
                                <NextLink key={item.title} href={item.href}>
                                    <li className={' mb-10'}>{item.title}</li>
                                </NextLink>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
