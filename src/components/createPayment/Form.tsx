import React, { FC } from "react";
import { Button, Input, SelectCurrency } from ".";
import { type Currency } from "@/components/common/types";

interface Props {
    currencies: Currency[];
}

export const Form: FC<Props> = ({ currencies }) => {
    return (
        <form className="w-full flex flex-col gap-8">
            <Input
                type="number"
                label="Importe a pagar"
                placeholder="Añade importe a pagar"
                required={true}
            />
            <SelectCurrency currencies={currencies} />
            <Input
                type="text"
                label="Concepto"
                placeholder="Añade descripción del pago"
            />
            <Button type="submit" className="bg-blue-700 text-white" rounded>
                Continuar
            </Button>
        </form>
    );
};