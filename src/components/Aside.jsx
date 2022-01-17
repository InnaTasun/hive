import back from '../images/background.jpg';
import styled from 'styled-components';

function Aside(props) {
  const { className } = props;
  return (
    <div className={`${className} aside`}>
      <div className='aside--label-right'>
        Join Hive! Be part of the Bee team!
      </div>
      <div className='aside--label-left'>
        Hundred posts, more than five thousand photos
      </div>
      <div className='aside--label-right'>
        Ability to manage tasks using the Todo list
      </div>
      <div className='aside--label-left'>
        Be aware of new events! Stay in the stream!
      </div>
    </div>
  );
}

const StyledAside = styled(Aside)`
  box-shadow: 5px 5px 5px #613509;
  background-image: url(${back});
  background-size: 100%;
  padding: 50px;
  font-size: 2em;
  font-weight: bold;

  .aside {
    &--label-right {
      margin: 50px 0;
    }

    &--label-left {
      margin: 20px 0;
      text-align: right;
    }
  }
`;

export default StyledAside;
