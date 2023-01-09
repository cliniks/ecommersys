export const log: Log = (msg) => {
  if (msg) {
    console.log();
    console.log(`--- ${msg} ---`);
    console.log();
  }
  return {
    clear: () => {
      console.clear();
      console.log();
      console.log(msg ? `--- ${msg} ---` : "--- Console Limpo ---");
      console.log();
    },
  };
};

type Log = { (msg?: object | string | any[]): { clear: () => void } };
