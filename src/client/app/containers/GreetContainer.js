import React from 'react';
import Greet from '../components/Greet/Greet.jsx';

class GreetContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Vincent',
      }
    }
  }

  render() {
    return (
      <div>
        <Greet person={this.state.person} />
      </div>
    );
  }

}

export default GreetContainer;
