import { combineReducers } from 'redux';
import usersList from './usersList';
import profile from './profile';
import album from './album';
import posts from './posts';
import aside from './aside';

export default combineReducers({
  usersList,
  profile,
  album,
  posts,
  aside,
});
