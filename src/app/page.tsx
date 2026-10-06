'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const metrics = [
	{ value: '99%', label: 'Client Satisfaction' },
	{ value: '120+', label: 'Projects Delivered' },
	{ value: '4.9/5', label: 'Average Rating' },
]

export default function HomePage() {
	const container = useRef<HTMLElement>(null)
	const carImage = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/bmw-m4.svg`

	useGSAP(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		gsap.from('.letter', {
			y: 100,
			opacity: 0,
			duration: 1,
			stagger: 0.08,
			ease: 'power4.out',
		})

		gsap.from('.stat', {
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			delay: 0.8,
			ease: 'power3.out',
		})

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: 'top top',
				end: '+=200%',
				pin: true,
				scrub: 1.2,
				invalidateOnRefresh: true,
			},
		})

		timeline
			.to('.car', { x: '80vw', duration: 3, ease: 'none' })
			.to('.road-line', { x: '-50vw', duration: 3, ease: 'none' }, 0)
			.to('.headline', { x: '-15vw', scale: 0.9, opacity: 0.3, duration: 3, ease: 'none' }, 0)
	}, { scope: container })

	return (
		<main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-white">
			<section
				ref={container}
				aria-label="ITZFIZZ scroll-driven automotive hero"
				className="relative isolate h-screen min-h-[100svh] overflow-hidden bg-black"
			>
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_70%,rgba(45,75,92,0.55),transparent_62%)]"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-x-0 bottom-[19%] h-px bg-gradient-to-r from-transparent via-slate-300/45 to-transparent"
				/>
				<div
					aria-hidden="true"
					className="road-line absolute bottom-[18%] left-0 h-px w-[150vw] bg-gradient-to-r from-transparent via-white/50 to-transparent will-change-transform"
				/>

				<header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 md:px-12">
					<a className="text-xs font-semibold tracking-[0.3em] text-white" href="#home" aria-label="ITZFIZZ home">
						ITZFIZZ
					</a>
					<nav aria-label="Primary navigation" className="flex gap-4 text-[9px] tracking-[0.16em] text-white/65 sm:gap-7 sm:text-[10px]">
						<a className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white" href="#home">HOME</a>
						<a className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white" href="#story">STORY</a>
						<a className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white" href="#contact">CONTACT</a>
					</nav>
				</header>

				<h1
					id="home"
					aria-label="WELCOME ITZFIZZ"
					className="headline absolute inset-x-0 top-[16%] z-20 flex flex-wrap justify-center px-2 text-center text-[7vw] font-black leading-none tracking-[0.3em] text-white md:text-[7vw]"
				>
					{'WELCOME ITZFIZZ'.split('').map((character, index) => (
						<span className={`letter inline-block ${character === ' ' ? 'mr-[0.3em]' : ''}`} key={`${character}-${index}`}>
							{character === ' ' ? '\u00A0\u00A0' : character}
						</span>
					))}
				</h1>

				<img
					className="car absolute bottom-[25%] left-10 w-[250px] max-w-[72vw] select-none object-contain drop-shadow-[0_24px_34px_rgba(0,0,0,0.7)] will-change-transform sm:w-[300px] md:left-16 md:w-[390px]"
					src={carImage}
					alt="Silver BMW M4 performance coupe"
					draggable={false}
				/>

				<div aria-label="ITZFIZZ project metrics" className="absolute inset-x-4 bottom-[7%] z-30 mx-auto flex max-w-5xl justify-center gap-2 sm:gap-5 md:gap-10">
					{metrics.map(({ value, label }) => (
						<div className="stat flex min-w-0 flex-1 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-center backdrop-blur-md sm:p-4" key={label}>
							<strong className="text-base font-semibold tracking-wide sm:text-xl md:text-2xl">{value}</strong>
							<span className="mt-1 text-[8px] leading-tight text-white/65 sm:text-[10px] md:text-xs">{label}</span>
						</div>
					))}
				</div>

				<div aria-hidden="true" className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-[8px] tracking-[0.2em] text-white/55">
					<span>SCROLL TO DRIVE</span>
					<span className="h-4 w-px bg-gradient-to-b from-white/70 to-transparent" />
				</div>
			</section>

			<div className="relative h-[150vh]" id="story">
				<section aria-labelledby="story-heading" className="sticky top-0 flex h-screen items-center overflow-hidden border-t border-white/10 px-7 md:px-16">
					<div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_50%,rgba(39,68,83,0.34),transparent_56%)]" />
					<div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-24">
						<div>
							<p className="mb-5 text-[10px] tracking-[0.3em] text-sky-200/70">A STUDY IN MOMENTUM</p>
							<h2 className="max-w-2xl text-4xl font-light leading-[0.98] sm:text-5xl md:text-7xl" id="story-heading">Motion built to be felt.</h2>
							<p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">Precision is more than a destination. It is the rhythm between every movement, every response, and the moment you take control.</p>
						</div>
						<dl className="divide-y divide-white/10 border-y border-white/15 text-[10px] tracking-[0.16em]">
							<div className="flex justify-between gap-6 py-5"><dt className="text-white/50">CONTROL</dt><dd>SCROLL / SCRUB</dd></div>
							<div className="flex justify-between gap-6 py-5"><dt className="text-white/50">RESPONSE</dt><dd>FRAME BY FRAME</dd></div>
							<div className="flex justify-between gap-6 py-5"><dt className="text-white/50">FEEL</dt><dd>PRECISE, ALWAYS</dd></div>
						</dl>
					</div>
					<p className="absolute bottom-8 right-8 text-[9px] tracking-[0.2em] text-white/40 md:bottom-12 md:right-16">ITZFIZZ / 01</p>
				</section>
			</div>

			<section aria-labelledby="contact-heading" className="relative flex min-h-[70vh] items-center overflow-hidden border-t border-white/10 px-7 py-24 md:px-16">
				<div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_35%,rgba(55,81,96,0.3),transparent_60%)]" />
				<div className="mx-auto w-full max-w-6xl">
					<p className="mb-5 text-[10px] tracking-[0.3em] text-sky-200/70">THE NEXT MOVE</p>
					<h2 className="text-4xl font-light leading-none sm:text-6xl md:text-8xl" id="contact-heading">PERFORMANCE<br />MEETS PRECISION.</h2>
					<p className="mt-6 max-w-md text-sm leading-7 text-white/60">One continuous experience, shaped by the movement behind it.</p>
					<a className="mt-8 inline-flex items-center gap-5 border-b border-white/40 pb-3 text-[10px] tracking-[0.2em] transition-colors hover:border-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white" href="#home">RETURN TO THE DRIVE <span aria-hidden="true">↗</span></a>
				</div>
			</section>

			<footer className="flex min-h-16 items-center justify-between border-t border-white/10 px-6 text-[8px] tracking-[0.16em] text-white/40 md:px-12">
				<span>© 2026 ITZFIZZ</span>
				<span>SCROLL-DRIVEN HERO SECTION ANIMATION</span>
			</footer>
		</main>
	)
}