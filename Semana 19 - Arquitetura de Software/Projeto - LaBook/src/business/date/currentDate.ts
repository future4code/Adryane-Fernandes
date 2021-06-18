export function currentDate(): string {
  const date: Date = new Date();
  const day: number = date.getDate()
  const month: number = date.getMonth()


  const fullDate: string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  return fullDate
}