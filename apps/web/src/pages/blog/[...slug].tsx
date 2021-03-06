import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/container"
import PostBody from "../../components/post-body"
import MoreStories from "../../components/more-stories"
import PostHeader from "../../components/post-header"
import SectionSeparator from "../../components/section-separator"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/dato"
import PostTitle from "../../components/post-title"
import Head from "next/head"
import { CMS_NAME } from "@watheia/context"
import { markdownToHtml } from "@watheia/utils"

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = await markdownToHtml(data?.post?.content || "")

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content
      },
      morePosts: data?.morePosts ?? []
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true
  }
}
