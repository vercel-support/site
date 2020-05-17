export default function PostMeta({post}) {
  return (
    < div className = "flex items-center" >
      <p className="text-sm text-gray-700">
        <span>Published {post.date}</span>
        <span> • </span>
        <span> {post.timeToRead}m read time </span>
      </p>
    </div>
  ) 
}
