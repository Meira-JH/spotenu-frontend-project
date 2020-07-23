const initialState = {
    content: "music",
    users: [],
}

const users = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_CONTENT' : {
            return{
                ...state, content: action.payload.content
            }
        }
        default:
            return state;
    }
}

export default users