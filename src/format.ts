export default function format(
  value: number,
  unit: string,
  suffix: string,
): string {
  const _unit = value !== 1 ? unit + 's' : unit;
  return value + ' ' + _unit + ' ' + suffix;
}
