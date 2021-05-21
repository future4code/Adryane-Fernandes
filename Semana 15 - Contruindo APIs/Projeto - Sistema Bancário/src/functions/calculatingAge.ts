function calculatingAge(birthDate: string) {
  const birthday = Number(birthDate.substr(0, 2));
  const birthMonth = Number(birthDate.substr(3, 2));
  const yearOfBirth = Number(birthDate.substr(6, 4));

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  let age = currentYear - yearOfBirth;
  if ( currentMonth < birthMonth || (birthMonth === currentMonth && currentDay < birthday) ) {
    age--;
  }

  return age;
}


export default calculatingAge