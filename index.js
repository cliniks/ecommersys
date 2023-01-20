const fn = () => {
  const obj = { key: "", value: "" };
  const array = ["teste", "teste"];

  const teste = (...props) => {
    console.log("props", ...props);
  };

  callbackResolver(teste, array, (resolver) => {
    console.log(resolver);
  });
};

const callbackResolver = async (fn, props, callbackHandling) => {
  const resolver = await sdkErrorHandling(fn, props);
  console.log(resolver);
  return callbackHandling(resolver);
};

const sdkErrorHandling = async (fn, ...args) => {
  const resolver = await fn.apply(null, args);
  console.log("resolver", resolver);
  return resolver;
};

fn();
