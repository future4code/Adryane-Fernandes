function itIsPast(date: string) {
  const day = Number(date.substr(0, 2));
  const month = Number(date.substr(3, 2));
  const year = Number(date.substr(6, 4));

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  if(year < currentYear || (year === currentYear && month < currentMonth ) || (year === currentYear && month === currentMonth && day < currentDay)){
    return true
  } else {
    return false
  }
}

export default itIsPast