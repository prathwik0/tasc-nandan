import React, { useState, useEffect } from 'react';
import { pedata } from '@/data/PEventsData';
import { uedata } from '@/data/UEventsData';

interface EventsDataProps {
    title: string;
    image?: string;
    date: Date;
    time?: string;
    venue?: string;
    organizers?: string;
    description: string;
    guests?: string;
    winners?: string;
    reportLink?: string;
}

interface EventsCardProps {
    type: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ type }) => {
    const [data, setData] = useState<EventsDataProps[]>([]);

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };

    useEffect(() => {
        if (type === 'upcoming') {
            setData(uedata);
        } else {
            setData(pedata);
        }
    }, [type]);

    return (
        <>
            <div className={'md:grid md:grid-cols-3 gap-20 mx-20 md:space-y-0 space-y-10 pb-32'}>
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className={'bg-[#f3e7fb] dark:bg-[#272c3a] rounded-lg shadow-xl dark:drop-shadow-md dark:shadow-gray-700  py-8 px-5 flex-1'}>
                            <div className={'flex justify-center'}>
                                <img src={item.image} alt={item.title} className={'object-cover border border-[#e5c6fc] dark:border-[#121928]'}/>
                            </div>
                            <h1 className={'text-2xl font-bold py-4 text-center'}>{item.title}</h1>
                            <h2 className={'text-xl'}>Date: {item.date.toLocaleDateString(undefined, options)}</h2>
                            {item.venue ? <h2 className={'text-xl'}>Venue: {item.venue}</h2> : null}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default EventsCard;
