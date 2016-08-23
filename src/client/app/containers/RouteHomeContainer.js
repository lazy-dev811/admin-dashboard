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
      ],
      info: [
        {
          id: 0,
          desc: 'Note the difference between HomeContainer and AboutContainer. HomeContainer passes along attributes with properties and AboutContainer uses spread'
        },
        {
          id: 1,
          desc: 'Note the difference between RouteHome and RouteAbout. RouteHome is a pure function, while RouteAbout is a class'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <RouteHome goals={this.state.goals} info={this.state.info} />
      </div>
    );
  }

}

export default RouteHomeContainer;
