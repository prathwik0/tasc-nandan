import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import {pedata} from '@/data/PEventsData';
import {uedata} from "@/data/UEventsData";

interface EventsDataProps {
    id: number;
    title: string;
    image?: string;
    imageAlt?: string;
    date: Date;
    time?: string;
    venue?: string;
    organizers?: string;
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
            <div className={'md:grid lg:grid-cols-4 md:grid-cols-3 gap-20 mx-20 md:space-y-0 space-y-10'}>
                {data.map((item) => (
                    <div key={item.id}>

                    </div>
                ))}
            </div>
        </>
    );
};

export default EventsCard;