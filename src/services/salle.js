import api from "./api";

const salleService = {
  getAll: async () => {
    return await api.get("/salles");
  },
  getById: async (id) => {
    return await api.get("/salles/" + id);
  },
  addSalle: async (name, capacity) => {
    return await api.post("/salles/", { name, capacity });
  },
  // other service method
};

export default salleService;
