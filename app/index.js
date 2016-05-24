const React = require('react');
const ReactDOM = require('react-dom');

const GOALS = ['one', 'two', 'three'];

const GoalsItem = React.createClass({
    render: function() {
        return (
            <li>dfdsfsdf</li>
        )
    }
});

const GoalsList = React.createClass({
    render: function() {
        const item = this.props.goals.map(function(goal) {
            return <li>goal</li>
        });

        return (
            <ul>{item}</ul>
        )
    }
});

const GoalsContainer = React.createClass({
    render: function() {
        return (
            <ul>
                <GoalsItem />
                <GoalsList goals={this.props.goals} />
            </ul>
        )
    }
});

ReactDOM.render(
    <GoalsContainer goals={GOALS} />,
    document.getElementById('app')
);
