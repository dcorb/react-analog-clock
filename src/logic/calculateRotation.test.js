import React from 'react';
import calculateRotation from './calculateRotation';

it('should calculate rotation', () => {
  const result = calculateRotation('sec', '2014-06-01T12:00:00Z', 'America/Los_Angeles');
  expect(result).toBe(0);
});
