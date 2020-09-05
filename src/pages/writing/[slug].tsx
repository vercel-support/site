import Layout from "@components/layout";
import SEO from "@components/seo";
import Author from "@components/author";
import { queryPost, getAllPosts } from "@lib/api";
import PostMeta from "@components/post_meta";
import hydrate from "next-mdx-remote/hydrate";

export default function Post({ source, data }) {
  const content = hydrate(source);

  return (
    <Layout>
      <SEO title={data.title} description={data.description} />
      <div className="max-w-2xl mx-auto">
        <div className="grid gap-2">
          <h1 className="text-5xl font-bold ">{data.title}</h1>
          <PostMeta post={{ data }} />
        </div>

        <p className="pl-4 my-16 border-l-4 border-key border-opacity-50 lead">
          {data.description}
        </p>

        <div className="prose sm:prose-lg">{content}</div>

        <Author className="mt-32" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data, content, source } = await queryPost(params.slug);

  return {
    props: {
      source,
      content,
      data
    }
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.data.slug
        }
      };
    }),
    fallback: false
  };
}
