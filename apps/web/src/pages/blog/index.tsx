import Container from "../../components/container"
import MoreStories from "../../components/more-stories"
import HeroPost from "../../components/hero-post"
import Intro from "../../components/intro"
import { getAllPostsForHome } from "../../lib/dato"
import Head from "next/head"
import { SITE_NAME } from "../../constants"
import styles from "./index.module.css"

export default function BlogIndex({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <div className={styles.page}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts }
  }
}
