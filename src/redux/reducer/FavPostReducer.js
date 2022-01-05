import { ADD_FAV_POST, DELETE_FAV_POST } from "../action/Types"

const initialState = {
    favPostList: []
}

const FavPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV_POST:
            return {
                ...state,
                // favPostList: action.data.map((post) => post.id=== action.key)
                favPostList: state.favPostList
            }

        case DELETE_FAV_POST:
            return {
                ...state,
                favPostList: state.favPostList.filter((post) => 
                    post.id !== action.key
                )
            }

        default:
            return state

    }
}

export default FavPostReducer