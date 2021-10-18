import React, { HtmlHTMLAttributes } from "react"
import { Image } from "react-datocms"
import cn from "clsx"
import Link from "next/link"

export type CoverImageProps = {
  title: any
  responsiveImage?: any
  slug?: any
} & HtmlHTMLAttributes<HTMLDivElement>

export default function CoverImage({ title, responsiveImage, slug }: CoverImageProps) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
