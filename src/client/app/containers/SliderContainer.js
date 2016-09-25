import React from 'react';
import Slider from '../components/Slider/Slider.jsx';

class SliderContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      apps: [
        'Todo',
        'Weather',
        'Youtube player',
        'Timer',
        'Medition',
        'Series',
        'Movies',
        'Bookmarks',
        'Social',
        'Music',
      ],
    }
  }

  render() {
    return (
      <div>
        <Slider apps={this.state.apps} />
      </div>
    );
  }

}

export default SliderContainer;
