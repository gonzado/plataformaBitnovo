import React, { FC } from "react";

interface Props {
    type: "button" | "submit";
    children: string;
    rounded?: boolean;
    className?: string;
    onClick?: () => void;
}

export const Button: FC<Props> = ({
    type,
    children,
    rounded,
    className,
    onClick,
}) => {
    const borderRadius = rounded ? "rounded-md" : "rounded-none";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-4 px-6 ${borderRadius} ${className}`}
        >
            {children}
        </button>
    );
};