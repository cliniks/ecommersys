export const bearerTokenFromHeader = (token: string) => {
  return token.split("Bearer ")[1]?.trim();
};
