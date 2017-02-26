const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

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
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  handleStatusChange(newStatus) {
    this.setState({
      status: newStatus
    });
  },
  render (){
    var {count, status} = this.state;
    var renderControlArea = () =>{
      if(status !== 'stopped'){
        return <Controls status={status} onStatusChange={this.handleStatusChange}/>
      }else{
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
