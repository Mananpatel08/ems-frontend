"use client";

import React, { FC } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { UserCircleIcon } from '@heroicons/react/24/solid';

type Props = {
}
export const DashboardHeader: FC<Props> = ({
}) => {
    const themeChange = true;
    const pathname = usePathname();
    const ActiveTitle =
        pathname === "/"
            ? "Dashboard"
            : pathname === "/users"
                ? "Users"
                : "Forms";
    return (
        <>

            <div
                className={`${themeChange ? "bg-[#f1f1f1]" : "bg-[#f1f1f1]"
                    } py-4 xl:pe-5 sm:pe-4 pe-3 flex justify-between items-center h-[70px]`}
            >

                <h1 className='text-2xl font-medium transition-all'>
                    {ActiveTitle}
                </h1>

                <div className="flex sm:gap-6 gap-4 items-center">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="flex w-full items-center justify-center gap-3 text-sm font-normal text-white outline-0">
                                {/* <Image
                                    src={EMS}
                                    width={30}
                                    height={30}
                                    alt="RFNB - Profile image"
                                    className="max-w-[30px] object-cover border-1 border-solid border-white rounded-full"
                                /> */}
                                <UserCircleIcon className="w-10 h-10 text-black" />
                                {/* <span
                                    className={`${themeChange ? "text-white" : "text-black"
                                        } sm:block hidden`}
                                >
                                    Manan Patel
                                </span> */}
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="absolute min-w-[140px] right-0 mt-2 z-10 flex flex-col gap-3 py-4 w-auto origin-top-right rounded-md bg-white shadow-[0px_0px_4px_0px_#c2c2c2] transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <MenuItem>
                                <Link
                                    href="/profile"
                                    className="block hover:bg-[transparent] px-4 text-sm font-medium text-black data-focus:text-[#d144d6] data-focus:outline-hidden"
                                >
                                    Edit Profile
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="block w-full px-4 text-left text-sm font-medium text-black data-focus:text-[#d144d6] data-focus:outline-hidden"
                                >
                                    Log-out
                                </button>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>

        </>
    )
}
