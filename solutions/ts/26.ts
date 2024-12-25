function getCompleted(timeWorked: string, totalTime: string): string {
  const dateTime = new Date("2024-12-25T00:00:00").getTime();
  const timeWorkedValue =
    dateTime - new Date(`2024-12-25T${timeWorked}`).getTime();
  const totalTimeValue =
    dateTime - new Date(`2024-12-25T${totalTime}`).getTime();
  const percentageValue = (timeWorkedValue * 100) / totalTimeValue;
  const percentage = Math.round(percentageValue);
  return `${percentage}%`;
}

const completed1 = getCompleted("01:00:00", "03:00:00"); // 33%
console.log(completed1);

const completed2 = getCompleted("02:00:00", "04:00:00"); // 50%
console.log(completed2);

const completed3 = getCompleted("01:00:00", "01:00:00"); // 100%
console.log(completed3);

const completed4 = getCompleted("00:10:00", "01:00:00"); // 17%
console.log(completed4);

const completed5 = getCompleted("01:10:10", "03:30:30"); // 33%
console.log(completed5);

const completed6 = getCompleted("03:30:30", "05:50:50"); // 60%
console.log(completed6);

/* 
  Score: ★★★★★
*/
