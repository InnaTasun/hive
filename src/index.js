import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import { createGlobalStyle } from 'styled-components';
import back from './images/back.jpeg';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      font-family: 'Times New Roman', serif;
    }

  body {
    background-image: url(${back})
  }
`;

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
