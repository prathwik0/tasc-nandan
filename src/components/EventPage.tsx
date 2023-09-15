import React from 'react';
import EventsCard from "@/components/EventsCard";

const EventPage = () => {
    return(
        <>
            <div className={'pt-44 space-y-16  h-screen'}>
                <div className={'flex w-full justify-center space-x-16 font-bold'}>
                    <button className={'text-2xl '}>
                        Previous Events
                    </button>
                    <button className={'text-2xl'}>
                        Upcoming Events
                    </button>
                </div>

                <div>
                    <EventsCard type={'upcoming'}/>
                </div>
            </div>
        </>
    );
};

export default EventPage;