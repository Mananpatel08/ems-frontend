"use client";

import React, { useState } from "react";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { Button, CommonDropdown, DatePicker, Input } from "@/components/ui";
interface ServiceDetailProps {
    prevStep: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ prevStep }) => {
    const [chancesTaken, setChancesTaken] = useState<string | undefined>();
    const options = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
    ];
    const postOptions = [
        { label: "Revenue Clerk", value: "revenue_clerk" },
        { label: "Revenue Talati", value: "revenue_talati" },
        { label: "Deputy Mamlatdar", value: "deputy_mamlatdar" },
    ]
    return (
        <div className="px-6 w-[95%]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Service Detail</h2>

            <form className="space-y-8">
                {/* ====== Joining / Appointment ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            Joining / Appointment Date
                        </label>
                        <p className="text-gray-400 text-sm">Date of appointment</p>
                    </div>

                    <div className="col-span-2">
                        <DatePicker
                            name="join_date"
                            placeholder="Joining Appointment Date"
                        />
                    </div>
                </div>

                {/* ====== Joining / Appointment ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            Regular Appointment Dates
                        </label>
                        <p className="text-gray-400 text-sm">Date of appointment</p>
                    </div>

                    <div className="col-span-2">
                        <DatePicker
                            name="regular_date"
                            placeholder="Regular Appointment Date"
                        />
                    </div>
                </div>

                {/* ====== Post at Appointment ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            Post at Appointment
                        </label>
                        <p className="text-gray-400 text-sm">Select initial designation</p>
                    </div>

                    <div className="col-span-2">
                        <CommonDropdown
                            options={postOptions}
                            value={chancesTaken}
                            onChange={setChancesTaken}
                            placeholder="Select Post"
                        />
                    </div>
                </div>

                {/* ====== Pre Service Exam ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            Pre Service Exam Details
                        </label>
                        <p className="text-gray-400 text-sm">Passing date & attempt count</p>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <DatePicker
                            name="passing_date"
                            placeholder="Passing Date"
                        />
                        <CommonDropdown
                            options={options}
                            value={chancesTaken}
                            onChange={setChancesTaken}
                            placeholder="Attempt Count"
                            optionClassName="flex w-fit"
                        />
                    </div>
                </div>

                {/* ====== CCC Exam ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            CCC Exam Details
                        </label>
                        <p className="text-gray-400 text-sm">Passing date & attempt count</p>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <DatePicker
                            name="passing_date"
                            placeholder="Passing Date"
                        />
                        <CommonDropdown
                            options={options}
                            value={chancesTaken}
                            onChange={setChancesTaken}
                            placeholder="Attempt Count"
                            optionClassName="flex w-fit"
                        />
                    </div>
                </div>

                {/* ====== CCC Plus / PPAN ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            CCC Plus Exam Details
                        </label>
                        <p className="text-gray-400 text-sm">Passing date & attempt count</p>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <DatePicker
                            name="passing_date"
                            placeholder="Passing Date"
                        />
                        <CommonDropdown
                            options={options}
                            value={chancesTaken}
                            onChange={setChancesTaken}
                            placeholder="Attempt Count"
                            optionClassName="flex w-fit"
                        />
                    </div>
                </div>

                {/* ====== LRQ ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            LRQ Exam Details
                        </label>
                        <p className="text-gray-400 text-sm">Passing date & attempt count</p>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <DatePicker
                            name="passing_date"
                            placeholder="Passing Date"
                        />
                        <CommonDropdown
                            options={options}
                            value={chancesTaken}
                            onChange={setChancesTaken}
                            placeholder="Attempt Count"
                            optionClassName="flex w-fit"
                        />
                    </div>
                </div>

                {/* ====== HRQ ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            HRQ Exam Details
                        </label>
                        <p className="text-gray-400 text-sm">Passing date & attempt count</p>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <DatePicker
                            name="passing_date"
                            placeholder="Passing Date"
                        />
                        <CommonDropdown
                            options={options}
                            value={chancesTaken}
                            onChange={setChancesTaken}
                            placeholder="Attempt Count"
                            optionClassName="flex w-fit"
                        />
                    </div>
                </div>

                {/* ====== PRAN ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            Permanent Pension Account Number (PPAN)
                        </label>
                        <p className="text-gray-400 text-sm">Enter PPAN number</p>
                    </div>

                    <div className="col-span-2 relative">
                        <Input
                            placeholder="110105295155"
                            name="nationalId"
                            icon={<IdentificationIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>

                {/* ====== PRAN ====== */}
                <div className="grid grid-cols-3 items-start gap-6">
                    <div>
                        <label className="text-gray-700 font-medium">
                            Permanent Retirement Account Number (PRAN)
                        </label>
                        <p className="text-gray-400 text-sm">Enter PRAN number</p>
                    </div>

                    <div className="col-span-2 relative">
                        <Input
                            placeholder="110105295155"
                            name="nationalId"
                            icon={<IdentificationIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>

                {/* ====== Action Buttons ====== */}
                <div className="flex justify-between pt-8 border-t border-gray-200">
                    <Button
                        variant="secondary"
                        size="md"
                        type="button"
                        onClick={prevStep}
                    >
                        ← Back
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        type="submit"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};
