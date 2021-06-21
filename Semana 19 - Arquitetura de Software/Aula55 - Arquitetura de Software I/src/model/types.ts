export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type authenticatorData = {
  id: string,
  role: USER_ROLES
}

export type user = {
  id?: string,
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
}

export type userLogin = {
  id?: string,
  email: string,
  password: string,
}