import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUsers,
  setCurrentUser,
  hidePhotos,
  hideAside,
} from '../actions/actions';
import { URL_USERS } from '../constants/urls';
import styled from 'styled-components';

function UsersList(props) {
  const { className } = props;

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersList);
  const isEmpty = Object.keys(users).length === 0;

  useEffect(() => dispatch(setUsers(URL_USERS)), []);

  if (isEmpty) return null;

  function onClick(event) {
    const userId = event.target.value;
    dispatch(hidePhotos());
    dispatch(hideAside());
    dispatch(setCurrentUser(`${URL_USERS}/${userId}`));
  }

  const usersList = users.map((user) => (
    <li key={user.id}>
      <button className='users-list--user' onClick={onClick} value={user.id}>
        {user.name}
      </button>
    </li>
  ));

  return <ul className={`${className} users-list`}>{usersList}</ul>;
}

const StyledUsersList = styled(UsersList)`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-flow: column wrap;
  height: 65%;

  .users-list {
    &--user {
      padding: 0 10px;
      width: 200px;
      background-color: transparent;
      color: #ac8140;
      border: none;
      text-align: left;
      font-size: 1.05em;

      &:hover {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default StyledUsersList;
