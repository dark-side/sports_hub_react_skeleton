import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './card.scss';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article?.id}`} className="article-card">
      <img className="photo" src={article?.image_url} alt="Article" />
      <div className="article-wrapper specific">
        <div className="article-title specific">{article?.title}</div>
        <div className="article-content">{article?.short_description}</div>
      </div>
    </Link>
  );
};

export default ArticleCard;
