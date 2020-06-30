import Layout from "../../components/layout";
import PostCard from "../../components/post_card";
import SEO from "../../components/seo";
import { getAllTags } from "../../lib/api";
import { useRouter } from "next/router";
import { frontMatter as blogPosts } from "../blog/*.mdx";

export async function getStaticProps({ params: { slug: tag } }) {
  const posts = blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((post) => post.tags.includes(tag));

  return {
    props: { posts, title: tag },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => ({ params: { slug: tag } })),
    fallback: false,
  };
}

export default function Tags({ posts, title }) {
  const router = useRouter();

  return (
    <Layout>
      {router.isFallback ? (
        <p className="font-bold text-center">Loading...</p>
      ) : (
        <>
          <SEO
            title={title}
            description={`Blog posts from Brandon Pittman tagged: ${title}`}
          />
          <h1 className="text-3xl font-bold">Posts tagged "{title}"</h1>
          <ul className="flex flex-wrap -mx-4">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="flex w-full px-4 mt-12 md:w-1/2 lg:w-1/3"
              >
                <PostCard
                  post={{ ...post, __resourcePath: `/blog/${post.slug}` }}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
}
