export function calculateWorkHours(startTime, endTime) {
  // Парсим часы, минуты, секунды из строки
  const [startH, startM, startS] = startTime.split(':').map(Number);
  const [endH, endM, endS] = endTime.split(':').map(Number);

  // Переводим всё в секунды
  const startTotalSeconds = startH * 3600 + startM * 60 + startS;
  const endTotalSeconds = endH * 3600 + endM * 60 + endS;

  // Разница
  let diffSeconds = endTotalSeconds - startTotalSeconds;

  // Если конец меньше начала (смена через полночь)
  if (diffSeconds < 0) {
    diffSeconds += 24 * 3600;
  }

  // Переводим в часы с дробной частью
  const diffHours = diffSeconds / 3600;

  // Округляем: если 30 минут и больше — в большую сторону
  return Math.round(diffHours);
}


  