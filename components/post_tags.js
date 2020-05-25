import PostTag from "../components/post_tag";
import HorizontalDotsIcon from "../public/assets/images/icon-dots-horizontal.svg";
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
            className="relative block w-9 h-9 p-2 mb-2 mr-2 text-sm bg-gray-200 rounded-lg cursor-pointer z-10"
            onClick={() => setIsFullDisplay(true)}
          >
            <HorizontalDotsIcon />
          </button>
        </li>
      )}
    </ul>
  );
}
