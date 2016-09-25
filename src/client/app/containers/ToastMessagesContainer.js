import React from 'react';
import ToastMessages from '../components/ToastMessages/ToastMessages.jsx';

class ToastMessagesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toasts: [
        {
          type: 'bad',
          message: 'This is an error message from api. The data could not be loaded',
        }, {
          type: 'info',
          message: 'This is an info message. Use still to be decided',
        }
      ],
    }
  }

  render() {
    return (
      <div>
        <ToastMessages toasts={this.state.toasts} />
      </div>
    );
  }

}

export default ToastMessagesContainer;
