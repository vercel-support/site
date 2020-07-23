import React from "react";
import { Tag } from "@images/heroicons/solid";
import Link from "next/link";
import _ from "lodash";

const PostTag = ({ tag }) => {
  return (
    <li
      tag={tag.path}
      className="relative z-10 inline-block p-2 mb-2 mr-2 text-xs text-blue-700 rounded bg-blue-50"
    >
      <Link href="/tags/[slug]" as={`/tags/${_.kebabCase(tag)}`}>
        <a className="flex items-end text-blue-700 hover:opacity-75">
          <Tag className="block w-4 h-4 mr-1 text-key" />
          {tag}
        </a>
      </Link>
    </li>
  );
};

export default PostTag;
