import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  currentUser: {},
  userTodos: {},
  userPosts: {},
  userAlbums: {},
};

export default function profileReduser(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ACTIONS.SET_USER_TODOS:
      return {
        ...state,
        userTodos: action.payload,
      };
    case ACTIONS.SET_USER_ALBUMS:
      return {
        ...state,
        userAlbums: action.payload,
      };
    case ACTIONS.SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
      };
    default:
      return state;
  }
}
