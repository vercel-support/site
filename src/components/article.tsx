import Link from "next/link";
import PostMeta from "./post_meta";
import PostTags from "./post_tags";

const ArticleTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
);

export default function Article({ post }) {
  return (
    <article className="grid gap-4">
      <div className="grid gap-1">
        <div>
          <Link href="/writing/[slug]" as={"/writing/" + post.data.slug}>
            <a className="inline-block rounded-md focus:outline-none focus:shadow-outline-pink">
              <ArticleTitle title={post.data.title} />
            </a>
          </Link>
        </div>
        <PostMeta post={post} />
      </div>

      <p>{post.data.description}</p>

      <PostTags tags={post.data.tags} limit={3} />
    </article>
  );
}
