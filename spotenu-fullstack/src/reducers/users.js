const initialState = {
    currentUser: undefined,
    users: [],
}

const users = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_USER' : {
            return{
                ...state, user: action.payload
            }
        }
        default:
            return state;
    }
}

export default users