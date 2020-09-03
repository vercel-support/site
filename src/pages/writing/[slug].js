import Layout from "@components/layout";
import SEO from "@components/seo";
import Author from "@components/author";
import { queryPost, getAllPosts } from "@lib/api";
import PostMeta from "@components/post_meta";
import { SITE_URL } from "@lib/constants";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

export default function Post({ source, frontMatter, originalContent }) {
  const content = hydrate(source);
  frontMatter = JSON.parse(frontMatter);

  return (
    <Layout class="prose sm:prose-lg">
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        image={
          SITE_URL +
          require(`../../../content/posts/images/${frontMatter.image}`)
        }
      />
      <div className="max-w-2xl mx-auto prose sm:prose-lg">
        <h1 className="text-3xl font-bold">{frontMatter.title}</h1>
        <div className="-mt-12">
          <PostMeta
            post={{
              ...frontMatter,
              timeToRead: readingTime(originalContent).text,
            }}
          />
        </div>
        <div className="mt-8 prose sm:prose-lg">{content}</div>

        <Author className="mt-32" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const parsedPost = queryPost(params.slug);
  const mdxSource = await renderToString(parsedPost.content);

  return {
    props: {
      originalContent: parsedPost.content,
      source: mdxSource,
      frontMatter: JSON.stringify(parsedPost.data),
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
