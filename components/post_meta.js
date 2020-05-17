import { formatDistanceToNow } from 'date-fns'

export default function PostMeta({post}) {
  const published = formatDistanceToNow(new Date(post.date))

  return (
    < div className = "flex items-center" >
      <p className="text-sm text-gray-700">
        <span>Published {published} ago</span>
        <span> • </span>
        <span> {post.timeToRead} </span>
      </p>
    </div>
  ) 
}
