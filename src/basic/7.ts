/**
 * У вас є два об'єкти:
 *
 * const page1 = {
 *   title: 'The awesome page',
 *   likes: 100,
 *   accounts: ['Max', 'Anton', 'Nikita'],
 *   status: 'open',
 *   details: {
 *     createAt: new Date('2021-01-01'),
 *     updateAt: new Date('2021-05-01'),
 *   }
 * }
 *
 * const page2 = {
 *   title: 'Python or Js',
 *   likes: 5,
 *   accounts: ['Alex'],
 *   status: 'close',
 * }
 *
 * Створіть новий тип даних, який підходить для цих двох об'єктів.
 */
type Detail = {
  createAt: Date;
  updateAt: Date;
};

type Status = "open" | "close";

interface IPage {
  title: string;
  likes: number;
  accounts: string[];
  status: Status;
  details?: Detail;
}

const page1: IPage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: IPage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log("page1: ", page1);
console.log("page2: ", page2);
