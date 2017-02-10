import React from 'react';
import ReactDOM from 'react-dom';
import SecondHand from './SecondHand';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondHand />, div);
});
