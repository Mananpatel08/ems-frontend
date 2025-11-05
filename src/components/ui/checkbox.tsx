import React, { FC, useState } from 'react';

type Props = {
    checked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}
const Checkbox: FC<Props> = ({
    checked,
    setChecked
}) => {

    return (
        <label className="flex items-center text-xs cursor-pointer select-none gap-1.5 text-gray-400">
            {/* Hidden native checkbox */}
            <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />

            {/* Custom checkbox */}
            <div
                className={`w-3.5 h-3.5 flex items-center justify-center rounded border transition-colors duration-200
          ${checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}
            >
                {checked && (
                    <svg
                        className="w-3 h-3 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </div>

            {/* Label */}
            Remember Me
        </label>
    );
};

export default Checkbox;
