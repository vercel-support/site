import React from "react";
import { ReactComponent as TagIcon } from "../images/icon-tag.svg";
import PostCard from "../components/post_card";
import Layout from "../components/layout";
import SEO from "../components/seo";
//  import ProjectCard from '@/components/ProjectCard'

const TagTemplate = ({ pageContext, data }) => {
  return (
    <Layout max-width="container">
      <SEO
        title={pageContext.tag}
        description={`Posts tagged with ${pageContext.tag}.`}
      />

      <h1 className="flex items-end text-2xl">
        <TagIcon className="block w-8 h-8 mr-2" />
        Posts tagged with "{pageContext.tag}"
      </h1>

      <ul className="flex flex-wrap -mx-4">
        {data.posts.nodes.map((post) => (
          <li
            key={post.frontmatter.slug}
            className="flex w-full p-4 mt-4 md:w-1/2 lg:w-1/3"
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagTemplate;
