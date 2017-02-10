import React from 'react';
import HourHand from './HourHand';
import MinuteHand from './MinuteHand';
import SecondHand from './SecondHand';
import TimeZone from './TimeZone';

class AnalogClock extends React.Component {
  render() {
    return (
      <div className="analog-clock">
        <div className="analog-clock">
          <HourHand />
          <MinuteHand />
          <SecondHand />
        </div>
        <TimeZone timezone={this.props.timezone} />
      </div>
    );
  }
}

AnalogClock.propTypes = {
  timezone: React.PropTypes.string,
};

export default AnalogClock;
