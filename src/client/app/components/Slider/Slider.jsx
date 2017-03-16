import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ChevronLeft from '../Icon/ChevronLeft.jsx';
import ChevronRight from '../Icon/ChevronRight.jsx';

require('./Slider.scss');

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndexTest: 0,
      slideItemWidth: 0,
      itemsInSlide: 4,
    };
  }

  componentDidMount() {
    this.setState({
      slideItemWidth: document.querySelector('.slider__slide').clientWidth,
    });
  }
  onSlide(slideIndex) {
    // console.log('on slide', slideIndex);
    this.setState({
      slideIndexTest: this.state.slideIndexTest + slideIndex,
    });
  }

  render() {
    const sliderStyle = {
      transform: `translateX(${this.state.slideIndexTest * this.state.slideItemWidth}px)`,
    };
    const determineArrowClass = (direction) => {
      const previousArrowCheck = direction === 'prev' && this.state.slideIndexTest === 0;
      const nextArrowCheck = direction === 'next' && Math.abs(this.state.slideIndexTest) === this.props.sliderItems.length - 4;

      return classnames('slider-arrow', `slider-arrow--${direction}`, {
        'is-disabled': previousArrowCheck || nextArrowCheck,
      });
    };

    return (
      <div className="slider-wrap">
        <div className={determineArrowClass('prev')} onClick={() => this.onSlide(1)}>
          <ChevronLeft className="slider-arrow__icon" />
        </div>
        <div className={determineArrowClass('next')} onClick={() => this.onSlide(-1)}>
          <ChevronRight className="slider-arrow__icon" />
        </div>

        <ul className="slider" style={sliderStyle}>
          {this.props.sliderItems.map((widgetName, index) => {
            const determineSlideClass = name => (
              classnames('slider__slide', {
                'is-active': this.props.activeWidgets.includes(name),
              })
            );
            return (
              <li className={determineSlideClass(widgetName)} key={index}>
                <div className="slider__slide__title" onClick={() => this.props.slideItemSelect(widgetName)}>
                  {widgetName}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Slider.propTypes = {
  sliderItems: PropTypes.array.isRequired,
  activeWidgets: PropTypes.array.isRequired,
  slideItemSelect: PropTypes.func.isRequired,
};

export default Slider;
