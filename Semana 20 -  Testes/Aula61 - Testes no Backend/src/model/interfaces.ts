export enum USER_ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface user {
  id: string,
  name: string,
  email: string,
  role: USER_ROLE
}