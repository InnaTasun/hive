import mainLogo from '../images/mainLogo.png';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UsersList from './UsersList';
import Profile from './Profile';
import Aside from './Aside';

function App(props) {
  const { className } = props;

  const { asideShown } = useSelector((state) => state.aside);

  return (
    <div className={`${className} content`}>
      <header className='content--header header'>
        <div className='header--users'>
          <h2>Our Bee team</h2>
          <br />
          <UsersList />
        </div>
        <img className='header--logo' src={mainLogo} alt='main logo' />
      </header>
      <div>{asideShown ? <Aside /> : <Profile />}</div>
      <footer className='content--footer'>
        Created by Inna Tasun &copy; 2022
      </footer>
    </div>
  );
}

const StyledApp = styled(App)`
  min-height: calc(100vh - 40px);
  max-width: 1000px;
  margin: 0 auto;
  background-color: #ac8140;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  .content {
    &--header {
      background-color: black;
      box-shadow: 5px 5px 5px #422406;
      height: 190px;
    }

    &--footer {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    &--users {
      width: 400px;
      text-align: center;
      color: #ac8140;
      margin: 10px auto;
      padding: 5px;
    }

    &--logo {
      display: none;
      margin: 0;
      height: 100%;
    }

    @media (min-width: 780px) {
      &--logo {
        display: block;
      }
    }
  }
`;

export default StyledApp;
