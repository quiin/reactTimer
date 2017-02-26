const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState (){
    return {
      count: 0,
      status: 'stopped'
    }
  },
  handleSetCountdown (seconds){
    this.setState({
      count: seconds,
      status: 'started'
    })
  },
  startTimer (){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })      
    }, 1000);
  },
  componentDidUpdate (prevProps, prevState){
    if(this.state.status !== prevState.status){
      switch (this.state.status) {
        case 'started':
          this.startTimer();
          break;
      }
    }
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
