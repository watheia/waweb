import React from "react"
import Home from "apps/web/src/components/views/home"
import { PageProps } from "apps/web/src/model"
import SEO from "apps/web/src/components/seo"

const HomePage = ({ meta }: PageProps) => {
  return (
    <>
      <SEO {...meta} />
      <Home />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      meta: {
        title: "Build products for the modern web",
        description:
          "Get hands on experience and personilzed training from the best and brightest while contributing to real Open Source Software (OSS) projects used every day by companies like Google, Facebook, Amazon, Apple, and more!",
        keywords: [
          "micro",
          "frontend",
          "fullstack",
          "consulting",
          "devops",
          "training",
          "agency",
          "tri-cities",
          "washington"
        ]
      }
    }
  }
}

export default HomePage
