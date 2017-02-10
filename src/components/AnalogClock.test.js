import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock from './AnalogClock';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnalogClock />, div);
});


it('renders correctly', () => {
  const tree = renderer.create(
    <AnalogClock timezone="Europe/Zurich"></AnalogClock>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Todo: Fix the test using fake timers
// From https://github.com/facebook/jest/blob/master/examples/snapshot/__tests__/Clock.react-test.js
jest.useFakeTimers();
// Date.now = jest.fn(() => 1482363367071);

test('should be same Hour Handle for Zurich and London, if we adjust time', () => {
  const component = renderer.create(
    <AnalogClock timezone="Europe/Zurich"></AnalogClock>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // if we change timeZone +1, and remove 1 hour, it should still be same clock
  let diff = new Date();
  diff.setHours(diff.getHours() - 1);

  tree.props.timezone = 'Europe/London';
  tree.state.timestamp = diff;

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});