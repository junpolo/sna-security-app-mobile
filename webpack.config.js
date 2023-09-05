const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  // Add the 'nativescript-auth0' module to the appComponents
  webpack.Utils.addCopyRule({
    from: "node_modules/nativescript-auth0/platforms/android/src/main/java/org/nativescript/auth0/",
    to: "bundle/app/tns_modules/nativescript-auth0/android/provider/",
  });

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  return webpack.resolveConfig();
};
