import Link from "next/link";
import MediaCard from "./media_card";
import PostMeta from "./post_meta";
import PostTags from "./post_tags";

const postCardHeading = (title: string) => (
  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
);

export default function PostCard({ post }) {
  return (
    <MediaCard title={postCardHeading(post.data.title)}>
      <PostMeta post={post} />

      <div className="flex flex-col flex-1 mt-6 text-gray-900">
        <p className="flex-1">{post.data.description}</p>
      </div>

      <PostTags tags={post.data.tags} limit={3} />

      <Link href="/writing/[slug]" as={"/writing/" + post.data.slug}>
        <a className="visuallyhidden">{post.data.title}</a>
      </Link>
    </MediaCard>
  );
}
