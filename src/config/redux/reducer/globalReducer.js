const initialState = {
    name : null,
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
            return {
                ...state,
                name: 'Alghibrany'
            }
        }

    return state;
}

export default globalReducer