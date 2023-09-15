import React, {useEffect, useState} from 'react';
import {TwoTwo} from "@/data/Members";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import NextLink from "next/link";

interface PersonCard {
    image: string;
    name: string;
    role: string;
    quote: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
}

interface DataProps {
    year: string;
}

const PersonCard: React.FC<DataProps> = ({year}) => {
    const [data, setData] = useState<PersonCard[]>([]);
    useEffect(() => {
        switch(year){
            case '2022':
                setData(TwoTwo);
                break;
            default:
                setData(TwoTwo);
        }
    })
    return(
        <>
            <div className={'grid grid-cols-4 gap-10 p-16'}>
                {
                    data.map((item, index) => (
                        <>
                            <div key={index} className={'mx-16 bg-[#f3e7fb] dark:bg-[#272c3a] rounded-lg shadow-xl dark:custom-shadow-black py-5'}>
                                <div className={'flex justify-center'}>
                                    <img src={item.image} alt={item.name} className={'rounded-full w-32 h-32  border border-[#e5c6fc] dark:border-[#121928]'}/>
                                </div>
                                <h1 className={'text-2xl font-bold py-4 text-center'}>{item.name}</h1>
                                <ul className={'flex justify-center w-full space-x-5 z-50'}>
                                    <a href={'https://www.instagram.com/tasc_nmamit/'} target={'_blank'}>
                                        <BsInstagram size={25} className={'hover:scale-125 duration-200'}/>
                                    </a>
                                    <NextLink href={'https://github.com/tasc-nmamit'} target={'_blank'}>
                                        <BsGithub size={25} className={'hover:scale-125 duration-200'}/>
                                    </NextLink>
                                    <NextLink href={'https://www.linkedin.com/company/tasc-aiml/'} target={'_blank'}>
                                        <BsLinkedin size={25} className={'hover:scale-125 duration-200'}/>
                                    </NextLink>
                                </ul>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    );
};

export default PersonCard;