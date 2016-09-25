import React from 'react';
import Settings from '../components/Settings/Settings.jsx';

class SettingsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          name: 'optionDefaultUser',
          label: 'Load default user',
          value: false,
        },
        {
          name: 'optionSlide',
          label: 'slide',
          value: false,
        },
        {
          name: 'optionDefaultSlide',
          label: 'slide automatically',
          value: false,
        },
        {
          name: 'optionShowColorPicker',
          label: 'show color picker',
          value: false,
        },
        {
          name: 'optionTransparentScrollbars',
          label: 'transparent scrollbars',
          value: false,
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <Settings options={this.state.options} />
      </div>
    );
  }

}

export default SettingsContainer;
