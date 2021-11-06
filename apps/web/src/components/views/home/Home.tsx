/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react"
import HeroSection from "./components/HeroSection"
import LogoCloud from "./components/LogoCloud"
import AlternatingFeatureSections from "./components/AlternatingFeatureSections"
import GradientFeatureSection from "./components/GradientFeatureSection"
import StatsSection from "./components/StatsSection"
import CTASection from "./components/CTASection"
import styles from "./Home.module.css"
import clsx from "clsx"

export default function Home() {
  const className = clsx(styles.page, "mt-0 sm:mt-2 md:mt-4")
  return (
    <div className={className}>
      <HeroSection />
      <LogoCloud />
      <AlternatingFeatureSections />
      {/* <GradientFeatureSection />
      <StatsSection /> */}
      <CTASection />
    </div>
  )
}
