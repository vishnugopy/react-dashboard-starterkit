import api from './api';

const promoService = {
    getAll: async () => {
        return await api.get('/promos');
    },
    getById: async (id) => {
        return await api.get('/promos/' + id);
    },
    // other service method
    addPromo: async (name) => {
        return await api.post('/promos/' , {name});
    },
    deletePromo: async (id) => {
        return await api.delete('/promos/' + id);
    }
}

export default promoService;