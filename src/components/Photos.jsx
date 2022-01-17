import { useDispatch, useSelector } from 'react-redux';
import { URL_PHOTOS } from '../constants/urls';
import { setCurrentPhoto, hidePhotos } from '../actions/actions';

import styled from 'styled-components';

function Photos(props) {
  const { className } = props;

  const dispatch = useDispatch();
  const { albumPhotos, currentPhoto } = useSelector((state) => state.album);
  const isEmpty = Object.keys(albumPhotos).length === 0;

  if (isEmpty) return null;

  function changePhoto(event) {
    const photoId = event.target.name;
    dispatch(setCurrentPhoto(`${URL_PHOTOS}/${photoId}`));
  }

  function closePhoto(event) {
    dispatch(hidePhotos());
  }

  const thumbnails = albumPhotos.map((photo) => {
    return (
      <img
        className='photos--thumbnail'
        key={photo.id}
        name={photo.id}
        src={photo.thumbnailUrl}
        alt='thumbnail'
        onClick={changePhoto}
      />
    );
  });

  return (
    <div className={`${className} photos`}>
      <button className='photos--btn' type='button' onClick={closePhoto}>
        X
      </button>
      <img
        className='photos--current-photo'
        src={currentPhoto.url}
        alt='currentPhoto'
      />
      <div className='photos--current-title'>{currentPhoto.title}</div>
      {thumbnails}
    </div>
  );
}

const StyledPhotos = styled(Photos)`
  box-shadow: 5px 5px 5px #73400c;
  border: solid 1px #73400c;
  margin: 10px 5px;
  max-width: 62%;
  padding: 5px;
  text-align: right;
  position: relative;

  .photos {
    &--btn {
      position: absolute;
      top: 0;
      right: 0;
      font-weight: bold;
      border: none;
      background-color: transparent;
    }

    &--current-photo {
      width: 350px;
      float: left;
      margin: 5px 3px;
      border: solid 1px #73400c;
    }

    &--current-title {
      min-height: 43px;
      padding: 3px;
      text-align: center;
      margin: 5px 2px;
    }

    &--thumbnail {
      width: 55px;
      margin: 2px;
      border: solid 1px #73400c;
      box-shadow: 1px 1px 2px #73400c;

      &:active {
        box-shadow: none;
      }
    }
  }
`;

export default StyledPhotos;
