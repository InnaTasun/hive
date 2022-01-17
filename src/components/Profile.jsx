import { useSelector } from 'react-redux';
import bee from '../images/bee.png';
import styled from 'styled-components';
import Todos from './Todos';
import Posts from './Posts';
import Albums from './Albums';

function Profile(props) {
  const { className } = props;

  const { currentUser } = useSelector((state) => state.profile);
  const isEmpty = Object.keys(currentUser).length === 0;

  if (isEmpty) {
    return null;
  } else {
    return (
      <div className={`${className} profile`}>
        <div>
          <img className='profile--logo' src={bee} alt='bee logo' />
          <h1 className='profile--name'>{currentUser.name}</h1>
          <div className='profile--about'>
            <span>nick:</span> {currentUser.username}
            <br />
            <span>phone:</span> {currentUser.phone} <br />
            <span>email:</span> {currentUser.email}
            <br />
            <span>website:</span> {currentUser.website}
            <br />
            <br />
            <span>company:</span> {currentUser.company.name}
            <br />({currentUser.company.bs})<br />
            <br />
            <span>address:</span> {currentUser.address.city},<br />
            {currentUser.address.street} str, {currentUser.address.suite}
          </div>
        </div>

        <div className='profile--todos'>
          <h2>Todos: </h2>
          <Todos />
        </div>
        <div className='profile--posts'>
          <h2>Posts: </h2>
          <Posts />
        </div>
        <div className='profile--albums'>
          <h2>Albums: </h2>
          <Albums />
        </div>
      </div>
    );
  }
}

const StyledProfile = styled(Profile)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  position: relative;

  .profile {
    &--logo {
      height: 50px;
      position: absolute;
      top: -13px;
    }

    &--name {
      margin-left: 50px;
    }

    &--about {
      margin: 10px;
    }

    &--todos {
      height: 175px;
      margin-top: 10px;
      margin-right: 5px;
    }

    &--posts {
      margin-top: 20px;
    }

    &--albums {
      margin-top: 20px;
    }
  }
`;

export default StyledProfile;
