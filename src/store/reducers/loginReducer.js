const initialState = {
    data: []
}

const LoginReducer = (state = initialState, action) => {

    if (action.type === "login_action") {
        return {
            ...state,
            data: action.data
        }
    }

    if (action.type === "invalid_data") {
        return {
            ...state,
            data: action.data
        }
    }
    return state;
}

export default LoginReducer;