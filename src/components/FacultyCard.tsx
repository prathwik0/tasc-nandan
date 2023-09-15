import React, {useEffect, useState} from 'react';
import {Faculty}  from '@/data/Faculty';
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import NextLink from "next/link";

interface FacultyCard {
    image: string;
    name: string;
    designation: string;
    email: string;
}

const PersonCard: React.FC = () => {

    return(
        <>
            <div className={'md:grid md:grid-cols-3 md:gap-6 md:gap-y-14 lg:px-16 md:px-12 px-6 space-y-10 md:space-y-0 pb-24 pt-40'}>
                {
                    Faculty.map((item, index) => (
                        <>
                            <div key={index} className={'mx-16 bg-[#f3e7fb] dark:bg-[#272c3a] rounded-lg shadow-xl dark:drop-shadow-md dark:shadow-gray-700  py-8'}>
                                <div className={'flex justify-center'}>
                                    <img src={item.image} alt={item.name} className={'object-cover rounded-full lg:w-44 lg:h-44 w-36 h-36   border border-[#e5c6fc] dark:border-[#121928]'}/>
                                </div>
                                <h1 className={'text-2xl font-bold py-4 text-center'}>{item.name}</h1>
                                <h2 className={'text-lg pb-5 text-center'}>{item.designation}</h2>
                                <h2 className={'text-lg pb-5 text-center'}>{item.email}</h2>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    );
};

export default PersonCard;