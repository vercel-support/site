import React from "react"
import Layout from "../components/layout"
import PostCard from "../components/post_card"
import SEO from "../components/seo"

const Writing = () => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Recent blog posts from Brandon Pittman."
      ></SEO>
      <h2 className="text-2xl font-bold">Recent Blog Posts</h2>

      {/* <ul className="flex flex-wrap -mx-4">                      */}
      {/*   {posts.nodes.map(post => (                               */}
      {/*     <li                                                    */}
      {/*       key={post.frontmatter.slug}                          */}
      {/*       className="flex w-full px-4 mt-12 md:w-1/2 lg:w-1/3" */}
      {/*     >                                                      */}
      {/*       <PostCard post={post} />                             */}
      {/*     </li>                                                  */}
      {/*   ))}                                                      */}
      {/* </ul>                                                      */}
    </Layout>
  )
}

export default Writing
