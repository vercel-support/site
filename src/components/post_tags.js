import PostTag from "@components/post_tag";
import { DotsHorizontal } from "@images/heroicons/solid";
import React, { useMemo, useState } from "react";

export default function PostTags({ tags, limit = 2 }) {
  const [isFullDisplay, setIsFullDisplay] = useState(false);
  const pageTags = useMemo(() =>
    typeof tags === "string" ? JSON.parse(tags) : tags
  );

  function displayedTags() {
    if (isFullDisplay) {
      return pageTags;
    }

    return pageTags.slice(0, 2);
  }

  function isOverLimit() {
    return pageTags.length > limit && !isFullDisplay;
  }

  return (
    <ul className="flex flex-wrap items-center mt-6">
      {displayedTags().map((tag) => (
        <PostTag key={tag} tag={tag} />
      ))}
      {isOverLimit() && (
        <li>
          <button
            className="relative z-10 block p-2 mb-2 mr-2 text-sm bg-gray-200 rounded-lg cursor-pointer w-9 h-9"
            onClick={() => setIsFullDisplay(true)}
          >
            <DotsHorizontal className="text-indigo-400" />
          </button>
        </li>
      )}
    </ul>
  );
}
