import React from 'react';
import RouteAbout from '../components/RouteAbout.jsx';

class RouteAboutContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  // componentDidMount() {
  //   fetch('https://api.myjson.com/bins/12s83')
  //     .then(reponse => {
  //       return reponse.json();
  //     }).then(data => {
  //       this.setState({
  //         apiData: data
  //       });
  //     })
  // }

  render() {
    return (
      <div>
        <RouteAbout {...this.state} />
      </div>
    )
  }
}

export default RouteAboutContainer;
