
export function calculateWorkHours (startTime, endTime) {
    // Парсим часы, минуты, секунды из строки
    const [startH, startM, startS] = startTime.split(':').map(Number);
    const [endH, endM, endS] = endTime.split(':').map(Number);
  
    // Переводим в минуты с учётом секунд
    const startTotalMinutes = startH * 60 + startM + startS / 60;
    const endTotalMinutes = endH * 60 + endM + endS / 60;
  
    // Разница
    let diffMinutes = endTotalMinutes - startTotalMinutes;
  
    // Если конец меньше начала (смена через полночь)
    if (diffMinutes < 0) {
      diffMinutes += 24 * 60;
    }
  
    return Math.round(diffMinutes); // Округляем до целого числа
  }
  