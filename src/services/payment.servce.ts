import { CURRENCIES_URL, ORDERS_URL } from "@/constants";
import { httpClientPlugin as http } from "@/plugins/http-client.plugin";

export const getCurrencies = async () => {
    const response = await http.get(CURRENCIES_URL);
    return response;
};

export const postOrder = async (
    amount: number,
    currency: string,
    notes: string
) => {
    const body = {
        expected_output_amount: amount,
        input_currency: currency,
        notes,
    };
    const response = await http.post(ORDERS_URL, { body });
    return response;
};