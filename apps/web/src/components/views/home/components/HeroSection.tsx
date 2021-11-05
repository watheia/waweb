import React from "react"
import NavLink from "../../../nav-link"
// import coverImage from "apps/web/public/images/photo-1521737852567-6949f3f9f2b5.jpg"
// import Image from "next/image"

const HeroSection = () => (
  <div className="relative">
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/images/photo-1521737852567-6949f3f9f2b5.jpg"
            alt="People working on laptops"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-teal-600 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Build products for the</span>
            <span className="block text-teal-200">modern web</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-teal-200 sm:max-w-3xl">
            Get hands on experience and personilzed training from the best and brightest
            while contributing to real Open Source Software (OSS) projects used every day by
            companies like Google, Facebook, Amazon, Apple, and more!
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <NavLink
                to="/contact/#waitlist"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-teal-700 bg-white hover:bg-opacity-80 sm:px-8"
              >
                Join Waitlist
              </NavLink>
              <a
                href="/solutions/"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-teal-500 bg-opacity-100 hover:bg-opacity-80 sm:px-8"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HeroSection
