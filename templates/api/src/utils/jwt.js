/* eslint-disable no-bitwise */
const JWT_SECRET = `${process.env.TOKEN_SECRET}`;
const JWT_EXPIRES_IN = 3600 * 24 * 2;

const sign = (payload, privateKey, header) => {
  const now = new Date();
  header.expiresIn = new Date(now.getTime() + header.expiresIn);
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const signature = btoa(
    Array.from(encodedPayload)
      .map((item, key) =>
        String.fromCharCode(
          item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0)
        )
      )
      .join("")
  );

  return `${encodedHeader}.${encodedPayload}.${signature}`;
};

const decode = (token) => {
  const [encodedHeader, encodedPayload, signature] = token.split(".");
  const header = JSON.parse(atob(encodedHeader));
  const payload = JSON.parse(atob(encodedPayload));
  const now = new Date();

  if (now < header.expiresIn) {
    throw new Error("Expired token");
  }

  console.log({ encodedHeader, encodedPayload, signature });

  const verifiedSignature = btoa(
    Array.from(encodedPayload)
      .map((item, key) =>
        String.fromCharCode(item.charCodeAt(0) ^ JWT_SECRET.charCodeAt(0))
      )
      .join("")
  );

  if (verifiedSignature !== signature) {
    throw new Error("Invalid signature");
  }

  return payload;
};

const verify = (token, privateKey) => {
  const [encodedHeader, encodedPayload, signature] = token.split(".");
  const header = JSON.parse(atob(encodedHeader));
  const payload = JSON.parse(atob(encodedPayload));
  const now = new Date();

  if (now < header.expiresIn) {
    throw new Error("The token is expired!");
  }

  const verifiedSignature = btoa(
    Array.from(encodedPayload)
      .map((item, key) =>
        String.fromCharCode(item.charCodeAt(0) ^ privateKey.charCodeAt(0))
      )
      .join("")
  );

  if (verifiedSignature !== signature) {
    throw new Error("The signature is invalid!");
  }

  return payload;
};

module.exports = { verify, decode, sign, JWT_EXPIRES_IN, JWT_SECRET };
