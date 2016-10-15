import React, { PropTypes } from 'react';
import './Widget.scss';

const Widget = ({ title, xPos, yPos }) => {
  const positionStyle = {
    left: xPos,
    top: yPos,
  };

  return (
    <div className="widget" style={positionStyle}>
      <div className="widget__header">
        {title}
      </div>
      <div className="test">
        <div className="widget__body">

          {/* <ul className="slider-detail__categories  cf">
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
            <li className="slider-detail__categories__item" />
          </ul> */}
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        </div>
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string,
  xPos: PropTypes.number,
  yPos: PropTypes.number,
};

export default Widget;
