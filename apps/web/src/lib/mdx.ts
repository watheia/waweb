// import dynamic from "next/dynamic"
// import fs from "fs"
import path from "path"
// import Head from "next/head"

// import Link from "apps/web/src/components/link"

// // POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content", "posts")

// // postFilePaths is the list of all mdx files inside the POSTS_PATH directory
// export const postFilePaths = fs
//   .readdirSync(POSTS_PATH)
//   // Only include md(x) files
//   .filter((path) => /\.mdx?$/.test(path))

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
// export const components = {
//   a: Link,
//   // It also works with dynamically-imported components, which is especially
//   // useful for conditionally loading components for certain routes.
//   // See the notes in README.md for more details.
//   TestComponent: dynamic(() => import("apps/web/src/components/test-component")),
//   Head
// }
