import Author from "@components/author";
import Layout from "@components/layout";
import PostMeta from "@components/post_meta";
import SEO from "@components/seo";
import { getAllPosts, queryPost } from "@lib/api";
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

        <p className="pl-4 my-16 border-l-4 border-pink-500 border-opacity-50 lead">
          {data.description}
        </p>

        <div className="prose sm:prose-lg">{content}</div>

        <Author className="mt-16" />
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
      data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.data.slug,
        },
      };
    }),
    fallback: false,
  };
}
