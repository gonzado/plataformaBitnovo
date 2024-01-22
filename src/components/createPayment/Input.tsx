import React, { FC } from "react";

interface Props {
    label: string;
    type: "text" | "number";
    placeholder: string;
    required?: boolean;
}

export const Input: FC<Props> = ({ label, type, placeholder, required }) => {
    const inputId = label.toLowerCase().replace(" ", "-");

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={inputId} className="text-xs text-darker font-semibold">
                {label}
            </label>
            <input
                id={inputId}
                type={type}
                placeholder={placeholder}
                className="w-full border rounded-md py-4 px-3 placeholder:text-neutral-500"
                required={required}
                autoComplete="off"
            />
        </div>
    );
};