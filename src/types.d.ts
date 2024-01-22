export type Symbol =
    | "BCH"
    | "BTC"
    | "ETH"
    | "XRP"
    | "USDC";

export type Blockchain =
    | "BCH"
    | "BTC"
    | "ETH"
    | "XRP"
    | "ETH";

export interface Currency {
    symbol: Symbol;
    name: string;
    min_amount: string;
    max_amount: string;
    image: string;
    blockchain: Blockchain;
}

export interface State {
    currencies: Currency[];
    loading: boolean;
}

export type Action =
    | { type: "SET_CURRENCIES"; payload: Currency[] }
    | { type: "SET_LOADING"; payload: boolean };