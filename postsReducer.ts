import _ from 'lodash';
import { PostsAction, PostsActionTypes } from '../actions/postsActions';
import { Reducer } from 'redux';

export interface Post {
    id: number;
    title: string;
    author: string;
}

export interface Posts {
    [id: number]: Post;
}

export interface PostsState {
    items: any[];
    loading: boolean;
    error: String | null
}

const initialState = {
    items: [],
    loading: false,
    error: null
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
     
        case PostsActionTypes.FETCH_POST_SUCCESS:
        //const { id } = action.payload;
        console.log('Action',action.payload);
        return {
            ...state,
            items: state.items.concat(action.payload),
            loading: false
        };
       
        default:
            return state;
    }
};
