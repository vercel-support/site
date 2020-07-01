import React from "react";
import { Tag } from "@images/heroicons/solid";
import Link from "next/link";
import _ from "lodash";

const PostTag = ({ tag }) => {
  return (
    <li
      tag={tag.path}
      className="relative z-10 inline-block p-2 mb-2 mr-2 text-sm bg-gray-200 rounded-lg"
    >
      <Link href="/tags/[slug]" as={`/tags/${_.kebabCase(tag)}`}>
        <a className="flex items-end text-gray-900 hover:opacity-75">
          <Tag className="block w-4 h-4 mr-1 text-indigo-400" />
          {tag}
        </a>
      </Link>
    </li>
  );
};

export default PostTag;
