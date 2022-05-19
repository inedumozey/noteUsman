import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NotesProvider } from './context/Context'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
      <NotesProvider>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </NotesProvider>
  </Router>,
  document.getElementById('root')
);
