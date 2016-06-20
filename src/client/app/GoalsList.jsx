import React from 'react';

class GoalsList extends React.Component {

  render() {
    const item = this.props.goals.map(function(goal) {
      return (
        <li key={goal.id}>
          {goal.name}
        </li>
      )
    });

    return (
      <ul>{item}</ul>
    )
  }

}

export default GoalsList;
