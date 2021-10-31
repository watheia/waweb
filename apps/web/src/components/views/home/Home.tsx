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

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <LogoCloud />
      <AlternatingFeatureSections />
      <GradientFeatureSection />
      <StatsSection />
      <CTASection />
    </div>
  )
}
