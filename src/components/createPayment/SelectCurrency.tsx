import React, { FC, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { type Currency } from "@/types";
import { CheckIcon, ChevronIcon } from "@/components/icons";
import { CurrencyLogo, SearchBar } from "./";

interface Props {
    currencies: Currency[];
}

export const SelectCurrency: FC<Props> = ({ currencies }) => {
    const hasCurrencies = currencies.length > 0;

    const [selected, setSelected] = useState(currencies[0]);
    const [filteredList, setFilteredList] = useState<Currency[]>([...currencies]);

    const onSearch = (value: string) => {
        const filteredCurrencies = filteredList.filter((currency) =>
            currency.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredList(filteredCurrencies);
    };

    return (
        hasCurrencies && (
            <div className="flex flex-col gap-1">
                <Listbox value={selected} onChange={setSelected}>
                    <Listbox.Label className="text-xs text-darker font-semibold">
                        Seleccionar moneda
                    </Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full flex items-center gap-2 cursor-default rounded-md bg-white py-4 px-3 pr-10 text-left border focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-300 sm:text-sm">
                            <CurrencyLogo
                                alt={`${selected?.name} logo`}
                                src={selected?.image}
                                width={30}
                                height={30}
                            />
                            <span className="block truncate text-darker">
                                {selected?.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronIcon direction="down" className="mr-2" />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm md:max-h-96">
                                <div className="pt-3 px-5">
                                    <SearchBar onSearch={onSearch} />
                                </div>
                                {filteredList.map((currency, index) => {
                                    const currencyKey = `${index}-${currency.name}`;
                                    return (
                                        <Listbox.Option
                                            key={currencyKey}
                                            className={({ active }) =>
                                                `relative cursor-default select-none text-darker py-2 px-4 my-4 md:px-8 ${active && "bg-neutral-100"
                                                }`
                                            }
                                            value={currency}
                                        >
                                            {({ selected }) => (
                                                <div className="flex items-center justify-between">
                                                    <section className="flex gap-2">
                                                        <CurrencyLogo
                                                            alt={`${currency?.name} logo`}
                                                            src={currency.image}
                                                            width={40}
                                                            height={40}
                                                        />
                                                        <div className="flex flex-col">
                                                            <span
                                                                className={`truncate ${selected ? "font-bold" : "font-semibold"
                                                                    }`}
                                                            >
                                                                {currency.name}
                                                            </span>
                                                            <span className="text-neutral-500 text-xs font-light">
                                                                {currency.blockchain}
                                                            </span>
                                                        </div>
                                                    </section>
                                                    {selected && <CheckIcon />}
                                                </div>
                                            )}
                                        </Listbox.Option>
                                    );
                                })}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        )
    );
};