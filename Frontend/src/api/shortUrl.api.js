import axiosInstance from "../utils/axiosInstance";

export const createShortUrl = async (url, customSlug = "") => {
    const { data } = await axiosInstance.post("/api/create-url", { url, customSlug });
    return data;
};