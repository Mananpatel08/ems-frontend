"use client";

import { BadgeCent, BadgeSwissFranc, BaggageClaim, CakeSlice, CarFront, ChevronUpIcon, Lightbulb, LucideLayoutDashboard } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'
import EMS from '../../../../public/logos/light-ens-logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DocumentTextIcon, Squares2X2Icon, UsersIcon } from '@heroicons/react/24/outline';
import SidebarMenu from './sidebar-menu';

export const DashboardSidebar = () => {
    const [toggleActive, setToggleActive] = useState(true);
    const themeChange = true;
    const pathname = usePathname();
    return (
        <>
            <aside
                className={`${toggleActive
                    ? "xl:w-[262px] w-[250px] right-[-250px]"
                    : "lg:w-[100px] w-[250px] right-0"
                    } h-screen flex flex-col transition-all lg:static fixed z-10`}
            >
                <Link
                    href=""
                    className="bg-[#f1f1f1] py-4 px-8 w-full lg:flex hidden gap-[10px] items-center h-[70px]"
                >
                    {/* <Image src={EMS} width={50} height={50} alt="" /> */}
                </Link>
                <div
                    className={`${themeChange ? "bg-[#f1f1f1]" : "bg-[#f1f1f1]"
                        } px-[20px] py-1 h-full overflow-y-auto overflow-x-hidden`}
                >
                    <SidebarMenu toggleActive={toggleActive} />
                </div>
            </aside>
        </>
    )
}
