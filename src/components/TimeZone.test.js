import React from 'react';
import ReactDOM from 'react-dom';
import TimeZone from './TimeZone';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeZone />, div);
});
