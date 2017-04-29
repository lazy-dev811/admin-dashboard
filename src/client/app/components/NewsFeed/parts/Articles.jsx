import React, { PropTypes } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Pills from '../../Pills';
import {
  UNIT_XSM,
  UNIT_SM,
  UNIT_MD,
  UNIT_LG,
  COLOR_WHITE,
  COLOR_WHITE_1,
  COLOR_WHITE_2,
  COLOR_WHITE_5,
  COLOR_BLACK_3,
} from '../../../styles';

const ArticlesList = styled.ul`
  margin: 0 -${UNIT_LG}; // TODO: update widget component padding logic
`;

const Article = styled.li`
  display: flex;
  position: relative;
  padding: ${UNIT_SM} ${UNIT_LG};
  line-height: 1.2;

  &:first-child {
    padding-top: 0;
  }

  &:nth-child(2n) {
    background-color: whitesmoke;
  }

  &:hover {
    .img {
      opacity: 1;
    }
  }
`;

const ImgWrap = styled.div`
  position: relative;
  margin-right: ${UNIT_LG};

  &:hover {
    .date {
      display: block;
    }
  }
`;

const Img = styled.img`
  opacity: 0.7;
  width: 170px;
`;

const Source = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px ${UNIT_MD};
  background-color: ${props => props.logoColors[props.article.source]};
  color: ${COLOR_WHITE};
`;

const Date = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 8px ${UNIT_MD};
  font-size: 10px;
  background-color: ${COLOR_BLACK_3};
  color: ${COLOR_WHITE_1};
  white-space: nowrap;
`;

const Time = styled.span`
  margin-left: ${UNIT_XSM};
  color: ${COLOR_WHITE_2};
`;

const Title = styled.div`
  display: block;
  margin-bottom: ${UNIT_SM};
  font-size: 17px;

  &:hover {
    color: $color;
  }
`;

const Description = styled.p`
  color: ${COLOR_WHITE_5};
`;

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
      <ArticlesList className="articles">
        {
          displayedArticles.map((article, index) => (
            <Article key={index}>
              {
                <ImgWrap>
                  <Img src={article.urlToImage} className="img" alt="img" />
                  <Source
                    logoColors={logoColors}
                    article={article}
                  >
                    {article.source}
                  </Source>
                  {
                    article.publishedAt &&
                    <Date className="date">
                      {moment(article.publishedAt).format('ddd D MMM')}
                      <Time>{moment(article.publishedAt).format('hA')}</Time>
                    </Date>
                  }
                </ImgWrap>
              }
              <div>
                <Title href={article.url}>
                  {article.title}
                </Title>
                <Description>{article.description}</Description>
              </div>
            </Article>
          ))
        }
      </ArticlesList>
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
