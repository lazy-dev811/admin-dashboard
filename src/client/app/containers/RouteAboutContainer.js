import React from 'react';
import RouteAbout from '../components/RouteAbout.jsx';

class RouteAboutContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Vincent',
      age: 27,
      occupation: 'Front-end developer',
      info: 'Using React.Component. Not needed in this case but spicing things up'
    }
  }

  render() {
    return (
      <RouteAbout {...this.state} />
    )
  }
}

export default RouteAboutContainer;
