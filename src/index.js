import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import RoomContextProvider from './components/others/RoomContext';
ReactDOM.render(
  <RoomContextProvider>
    <Router>
      <App />
    </Router>
  </RoomContextProvider>,
  document.getElementById('root')
);


