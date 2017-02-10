import React from 'react';

class HourHand extends React.Component {
  render() {
    const transformAngle =  "rotate(" + this.props.angle.toString() + ",50,50)";

    return (
      <div className="analog-clock__handle">
        <svg className="analog-clock__handle__min" viewBox="0 0 100 100" width="100%" height="100%">
          <line transform={transformAngle} strokeWidth="5px" strokeLinecap="square"  fill="#aaa" stroke="black" x1="50" y1="50" x2="50" y2="30"/>
        </svg>
      </div>
    );
  }
}


HourHand.defaultProps = {
  angle: 0,
}


export default HourHand;
