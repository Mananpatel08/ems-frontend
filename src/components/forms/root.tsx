"use client";

import React, { useEffect, useState } from "react";
import { FormHeader } from "./header";
import { FormSidebar } from "./sidebar";
import { PersonalDetails, ServiceDetail } from "./detail-forms";
import { useFormById } from "@/hooks/useForm";
import { PersonalDetailSkeleton } from "../skeleton-loader";

export default function EmployeeForm() {
    const [step, setStep] = useState(1);
    const [formId, setFormId] = useState("");
    const { data: formData, isLoading, refetch } = useFormById(formId);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const personalDetailsData = formData?.personal_details;
    const serviceDetailsData = formData?.service_details;

    useEffect
        (() => {
            if (typeof window !== "undefined") {
                const id = localStorage.getItem("form_id") ?? "";
                setFormId(id);
            }
        }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <FormHeader />
            <div className="flex px-12">
                <FormSidebar currentStep={step} setStep={setStep} />
                {/* Main Form */}
                <div className="flex-1 p-8">
                    {step === 1 && (
                        isLoading
                            ? <PersonalDetailSkeleton />
                            : <PersonalDetails nextStep={nextStep} personalDetails={personalDetailsData} isLoading={isLoading} />
                    )}
                    {step === 2 && <ServiceDetail prevStep={prevStep} />}
                </div>
            </div>
        </div>
    );
}