/**
 * Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і
 * повертає boolean значення, що вказує, чи це день робочий чи вихідний.
 *
 * enum DayOfWeek {
 *   Monday,
 *   Tuesday,
 *   Wednesday,
 *   Thursday,
 *   Friday,
 *   Saturday,
 *   Sunday
 * }
 * const isWeekend = (day) => {
 * }
 */

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day < DayOfWeek.Saturday) return true;
  else return false;
};

// console.log("isWeekend DayOfWeek.Friday: ", isWeekend(DayOfWeek.Friday));
// console.log("isWeekend DayOfWeek.Saturday: ", isWeekend(DayOfWeek.Saturday));
