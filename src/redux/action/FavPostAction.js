import { ADD_FAV_POST, DELETE_FAV_POST } from "./Types";

export const addFavPost = (post) => (
    {
        type: ADD_FAV_POST,
        data: post
    }
);

export const deletePost = (id) => (
    {
        type: DELETE_FAV_POST,
        key: id
    }
)
