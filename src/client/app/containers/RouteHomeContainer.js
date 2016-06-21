import React from 'react';
import RouteHome from '../components/RouteHome.jsx';

class RouteHomeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      goals: [
        {
          id: 0,
          name: 'learn react',
        },{
          id: 1,
          name: 'learn webpack',
        },{
          id: 2,
          name: 'learn redux',
        },{
          id: 3,
          name: 'react hot loader',
        }
      ]
    }
  }

  render() {
    return (
      <RouteHome goals={this.state.goals} />
    );
  }

}

export default RouteHomeContainer;
