var React = require('react');
var PropTypes = React.PropTypes;

var Controls = React.createClass({
  propTypes: {
    status: PropTypes.string.isRequired
  },
  render (){
    var {status} = this.props;
    var renderStartStopButton = () =>{      
      switch (status) {
        case 'started':
          return <button className="button secondary">Pause</button>
          break;
        case 'paused':
          return <button className="button primary">Start</button>
          break;
      }
    }
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }

});

module.exports = Controls;
