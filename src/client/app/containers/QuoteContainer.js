import React from 'react';
import Quote from '../components/Quote/Quote.jsx';

class QuoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'I am a riddle, or a quote.',
    }
  }

  render() {
    return (
      <div>
        <Quote quote={this.state.quote} />
      </div>
    );
  }

}

export default QuoteContainer;
