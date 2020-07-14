import Layout from "@components/layout";
import SEO from "@components/seo";
import Author from "@components/author";
import { getPostBySlug, getAllPosts } from "@lib/api";
import markdownToHtml from "@lib/markdownToHtml";
// import styles from "@components/markdown.module.css";
import PostMeta from "@components/post_meta";
import Img from "react-optimized-image";
import { SITE_URL } from "@lib/constants";

export default function Post({ post }) {
  return (
    <Layout class="prose sm:prose-lg">
      <SEO
        title={post.title}
        description={post.description}
        image={
          SITE_URL + require(`../../../content/posts/images/${post.image}`)
        }
      />
      <div className="max-w-2xl mx-auto prose sm:prose-lg">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="-mt-12">
          <PostMeta post={post} />
        </div>
        {/* <div className="my-8 -mx-4 sm:mx-0">
          <Img
            webp
            sizes={[480, 800]}
            src={require(`../../../content/posts/images/${post.image}`)}
            alt=""
          />
        </div> */}
        <div
          className="mt-8 prose sm:prose-lg"
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
    "image",
    "description"
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
