const initialState = {
    users: [],
}

export default users = (state = initialState, action) => {
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
