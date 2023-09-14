import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import {pedata} from '@/data/PEventsData';
import {uedata} from "@/data/UEventsData";

interface EventsDataProps{
    image: string;
    imageAlt: string;
    title: string;
    organizer1: string;
    organizer2?: string;
    organizer3?: string;
    date: string;
    venue?: string;
    description: string;
    guests?: string;
    winners?: string;
    reportLink?: string;
}

interface EventsCardProps{
    type: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ type }) => {
    const [data, setData] = useState<EventsDataProps[]>([]);

    useEffect(() => {
        if (type === "upcoming") {
            setData(uedata);
        } else {
            setData(pedata);
        }
    }, [type]);

    return (
        <>
            <div className={'md:grid md:grid-cols-3 gap-20'}>
                {data.map((item, index) => (
                    <div key={index} className={'dark:text-white text-black dark:bg-gray-600 shadow-lg rounded-lg p-4'}>
                        <div className={'flex justify-center w-full'}><Image src={item.image} height={300} width={300} alt={item.imageAlt}/></div>
                        {item.title}
                    </div>
                ))}
            </div>
        </>
    );
};

export default EventsCard;