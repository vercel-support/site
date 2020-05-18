import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Image from "gatsby-image";
import PostMeta from "../components/post_meta";
import SEO from "../components/seo";
import Author from "../components/author";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      excerpt
      frontmatter {
        title
        slug
        date(fromNow: true)
        image {
          sharp: childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <SEO
      title={post.frontmatter.title}
      description={post.excerpt}
      image={post.frontmatter.image.sharp.fluid.src}
    />

    <article className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold">{post.frontmatter.title}</h2>
      <PostMeta post={post} />

      <Image
        fluid={post.frontmatter.image.sharp.fluid}
        className="my-8 -mx-4 sm:mx-0"
      />

      <div className="mt-8 markdown">
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </article>
    <div className="my-16">
      <Author />
    </div>
  </Layout>
);

export default PostTemplate;
