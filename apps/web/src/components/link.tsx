import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { HtmlHTMLAttributes } from "react"

export type LinkProps = Pick<NextLinkProps, "as"> &
  Pick<NextLinkProps, "href"> &
  HtmlHTMLAttributes<HTMLAnchorElement>

export default function Link({ as, href, ...props }: LinkProps) {
  return (
    <>
      <NextLink as={as} href={href}>
        <a {...props} />
      </NextLink>
    </>
  )
}
