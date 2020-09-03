import Layout from "../../components/layout";
import PostCard from "../../components/post_card";
import SEO from "../../components/seo";
import { getAllPosts } from "../../lib/api";

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts }
  };
}

export default function Writing({ posts }) {
  return (
    <Layout>
      <SEO
        title="Brandon's Blog"
        description="Recent blog posts from Brandon Pittman."
      />

      <h1 className="text-3xl font-bold">Recent Blog Posts</h1>

      <ul className="flex flex-wrap -mx-4">
        {posts.map(post => (
          <li
            key={post.data.slug}
            className="flex w-full p-4 mt-12 md:w-1/2 lg:w-1/3"
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
