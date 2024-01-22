import React, { FC } from "react";
import { Footer } from "./";

interface Props {
    children: React.ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-between">
            {children}
            <Footer />
        </section>
    );
};