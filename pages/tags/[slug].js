import Layout from "../../components/layout"
import PostCard from "../../components/post_card"
import SEO from "../../components/seo"
import {getAllPosts} from '../../lib/api'
import { useRouter } from 'next/router'

export async function getStaticProps({params}) {
  const posts = getAllPosts([
    'title',
    'description',
    'slug',
    'timeToRead',
    'image',
    'tags',
    'date',
  ]).filter(post => JSON.parse(post.tags).includes(params.slug))

  return {
    props: { posts, title: params.slug },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: {slug: 'javascript'} },
      { params: {slug: 'fp'} },
      { params: {slug: 'nodejs'} },
      { params: {slug: 'gridsome'} },
      { params: {slug: 'purescript'} },
      { params: {slug: 'elm'} },
      { params: {slug: 'functional-programming'} },
    ],
    fallback: true
  }
}


export default function Tags ({ posts, title }) {
  const router = useRouter()

  return (
    <Layout>
      {router.isFallback
        ? <p className="text-center font-bold">Loading...</p>
        :
        <>
          <SEO
            title={title}
            description={`Blog posts from Brandon Pittman tagged: ${title}`}
          />
          <h1 className="text-3xl font-bold">Posts tagged "{title}"</h1>
          <ul className="flex flex-wrap -mx-4">
            {posts.map(post => (
              <li
                key={post.slug}
                className="flex w-full px-4 mt-12 md:w-1/2 lg:w-1/3"
              >
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </>
      }
    </Layout>
  )
}
