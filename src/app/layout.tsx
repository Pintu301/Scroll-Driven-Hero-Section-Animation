import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
	title: 'Scroll-Driven Hero Section Animation',
	description: 'An ITZFIZZ cinematic automotive experience driven by scroll.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}