import api from "./api";

export const newKnowledgeBase = async (formData) => {
    return api.post("/collections", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
}