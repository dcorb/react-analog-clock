import React from 'react';
import calculateTime from './calculateTime';

it('should adapt time to timezone and format it', () => {
  const result = calculateTime('2014-06-01T12:00:00Z', 'America/Los_Angeles');
  expect(result).toBe('5:00:00 am');
});
