const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState (){
    return {
      count: 0
    }
  },
  handleSetCountdown (seconds){
    this.setState({
      count: seconds
    })
  },
  render (){
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
