'use client';

import { Expo, gsap, Power0 } from 'gsap';
import { useEffect } from 'react';

const MOBILE_RESOLUTION = 1080;

export const useHeroAnimation = (heroRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const [mask, heroRight, patterns, initMask] = [
      heroRef.current?.querySelector<HTMLDivElement>('[data-animation="mask"]'),
      heroRef.current?.querySelector<HTMLDivElement>('[data-animation="hero-right"]'),
      heroRef.current?.querySelector<HTMLDivElement>('[data-animation="patterns"]'),
      heroRef.current?.querySelector<HTMLDivElement>('[data-animation="animation-init"]')
    ];

    if (initMask) {
      removeInitializationMask(initMask);
    }

    if (heroRight) {
      animateHeroRight(heroRight);
    }

    if (mask) {
      animateImageMask(mask);
    }

    if (patterns) {
      animatePatterns(patterns);
    }
  }, [heroRef]);
};

const removeInitializationMask = (mask: HTMLDivElement) => {
  gsap
    .to(mask, {
      opacity: 0,
      visibility: 'hidden'
    })
    .duration(0);
};

const animateHeroRight = (heroRight: HTMLDivElement) => {
  const { matches: isMobile } = window.matchMedia(`(max-width: ${MOBILE_RESOLUTION}px)`);

  gsap
    .fromTo(
      heroRight,
      {
        background: 'linear-gradient(129deg, #42784f 0%, #2a3f2f 100%)'
      },
      {
        background: 'linear-gradient(129deg, #f3f6f4 0%, #6d9480 100%)'
      }
    )
    .duration(2)
    .delay(0.5);

  if (!isMobile) {
    gsap.fromTo(heroRight, { width: '100%' }, { width: '60%' }).delay(2);
  }
};

const animateImageMask = (mask: HTMLDivElement) => {
  gsap
    .fromTo(
      mask,
      {
        transform: 'translateX(0%)',
        opacity: 0.8
      },
      {
        ease: Power0.easeOut,
        opacity: 0.3
      }
    )
    .duration(2.1)
    .delay(2.1);
};

const animatePatterns = (patterns: HTMLDivElement) => {
  const [top, center, bottom] = [
    patterns.querySelector('.top'),
    patterns.querySelector('.center'),
    patterns.querySelector('.bottom')
  ];

  if (!top || !center || !bottom) {
    return;
  }

  gsap.fromTo(center, { fill: 'white' }, { fill: '#427850', ease: Expo.easeOut }).duration(3);

  [top, bottom].forEach((element, index) => {
    const direction = index === 0 ? 1 : -1;
    const translateY = `${100 * direction}px`;

    gsap
      .fromTo(
        element,
        {
          opacity: 1,
          fill: '#427850',
          transform: 'translateY(0)'
        },
        {
          opacity: 0,
          fill: 'white',
          transform: `translateY(${translateY})`,
          ease: Expo.easeOut
        }
      )
      .duration(3);

    gsap
      .to(element, {
        transform: 'translateY(0)',
        opacity: 1,
        fill: '#427850'
      })
      .delay(3)
      .duration(0.8);
  });

  gsap
    .fromTo(
      patterns,
      {
        left: '50%',
        transform: 'translate(-50%, -50%) scale(0.9)'
      },
      {
        left: '100%',
        ease: Expo.easeOut,
        transform: 'translate(-50%, -50%) scale(1)'
      }
    )
    .delay(2)
    .duration(1);
};
