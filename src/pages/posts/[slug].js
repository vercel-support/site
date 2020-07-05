import Layout from "@components/layout";
import Author from "@components/author";
import { getPostBySlug, getAllPosts } from "@lib/api";
import markdownToHtml from "@lib/markdownToHtml";
import styles from "@components/markdown.module.css";
import PostMeta from "@components/post_meta";
import Img from "react-optimized-image";

export default function Post({ post }) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <PostMeta post={post} />
        <div className="my-8 -mx-4 sm:mx-0">
          <Img
            webp
            src={require(`../../../content/posts/images/${post.image}`)}
            alt=""
          />
        </div>
        <div
          className={styles["markdown"]}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Author className="mt-32" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "content",
    "date",
    "timeToRead",
    "image"
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug
        }
      };
    }),
    fallback: false
  };
}
