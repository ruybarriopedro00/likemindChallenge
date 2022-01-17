import axios from "axios";

export const getQuotes = async () => {
    try {
        const response = await axios.get("http://localhost:3001/quotes");
        return response.data.quotes;
    } catch (error) {}
};

export const getQuoteById = async (_id) => {
    try {
        const response = await axios.get("http://localhost:3001/quotes/" + _id);
        return response.data;
    } catch (error) {
        console.log("Something is wrong", error);
    }
};

export default getQuotes;
