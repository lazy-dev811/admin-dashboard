import React, { PropTypes } from 'react';
import classnames from 'classnames';
import moment from 'moment';

const Articles = ({ activeArticles = [] }) => (
  <ul className="articles">
    {
      activeArticles.map((article, index) => {
        const sourceClass = classnames('article__source', {
          'is-reddit': article.source === 'reddit-r-all',
          'is-recode': article.source === 'recode',
          'is-mashable': article.source === 'mashable',
        });

        return (
          <li className="article" key={index}>
            {
              <div className="article__img-wrap">
                <img className="article__img" src={article.urlToImage} alt="img" />
                <span className={sourceClass}>{article.source}</span>
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
  activeArticles: PropTypes.array,
};

export default Articles;
