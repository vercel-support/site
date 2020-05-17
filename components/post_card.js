import Link from "next/link"
import MediaCard from "./media_card"
import PostMeta from "./post_meta"
import PostTags from "./post_tags"

const PostCard = ({ post }) => {
  const postCardHeading = title => (
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
  )

  return (
    <MediaCard
      image={post.image}
      title={postCardHeading(post.title)}
    >
      <PostMeta post={post} />

      <div className="flex flex-col flex-1 mt-6 text-gray-900">
        <p className="flex-1">{post.description}</p>
      </div>

      <PostTags tags={post.tags} />

      <Link href={'/posts/'+ post.slug}>
        <a className="visuallyhidden">
          {post.title}
        </a>
      </Link>
    </MediaCard>
  )
}

export default PostCard
