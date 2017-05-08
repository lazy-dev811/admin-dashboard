import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import {
  SHAPE_ARTICLE,
  SHAPE_VISIBLE_ARTICLE,
  SHAPE_ASYNC_STATUS,
} from '../prop-shapes';

import { DATE_FORMAT_DAY_MONTH, DATE_FORMAT_TIME } from '../../../constants';
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

export const ArticlesList = styled.ul`
  margin: 0 -${UNIT_LG}; // TODO: update widget component padding logic
`;

export const Article = styled.li`
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

export const ImgWrap = styled.div`
  position: relative;
  margin-right: ${UNIT_LG};

  &:hover {
    .date {
      display: block;
    }
  }
`;

export const Img = styled.img`
  opacity: 0.7;
  width: 170px;
`;

export const Source = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px ${UNIT_MD};
  background-color: ${props => props.logoColors[props.article.source]};
  color: ${COLOR_WHITE};
`;

export const Date = styled.span`
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

export const DateDayOfMonth = styled.span``;

export const Time = styled.span`
  margin-left: ${UNIT_XSM};
  color: ${COLOR_WHITE_2};
`;

export const Title = styled.a`
  display: block;
  margin-bottom: ${UNIT_SM};
  font-size: 17px;

  &:hover {
    color: $color;
  }
`;

export const Description = styled.p`
  color: ${COLOR_WHITE_5};
`;

const Articles = ({
  activeArticles = [],
  visibleArticles,
  filteredSources,
  toggleFilteredSources = () => {},
  logoColors = {},
  asyncStatus = {},
}) => {
  const displayFilters = filteredSources.length > 0;
  const displayedArticles = visibleArticles.length > 0 ? visibleArticles : activeArticles;

  return (
    <div>
      {
        displayFilters &&
        <Pills
          label="active sources"
          list={filteredSources}
          onClick={pill => toggleFilteredSources(pill)}
          asyncStatus={asyncStatus.toggleFilteredSource}
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
                      <DateDayOfMonth>{moment(article.publishedAt).format(DATE_FORMAT_DAY_MONTH)}</DateDayOfMonth>
                      <Time>{moment(article.publishedAt).format(DATE_FORMAT_TIME)}</Time>
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
  activeArticles: PropTypes.arrayOf(SHAPE_ARTICLE).isRequired,
  visibleArticles: PropTypes.arrayOf(SHAPE_VISIBLE_ARTICLE).isRequired,
  filteredSources: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleFilteredSources: PropTypes.func.isRequired,
  logoColors: PropTypes.object.isRequired,
  asyncStatus: SHAPE_ASYNC_STATUS.isRequired,
};

Articles.defaultProps = {
  activeArticles: [],
  visibleArticles: [],
  filteredSources: [],
  toggleFilteredSources() {},
  logoColors: {},
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,

    getFilteredSources: {
      inProgress: false,
    },

    getFilteredCategories: {
      inProgress: false,
    },

    toggleActiveSource: {
      inProgress: false,
    },

    toggleFilteredCategory: {
      inProgress: false,
    },

    toggleFilteredSource: {
      inProgress: false,
    },
  },
};

export default Articles;
export const defaultProps = Articles.defaultProps;
