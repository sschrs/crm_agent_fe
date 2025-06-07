import api from "./api";

export const invokeGraph = async (data) => {
    return api.post("/invoke", data)
}