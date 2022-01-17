import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  users: [],
};

export default function usersListReduser(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
