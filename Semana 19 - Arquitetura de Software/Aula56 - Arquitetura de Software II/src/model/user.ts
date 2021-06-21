export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

const toUserRoles = (value: string): USER_ROLES => {
  switch (value) {
    case "NORMAL":
      return USER_ROLES.NORMAL;

    case "ADMIN":
      return USER_ROLES.ADMIN;

    default:
      throw new Error("Role roll can only be 'NORMAL' and 'ADMIN'");
  }
};

export type authenticationData = {
  id: string;
  role: USER_ROLES;
};

export type userData = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export type user = userData & { id: string };

export const userModel = (input: any): user => {
  return {
    id: input.id,
    email: input.email,
    name: input.name,
    nickname: input.nickname,
    password: input.password,
    role: toUserRoles(input.role)
  };
};

export type loginData = {
  email: string;
  password: string;
};
