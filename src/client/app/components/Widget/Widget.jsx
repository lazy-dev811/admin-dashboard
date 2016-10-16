import React from 'react';
import './Widget.scss';

export default Component => class extends React.Component {
  render() {
    return (
      <div className="widget">
        <div className="widget__body">
          <Component {...this.state} {...this.props} />
        </div>
      </div>
    );
  }
};
