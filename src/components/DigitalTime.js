import React from 'react';
import calculateTime from '../logic/calculateTime';

class DigitalTime extends React.Component {

  render() {
    const time = calculateTime(this.props.timestamp, this.props.timezone);

    return (
      <div className="analog-clock__digital"> { time }</div>
    );
  }
}

DigitalTime.defaultProps = {
  timezone: 'Europe/Zurich',
  timestamp: '2014-06-01T12:00:00Z'
};

export default DigitalTime;
