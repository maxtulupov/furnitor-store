/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //true
	env: {
		API_URL: 'http://localhost:3001'
	},
	images: {
    domains: ['localhost'],
		// unoptimized: true
  },
	exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
			'/catalog': { page: '/catalog' },
    }
  },
}

module.exports = nextConfig
