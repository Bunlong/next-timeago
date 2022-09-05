import React from 'react';
import { Props, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, Unit } from './model';
import format from './format';
import formatLocale from './formatLocale';
import enStrings from './languages/en';
import afStrings from './languages/af';
import arStrings from './languages/ar';
import azStrings from './languages/az';
import azShortStrings from './languages/az-short';
import beStrings from './languages/be';
import bgStrings from './languages/bg';
import bsStrings from './languages/bs';
import caStrings from './languages/ca';
import csStrings from './languages/cs';
import cyStrings from './languages/cy';
import daStrings from './languages/da';
import deStrings from './languages/de';
import deShortStrings from './languages/de-short';
import dvStrings from './languages/dv';
import elStrings from './languages/el';
import enShortStrings from './languages/en-short';
import esStrings from './languages/es';
import esShortStrings from './languages/es-short';
import etStrings from './languages/et';
import euStrings from './languages/eu';
import faStrings from './languages/fa';
import faShortStrings from './languages/fa-short';
import fiStrings from './languages/fi';
import frStrings from './languages/fr';
import frShortStrings from './languages/fr-short';
import glStrings from './languages/gl';
import heStrings from './languages/he';
import hiStrings from './languages/hi';
import hrStrings from './languages/hr';
import huStrings from './languages/hu';
import hyStrings from './languages/hy';
import idStrings from './languages/id';
import isStrings from './languages/is';
import itStrings from './languages/it';
import itShortStrings from './languages/it-short';
import jaStrings from './languages/ja';
import jvStrings from './languages/jv';
import kaStrings from './languages/ka';
import kaShortStrings from './languages/ka-short';
import khStrings from './languages/kh';
import koStrings from './languages/ko';
import kyStrings from './languages/ky';
import ltStrings from './languages/lt';
import lvStrings from './languages/lv';
import mkStrings from './languages/mk';
import nlStrings from './languages/nl';
import noStrings from './languages/no';
import ocStrings from './languages/oc';
import plStrings from './languages/pl';
import ptBrStrings from './languages/pt-br';
import ptBrShortStrings from './languages/pt-br-short';
import ptStrings from './languages/pt';
import ptShortStrings from './languages/pt-short';
import roStrings from './languages/ro';
import rsStrings from './languages/rs';
import ruStrings from './languages/ru';
import rwStrings from './languages/rw';
import siStrings from './languages/si';
import skStrings from './languages/sk';
import slStrings from './languages/sl';
import soStrings from './languages/so';
import srStrings from './languages/sr';
import svStrings from './languages/sv';
import taStrings from './languages/ta';
import thStrings from './languages/th';
import trStrings from './languages/tr';
import trShortStrings from './languages/tr-short';
import ukStrings from './languages/uk';
import uzStrings from './languages/uz';
import viStrings from './languages/vi';
import zhCNStrings from './languages/zh-CN';
import zhTWStrings from './languages/zh-TW';

function useTimeAgoComponent() {
  const TimeAgoComponent = ({
    date,
    live = true,
    element = 'time',
    now = () => Date.now(),
    locale,
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
      let format = formatLocale(enStrings);
      if (locale === 'af' || locale === 'AF') {
        format = formatLocale(afStrings);
      } else if (locale === 'ar' || locale === 'AR') {
        format = formatLocale(arStrings);
      } else if (locale === 'az' || locale === 'AZ') {
        format = formatLocale(azStrings);
      } else if (locale === 'az-short' || locale === 'AZ-SHORT') {
        format = formatLocale(azShortStrings);
      } else if (locale === 'be' || locale === 'BE') {
        format = formatLocale(beStrings);
      } else if (locale === 'bg' || locale === 'BG') {
        format = formatLocale(bgStrings);
      } else if (locale === 'bs' || locale === 'BS') {
        format = formatLocale(bsStrings);
      } else if (locale === 'ca' || locale === 'CA') {
        format = formatLocale(caStrings);
      } else if (locale === 'cs' || locale === 'CS') {
        format = formatLocale(csStrings);
      } else if (locale === 'cy' || locale === 'CY') {
        format = formatLocale(cyStrings);
      } else if (locale === 'da' || locale === 'DA') {
        format = formatLocale(daStrings);
      } else if (locale === 'de' || locale === 'DE') {
        format = formatLocale(deStrings);
      } else if (locale === 'de-short' || locale === 'DE-SHORT') {
        format = formatLocale(deShortStrings);
      } else if (locale === 'dv' || locale === 'DV') {
        format = formatLocale(dvStrings);
      } else if (locale === 'el' || locale === 'EL') {
        format = formatLocale(elStrings);
      } else if (locale === 'en-short' || locale === 'EN-SHORT') {
        format = formatLocale(enShortStrings);
      } else if (locale === 'es' || locale === 'ES') {
        format = formatLocale(esStrings);
      } else if (locale === 'es-short' || locale === 'ES-SHORT') {
        format = formatLocale(esShortStrings);
      } else if (locale === 'et' || locale === 'ET') {
        format = formatLocale(etStrings);
      } else if (locale === 'eu' || locale === 'EU') {
        format = formatLocale(euStrings);
      } else if (locale === 'fa' || locale === 'FA') {
        format = formatLocale(faStrings);
      } else if (locale === 'fa-short' || locale === 'FA-SHORT') {
        format = formatLocale(faShortStrings);
      } else if (locale === 'fi' || locale === 'FI') {
        format = formatLocale(fiStrings);
      } else if (locale === 'fr' || locale === 'FR') {
        format = formatLocale(frStrings);
      } else if (locale === 'fr-short' || locale === 'FR-SHORT') {
        format = formatLocale(frShortStrings);
      } else if (locale === 'gl' || locale === 'GL') {
        format = formatLocale(glStrings);
      } else if (locale === 'he' || locale === 'HE') {
        format = formatLocale(heStrings);
      } else if (locale === 'hi' || locale === 'HI') {
        format = formatLocale(hiStrings);
      } else if (locale === 'hr' || locale === 'HR') {
        format = formatLocale(hrStrings);
      } else if (locale === 'hu' || locale === 'HU') {
        format = formatLocale(huStrings);
      } else if (locale === 'hy' || locale === 'HY') {
        format = formatLocale(hyStrings);
      } else if (locale === 'id' || locale === 'ID') {
        format = formatLocale(idStrings);
      } else if (locale === 'is' || locale === 'IS') {
        format = formatLocale(isStrings);
      } else if (locale === 'it' || locale === 'IT') {
        format = formatLocale(itStrings);
      } else if (locale === 'it-short' || locale === 'IT-SHORT') {
        format = formatLocale(itShortStrings);
      } else if (locale === 'ja' || locale === 'JA') {
        format = formatLocale(jaStrings);
      } else if (locale === 'jv' || locale === 'JV') {
        format = formatLocale(jvStrings);
      } else if (locale === 'ka' || locale === 'KA') {
        format = formatLocale(kaStrings);
      } else if (locale === 'ka-short' || locale === 'KA-SHORT') {
        format = formatLocale(kaShortStrings);
      } else if (locale === 'kh' || locale === 'KH') {
        format = formatLocale(khStrings);
      } else if (locale === 'ko' || locale === 'KO') {
        format = formatLocale(koStrings);
      } else if (locale === 'ky' || locale === 'KY') {
        format = formatLocale(kyStrings);
      } else if (locale === 'lt' || locale === 'LT') {
        format = formatLocale(ltStrings);
      } else if (locale === 'lv' || locale === 'LV') {
        format = formatLocale(lvStrings);
      } else if (locale === 'mk' || locale === 'MK') {
        format = formatLocale(mkStrings);
      } else if (locale === 'nl' || locale === 'NL') {
        format = formatLocale(nlStrings);
      } else if (locale === 'no' || locale === 'NO') {
        format = formatLocale(noStrings);
      } else if (locale === 'oc' || locale === 'OC') {
        format = formatLocale(ocStrings);
      } else if (locale === 'pl' || locale === 'PL') {
        format = formatLocale(plStrings);
      } else if (locale === 'pt-br' || locale === 'PT-BR') {
        format = formatLocale(ptBrStrings);
      } else if (locale === 'pt-br-short' || locale === 'PT-BR-SHORT') {
        format = formatLocale(ptBrShortStrings);
      } else if (locale === 'pt' || locale === 'PT') {
        format = formatLocale(ptStrings);
      } else if (locale === 'pt-short' || locale === 'PT-SHORT') {
        format = formatLocale(ptShortStrings);
      } else if (locale === 'ro' || locale === 'RO') {
        format = formatLocale(roStrings);
      } else if (locale === 'rs' || locale === 'RS') {
        format = formatLocale(rsStrings);
      } else if (locale === 'ru' || locale === 'RU') {
        format = formatLocale(ruStrings);
      } else if (locale === 'rw' || locale === 'RW') {
        format = formatLocale(rwStrings);
      } else if (locale === 'si' || locale === 'SI') {
        format = formatLocale(siStrings);
      } else if (locale === 'sk' || locale === 'SK') {
        format = formatLocale(skStrings);
      } else if (locale === 'sl' || locale === 'SL') {
        format = formatLocale(slStrings);
      } else if (locale === 'so' || locale === 'SO') {
        format = formatLocale(soStrings);
      } else if (locale === 'sr' || locale === 'SR') {
        format = formatLocale(srStrings);
      } else if (locale === 'sv' || locale === 'SV') {
        format = formatLocale(svStrings);
      } else if (locale === 'ta' || locale === 'TA') {
        format = formatLocale(taStrings);
      } else if (locale === 'th' || locale === 'TH') {
        format = formatLocale(thStrings);
      } else if (locale === 'tr' || locale === 'TR') {
        format = formatLocale(trStrings);
      } else if (locale === 'tr-short' || locale === 'TR-SHORT') {
        format = formatLocale(trShortStrings);
      } else if (locale === 'uk' || locale === 'UK') {
        format = formatLocale(ukStrings);
      } else if (locale === 'uz' || locale === 'UZ') {
        format = formatLocale(uzStrings);
      } else if (locale === 'vi' || locale === 'VI') {
        format = formatLocale(viStrings);
      } else if (locale === 'zh-CN' || locale === 'ZH-CN') {
        format = formatLocale(zhCNStrings);
      } else if (locale === 'zh-TW' || locale === 'ZH-TW') {
        format = formatLocale(zhTWStrings);
      }

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
