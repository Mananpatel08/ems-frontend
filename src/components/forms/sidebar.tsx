"use client";

import React from "react";
import {
  CheckCircleIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import { CircleStackIcon } from "@heroicons/react/24/outline";
import { set } from "react-hook-form";

const steps = [
  "Personal information",
  "Service details",
];

interface FormSidebarProps {
  currentStep?: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormSidebar: React.FC<FormSidebarProps> = ({ currentStep = 1, setStep }) => {
  return (
    <aside className="flex flex-col items-start p-8 ">
      <div className="w-full">
        {steps.map((step, index) => {
          const isCompleted = index + 1 < currentStep;
          const isActive = index + 1 === currentStep;

          return (
            <div
              key={step}
              onClick={() => setStep(index + 1)}
              className="flex items-start space-x-5 cursor-pointer">
              <div className="relative flex flex-col items-center">
                {/* Step circle */}
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-full border-2
                    ${isCompleted
                      ? "bg-blue-500 border-blue-500 text-white"
                      : isActive
                        ? "border-blue-500 text-blue-500 bg-white"
                        : "border-gray-300 bg-white text-gray-400"
                    }`}
                >
                  {isCompleted ? (
                    <CheckCircleIcon className="w-5 h-5 text-white" />
                  ) : isActive ? (
                    <MinusIcon className="w-3 h-3 text-blue-500" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  )}
                </div>

                {/* Line connector */}
                {index < steps.length - 1 && (
                  <div
                    className={`h-6 w-0.5 ${isCompleted ? "bg-blue-500" : "bg-gray-300"
                      }`}
                  ></div>
                )}
              </div>

              {/* Step label */}
              <span
                className={`text-sm mt-1 ${isCompleted
                    ? "text-gray-700 font-medium"
                    : isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-500"
                  }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
