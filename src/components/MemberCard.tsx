import React, {useEffect, useState} from 'react';
import {TwoTwo} from "@/data/Members";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import NextLink from "next/link";

interface MemberCard {
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
    const [data, setData] = useState<MemberCard[]>([]);
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
            <div className={'md:grid md:grid-cols-3 md:gap-6 md:gap-y-14 lg:px-16 md:px-12 px-6 space-y-10 md:space-y-0 pb-32'}>
                {
                    data.map((item, index) => (
                        <>
                            <div key={index} className={'mx-16 bg-[#f3e7fb] dark:bg-[#272c3a] rounded-lg shadow-xl dark:drop-shadow-md dark:shadow-gray-700  py-8'}>
                                <div className={'flex justify-center'}>
                                    <img src={item.image} alt={item.name} className={'object-cover rounded-full lg:w-44 lg:h-44 w-36 h-36   border border-[#e5c6fc] dark:border-[#121928]'}/>
                                </div>
                                <h1 className={'text-2xl font-bold py-4 text-center'}>{item.name}</h1>
                                <h2 className={'text-lg pb-5 text-center'}>{item.role}</h2>
                                <ul className={'flex justify-center w-full space-x-5 z-50'}>
                                    <a href={`${item.instagram}`} target={'_blank'}>
                                        <BsInstagram size={25} className={'hover:scale-125 duration-200'}/>
                                    </a>
                                    <NextLink href={`${item.github}`} target={'_blank'}>
                                        <BsGithub size={25} className={'hover:scale-125 duration-200'}/>
                                    </NextLink>
                                    <NextLink href={`${item.linkedin}`} target={'_blank'}>
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