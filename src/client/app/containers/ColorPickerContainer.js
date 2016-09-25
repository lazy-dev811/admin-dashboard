import React from 'react';
import ColorPicker from '../components/ColorPicker/ColorPicker.jsx';

class ColorPickerContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          code: 'red',
        },
        {
          code: 'yellow',
        },
        {
          code: 'green',
        },
        {
          code: 'blue',
        },
        {
          code: 'orange',
        },
        {
          code: 'purple',
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <ColorPicker colors={this.state.colors} />
      </div>
    );
  }

}

export default ColorPickerContainer;
