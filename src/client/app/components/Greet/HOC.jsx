import React from 'react';

export default Component => class extends React.Component {
  render() {
    return (
      <Component {...this.state} {...this.props} />
    );
  }
};
