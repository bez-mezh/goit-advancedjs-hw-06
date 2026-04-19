enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Day): boolean {
  return day === Day.Saturday || day === Day.Sunday;
}

console.log(isWeekend(Day.Saturday)); // true
console.log(isWeekend(Day.Monday)); // false

export {};
