const repositoryBase = '/Scroll-Driven-Hero-Section-Animation'
const configuredBase = process.env.NEXT_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? repositoryBase : '')
const basePath = configuredBase === '/' ? '' : configuredBase.replace(/\/+$/, '')

const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath,
	images: { unoptimized: true },
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
}

export default nextConfig