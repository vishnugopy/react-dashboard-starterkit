const themeReducer = (state, action) => {

    const { type } = action;

    switch (type) {
        case 'DEFAULT':
            return {
                ...state,
                partials: '#3f51b5',
                color: 'whitesmoke',
                body: '#afadce',
                nav: 'aliceblue'
            }
        case 'DARK':
            return {
                ...state,
                partials: '#000833',
                color: 'whitesmoke',
                body: 'darkslateblue',
                nav: '#0e0d19'
            }
        default:
            throw new Error('user store action not found');
    }
}

export default themeReducer;