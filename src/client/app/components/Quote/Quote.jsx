import React, { PropTypes } from 'react';

import './Quote.scss';

class Quote extends React.Component {
  componentDidMount() {
    this.props.getQuote();
  }

  render() {
    return (
      <div className="quote">
        {this.props.quote} ~ {this.props.author}
      </div>
    );
  }
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  getQuote: PropTypes.func.isRequired,
};

export default Quote;
