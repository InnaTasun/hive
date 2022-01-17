import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserPosts,
  setCurrentPost,
  setPostComments,
  hidePhotos,
  showComments,
} from '../actions/actions';
import { URL_USERS, URL_POSTS } from '../constants/urls';
import Comments from './Comments';
import styled from 'styled-components';

function Posts(props) {
  const { className } = props;

  const dispatch = useDispatch();
  const { currentUser, userPosts } = useSelector((state) => state.profile);
  const { currentPost, commentsShown } = useSelector((state) => state.posts);
  const isEmpty = Object.keys(userPosts).length === 0;
  const userId = currentUser.id;

  useEffect(
    () => dispatch(setUserPosts(`${URL_USERS}/${userId}/posts`)),
    [userId]
  );

  if (isEmpty) return null;

  function onClick(event) {
    const postId = event.currentTarget.value;
    dispatch(setCurrentPost(`${URL_POSTS}/${postId}`));
    dispatch(setPostComments(`${URL_POSTS}/${postId}/comments`));
    dispatch(hidePhotos());
    dispatch(showComments());
  }

  const postsList = userPosts.map((post) => (
    <li
      className='posts-list--post'
      value={post.id}
      key={post.id}
      onClick={onClick}
    >
      <div className='posts-list--text'>
        <h4>Topic: {post.title}</h4>
        <p>{post.body}</p>
      </div>
      {commentsShown && post.id === currentPost.id ? (
        <Comments>Comments here</Comments>
      ) : null}
    </li>
  ));

  return <ul className={`${className} posts-list`}>{postsList}</ul>;
}

const StyledPosts = styled(Posts)`
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0;

  .posts-list {
    &--post {
      width: 47%;
      text-align: justify;
      margin: 10px 5px;
      position: relative;
    }

    &--text {
      cursor: pointer;
      height: 100%;
      padding: 10px;
      border: solid 1px #73400c;
      box-shadow: 5px 5px 5px #73400c;
      background-color: #c4934a;

      &:active {
        box-shadow: none;
      }
    }
  }
`;

export default StyledPosts;
