import { ADD_FAV_POST } from "./Types";

export const addFavPost = (post) => (
    {
        type: ADD_FAV_POST,
        data: post
    }
);
