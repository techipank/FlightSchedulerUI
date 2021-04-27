
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';
import { RootState, RootActions } from '../store';
import { Post} from '../reducers/postsReducer';
import { AxiosResponse } from 'axios';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;
export enum PostsActionTypes {
    
    FETCH_POST = 'FETCH_POST',
    FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
    FETCH_POST_FAIL = 'FETCH_POST_FAIL'
}


// FETCH POST

interface FetchPost {
    type: PostsActionTypes.FETCH_POST;
}

interface FetchPostSuccess {
    type: PostsActionTypes.FETCH_POST_SUCCESS;
    payload: Post;
}

interface FetchPostFail {
    type: PostsActionTypes.FETCH_POST_FAIL;
}

export const fetchPost = (source:string,destination:string): ThunkResult<void> => async dispatch => {
    console.log('Action Callling')
    handleFetchPost(dispatch);
    try {
        const response: AxiosResponse<Post> = await axios.get(`http://localhost:8080/booking/`+source+`/`+destination);
        ///${source}/${destination}
        console.log(response);
        handleFetchPostSuccess(dispatch, response.data);
    } catch (e) {
        handleFetchPostFail(dispatch);
    }
};




export const handleFetchPost = (dispatch: Dispatch<FetchPost>) => {
    dispatch({ type: PostsActionTypes.FETCH_POST });
};

const handleFetchPostSuccess = (
    dispatch: Dispatch<FetchPostSuccess>,
    response: Post
) => {
    dispatch({
        type: PostsActionTypes.FETCH_POST_SUCCESS,
        payload: response
    });
};

const handleFetchPostFail = (dispatch: Dispatch<FetchPostFail>) => {
    dispatch({
        type: PostsActionTypes.FETCH_POST_FAIL
    });
};


export type PostsAction =
    | FetchPost
    | FetchPostSuccess
    | FetchPostFail;
