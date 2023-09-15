import React, { useState } from 'react';
import EventsCard from "@/components/EventsCard";

type EventType = 'previous' | 'upcoming';

const EventPage: React.FC = () => {
    const [type, setType] = useState<EventType>('upcoming');

    const handleButtonClick = (newType: EventType) => {
        setType(newType);
    };

    return (
        <>
            <div className={'pt-44 space-y-16  h-full'}>
                <div className={'flex w-full justify-center md:space-x-16 space-x-8 font-bold'}>
                    <button className={`md:text-2xl text-xl ${type === 'previous' ? 'underline underline-offset-4' : 'no-underline'}`} onClick={() => handleButtonClick('previous')}>
                        Previous Events
                    </button>
                    <button className={`md:text-2xl text-xl ${type === 'upcoming' ? 'underline underline-offset-4' : 'no-underline'}`} onClick={() => handleButtonClick('upcoming')}>
                        Upcoming Events
                    </button>
                </div>

                <div>
                    <EventsCard type={type} />
                </div>
            </div>
        </>
    );
};

export default EventPage;
