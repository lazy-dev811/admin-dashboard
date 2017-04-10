import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Views = ({ views, activeView, selectView }) => (
  <ul className="newsfeed__views">
    {views.map((view) => {
      const btnClassname = classnames('newsfeed__views__view__btn', {
        'is-active': view === activeView,
      });

      return (
        <li className="newsfeed__views__view" key={view}>
          <button className={btnClassname}
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
