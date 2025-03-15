/**
 * Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.
 *
 * Використовуючи утиліту Partial та generics, виправте тип параметра функції так, щоб уникнути помилок типізації.
 *
 * type User = {
 *   name: string;
 *   surname: string;
 *   email: string;
 *   password: string;
 * }
 *
 * function createOrUpdateUser(initialValues: User) {
 *   // Оновлення користувача
 * }
 *
 * createOrUpdateUser({
 *   email: 'user@mail.com',
 *   password: 'password123'
 * });
 */
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(data: Partial<User>): User {
  // Деякі значення за замовчуванням:
  const initialValues: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...initialValues, ...data };
}

let currentUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

currentUser = createOrUpdateUser({ ...currentUser, name: "Ivan" });

console.log("currentUser: ", currentUser);
