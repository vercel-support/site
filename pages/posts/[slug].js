import Layout from "../../components/layout";
import Author from "../../components/author"
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import styles from "../../components/markdown.module.css";

export default function Post({ post }) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div
          className={styles["markdown"]}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Author className="mt-16"/>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
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
