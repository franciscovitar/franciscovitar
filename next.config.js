const path = require('node:path');
const stylesDir = path.join(__dirname, 'styles').replace(/\\/g, '/');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [stylesDir],
    additionalData: `@import "${stylesDir}/variables.scss"; @import "${stylesDir}/mixins.scss";`,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
}

module.exports = nextConfig
