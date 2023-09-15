import React from 'react';
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import NextLink from "next/link";


const Footer = () => {
    return(
        <>
            <div className={'hidden md:flex w-full bg-[#ECDBFF] dark:bg-[#000015] py-10 px-16 items-center justify-between'}>
                <div className={'flex space-x-5'}>
                    <img src="/TASCLogoLight.png" alt="" width={120} height={120}/>
                    <div className={'border-l-2 dark:border-white border-black items-center pt-1'}>
                        <h1 className={'dark:text-white text-black text-2xl pl-5'}>© 2023 TASC</h1>
                    </div>
                </div>

                <ul className={'flex space-x-8 text-black dark:text-white'}>
                    <NextLink href={'https://www.instagram.com/tasc_nmamit/'} target={'_blank'}>
                        <BsInstagram size={25} className={'hover:scale-125 duration-200'}/>
                    </NextLink>
                    <NextLink href={'https://github.com/tasc-nmamit'} target={'_blank'}>
                        <BsGithub size={25} className={'hover:scale-125 duration-200'}/>
                    </NextLink>
                    <NextLink href={'https://www.linkedin.com/company/tasc-aiml/'} target={'_blank'}>
                        <BsLinkedin size={25} className={'hover:scale-125 duration-200'}/>
                    </NextLink>
                </ul>
            </div>

            <div className={'md:hidden flex w-full bg-[#ECDBFF] dark:bg-[#000015] py-10 px-6'}>
                <div className={'flex space-x-4'}>
                    <img src="/TASCLogoLight.png" alt="" width={70} height={70}/>
                    <div className={'border-l-2 dark:border-white border-black items-center pt-1'}>
                        <h1 className={'dark:text-white text-black text-sm pl-3'}>© 2023 TASC</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;