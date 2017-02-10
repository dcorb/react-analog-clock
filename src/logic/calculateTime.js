import moment from 'moment-timezone';

/**
 * Arguments:
 *   timestamp:String    '2014-06-01T12:00:00Z' for example
 *   timezone:String     'Europe/London' for example
 */
export default function calculateTime(timestamp, timezone) {
  const mom = moment(timestamp);
  return mom.tz(timezone).format('h:mm:ss a');
}
