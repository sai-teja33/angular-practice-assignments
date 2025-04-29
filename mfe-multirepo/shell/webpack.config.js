const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shell',

  // exposes: {
  //   './Component': './src/app/app.component.ts',
  // },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },
 remotes:{
  account: 'account@http://localhost:4201/remoteEntry.js',
 }
});
