import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './Header'
import Stats from './Stats'
import CarVisual from './CarVisual'

gsap.registerPlugin(ScrollTrigger)

const words = ['WELCOME', 'ITZFIZZ']

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    let media
    const context = gsap.context(() => {
      const select = gsap.utils.selector(root)
      media = gsap.matchMedia()
      media.add(
        {
          all: 'all',
          desktop: '(min-width: 769px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        ({ conditions: { desktop, reduceMotion } }) => {
          if (reduceMotion) {
            gsap.set(select('.hero-title, .stat, .scroll-cue'), { autoAlpha: 1, y: 0 })
            return
          }

          gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.12 })
            .from(select('.hero-title span'), {
              autoAlpha: 0,
              y: 30,
              duration: 1.15,
              stagger: 0.045,
            })
            .from(select('.stat'), {
              autoAlpha: 0,
              y: 24,
              duration: 0.65,
              stagger: 0.1,
            }, '-=0.42')
            .from(select('.scroll-cue'), {
              autoAlpha: 0,
              y: 12,
              duration: 0.55,
            }, '-=0.3')

          gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: () => `+=${Math.round(window.innerHeight * (desktop ? 2.35 : 1.85))}`,
              pin: true,
              scrub: 0.85,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
            .to(select('.hero-title'), { autoAlpha: 0, y: -38, duration: 0.2 }, 0.05)
            .to(select('.stats'), { autoAlpha: 0, y: 26, duration: 0.2 }, 0.1)
            .to(select('.scroll-cue'), { autoAlpha: 0, y: 10, duration: 0.12 }, 0.08)
            .to(select('.bg-glow.one'), { x: () => -window.innerWidth * 0.12, y: 28, duration: 0.8 }, 0)
            .to(select('.bg-glow.two'), { x: () => window.innerWidth * 0.14, y: -24, duration: 0.8 }, 0)
            .to(select('.floor-grid'), { x: () => -window.innerWidth * 0.04, y: 16, duration: 0.8 }, 0)
            .to(select('.light-streaks'), { x: () => -window.innerWidth * 0.08, opacity: 0.72, duration: 0.8 }, 0)
            .to(select('.car-wrap'), {
              x: () => window.innerWidth * (desktop ? 0.1 : 0.055),
              y: desktop ? -12 : -5,
              scale: 1.04,
              rotation: -0.8,
              duration: 0.3,
            }, 0.08)
            .to(select('.car-wrap'), {
              x: () => -window.innerWidth * (desktop ? 0.045 : 0.025),
              y: desktop ? 8 : 3,
              scale: 1.1,
              rotation: 0.65,
              duration: 0.34,
            }, 0.38)
            .to(select('.car-wrap'), {
              x: 0,
              y: 0,
              scale: 1.14,
              rotation: 0,
              duration: 0.36,
            }, 0.72)
            .to(select('.foreground-glow'), { opacity: 0.72, x: -36, duration: 0.8 }, 0)
        },
      )
    }, root)

    return () => {
      media?.revert()
      context.revert()
    }
  }, [])

  return (
    <section
      ref={root}
      id="home"
      className="hero relative isolate min-h-[100svh] overflow-hidden bg-[#03060b]"
      aria-label="ITZFIZZ cinematic hero"
    >
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-glow one" />
        <div className="bg-glow two" />
        <div className="horizon" />
        <div className="floor-grid" />
        <div className="light-streaks"><i /><i /><i /><i /></div>
        <div className="foreground-glow" />
      </div>
      <Header />
      <div className="hero-content">
        <h1 className="hero-title" aria-label="W E L C O M E I T Z F I Z Z">
          {words.map((word) => (
            <span className="hero-word" key={word}>
              {Array.from(word, (letter, index) => (
                <span aria-hidden="true" key={`${word}-${index}`}>{letter}</span>
              ))}
            </span>
          ))}
        </h1>
        <CarVisual />
        <Stats />
        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL TO EXPLORE</span>
          <b />
        </div>
      </div>
    </section>
  )
}
