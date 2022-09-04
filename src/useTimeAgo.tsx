import React from 'react';
import { Props, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, Unit } from './model';
import format from './format';
import formatLocale from './formatLocale';
import enStrings from './languages/fi';

function useTimeAgoComponent() {
  const TimeAgoComponent = ({
    date,
    live = true,
    element = 'time',
    now = () => Date.now(),
    locale = 'en-US',
  }: Props) => {
    const [timeNow, setTimeNow] = React.useState(now());

    React.useEffect(() => {
      if (!live) {
        return;
      }

      const timeOut = () => {
        const timeThen = new Date(date).valueOf();

        const seconds = Math.round(Math.abs(timeNow - timeThen) / 1000);

        const unboundPeriod =
          seconds < MINUTE
            ? 1000
            : seconds < HOUR
            ? 1000 * MINUTE
            : seconds < DAY
            ? 1000 * HOUR
            : 1000 * WEEK;

        const period = Math.min(Math.max(unboundPeriod, 0 * 1000), 1000);

        if (period) {
          return setTimeout(() => {
            setTimeNow(now());
          }, period);
        }

        return 0;
      };

      const timeOutId = timeOut();
      return () => {
        if (timeOutId) {
          clearTimeout(timeOutId);
        }
      };
    }, [date, live, now, timeNow]);

    const Element = element;

    const timeThen = new Date(date).valueOf();

    const seconds = Math.round(Math.abs(timeNow - timeThen) / 1000);
    const suffix = timeThen < timeNow ? 'ago' : 'from now';

    const [value, unit] =
      seconds < MINUTE
        ? [Math.round(seconds), 'second']
        : seconds < HOUR
        ? [Math.round(seconds / MINUTE), 'minute']
        : seconds < DAY
        ? [Math.round(seconds / HOUR), 'hour']
        : seconds < WEEK
        ? [Math.round(seconds / DAY), 'day']
        : seconds < MONTH
        ? [Math.round(seconds / WEEK), 'week']
        : seconds < YEAR
        ? [Math.round(seconds / MONTH), 'month']
        : [Math.round(seconds / YEAR), 'year'];

    if (locale) {
      const format = formatLocale(enStrings);
      return (
        <Element>{format(value, unit as Unit, suffix, timeThen, now)}</Element>
      );
    }

    return <Element>{format(value, unit, suffix)}</Element>;
  };

  const TimeAgo = React.useMemo(() => TimeAgoComponent, []);

  return TimeAgo;
}

export function useTimeAgo() {
  const TimeAgo = useTimeAgoComponent();

  return {
    TimeAgo,
  };
}
