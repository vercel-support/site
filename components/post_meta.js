import React from "react"

const PostMeta = ({ post }) => (
  <div className="flex items-center">
    <p className="text-sm text-gray-700">
      <span>Published {post.frontmatter.date}</span>
      <span> • </span>
      <span> {post.timeToRead}m read time </span>
    </p>
  </div>
)

export default PostMeta
