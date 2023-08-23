const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  images: {
    unoptimized: true,
  },
}

module.exports = withNextra(nextConfig)
