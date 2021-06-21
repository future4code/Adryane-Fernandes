export function validPassword(password: string): boolean{
  let itsError: boolean = true
  if (password.length < 6) {
    itsError = false
  }

  return itsError
}

export default validPassword