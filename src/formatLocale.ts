// @flow

import * as React from 'react'
// import type { Formatter, Unit, Suffix } from '../index'

type StringOrFn = string | ((value: number, millisDelta: number) => string)
type NumberArray = [
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
]

export type L10nsStrings = {
  prefixAgo?: () => void | string,
  prefixFromNow?: () => void | string,
  suffixAgo?: () => void | string,
  suffixFromNow?: () => void | string,
  second?: () => void | string,
  seconds?: () => void | string,
  minute?: () => void | string,
  minutes?: () => void | string,
  hour?: () => void | string,
  hours?: () => void | string,
  day?: () => void | string,
  days?: () => void | string,
  week?: () => void | string,
  weeks?: () => void | string,
  month?: () => void | string,
  months?: () => void | string,
  year?: () => void | string,
  years?: () => void | string,
  wordSeparator?: string,
  numbers?: NumberArray,
}

// If the numbers array is present, format numbers with it,
// otherwise just cast the number to a string and return it
const normalizeNumber = (numbers: NumberArray, value?: number) =>
  numbers && numbers.length === 10
    ? String(value)
        .split('')
        .map((digit: string) =>
          digit.match(/^[0-9]$/)
            ? numbers[parseInt(digit)]
            : digit,
        )
        .join('')
    : String(value)

// Take a string or a function that takes number of days and returns a string
// and provide a uniform API to create string parts
const normalizeFn =
  (value: number, distanceMillis: number, numbers?: NumberArray) =>
  (stringOrFn: StringOrFn) =>
    typeof stringOrFn === 'function'
      ? stringOrFn(value, distanceMillis).replace(
          /%d/g,
          normalizeNumber(numbers as NumberArray, value),
        )
      : stringOrFn.replace(/%d/g, normalizeNumber(numbers as NumberArray, value))

export default function buildFormatter(strings: L10nsStrings): any {
  return function formatter(
    _value: number,
    _unit: string,
    suffix: string,
    _nextFormmater: () => React.ReactNode,
    now: () => number,
  ) {
    const current = now()
    let value = _value
    let unit = _unit
    // convert weeks to days if strings don't handle weeks
    if (unit === 'week' && !strings.week && !strings.weeks) {
      const days = Math.round(
        Math.abs(current) / (1000 * 60 * 60 * 24),
      )
      value = days
      unit = 'day'
    }

    // create a normalize function for given value
    const normalize = normalizeFn(
      value,
      current,
      strings.numbers != null ? strings.numbers : undefined,
    )

    // The eventual return value stored in an array so that the wordSeparator can be used
    const dateString: Array<string> = []

    // handle prefixes
    if (suffix === 'ago' && strings.prefixAgo) {
      dateString.push(normalize(strings.prefixAgo))
    }
    if (suffix === 'from now' && strings.prefixFromNow) {
      dateString.push(normalize(strings.prefixFromNow))
    }

    // Handle Main number and unit
    const isPlural = value > 1
    if (isPlural) {
      const stringFn: StringOrFn =
        (strings[unit + 's'] || strings[unit] || '%d ' + unit
      dateString.push(normalize(stringFn))
    } else {
      const stringFn: StringOrFn =
        strings[unit] || strings[unit + 's'] || '%d ' + unit
      dateString.push(normalize(stringFn))
    }

    // Handle Suffixes
    if (suffix === 'ago' && strings.suffixAgo) {
      dateString.push(normalize(strings.suffixAgo))
    }
    if (suffix === 'from now' && strings.suffixFromNow) {
      dateString.push(normalize(strings.suffixFromNow))
    }

    // join the array into a string and return it
    const wordSeparator =
      typeof strings.wordSeparator === 'string' ? strings.wordSeparator : ' '
    return dateString.join(wordSeparator)
  }
}
