import React from 'react';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import TimeZone from './TimeZone';
import DigitalTime from './DigitalTime';
import calculateRotation from '../logic/calculateRotation';

class AnalogClock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date()  // unique source of truth
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // function from docs https://facebook.github.io/react/docs/state-and-lifecycle.html
  tick() {
    this.setState({
      timestamp: new Date()
    });
  }

  render() {
    return (
      <div className="analog-clock">
        <div className="analog-clock__face">
          <HourHand angle={ calculateRotation('hour', this.state.timestamp, this.props.timezone) } />
          <MinuteHand angle={ calculateRotation('min', this.state.timestamp, this.props.timezone) } />
          <SecondHand angle={ calculateRotation('sec', this.state.timestamp, this.props.timezone) } />
        </div>
        <TimeZone timezone={this.props.timezone} />
        <DigitalTime timezone={this.props.timezone} timestamp={this.state.timestamp} />
      </div>
    );
  }
}

AnalogClock.propTypes = {
  timezone: React.PropTypes.string,
};

AnalogClock.defaultProps = {
  timezone: 'Europe/Zurich',
  time: new Date(),
};

export default AnalogClock;
