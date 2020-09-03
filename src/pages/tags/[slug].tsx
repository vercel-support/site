import Layout from "../../components/layout";
import PostCard from "../../components/post_card";
import SEO from "../../components/seo";
import { getAllPosts, getAllTags } from "../../lib/api";

export async function getStaticProps({ params }) {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post: any) =>
    post.data.tags.includes(params.slug)
  );

  return {
    props: { posts, title: params.slug }
  };
}

export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: tags.map(tag => ({ params: { slug: tag } })),
    fallback: false
  };
}

export default function Tags({ posts, title }) {
  return (
    <Layout>
      <>
        <SEO
          title={title}
          description={`Posts from Brandon Pittman tagged: ${title}`}
        />
        <h1 className="text-3xl font-bold">Posts tagged "{title}"</h1>
        <ul className="flex flex-wrap -mx-4">
          {posts.map(post => (
            <li
              key={post.data.slug}
              className="flex w-full px-4 mt-12 md:w-1/2 lg:w-1/3"
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </>
    </Layout>
  );
}
