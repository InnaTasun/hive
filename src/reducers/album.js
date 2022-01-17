import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  albumPhotos: {},
  currentPhoto: {},
  photosShown: false,
};

export default function albumReduser(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_ALBUM_PHOTOS:
      return {
        ...state,
        albumPhotos: action.payload,
        currentPhoto: action.payload[0],
      };
    case ACTIONS.SET_CURRENT_PHOTO:
      return {
        ...state,
        currentPhoto: action.payload,
      };
    case ACTIONS.SHOW_PHOTOS:
      return {
        ...state,
        photosShown: true,
      };
    case ACTIONS.HIDE_PHOTOS:
      return {
        ...state,
        photosShown: false,
        albumPhotos: {},
        currentPhoto: {},
      };
    default:
      return state;
  }
}
