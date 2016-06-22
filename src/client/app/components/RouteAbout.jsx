import React, { PropTypes } from 'react';
import store from '../store/configureStore.js';
import { connect } from 'react-redux';

import { addUser, buttonClicked } from '../actions/index.js';

class RouteAbout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      user: '',
      users: [],
    }
  }

  addUser() {
    store.dispatch(addUser(this.state.user));
    this.state.users.push(this.state.user)
  }

  buttonClicked() {
    store.dispatch(buttonClicked());
  }

  handleChange(e) {
    this.setState({
      user: e.target.value
    })
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     let currentStore = store.getState();
  //     this.setState({
  //       buttonClicked: currentStore.buttonClickedReducer.buttonClicked,
  //       user: currentStore.addUserReducer.user,
  //     })
  //   });
  // }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.buttonClicked.bind(this)}>Button click</button>
        </p>
        <p>
          Button clicked: {`${this.props.buttonClicked}`}
        </p>
        <p>
          <input type="text" value={this.state.user} onChange={this.handleChange.bind(this)}></input>
          <button onClick={this.addUser.bind(this)}>Add user</button>
        </p>
        <p>
          User: {this.state.user}
        </p>
        <p>
          Users: [{this.state.users.map(x => ` ${x} `)}]
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

const storeSelector = (store) => ({
  buttonClicked: store.buttonClickedReducer.buttonClicked,
  user: store.addUserReducer.user,
})

export default connect(storeSelector)(RouteAbout);
