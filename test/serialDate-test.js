/* globals process */
/* eslint-disable no-loss-of-precision */
import test, { getTimeZoneName } from './utils.js';
import fmt from '../lib/index.js';

function round (n) {
  return Math.round(n * 1e10) / 1e10;
}

test('dateToSerial (Date):', t => {
  process.env.TZ = 'Asia/Calcutta';
  t.equal(getTimeZoneName(), 'India Standard Time', 'Timezone is IST');

  const testYMD = (y, m, d, hh, mm, ss, tz = false) => {
    const dt = new Date(y, m - 1, d, hh, mm, ss);
    return round(fmt.dateToSerial(dt, { ignoreTimezone: tz }));
  };

  t.equal(testYMD(1978, 5, 17, 10, 25, 30, true), 28627.2052083333, '[1978, 5, 17, 10, 25, 30] ignoreTimezone');
  t.equal(testYMD(1978, 5, 17, 10, 25, 30), 28627.434375, '[1978, 5, 17, 10, 25, 30]');

  t.equal(testYMD(2022, 3, 1, 13, 53, 11), 44621.578599537, '[2022, 3, 1, 13, 53, 11]');
  t.equal(testYMD(2022, 3, 1, 13, 53, 11, true), 44621.3494328704, '[2022, 3, 1, 13, 53, 11] ignoreTimezone');

  t.equal(testYMD(1900, 1, 1, 0, 0, 0), 1, '[1900, 1, 1, 0, 0, 0]');
  t.equal(testYMD(1900, 1, 1, 0, 0, 0, true), 0.7769675926, '[1900, 1, 1, 0, 0, 0] ignoreTimezone');

  t.equal(testYMD(1950, 1, 1, 0, 0, 0), 18264, '[1950, 1, 1, 0, 0, 0]');
  t.equal(testYMD(1950, 1, 1, 0, 0, 0, true), 18263.7708333333, '[1950, 1, 1, 0, 0, 0] ignoreTimezone');

  t.equal(testYMD(2000, 1, 1, 0, 0, 0), 36526, '[2000, 1, 1, 0, 0, 0]');
  t.equal(testYMD(2000, 1, 1, 0, 0, 0, true), 36525.7708333333, '[2000, 1, 1, 0, 0, 0] ignoreTimezone');

  t.end();
});

test('dateToSerial (Array):', t => {
  const testYMD = (y, m, d, hh, mm, ss, tz = false) => {
    return round(fmt.dateToSerial(
      [ y, m, d, hh, mm, ss ],
      { ignoreTimezone: tz }
    ));
  };
  t.equal(testYMD(1978, 5, 17, 10, 25, 30, false), 28627.434375, '[1978, 5, 17, 10, 25, 30]');
  t.equal(testYMD(1978, 5, 17, 10, 25, 30, true), 28627.434375, '[1978, 5, 17, 10, 25, 30]');
  t.equal(testYMD(2022, 3, 1, 13, 53, 11, false), 44621.578599537, '[2022, 3, 1, 13, 53, 11]');
  t.equal(testYMD(2022, 3, 1, 13, 53, 11, true), 44621.578599537, '[2022, 3, 1, 13, 53, 11]');
  t.equal(testYMD(1900, 1, 1, 0, 0, 0, false), 1, '[1900, 1, 1, 0, 0, 0]');
  t.equal(testYMD(1900, 1, 1, 0, 0, 0, true), 1, '[1900, 1, 1, 0, 0, 0]');
  t.equal(testYMD(1950, 1, 1, 0, 0, 0, false), 18264, '[1950, 1, 1, 0, 0, 0]');
  t.equal(testYMD(1950, 1, 1, 0, 0, 0, true), 18264, '[1950, 1, 1, 0, 0, 0]');
  t.equal(testYMD(2000, 1, 1, 0, 0, 0, false), 36526, '[2000, 1, 1, 0, 0, 0]');
  t.equal(testYMD(2000, 1, 1, 0, 0, 0, true), 36526, '[2000, 1, 1, 0, 0, 0]');
  t.end();
});

test('dateFromSerial:', t => {
  process.env.TZ = 'Europe/Amsterdam';
  t.equal(getTimeZoneName(), 'Central European Standard Time', 'Timezone is Central European Standard Time');

  t.deepLooseEqual(
    fmt.dateFromSerial(1234),
    [ 1903, 5, 18, 0, 0, 0 ],
    'dateFromSerial(1234)'
  );
  t.deepLooseEqual(
    fmt.dateFromSerial(1234.567),
    [ 1903, 5, 18, 13, 36, 28 ],
    'dateFromSerial(1234)'
  );
  t.deepLooseEqual(
    fmt.dateFromSerial(12),
    [ 1900, 1, 12, 0, 0, 0 ],
    'dateFromSerial(12)'
  );
  t.deepLooseEqual(
    fmt.dateFromSerial(24052.8361),
    [ 1965, 11, 6, 20, 3, 59 ],
    'dateFromSerial(24052.8361)'
  );
  t.deepLooseEqual(
    fmt.dateFromSerial(42341),
    [ 2015, 12, 3, 0, 0, 0 ],
    'dateFromSerial(42341)'
  );

  // as native dates
  const d1 = fmt.dateFromSerial(1234, { nativeDate: true });
  t.ok(d1 instanceof Date, 'is date');
  t.equal(d1.toISOString(), '1903-05-18T00:00:00.000Z', '[native] dateFromSerial(1234)');
  const d2 = fmt.dateFromSerial(1234.567, { nativeDate: true });
  t.ok(d2 instanceof Date, 'is date');
  t.equal(d2.toISOString(), '1903-05-18T13:36:28.000Z', '[native] dateFromSerial(1234.567)');
  t.end();
});
