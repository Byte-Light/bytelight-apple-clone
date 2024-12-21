'use client'

import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import { chipImg, frameImg, frameVideo } from '@/utils/data';

export default function HowItWorks() {
  const videoRef = useRef(null);

  useGSAP(() => {
    // Animate the chip image
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Animate the text with a stagger effect
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.text_fadeIn',
        start: '20% bottom',
      },
    });

    timeline.from('.text_fadeIn', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.3, // Stagger effect
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div
          id="chip"
          className="flex-center w-full my-20 mx-auto"
          style={{ maxWidth: '180px', maxHeight: '180px' }}
        >
          <Image src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It&apos;s here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <Image
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                ref={videoRef}
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text text_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">best graphic performance by far</span>.
            </p>

            <p className="hiw-text text_fadeIn">
              Mobile{' '}
              <span className="text-white">games will look and feel so immersive</span>,
              with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col text_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
}
