import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Views = ({ views, activeView, selectView }) => (
  <ul className="newsfeed__views">
    {views.map((view) => {
      const viewClassname = classnames('newsfeed__views__view', {
        'is-active': view === activeView,
      });

      return (
        <li className={viewClassname} key={view}>
          <button className="newsfeed__views__view__link"
            onClick={() => selectView(view)}
          >
            {view}
          </button>
        </li>
      );
    })}
  </ul>
);

Views.propTypes = {
  views: PropTypes.array.isRequired,
  activeView: PropTypes.string.isRequired,
  selectView: PropTypes.func.isRequired,
};

export default Views;
