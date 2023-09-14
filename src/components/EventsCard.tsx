import React,{useState, useEffect} from 'react';
import {pedata} from '@/data/PEventsData';
import {uedata} from "@/data/UEventsData";

interface EventsDataProps{
    title: string;
    Description: string;
    Date: string;
    Venue: string;
}

interface EventsCardProps{
    type: string;
}

const EventsCard:React.FC<EventsCardProps> = ({type}) => {
    const [data, setData] = useState<EventsDataProps[]>([]);
    useEffect(() => {
        if(type === "upcoming"){
            setData(uedata);
        }
        else{
            setData(pedata);
        }
    })
    return(
        <>
            {
                data.map(item => (
                    <>
                        <div className={'text-white text-6xl'}>
                            {item.title}
                        </div>
                    </>
                ))
            }
        </>
    )
};

export default EventsCard;