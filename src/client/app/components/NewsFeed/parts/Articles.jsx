import React, { PropTypes } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Pills from '../../Pills';

const Articles = ({
  activeArticles = [],
  visibleArticles,
  filteredSources,
  logoColors = {},
}) => {
  const displayedArticles = visibleArticles.length > 0 ? visibleArticles : activeArticles;

  return (
    <div>
      {
        filteredSources &&
        <Pills
          label="active sources"
          list={filteredSources}
          onClick={(pill) => { console.log('sdsd', pill); }}
        />
      }
      <ul className="articles">
        {
          displayedArticles.map((article, index) => {
            const sourceStyle = { backgroundColor: logoColors[article.source] };

            return (
              <li className="article" key={index}>
                {
                  <div className="article__img-wrap">
                    <img className="article__img" src={article.urlToImage} alt="img" />
                    <span className="article__source" style={sourceStyle}>
                      {article.source}
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
    </div>
  );
};

Articles.propTypes = {
  activeArticles: PropTypes.array.isRequired,
  visibleArticles: PropTypes.array.isRequired,
  filteredSources: PropTypes.array.isRequired,
  logoColors: PropTypes.object.isRequired,
};

export default Articles;
