const mailerConfig = {
  host: process.env.NODE_MAILER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
};

export { mailerConfig };
