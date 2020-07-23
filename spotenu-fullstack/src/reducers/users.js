const initialState = {
    currentUser: undefined,
    users: [],
}

const users = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_CURRENT_USER' : {
            return{
                ...state, currentUser: action.payload.currentUser
            }
        }
        default:
            return state;
    }
}

export default users