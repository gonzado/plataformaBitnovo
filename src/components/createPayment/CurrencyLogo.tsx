import Image from "next/image";
import React, { FC } from "react";

interface Props {
    alt: string;
    src: string;
    width: number;
    height: number;
}

export const CurrencyLogo: FC<Props> = ({ alt, src, width, height }) => {
    return <Image alt={alt} src={src} width={width} height={height} />;
};