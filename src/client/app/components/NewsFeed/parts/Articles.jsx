import React, { PropTypes } from 'react';
import moment from 'moment';

const Articles = ({ activeArticles = [], logoColors = {} }) => (
  <ul className="articles">
    {
      activeArticles.map((article, index) => {
        const sourceStyle = { backgroundColor: logoColors[article.source] };

        return (
          <li className="article" key={index}>
            {
              <div className="article__img-wrap">
                <img className="article__img" src={article.urlToImage} alt="img" />
                <span className="article__source" style={sourceStyle}>
                  {article.source}
                  <span className="test"></span>
                  <span className="test"></span>
                  <span className="test"></span>
                </span>
                {
                  article.publishedAt &&
                  <span className="article__date">
                    {moment(article.publishedAt).format('ddd D MMM')}
                    <span className="article__date__time">{moment(article.publishedAt).format('hA')}</span>
                  </span>
                }
              </div>
            }
            <div className="article__details">
              <a href={article.url} className="article__details__title">
                {article.title}
              </a>
              <p className="article__details__description">{article.description}</p>
            </div>
          </li>
        );
      })
    }
  </ul>
);

Articles.propTypes = {
  activeArticles: PropTypes.array.isRequired,
  logoColors: PropTypes.object.isRequired,
};

export default Articles;
