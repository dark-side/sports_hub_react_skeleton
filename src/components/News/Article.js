import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Share as ShareIcon } from '@mui/icons-material'; // Material UI icon import
import './article.scss'; // Assuming the SCSS file is named Article.scss

const Article = ({ article }) => {
  const location = useLocation();

  if (!article) {
    return null;
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString('en-GB'); // Format the date as 'dd.MM.yyyy'

  return (
    <div className="article-container">
      <img className="photo" src={article.image_url} alt="Main article" />
      <div className="info">
        <div className="publish">Published / {formattedDate}</div>
        <div className="title">{article.title}</div>
        <div className="body">{article.short_description}</div>

        {location.pathname.includes('article') ? (
          <Link className="share" to="/share">
            <ShareIcon aria-hidden="false" aria-label="Share" />
            <span>Share</span>
          </Link>
        ) : (
          <Link className="more" to={`/article/1`}>
            More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Article;
