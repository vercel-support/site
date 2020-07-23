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
      {displayedTags().map(tag => (
        <PostTag key={tag} tag={tag} />
      ))}
      {isOverLimit() && (
        <li>
          <button
            className="relative z-10 flex items-center justify-center block p-2 mb-2 mr-2 text-xs rounded bg-blue-50"
            onClick={() => setIsFullDisplay(true)}
          >
            <DotsHorizontal className="w-4 h-4 text-blue-700" />
          </button>
        </li>
      )}
    </ul>
  );
}
