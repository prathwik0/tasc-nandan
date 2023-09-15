import React from 'react';
import PageLayout from "@/components/PageLayout";
import PersonCard from "@/components/PersonCard";
import TeamsPage from "@/components/TeamsPage";

const Team = () => {
    return(
        <PageLayout>
            <>
                <div className={'justify-center w-full pt-44 z-[9999]'}>
                    <TeamsPage />
                </div>
            </>
        </PageLayout>
    );
};

export default Team;