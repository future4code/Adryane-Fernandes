import * as jwt from "jsonwebtoken";

type authenticationData = {
  id: string
}

function generatedtoken(id: authenticationData): string {
  const token = jwt.sign(
    { id: id }, 
    process.env.JWT_KEY!, 
    {expiresIn: "1min"}
  );

  return token
}
