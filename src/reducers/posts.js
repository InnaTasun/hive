import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  currentPost: {},
  postComments: {},
  commentsShown: false,
};

export default function postReduser(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_POST_COMMENTS:
      return {
        ...state,
        postComments: action.payload,
      };
    case ACTIONS.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case ACTIONS.SHOW_COMMENTS:
      return {
        ...state,
        commentsShown: true,
      };
    case ACTIONS.HIDE_COMMENTS:
      return {
        ...state,
        commentsShown: false,
        currentPost: {},
        postComments: {},
      };
    default:
      return state;
  }
}
