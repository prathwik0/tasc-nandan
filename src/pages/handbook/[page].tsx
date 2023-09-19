import React from 'react';
import {usePathname} from "next/navigation";
import PageLayout from "@/components/PageLayout";
import Image from 'next/image';

const Handbook = () => {
    const path = usePathname();
    const splitPath = path?.split('/') || [];
    const pathPage = parseInt(splitPath[2]);
    let leftPage = 0;
    let rightPage = 0;
    if(pathPage%2 == 1){
        leftPage = pathPage;
        rightPage = pathPage+1;
    }
    else{
        leftPage = pathPage-1;
        rightPage = pathPage;
    }
    return(
        <>
            <PageLayout>
                <>
                    <div className={'flex items-center h-screen justify-center space-x-y space-x-10 '}>
                        <Image src={`/Images/Handbook/${leftPage}.jpg`} alt={`${leftPage}`} height={700} width={500}/>
                        {pathPage === 1 ? null : (<Image src={`/Images/Handbook/${rightPage}.jpg`} alt={`${rightPage+1}`} height={700} width={500}/>)}
                    </div>
                </>
            </PageLayout>
        </>
    );
};

export default Handbook;