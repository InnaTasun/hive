import { useDispatch, useSelector } from 'react-redux';
import { hideComments } from '../actions/actions';
import styled from 'styled-components';

function Comments(props) {
  const { className } = props;

  const dispatch = useDispatch();
  const { postComments } = useSelector((state) => state.posts);
  const isEmpty = Object.keys(postComments).length === 0;

  if (isEmpty) return null;

  function onClick() {
    dispatch(hideComments());
  }

  const commentsList = postComments.map((comment) => (
    <li key={comment.id}>
      <div className='comments--from'>From: {comment.email}</div>
      <div className='comments--comment'>
        <h4>Title: {comment.name}</h4>
        <p>{comment.body}</p>
      </div>
    </li>
  ));

  return (
    <ul
      className={`${className} comments-list`}
      onClick={(event) => event.stopPropagation()}
    >
      <h2>Comments:</h2>
      <button className='comments--btn' type='button' onClick={onClick}>
        X
      </button>
      {commentsList}
    </ul>
  );
}

const StyledComments = styled(Comments)`
  list-style-type: none;
  background-color: #e0a752;
  border: solid 1px #73400c;
  box-shadow: 7px 7px 5px #73400c;
  z-index: 1;
  padding: 5px 10px;
  font-size: 0.9em;
  position: absolute;
  margin: -7px 0 0 7px;
  width: 100%;

  &:active {
    box-shadow: none;
  }

  .comments {
    &--from {
      font-size: 0.9em;
      font-style: italic;
      padding-left: 10px;
    }

    &--comment {
      margin-bottom: 10px;
    }

    &--btn {
      position: absolute;
      top: 10px;
      right: 5px;
      font-weight: bold;
      border: none;
      background-color: transparent;
    }
  }
`;

export default StyledComments;
