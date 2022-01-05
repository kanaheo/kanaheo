const path = require('path')

module.exports = {
  sassOptions: {
    reactStrictMode: true,
    includePaths: [path.join(__dirname, 'styles')]
  },
  parserOptions: {
    ecmaVersion: 6
  }
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true
  // }
}

// module.exports = {
//   assetPrefix: isAssetPrefix,
//   reactStrictMode: true,
//   env: {
//     ENVIRONMENT: process.env.ENVIRONMENT,
//     DEBUGMODE: process.env.DEBUGMODE,
//   },
//   webpack: (config) => {
//     console.log('[next.config.js] webpack')
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     })
//     // console.log('webpack config: ', config)
//     return config
//   },
// }
