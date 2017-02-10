import React from 'react';

class SecondHand extends React.Component {
  render() {
    const transformAngle =  "rotate(" + this.props.angle.toString() + ",50,50)";

    return (
      <div className="analog-clock__handle">
        <svg className="analog-clock__handle__sec" viewBox="0 0 100 100" width="100%" height="100%">
          <line transform={transformAngle} strokeWidth="1px" strokeLinecap="square"  stroke="red" x1="50" y1="50" x2="50" y2="20"/>
        </svg>
      </div>
    );
  }
}


SecondHand.defaultProps = {
  angle: 0,
};


export default SecondHand;
