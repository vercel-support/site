import Layout from "../../components/layout";
import PostCard from "../../components/post_card";
import SEO from "../../components/seo";
import { getAllPosts } from "../../lib/api";

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "description",
    "slug",
    "timeToRead",
    "image",
    "tags",
    "date"
  ]);

  return {
    props: { posts }
  };
}

export default function Writing({ posts }) {
  return (
    <Layout>
      <SEO title="Blog" description="Recent blog posts from Brandon Pittman." />

      <h1 className="text-3xl font-bold">Recent Blog Posts</h1>

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
    </Layout>
  );
}
