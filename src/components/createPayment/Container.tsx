import React, { FC } from "react";

interface Props {
    title: string;
    children: React.ReactNode;
}
export const Container: FC<Props> = ({ title, children }) => {
    return (
        <div className="w-11/12 flex flex-col items-center justify-between my-auto p-8 bg-white rounded-2xl container-shadow border border-[#F5F5F5] md:w-[640px]">
            <h1 className="text-darker text-3xl font-bold">{title}</h1>
            {children}
        </div>
    );
};