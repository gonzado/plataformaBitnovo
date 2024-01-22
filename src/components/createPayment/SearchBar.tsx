import React, { FC } from "react";
import { SearchIcon } from "../icons";
import { type Currency } from "@/components/common/types";

interface Props {
    onSearch: (value: string) => void;
}

export const SearchBar: FC<Props> = ({ onSearch }) => {
    return (
        <div className="flex items-center rounded-md relative">
            <SearchIcon className="absolute left-3" />
            <input
                type="search"
                placeholder="Buscar"
                className="w-full rounded-md py-3 pl-10 pr-2 ring-1 ring-inset ring-gray-200 placeholder:text-neutral-500"
                required
                autoComplete="off"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};