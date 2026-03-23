"use client"

import React from 'react';
import Link from 'next/link';
import { StorySection } from '@/components/StorySection';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})

// Champagne Gold + Beige + Soft Brown
// creates a luxury, elegant, and warm aesthetic
const palette = {
  deepBrown: "#4E3B31",
  softBrown: "#8B6F5A",
  background: "#F5EFE6",
  champagneGold: "#D6BFA3",
  champagneLight: "#F2E4D3",
  accentLine: "#D6BFA3",
} as const

export function LoveStory() {
  return (
    <div className="min-h-screen bg-[#E8DCCB] overflow-x-hidden">


      <div className="text-center text-[#8B6F5A] z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-[#D6BFA3] mx-auto mb-4 sm:mb-6 opacity-60"></div>
        <h1 className={`${cinzel.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-[0.14em] sm:tracking-[0.18em] font-normal leading-tight text-[#4E3B31] mt-8`}>
          Every love story is beautiful
        </h1>
        <p className={`${cinzel.className} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.14em] sm:tracking-[0.18em] font-normal leading-tight text-[#8B6F5A] mb-4`}>
          but ours is my favorite.
        </p>
      </div>

      {/* SECTION 1: Top - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isFirst={true}
        title="Love in the Time of Stillness"
        imageSrc="/mobile-background/couple-2.webp"
        text={
          <>
            <p className="mb-4">
            In July 2018, a simple message became the quiet beginning of a story only God could write. What started as a casual conversation on Messenger slowly grew into something more meaningful, and Carlo and Hannah soon realized their paths had been crossing long before they knew. From the beginning, Carlo noticed Hannah's quiet kindness and hardworking spirit. She was always busy, always focused, and always caring toward those around her. Hannah, on the other hand, smiles when she thinks back to her first impression of Carlo, there was simply something about him that quietly stood out and lingered in her heart.
<br />
<br />
What began as a simple connection soon grew into friendship, and eventually, into love. It was never built on grand gestures, but on the little things, corny jokes, shared music, long conversations, and quiet moments together. In those ordinary days, they found something rare: a love that felt easy, steady, and real. 
<br />
<br />

            </p>
           
          </>
        }
      />

      {/* SECTION 2: Middle - Light */}
      <StorySection
        theme="dark"
        layout="image-right"
        imageSrc="/mobile-background/couple-3.webp"
        text={
          <>
            <p>
            “In a time marked by distance and uncertainty, they built something enduring — a quiet, steady kind of love that reminded them both that even in the darkest seasons, connection finds a way to bloom.”
            </p>
          </>
        }
      />

      {/* SECTION 3: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-left"
        isLast={true}
        imageSrc="/mobile-background/couple-4.webp"
        text={
          <>
            <p>
            Our journey was not without challenges, but through every season, we learned that love is not about perfection. It is about grace, patience, and choosing one another again and again. Looking back, we now see that the simplest moments often held the deepest meaning. What once felt like chance was, all along, God’s tender hand gently leading our hearts to each other in His perfect time.
            </p>
            <p className="mt-4">
            Today, we choose each other, again and again, and we can't wait to celebrate this new chapter with the people we love most.
            </p>
          </>
        }
      />
      
      {/* Footer Decoration */}
      <div className="bg-[#E8DCCB] pt-3 sm:pt-4 pb-16 sm:pb-20 md:pb-24 text-center text-[#4E3B31] z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-[#D6BFA3] mx-auto mb-4 sm:mb-6 opacity-60"></div>
        <Link 
          href="#guest-list"
          className={`${cinzel.className} group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-normal text-[#4E3B31] bg-[#D6BFA3] rounded-sm border border-[#D6BFA3] transition-all duration-300 hover:bg-[#C9A989] hover:border-[#C9A989] hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6BFA3]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2E4D3]`}
        >
          <span className="relative z-10">Join us</span>
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-sm bg-[#D6BFA3] opacity-0 group-hover:opacity-25 blur-md transition-opacity duration-300 -z-0"></div>
        </Link>
      </div>

    </div>
  );
}

