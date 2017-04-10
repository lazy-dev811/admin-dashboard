import React, { PropTypes } from 'react';
import classnames from 'classnames';
import moment from 'moment';

const Articles = ({ activeArticles = [] }) => (
  <ul className="articles">
    {
      activeArticles.map(source => (
        <li>
          {source.map((article) => {
            const sourceClass = classnames('article__source', {
              'is-reddit': source[0].source === 'reddit-r-all',
              'is-recode': source[0].source === 'recode',
              'is-mashable': source[0].source === 'mashable',
            });
            return (
              <div className="article">
                {
                  article.urlToImage !== 'default' &&
                  <div className="article__img-wrap">
                    <img className="article__img" src={article.urlToImage} alt="img" />
                    <span className={sourceClass}>{source[0].source}</span>
                    <span className="article__date">
                      {moment(article.publishedAt).format('ddd D MMM')}
                      <span className="article__date__time">{moment(article.publishedAt).format('hA')}</span>
                    </span>
                  </div>
                }
                <div className="article__details">
                  <a href={article.url} className="article__details__title">
                    {article.title}
                  </a>
                  <p className="article__details__description">{article.description}</p>
                </div>
              </div>
            );
          })}
        </li>
      ))
    }
  </ul>
);

Articles.propTypes = {
  activeArticles: PropTypes.array,
};

export default Articles;
