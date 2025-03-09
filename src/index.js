import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'
import Article from './components/Article/Article';
import News from './components/News/News';
import Login from './components/LogIn/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="article/:id" element={<Article />} ></Route>
        </Route>
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Login />} />
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
);
