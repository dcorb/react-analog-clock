import React from 'react';
import ReactDOM from 'react-dom';
import MinuteHand from './MinuteHand';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MinuteHand />, div);
});
