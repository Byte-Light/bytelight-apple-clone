'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'

import VideoCarousel from './video-carousel'
import { rightImg, watchImg } from '@/utils/data'

export default function Highlights() {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0, duration: 1 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.3 })
  }, [])

  return (
    <section
      id="highlights"
      className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-6 md:px-12 text-white"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <h1
            id="title"
            className="text-4xl md:text-5xl font-bold opacity-0 translate-y-10 transition-transform duration-700"
          >
            Get the highlights.
          </h1>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#watch-film"
              className="link flex items-center text-lg font-medium opacity-0 translate-y-10 transition-transform duration-700 hover:text-blue-500"
            >
              Watch the film
              <Image src={watchImg} alt="Play logo" className="ml-2 w-6 h-6" />
            </a>
            <a
              href="#watch-event"
              className="link flex items-center text-lg font-medium opacity-0 translate-y-10 transition-transform duration-700 hover:text-blue-500"
            >
              Watch the event
              <Image src={rightImg} alt="Right logo" className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Video Carousel */}
        <VideoCarousel />
      </div>
    </section>
  )
}
