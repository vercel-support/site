import React from "react";
import TagIcon from "../public/assets/images/icon-tag.svg";
import Link from "next/link";
import _ from "lodash";

const PostTag = ({ tag }) => {
  return (
    <li
      tag={tag.path}
      className="relative inline-block p-2 mb-2 mr-2 text-sm bg-gray-200 rounded-lg z-10"
    >
      <Link
        prefetch={false}
        href="/tags/[slug]"
        as={`/tags/${_.kebabCase(tag)}`}
      >
        <a className="flex items-end text-gray-900 hover:opacity-75">
          <TagIcon className="block w-4 h-4 mr-1" />
          {tag}
        </a>
      </Link>
    </li>
  );
};

export default PostTag;
