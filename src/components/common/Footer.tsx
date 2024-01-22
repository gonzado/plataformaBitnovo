import Image from "next/image";
import React from "react";
import { FooterIcon } from "@/components/icons";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full flex items-center justify-center py-8 px-12 gap-4">
            <FooterIcon />
            <span className="h-[25px] w-[1px] bg-slate-300"></span>
            <span className="text-xs text-slate-300 font-semibold text-center">
                © {currentYear} Bitnovo. All rights reserved.
            </span>
        </footer>
    );
};