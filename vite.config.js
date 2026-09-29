import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'VITE_')
	const defaultBase = mode === 'production' ? '/Scroll-Driven-Hero-Section-Animation/' : '/'
	const requestedBase = env.VITE_BASE_PATH || defaultBase
	const base = requestedBase.startsWith('/') ? requestedBase : `/${requestedBase}`

	return {
		base: base.endsWith('/') ? base : `${base}/`,
		plugins: [react()],
	}
})
