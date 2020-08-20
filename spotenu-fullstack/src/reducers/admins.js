const initialState = {
    bandsToApprove: [],
    adminsToApprove: [],
    adminsGenres: [],
    createGenre: false
}

const admins = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type){
        case 'SET_BANDS_TO_APPROVE' : {
            return{
                ...state, bandsToApprove: action.payload.bandsToApprove
            }
        }
        case 'SET_ADMINS_TO_APPROVE' : {
            return{
                ...state, adminsToApprove: action.payload.adminsToApprove
            }
        }
        case 'SET_ADMIN_GENRES' : {
            return{
                ...state, adminsGenres: action.payload.adminsGenres
            }
        }
        case 'SET_CREATE_GENRE' : {
            return{
                ...state, createGenre: action.payload.createGenre
            }
        }

        default:
            return state;
    }
}

export default admins