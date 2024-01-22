import { Currency, type Action, type State } from "@/components/common/types";
import { useReducer } from "react";

const initialState: State = {
    currencies: [],
    loading: false,
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_CURRENCIES":
            return { ...state, currencies: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export const useStore = () => {
    const [{ currencies, loading }, dispatch] = useReducer(reducer, initialState);

    const setCurrencies = (payload: Currency[]) => {
        dispatch({ type: "SET_CURRENCIES", payload });
    };

    const setIsLoading = (payload: boolean) => {
        dispatch({ type: "SET_LOADING", payload });
    };

    return {
        currencies,
        setCurrencies,
        loading,
        setIsLoading,
    };
};
