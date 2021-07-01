import api from './api';

const apprenantService = {
    getAll: async () => {
        return await api.get('/apprenants');
    },
    getById: async (id) => {
        return await api.get('/apprenants/' + id);
    },
    // other service method
    addStudent: async (firstname,lastname) => {
        return await api.post('/apprenants/' , {firstname,lastname});
    },
    deleteStudent: async (id) => {
        return await api.delete('/apprenants/'+ id  );
    }
    // other service method
}

export default apprenantService;