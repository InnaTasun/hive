import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  asideShown: true,
};

export default function usersListReduser(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.HIDE_ASIDE:
      return {
        ...state,
        asideShown: false,
      };
    default:
      return state;
  }
}
