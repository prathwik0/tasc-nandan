import React from 'react';
import EventsCard from '@/components/EventsCard';
import PageLayout from "@/components/PageLayout";

const Events = () => {
    return(
        <>
            <PageLayout>
                <div className={'py-36 px-32'}>
                    <EventsCard type={'upcoming'}/>
                </div>
            </PageLayout>
        </>
    )
};

export default Events;