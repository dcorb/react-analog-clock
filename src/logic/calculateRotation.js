import moment from 'moment-timezone';

/**
 * Arguments:
 *   timestamp:String    '2014-06-01T12:00:00Z' for example
 *   timezone:String     'Europe/London' for example
 */
export default function calculateRotation(format, timestamp, timezone) {
  let result;
  const momentTime = moment(timestamp);

  // Adjust time to the Timezone provided
  momentTime.tz(timezone);

  //  Calculations based on https://gist.github.com/janx/1188550
  switch (format) {
    case 'sec':
      result = momentTime.second() * 6;
      break;
    case 'min':
      result = momentTime.minute() * 6;
      break;
    case 'hour':
      result = momentTime.hour() * 30;
      break;
    default:
      result = 0;
      break;
  }
  return result;
}
