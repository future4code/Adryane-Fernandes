export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type authenticatorData = {
  id: string,
  role: USER_ROLES
}