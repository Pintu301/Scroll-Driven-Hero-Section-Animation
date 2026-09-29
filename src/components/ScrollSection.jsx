import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSection({ id, eyebrow, title, copy }) {
	const ref = useRef(null)

	useLayoutEffect(() => {
		let media
		const context = gsap.context(() => {
			media = gsap.matchMedia()
			media.add('(prefers-reduced-motion: no-preference)', () => {
				gsap.from('.section-copy > *', {
					y: 28,
					autoAlpha: 0,
					stagger: 0.1,
					scrollTrigger: {
						trigger: ref.current,
						start: 'top 72%',
						end: 'top 35%',
						scrub: 0.8,
					},
				})
				gsap.from('.spec-plate', {
					y: 34,
					autoAlpha: 0,
					scrollTrigger: {
						trigger: ref.current,
						start: 'top 68%',
						end: 'top 30%',
						scrub: 0.8,
					},
				})
			})
		}, ref)

		return () => {
			media?.revert()
			context.revert()
		}
	}, [])

	return (
		<section ref={ref} id={id} className="story-section" aria-labelledby={`${id}-title`}>
			<div className="story-noise" aria-hidden="true" />
			<div className="story-light" aria-hidden="true" />
			<div className="section-copy">
				<p className="eyebrow">{eyebrow}</p>
				<h2 id={`${id}-title`}>{title}</h2>
				<p>{copy}</p>
			</div>
			<aside id="features" className="spec-plate" aria-label="Interaction specifications">
				<p className="spec-kicker">ITZFIZZ / MOTION STUDY</p>
				<dl>
					<div><dt>CONTROL</dt><dd>SCROLL / SCRUB</dd></div>
					<div><dt>RESPONSE</dt><dd>FRAME BY FRAME</dd></div>
					<div><dt>FEEL</dt><dd>PRECISE, ALWAYS</dd></div>
				</dl>
				<span className="spec-index" aria-hidden="true">01</span>
			</aside>
			<div className="section-line" aria-hidden="true" />
		</section>
	)
}
