import api from "./api";

export const newKnowledgeBase = async (formData) => {
  return api.post("/collections", formData);
};

export const fetchKnowledgeBaseNames = () =>
  api.get("/collection_names");
