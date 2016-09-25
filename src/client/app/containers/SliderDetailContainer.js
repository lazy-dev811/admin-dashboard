import React from 'react';
import SliderDetail from '../components/SliderDetail/SliderDetail.jsx';

class SliderDetailContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: {
        picture: '',
        name: 'Vincent',
        company: 'Some company',
        balance: 'Some balance',
        age: '27',
        about: 'Some thing about me',
      },
      activeState: true,
    }
  }

  render() {
    return (
      <div>
        <SliderDetail selectedPerson={this.state.selectedPerson} activeState={this.state.activeState} />
      </div>
    );
  }

}

export default SliderDetailContainer;
