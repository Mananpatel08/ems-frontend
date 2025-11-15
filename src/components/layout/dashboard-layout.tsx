"use client";

import React, { useState } from 'react'
import { DashboardSidebar } from '../ui/sidebar/sidebar';
import { DashboardHeader } from '../ui/navbar';
import { DashboardLayoutProvider, useDashboardLayout } from '@/context/DashboardContext';
import { useUserContext } from '@/context';
import { Spinner } from '../ui';

export const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const { toggleActive } = useDashboardLayout()
    const { isLoadingCurrentUser } = useUserContext();

    if (isLoadingCurrentUser) {
        return <Spinner />;
    }

    return (
        <>
            <DashboardLayoutProvider>
                <div className='flex'>
                    <DashboardSidebar />
                    <div
                        className={`${toggleActive
                            ? "xl:w-[calc(100%-262px)] lg:w-[calc(100%-250px)] w-full"
                            : "lg:w-[calc(100%-100px)] w-full"
                            } h-screen overflow-hidden transition-all flex-1`}
                    >
                        <DashboardHeader />
                        <main className={`main-panel overflow-auto h-[calc(100%-70px)] custom-scrollbar`}>
                            <div className='w-full h-full'>
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </DashboardLayoutProvider>
        </>

    )
}


// xl:pb-5 sm:pb-4 pb-3 xl:pe-5 sm:pe-4 pe-3