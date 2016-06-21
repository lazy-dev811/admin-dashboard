import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount: 0
    };
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({
      likesCount: newLikesCount
    });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.onLike}>Like iiit</button>
        </p>
        <p>
          Likes: <span>{this.state.likesCount}</span>
        </p>
      </div>
    )
  }
}
export default AwesomeComponent;
