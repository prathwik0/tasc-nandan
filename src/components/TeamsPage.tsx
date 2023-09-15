import React, {useState} from 'react';
import PersonCard from "@/components/MemberCard";

type Year = '2022' | '2023';

const TeamsPage = () => {
    const [year, setYear] = useState<Year>('2023');

    const handleButtonClick = (newType: Year) => {
        setYear(newType);
    };

    return(
        <>
            <div className={' space-y-16  h-full'}>
                <div className={'flex w-full justify-center md:space-x-16 space-x-8 font-bold'}>
                    <button className={`md:text-2xl text-xl ${year === '2022' ? 'underline underline-offset-4' : 'no-underline'}`} onClick={() => handleButtonClick('2022')}>
                        2022-23
                    </button>
                    <button className={`md:text-2xl text-xl ${year === '2023' ? 'underline underline-offset-4' : 'no-underline'}`} onClick={() => handleButtonClick('2023')}>
                        2023-24
                    </button>
                </div>

                <div>
                    <PersonCard year={year} />
                </div>
            </div>
        </>
    )
}

export default TeamsPage;