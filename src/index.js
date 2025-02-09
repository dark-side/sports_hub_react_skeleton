import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import NewsArticle from './page/NewsArticle';
import NewLayout from './Layout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<NewLayout />}>
          <Route index element={<App />} />
          <Route path="/news/:id" element={<NewsArticle />} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
);
