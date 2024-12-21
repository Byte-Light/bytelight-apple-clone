'use client'

import gsap from 'gsap'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { useEffect, useState } from 'react'

import { heroVideo, smallHeroVideo } from '@/utils/data'

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState('')

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, y: -20, duration: 1, delay: 1 })
    gsap.to('#hero-video', { opacity: 1, scale: 1, duration: 1, delay: 1.5 })
    gsap.to('#cta', { opacity: 1, y: -20, duration: 1, delay: 2 })
  }, [])

  return (
    <section className="w-full h-screen bg-black relative flex flex-col justify-center items-center overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10"></div>

      {/* Hero Content */}
      <div className="z-20 text-center flex flex-col items-center">
        <h1
          id="hero-title"
          className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl opacity-0 transform translate-y-10 transition-all"
        >
          iPhone 15 Pro
        </h1>

        <div className="w-full md:w-9/12 mt-8 opacity-0 transform scale-95 transition-all" id="hero-video">
          <video className="w-full rounded-lg shadow-lg" autoPlay muted playsInline key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Call to Action */}
      <div
        id="cta"
        className="z-20 flex flex-col items-center opacity-0 transform translate-y-10 transition-all mt-10"
      >
        <Link
          href="#highlights"
          className="btn bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg transition-all"
        >
          Buy Now
        </Link>
        <p className="mt-4 text-gray-300 text-lg font-normal">
          From <span className="font-bold text-white">$199/month</span> or $999
        </p>
      </div>
    </section>
  )
}
