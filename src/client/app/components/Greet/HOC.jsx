import React from 'react';

export default Component => class extends React.Component {
  render() {
    return (
      <div className="sdsds">
        <Component {...this.state} {...this.props} />
      </div>
    );
  }
};
