import Layout from "@components/layout";
import SEO from "@components/seo";
import Author from "@components/author";
import { queryPost, getAllPosts } from "@lib/api";
import PostMeta from "@components/post_meta";
import { SITE_URL } from "@lib/constants";
import hydrate from "next-mdx-remote/hydrate";

export default function Post({ source, data }) {
  const content = hydrate(source);

  return (
    <Layout class="prose sm:prose-lg">
      <SEO
        title={data.title}
        description={data.description}
        image={
          SITE_URL + require(`../../../content/posts/images/${data.image}`)
        }
      />
      <div className="max-w-2xl mx-auto prose sm:prose-lg">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <div className="-mt-12">
          <PostMeta post={data} />
        </div>
        <div className="mt-8 prose sm:prose-lg">{content}</div>

        <Author className="mt-32" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let { data, content, source } = await queryPost(params.slug);
  data = {
    ...data,
    date: data.date.toISOString(),
  };

  return {
    props: {
      source,
      content,
      data,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
