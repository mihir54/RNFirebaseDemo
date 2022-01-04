import { ADD_FAV_POST } from "../action/Types"

const initialState = {
    favPostList: []
}

const FavPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV_POST:
            return {
                ...state,               
                favPostList: action.data
            }

        default:
            return state

    }
}

export default FavPostReducer