import axios from "axios";

export const httpClientPlugin = {
    get: async (url: string) => {
        try {
            const { data } = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Device-Id": "9580e3c7-5165-46e3-9969-78598e360787",
                },
            });
            return data;
        } catch (error) {
            console.error("Error in getServerSideProps:", error);
            return [];
        }
    },
    post: async (url: string, data: any) => {
        try {
            const response = await axios.post(url, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Device-Id": "3f52e0ae-6421-4d17-be21-c71d9ac4b0cf",
                },
                data,
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    put: async (url: string, data: any) => {
        throw new Error("Not implemented yet");
    },
    patch: async (url: string, data: any) => {
        throw new Error("Not implemented yet");
    },
    delete: async (url: string) => {
        throw new Error("Not implemented yet");
    },
};