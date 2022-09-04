/* Estonian ( et ) */
import type { L10nsStrings } from '../model';

const strings: L10nsStrings = {
  prefixAgo: null,
  prefixFromNow: null,
  suffixAgo: 'tagasi',
  suffixFromNow: 'pärast',
  seconds: function (_n, d) {
    return d < 0 ? 'vähem kui minuti aja' : 'vähem kui minut aega';
  },
  minute: function (_n, d) {
    return d < 0 ? 'umbes minuti aja' : 'umbes minut aega';
  },
  minutes: function (_n, d) {
    return d < 0 ? '%d minuti' : '%d minutit';
  },
  hour: function (_n, d) {
    return d < 0 ? 'umbes tunni aja' : 'umbes tund aega';
  },
  hours: function (_n, d) {
    return d < 0 ? '%d tunni' : '%d tundi';
  },
  day: function (_n, d) {
    return d < 0 ? 'umbes päeva' : 'umbes päev';
  },
  days: '%d päeva',
  month: function (_n, d) {
    return d < 0 ? 'umbes kuu aja' : 'umbes kuu aega';
  },
  months: function (_n, d) {
    return d < 0 ? '%d kuu' : '%d kuud';
  },
  year: function (_n, d) {
    return d < 0 ? 'umbes aasta aja' : 'umbes aasta aega';
  },
  years: function (_n, d) {
    return d < 0 ? '%d aasta' : '%d aastat';
  },
};

export default strings;
