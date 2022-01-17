import * as ACTIONS from '../constants/actionTypes';
import appFetch from '../appFetch';

export function setUsers(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_USERS, payload: data });
  };
}

export function setCurrentUser(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: data });
  };
}

export function setUserTodos(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_USER_TODOS, payload: data });
  };
}

export function setUserAlbums(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_USER_ALBUMS, payload: data });
  };
}

export function setUserPosts(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_USER_POSTS, payload: data });
  };
}

export function setAlbumPhotos(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_ALBUM_PHOTOS, payload: data });
  };
}

export function setCurrentPhoto(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_CURRENT_PHOTO, payload: data });
  };
}

export function setCurrentPost(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_CURRENT_POST, payload: data });
  };
}

export function setPostComments(url) {
  return async (dispatch) => {
    let data = await appFetch(url);
    dispatch({ type: ACTIONS.SET_POST_COMMENTS, payload: data });
  };
}

export function showComments() {
  return { type: ACTIONS.SHOW_COMMENTS };
}

export function hideComments() {
  return { type: ACTIONS.HIDE_COMMENTS };
}

export function showPhotos() {
  return { type: ACTIONS.SHOW_PHOTOS };
}

export function hidePhotos() {
  return { type: ACTIONS.HIDE_PHOTOS };
}

export function hideAside() {
  return { type: ACTIONS.HIDE_ASIDE };
}
