export function createRandomPassword(): string {
  const characters =
    "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@#$%&*()_-+{}[]/|";

  let newPassword = "";
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * (characters.length - 1));

    newPassword += characters[index];
  }

  return newPassword
}
