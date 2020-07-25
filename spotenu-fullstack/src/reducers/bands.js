const initialState = {
    users: [],
    bandAlbums: [],
    bandMusics: [],
    musics: []
}

const users = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_BAND_ALBUMS' : {
            return{
                ...state, bandAlbums: action.payload.bandAlbums
            }
        }
        case 'SET_BAND_MUSICS' : {
            return{
                ...state, bandMusics: action.payload.bandMusics
            }
        }
        case 'SET_MUSICS' : {
            return{
                ...state, musics: action.payload.musics
            }
        }
        default:
            return state;
    }
}

export default users