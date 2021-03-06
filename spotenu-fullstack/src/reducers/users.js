const initialState = {
    currentUser: undefined,
    users: [],
    musics: [],
    genres:[],
    content: "music",
}

const users = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_CURRENT_USER' : {
            return{
                ...state, currentUser: action.payload.currentUser
            }
        }
        case 'SET_CURRENT_USER_ID' : {
            return{
                ...state, currentUserId: action.payload.currentUserId
            }
        }
        case 'SET_CONTENT' : {
            return{
                ...state, content: action.payload.content
            }
        }
        case 'SET_MUSICS' : {
            return{
                ...state, musics: action.payload.musics
            }
        }
        case 'SET_GENRES' : {
            return{
                ...state, genres: action.payload.genres
            }
        }
        default:
            return state;
    }
}

export default users