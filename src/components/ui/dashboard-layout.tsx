"use client";

import { BadgeCent, BadgeSwissFranc, BaggageClaim, CakeSlice, CarFront, ChevronUpIcon, Lightbulb } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'
import EMS from '../../../public/logos/light-ens-logo.png'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { DashboardSidebar } from './sidebar/sidebar';
import { DashboardHeader } from './navbar';

export const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [toggleActive, setToggleActive] = useState(true);
    const themeChange = true;
    return (
        <>
            <div className='flex bg-[#f1f1f1]'>
                <DashboardSidebar />
                <div
                    className={`${toggleActive
                        ? "xl:w-[calc(100%-262px)] lg:w-[calc(100%-250px)] w-full"
                        : "lg:w-[calc(100%-100px)] w-full"
                        } h-screen overflow-hidden transition-all`}
                >
                    <DashboardHeader />
                    <main className={`main-panel overflow-auto h-[calc(100%-70px)] custom-scrollbar xl:pb-5 sm:pb-4 pb-3 xl:pe-5 sm:pe-4 pe-3`}>
                        <div className='w-full h-full overflow-hidden flex flex-col justify-center items-center bg-white rounded-3xl'>
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>

    )
}
