const initialState = {
    currentUser: undefined,
    users: [],
    musics: [],
    genres:[],
    albumsByGenre: [],
    albumsMusic: [],
    albumRender: undefined,
    content: "music",
    error: undefined,
}

const users = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_CURRENT_USER' : {
            return{
                ...state, currentUser: action.payload.currentUser
            }
        }
        case 'SET_ERROR' : {
            return{
                ...state, error: action.payload.error
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
        case 'SET_ALBUMS_BY_GENRE' : {
            return{
                ...state, albumsByGenre: action.payload.albumsByGenre
            }
        }
        case 'SET_ALBUMS_MUSIC' : {
            return{
                ...state, albumsMusic: action.payload.albumsMusic
            }
        }
        case 'SET_ALBUM_RENDER' : {
            return{
                ...state, albumRender: action.payload.albumRender
            }
        }
        default:
            return state;
    }
}

export default users