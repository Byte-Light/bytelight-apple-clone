'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import { animateRandomElement } from '@/utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '@/utils/data';

export default function Features() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });
    animateRandomElement({
      target: '#features_title',
      animationProps: { y: 0, opacity: 1, duration: 1 },
    });
    animateRandomElement({
      target: '.g_grow_image',
      animationProps: { scale: 1, opacity: 1, ease: 'power1' },
      scrollProps: { scrub: 5.5 },
    });
    animateRandomElement({
      target: '.g_text',
      animationProps: { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 },
    });
  }, []);

  return (
    <section className="h-full bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 px-6 md:px-12 text-white relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            id="features_title"
            className="text-4xl md:text-5xl font-bold opacity-0 translate-y-10 transition-transform"
          >
            Explore the full story.
          </h2>
        </div>
        <div className="text-center mt-16 mb-24">
          <h2 className="text-5xl lg:text-6xl font-semibold">iPhone.</h2>
          <h3 className="text-5xl lg:text-6xl font-semibold">
            Forged in titanium.
          </h3>
        </div>
        <div className="relative mb-16">
          <video
            id="exploreVideo"
            ref={videoRef}
            playsInline
            preload="none"
            muted
            autoPlay
            className="w-full h-80 md:h-[50vh] object-cover rounded-lg shadow-lg"
          >
            <source src={exploreVideo} type="video/mp4" />
            Your browser does not support the video player.
          </video>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={explore1Img}
              alt="Titanium image 1"
              className="g_grow_image w-full h-full object-cover rounded-lg shadow-lg transform scale-95 opacity-0 transition-transform duration-700"
              priority
            />
          </div>
          <div className="relative h-80 overflow-hidden">
            <Image
              src={explore2Img}
              alt="Titanium image 2"
              className="g_grow_image w-full h-full object-cover rounded-lg shadow-lg transform scale-95 opacity-0 transition-transform duration-700"
              priority
            />
          </div>
          <div className="flex items-center">
            <p className="text-lg leading-relaxed g_text opacity-0 translate-y-10 transition-transform">
              iPhone 15 Pro is{' '}
              <span className="font-bold text-blue-500">
                the first iPhone to feature an aerospace-grade titanium design
              </span>
              , using the same alloy that spacecrafts use for missions to Mars.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg leading-relaxed g_text opacity-0 translate-y-10 transition-transform">
              Titanium has one of the best strength-to-weight ratios of any
              metal, making these our{' '}
              <span className="font-bold text-blue-500">
                lightest Pro models ever.
              </span>{' '}
              You&apos;ll notice the difference the moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
