import api from './api';

const formateurService = {
    getAll: async () => {
        return await api.get('/formateurs');
    },
    getById: async (id) => {
        return await api.get('/formateurs/' + id);
    },
    addFormateur: async (firstname,lastname,stacks) => {
        return await api.post('/formateurs/' , {firstname,lastname,stacks});
    },
    // other service method
}

export default formateurService;