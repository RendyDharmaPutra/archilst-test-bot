const getEnvVar = (name: string) => {
  const value = process.env[name];

  if (!value) throw new Error(`Environment variable ${name} is not defined`);

  return value;
};

export const env = {
  PORT: getEnvVar("PORT"),
  BOT_TOKEN: getEnvVar("BOT_TOKEN"),
};
