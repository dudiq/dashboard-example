const env = process.env;

const availableEnv = Object.keys(env).reduce((accumulator, key) => {
  if (key.indexOf('VUE_APP') !== 0) return accumulator;
  return {
    ...accumulator,
    [key]: env[key],
  };
}, {});

console.log('--- env ---', availableEnv);
