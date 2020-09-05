import { Tag } from "@images/heroicons/solid";
import Link from "next/link";
import _ from "lodash";

export default function PostTag({ tag }) {
  return (
    <li className="relative z-10 inline-block mb-2 mr-2 text-xs ">
      <Link href="/tags/[slug]" as={`/tags/${_.kebabCase(tag)}`}>
        <a className="flex items-end px-2 py-1 font-medium text-pink-700 bg-pink-200 border border-transparent focus:outline-none rounded-md transition-colors duration-75 ease-in-out focus:border-pink-700 focus:text-pink-600 hover:text-pink-600">
          <Tag className="block w-4 h-4 mr-1 text-pink-700" />
          {tag}
        </a>
      </Link>
    </li>
  );
}
