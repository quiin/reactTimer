var React = require('react');
var PropTypes = React.PropTypes;

var Controls = React.createClass({
  propTypes: {
    status: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
  },
  onStatusChange (newStatus){
    return () =>{
      this.props.onStatusChange(newStatus);
    }
  },
  render (){
    var {status} = this.props;
    var renderStartStopButton = () =>{
      switch (status) {
        case 'started':
          return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
          break;
        default:
          return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
          break;
      }
    }
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
