import Link from "next/link"
import React, { useMemo } from "react"
import MediaCard from "./media_card"
import PostMeta from "./post_meta"
import PostTags from "./post_tags"

const PostCard = ({ post }) => {
  const postLink = useMemo(_ => `/${post.frontmatter.slug}`, [
    post.frontmatter.slug,
  ])

  const postTitle = useMemo(_ => `${post.frontmatter.title}`, [
    post.frontmatter.title,
  ])

  const postCardHeading = title => (
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
  )

  return (
    <MediaCard
      image={post.frontmatter.image.sharp.fluid}
      title={postCardHeading(postTitle)}
    >
      <PostMeta post={post} />

      <div className="flex flex-col flex-1 mt-6 text-gray-900">
        <p className="flex-1">{post.frontmatter.description}</p>
      </div>

      <PostTags tags={post.frontmatter.tags} />

      <Link href={postLink}>
        <a className="visuallyhidden">
          {postTitle}
        </a>
      </Link>
    </MediaCard>
  )
}

export default PostCard
