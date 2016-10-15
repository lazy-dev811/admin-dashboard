// import React from 'react';
// import Greet from '../components/Greet/Greet.jsx';
//
// class GreetContainer extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Vincent',
//       }
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <Greet person={this.state.person} />
//       </div>
//     );
//   }
//
// }
//
// export default GreetContainer;


import { connect } from 'react-redux';
import { greetRequested } from '../actions';
import Greet from '../components/Greet/Greet.jsx';

const mapStateToProps = (state) => {
  // console.log(state);

  return ({
    person: state.person,
  });
};

const mapDispatchToProps = ({
  greetRequested,
});

const GreetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greet);

export default GreetContainer;
