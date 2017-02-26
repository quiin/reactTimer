const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

var Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      status: 'stopped'
    };
  },
  handleStatusChange(newStatus){
    this.setState({
      status: newStatus,
      count: newStatus === 'stopped' ? 0 : this.state.count
    });
  },
  componentDidUpdate(prevProps, prevState) {
    var newStatus = this.state.status;
    if(prevProps !== newStatus){
      switch (newStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'paused':
        case 'stopped':
          clearTimeout(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = undefined;
  },

  startTimer (){
    this.timer = setTimeout(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  },
  render (){
    var {count, status} = this.state;
    return(
      <div className="timer">
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls status={status} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }

});

module.exports = Timer;
