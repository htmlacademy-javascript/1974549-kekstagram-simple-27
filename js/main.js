//(https://learn.javascript.ru/task/random-int-min-max)

//Функция возвращающая случайное целое число из переданного диапазона включительно
function getRandomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  if (min < 0) {
    return NaN;
  } else if (max <= min) {
    return NaN;
  }
  return Math.floor(rand);
}
getRandomInteger(1, 20);

//Функция для проверки максимальной длины строки

function checkStringLengths(string, maxLength) {
  const stringLength = string.length;
  if (stringLength <= maxLength) {
    return true;
  }
  return false;
}

checkStringLengths(1, 140);
