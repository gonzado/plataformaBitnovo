import React, { FC } from "react";

interface Props {
  direction: "up" | "down";
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
}

export const ChevronIcon: FC<Props> = ({
  direction,
  width = 20,
  height = 20,
  strokeWidth = 1,
  className,
}) => {
  const arrowDirection = direction === "up" ? "rotate-180" : "";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${arrowDirection} ${className}`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#000000"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
