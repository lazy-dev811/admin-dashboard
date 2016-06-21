import React, { PropTypes } from 'react';

class RouteAbout extends React.Component {

  render() {
    return (
      <div>
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
          INFO: {this.props.info}
        </p>
      </div>
    )
  }
}

export default RouteAbout;
