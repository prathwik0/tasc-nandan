import React, { useState } from 'react';
import EventsCard from "@/components/EventsCard";

type EventType = 'previous' | 'upcoming'; // Define the possible event types

const EventPage: React.FC = () => {
    const [type, setType] = useState<EventType>('upcoming');

    const handleButtonClick = (newType: EventType) => {
        setType(newType);
    };

    console.log(type);

    return (
        <>
            <div className={'pt-44 space-y-16  h-full'}>
                <div className={'flex w-full justify-center space-x-16 font-bold'}>
                    <button className={'text-2xl'} onClick={() => handleButtonClick('previous')}>
                        Previous Events
                    </button>
                    <button className={'text-2xl'} onClick={() => handleButtonClick('upcoming')}>
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
