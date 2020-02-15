const initialState = {
    age: 30
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === 'AGE_UP') {
        newState.age++;
    }
    if (action.type === 'AGE_DOWN') {
        newState.age--;
    }

    return newState;
};

export default reducer;