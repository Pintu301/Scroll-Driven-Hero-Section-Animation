import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollSection from './components/ScrollSection'

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Hero />
      <ScrollSection
        id="about"
        eyebrow="A STUDY IN MOMENTUM"
        title="MOTION BUILT TO BE FELT."
        copy="Precision is more than a destination. It is the rhythm between every movement, every response, and the moment you take control."
      />
      <section id="contact" className="end-section" aria-labelledby="contact-title">
        <div className="end-glow" aria-hidden="true" />
        <div className="end-copy">
          <p className="eyebrow">THE NEXT MOVE</p>
          <h2 id="contact-title">PERFORMANCE<br />MEETS PRECISION.</h2>
          <p>One continuous experience, shaped by the movement behind it.</p>
          <a href="#home" className="explore">
            RETURN TO THE DRIVE <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="end-index" aria-hidden="true">ITZFIZZ <span>2026 / 01</span></div>
      </section>
      <footer className="site-footer">
        <span>© 2026 ITZFIZZ</span>
        <span>SCROLL-DRIVEN HERO SECTION ANIMATION</span>
      </footer>
    </main>
  )
}
