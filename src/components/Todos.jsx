import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTodos, hideComments, hidePhotos } from '../actions/actions';
import { URL_USERS } from '../constants/urls';
import styled from 'styled-components';

function Todos(props) {
  const { className } = props;

  const dispatch = useDispatch();
  const { currentUser, userTodos } = useSelector((state) => state.profile);
  const isEmpty = Object.keys(userTodos).length === 0;
  const userId = currentUser.id;

  useEffect(
    () => dispatch(setUserTodos(`${URL_USERS}/${userId}/todos`)),
    [userId]
  );

  if (isEmpty) return null;

  function onClick() {
    dispatch(hideComments());
    dispatch(hidePhotos());
  }

  const todosList = userTodos.map((task) => (
    <li className='todo-list--task' key={task.id}>
      <input
        className='todo-list--checkbox'
        type='checkbox'
        defaultChecked={task.completed}
        onClick={onClick}
      />
      <span className='todo-list--checkmark'></span>
      <span className='todo-list--title'>{` ${task.title}`}</span>
    </li>
  ));

  return <ul className={`${className} todo-list`}>{todosList}</ul>;
}

const StyledTodos = styled(Todos)`
  border: solid 1px #73400c;
  height: 200px;
  padding: 2px 10px;
  overflow: auto;
  background-color: #c4934a;
  box-shadow: 5px 5px 5px #73400c;

  &::-webkit-scrollbar {
    background-color: #ac8140;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #724a22;
    border: solid 1px #523518;
  }

  .todo-list {
    &--task {
      padding: 2px 5px 2px 20px;
      position: relative;
    }

    &--checkbox {
      position: absolute;
      left: 0;
      opacity: 0;
      z-index: 1;

      &:checked + span:after {
        display: block;
      }
    }

    &--checkmark {
      position: absolute;
      left: 0;
      height: 15px;
      width: 15px;
      background-color: #ac8140;
      border: solid 1px #73400c;

      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 4px;
        top: 0;
        width: 3px;
        height: 8px;
        border: solid black;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }
`;

export default StyledTodos;
