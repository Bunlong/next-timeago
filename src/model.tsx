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
