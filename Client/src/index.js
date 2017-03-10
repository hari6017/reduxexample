import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allUsersData from './reducers/index.js';
import App from './components/app.js'

const store = createStore(allUsersData);

export default class Hari extends React.Component{

  render()
  {
      console.log('hari');
    return(
      <h1>
      Hai hari
      </h1>
    )
  }
}

ReactDOM.render(<Provider store = {store}>
  <App />
  </Provider>,document.getElementById('root'));
