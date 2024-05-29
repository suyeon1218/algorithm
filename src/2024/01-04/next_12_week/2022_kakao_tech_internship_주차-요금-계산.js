function getTimestamp(time) {
  const [h, m] = time.split(':').map(Number);

  return h * 60 + m;
}

function solution(fees, records) {
  const [baseTime, baseCost, bonusTime, bonusCost] = fees;
  const memo = {};
  const lastTime = getTimestamp('23:59');

  for (const record of records) {
    const [time, car, type] = record.split(' ');
    console.log(time, car, type);

    if (type === 'IN') {
      if (memo[car] === undefined) {
        memo[car] = {
          cost: 0,
          sum: 0,
          in: undefined,
        };
      }
      memo[car].in = getTimestamp(time);
    } else {
      memo[car].sum += getTimestamp(time) - memo[car].in;
      memo[car].in = undefined;
    }
  }

  for (const car in memo) {
    let { sum } = memo[car];

    if (memo[car].in !== undefined) {
      sum += lastTime - memo[car].in;
      memo[car].in = undefined;
    }
    if (sum <= baseTime) {
      memo[car].cost += baseCost;
    } else {
      sum -= baseTime;
      memo[car].cost += Math.ceil(sum / bonusTime) * bonusCost;
      memo[car].cost += baseCost;
    }
  }

  return Object.keys(memo)
    .sort((a, b) => Number(a) - Number(b))
    .map((car) => memo[car].cost);
}

solution(
  [180, 5000, 10, 600],
  [
    '05:34 5961 IN',
    '06:00 0000 IN',
    '06:34 0000 OUT',
    '07:59 5961 OUT',
    '07:59 0148 IN',
    '18:59 0000 IN',
    '19:09 0148 OUT',
    '22:59 5961 IN',
    '23:00 5961 OUT',
  ],
);
