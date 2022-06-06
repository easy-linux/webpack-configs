const result = {
  modes: {
    dev: "dev",
    prod: "prod",
  },
};

result.builds = {
  [result.modes.dev]: "development",
  [result.modes.prod]: "production",
};

module.exports = result;
