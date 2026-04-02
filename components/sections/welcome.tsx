"use client"

import { Section } from "@/components/section"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond, Cinzel } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})


// Wedding palette: deep brown, medium brown, sage-gold, cream, terracotta
// --champagne-gold: #D6BFA3;
// --soft-beige: #F5EFE6;
// --warm-beige: #E8DCCB;
// --soft-brown: #8B6F5A;
// --deep-brown: #4E3B31;
// --champagne-light: #F2E4D3;

const palette = {
  deepBrown: "#4E3B31",
  mediumBrown: "#8B6F5A",
  sageGold: "#A2976A",
  cream: "#F5EFE6",
  terracotta: "#8F553D",
  champagneGold: "#D6BFA3",
  champagneLight: "#F2E4D3",
} as const

// Corner decoration - white
const DECO_FILTER = "brightness(0) invert(1)"

export function Welcome() {
  const brideName = siteConfig.couple.brideNickname || siteConfig.couple.bride
  const groomName = siteConfig.couple.groomNickname || siteConfig.couple.groom
  return (
    <Section
      id="welcome"
      className="relative overflow-hidden bg-transparent py-12 sm:py-16 md:py-20"
    >
      {/* Corner floral decoration - same as countdown section */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-60 scale-y-[-1]"
          priority={false}
          style={{ filter: DECO_FILTER }}
        />
      </div>
      <div className="absolute right-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-60 scale-x-[-1] scale-y-[-1]"
          priority={false}
          style={{ filter: DECO_FILTER }}
        />
      </div>
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-60"
          priority={false}
          style={{ filter: DECO_FILTER }}
        />
      </div>
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt=""
          width={300}
          height={300}
          className="w-auto h-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] opacity-60 scale-x-[-1]"
          priority={false}
          style={{ filter: DECO_FILTER }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] border border-[#9B6A41]/30 bg-white shadow-[0_16px_60px_rgba(155,106,65,0.12)] px-4 sm:px-5 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
          {/* Subtle accent overlay */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(155,106,65,0.06),transparent_60%)]" />
            <div className="absolute bottom-[-6rem] right-[-2rem] w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(155,106,65,0.05),transparent_60%)]" />
            <div className="absolute inset-[1px] rounded-[inherit] border border-[#9B6A41]/10" />
          </div>

          <div className="relative text-center space-y-4 sm:space-y-6 md:space-y-7 lg:space-y-8">
            {/* Main heading */}
            <div className="space-y-1 sm:space-y-1.5 md:space-y-2.5">
              <p
                className={`${cormorant.className} text-xs sm:text-sm md:text-sm lg:text-base uppercase tracking-[0.24em] sm:tracking-[0.28em]`}
                style={{ color: palette.mediumBrown }}
              >
                {groomName} &amp; {brideName}
              </p>
              <h2
                className={`${cinzel.className} text-2xl sm:text-3xl md:text-[2.6rem] lg:text-5xl xl:text-[3.2rem]`}
                style={{ color: palette.deepBrown }}
              >
                Welcome to our wedding website
              </h2>

              {/* Bible verse */}
              <div className="space-y-0.5 sm:space-y-1">
                <p
                  className={`${cormorant.className} text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed`}
                  style={{ color: palette.sageGold }}
                >
                  &ldquo;God&apos;s perfect timing makes even the simplest love story a beautiful testimony of His grace.&rdquo;
                </p>
              </div>

              {/* Body paragraphs */}
              <div className="space-y-2 sm:space-y-3 pt-1">
                <p
                  className={`${cormorant.className} text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed`}
                  style={{ color: palette.deepBrown }}
                >
                  By God&apos;s grace, our two paths became one, and our hearts found a home in each other. With grateful hearts, we are so happy to share this beautiful season of our lives with you.
                </p>
                <p
                  className={`${cormorant.className} text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed`}
                  style={{ color: palette.deepBrown }}
                >
                  Having you here means so much to us. Your presence in our lives is a gift, and it makes our joy even more meaningful to celebrate this day with the people we love most.
                </p>
                <p
                  className={`${cormorant.className} text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed`}
                  style={{ color: palette.deepBrown }}
                >
                  We created this space to share the details of our wedding day and the moments leading up to it. Thank you for being part of our story and for celebrating the beginning of our forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
