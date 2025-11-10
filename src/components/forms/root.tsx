"use client";

import React, { useEffect, useState } from "react";
import { FormHeader } from "./header";
import { FormSidebar } from "./sidebar";
import { PersonalDetails, ServiceDetail } from "./detail-forms";
import { useFormById } from "@/hooks/useForm";
import { PersonalDetailSkeleton } from "../skeleton-loader";
import { useUserContext } from "@/context";
import { Spinner } from "../ui";
import { usePersistentStep } from "@/helpers/localStorage";

export default function EmployeeForm() {
    const [formId, setFormId] = useState("");
    const { data: formData, isLoading, refetch } = useFormById(formId);
    const { user, isLoadingCurrentUser } = useUserContext();
    const currentStep = formData?.current_step || 1;
    const [step, setStep] = usePersistentStep("currentStep", currentStep);
    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const personalDetailsData = formData?.personal_details;
    const serviceDetailsData = formData?.service_details;

    useEffect
        (() => {
            if (user) {
                const id = user.form_id;
                setFormId(id);
            }
        }, [user]);

    if (isLoadingCurrentUser) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <FormHeader />
            <div className="flex flex-col lg:flex-row gap-12 py-8 px-12">
                <FormSidebar currentStep={step} setStep={setStep} />
                <div className="flex-1">
                    {step === 1 && (
                        isLoading
                            ? <PersonalDetailSkeleton />
                            : <PersonalDetails nextStep={nextStep} personalDetails={personalDetailsData} isLoading={isLoading} refetch={refetch} />
                    )}
                    {step === 2 && <ServiceDetail prevStep={prevStep} serviceDetails={serviceDetailsData} isLoading={isLoading} refetch={refetch} />}
                </div>
            </div>
        </div>
    );
}