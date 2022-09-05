export const MINUTE = 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365;

export interface Props {
  date: string | number | Date;
  live?: boolean;
  element?: string | React.ElementType<any>;
  now?: () => number;
  locale?: string;
}

export type Unit =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year';
export type Suffix = 'ago' | 'from now';
export type Formatter = (
  value: number,
  unit: Unit,
  suffix: Suffix,
  epochMilliseconds: number,
  now: () => number,
) => React.ReactNode;

export type StringOrFn =
  | string
  | ((value: number, millisDelta: number) => string)
  | null;
export type NumberArray = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
export type L10nsStrings = {
  prefixAgo?: StringOrFn;
  prefixFromNow?: StringOrFn;
  suffixAgo?: StringOrFn;
  suffixFromNow?: StringOrFn;
  second?: StringOrFn;
  seconds?: StringOrFn;
  minute?: StringOrFn;
  minutes?: StringOrFn;
  hour?: StringOrFn;
  hours?: StringOrFn;
  day?: StringOrFn;
  days?: StringOrFn;
  week?: StringOrFn;
  weeks?: StringOrFn;
  month?: StringOrFn;
  months?: StringOrFn;
  year?: StringOrFn;
  years?: StringOrFn;
  wordSeparator?: string;
  numbers?: NumberArray;
};
