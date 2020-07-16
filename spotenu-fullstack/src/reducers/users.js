const initialState = {
    users: [],
}

const users = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_USERS' : {
            return{
                ...state, usersList: action.payload
            }
        }
        default:
            return state;
    }
}

export default users