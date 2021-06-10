export function validateRequest(name: string, data: string): void {
  if (name === "Email") {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(data)) {
      throw new Error("Invalid email format");
    }
  }
  if (name === "Password") {
    if (data.length < 6) {
      throw new Error(`Password too short, it must be at least 6 characters`);
    }
  }
  if (!data) {
    throw new Error(`${name} not informed`);
  }
}
