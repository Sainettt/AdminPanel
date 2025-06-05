export function calculateWorkHours(startTime, endTime) {
  const [startH, startM, startS = 0] = startTime.split(':').map(Number);
  const [endH, endM, endS = 0] = endTime.split(':').map(Number);

  const startTotalSeconds = startH * 3600 + startM * 60 + startS;
  const endTotalSeconds = endH * 3600 + endM * 60 + endS;

  let diffSeconds = endTotalSeconds - startTotalSeconds;
  if (diffSeconds < 0) {
    diffSeconds += 24 * 3600;
  }

  const diffHours = diffSeconds / 3600;
  return Math.round(diffHours);
}
