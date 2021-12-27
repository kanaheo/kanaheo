const path = require("path");

module.exports = {
  sassOptions: {
    reactStrictMode: true,
    includePaths: [path.join(__dirname, "styles")],
  },
};
