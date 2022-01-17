import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserAlbums,
  setAlbumPhotos,
  showPhotos,
  hideComments,
} from '../actions/actions';
import { URL_USERS, URL_ALBUMS } from '../constants/urls';
import hive from '../images/hive.jpeg';
import Photos from './Photos';
import styled from 'styled-components';

function Albums(props) {
  const { className } = props;

  const dispatch = useDispatch();
  const { currentUser, userAlbums } = useSelector((state) => state.profile);
  const { photosShown } = useSelector((state) => state.album);
  const isEmpty = Object.keys(userAlbums).length === 0;
  const userId = currentUser.id;

  // eslint-disable-next-line
  useEffect(
    () => dispatch(setUserAlbums(`${URL_USERS}/${userId}/albums`)),
    [userId]
  );

  if (isEmpty) return null;

  function onClick(event) {
    const albumId = event.target.value;
    dispatch(setAlbumPhotos(`${URL_ALBUMS}/${albumId}/photos`));
    dispatch(hideComments());
    dispatch(showPhotos());
  }

  const albumsList = userAlbums.map((album) => (
    <li key={album.id}>
      <button className='albums-list--album' onClick={onClick} value={album.id}>
        {album.title}
      </button>
    </li>
  ));

  return (
    <div className={className}>
      <ul className='albums-list'>{albumsList}</ul>
      {photosShown ? <Photos /> : null}
    </div>
  );
}

const StyledAlbums = styled(Albums)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  .albums-list {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0;

    &--album {
      width: 150px;
      height: 100px;
      border: solid 1px #73400c;
      margin: 10px;
      box-shadow: 5px 5px 5px #73400c;
      background-image: url(${hive});
      padding: 5px;
      color: #c4934a;

      &:hover {
        cursor: pointer;
      }
      &:active {
        box-shadow: none;
      }
    }
  }
`;

export default StyledAlbums;
