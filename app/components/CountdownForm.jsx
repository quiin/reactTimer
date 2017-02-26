var React = require('react');
var PropTypes = React.PropTypes;

var CountdownForm = React.createClass({
  onSubmit (e){
    e.preventDefault();
    var secRef = this.refs.seconds;
    var seconds = secRef.value;
    if(seconds.match(/^\d+$/)){
      secRef.vale = '';
      this.props.onSetCountdown(parseInt(seconds, 10));
    }else{
      console.log('Invalid input');
    }
  },
  render (){
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }

});

module.exports = CountdownForm;
