'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Clients from './components/Clients'
import Projects from './components/Projects'
import Members from './components/Members'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export function LandingPage() {
  const homeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(homeRef.current, {
        backgroundPositionY: '50%',
        ease: 'none',
        scrollTrigger: {
          trigger: homeRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert();
  }, [])

  return (
    (<main className="relative min-h-screen overflow-x-hidden font-montserrat">
      <Header />
      <Home ref={homeRef} />
      <AboutUs />
      <Clients />
      <Projects />
      <Members />
      <Footer />
    </main>)
  );
}