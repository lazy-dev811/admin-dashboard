import React, { PropTypes } from 'react';
import store from '../store/configureStore.js';

import { addUser } from '../actions/index.js';

class RouteAbout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userAdded: false
    }
  }

  testAddUser() {
    store.dispatch(addUser());
  }

  componentWillMount() {
    store.subscribe(() => {
      let currentStore = store.getState();
      this.setState({
        userAdded: currentStore.addUserReducer.userAdded
      })
    });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.testAddUser.bind(this)}>Dispatch</button>
        </p>
        <p>
          Dispatched: {`${this.state.userAdded}`}
        </p>
        <p>
          Name: {this.props.name}
        </p>
        <p>
          Age: {this.props.age}
        </p>
        <p>
          Occupation: {this.props.occupation}
        </p>
        <p>
          APIData: {this.props.apiData.title}
        </p>
        <p>
          INFO: <b>{this.props.info}</b>
        </p>
      </div>
    )
  }
}

export default RouteAbout;
