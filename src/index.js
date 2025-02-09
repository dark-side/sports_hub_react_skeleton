import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewLayout from './Layout'
import News from './components/News/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<NewLayout />}>
          <Route index element={<News />} />
          <Route path="feed" element={<News></News>} ></Route>
        </Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
);
