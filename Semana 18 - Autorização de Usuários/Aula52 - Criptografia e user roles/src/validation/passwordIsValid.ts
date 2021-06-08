function passwordIsValid(password: string) {
  if(password.length < 6){
    throw new Error("Password invalid");
  }
}

export default passwordIsValid