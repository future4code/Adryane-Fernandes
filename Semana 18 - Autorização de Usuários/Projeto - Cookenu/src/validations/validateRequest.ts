
export function validateRequest(name: string, data: string): void {
  let message: string = "";
  let itsError: boolean = false;

  if (!data) {
    message = `${name} not informed`;
    itsError = true;
  }
  if (name === "Email") {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(data)) {
      message = "Invalid email format";
      itsError = true;
    }
  }
  if (name === "Password") {
    if (data.length < 6) {
      message = `Password too short, it must be at least 6 characters`;
      itsError = true;
    }
  }
}
