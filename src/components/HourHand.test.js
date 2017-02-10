import React from 'react';
import ReactDOM from 'react-dom';
import HourHand from './HourHand';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HourHand />, div);
});
