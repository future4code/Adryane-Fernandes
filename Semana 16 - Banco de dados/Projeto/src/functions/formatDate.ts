function formatDate(date: string) {
  let day: string = date.substr(0, 2);
  const month: string = date.substr(3, 2);
  const year: string = date.substr(6, 4);

  const bdDate: string = `${year}-${month}-${day}`;

  return bdDate;
}

export default formatDate;
