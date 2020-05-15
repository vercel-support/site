import PostTag from "../components/post_tag"
// import { ReactComponent as HorizontalDotsIcon } from "../images/icon-dots-horizontal.svg"
import React, { useState } from "react"

const PostTags = ({ tags, limit }) => {
  const [isFullDisplay, setIsFullDisplay] = useState(false)

  function displayedTags() {
    if (isFullDisplay) {
      return tags
    }

    return tags.slice(0, 2)
  }

  function isOverLimit() {
    return tags.length > limit && !isFullDisplay
  }

  return (
    <ul className="flex flex-wrap items-center mt-6">
      {displayedTags().map(tag => (
        <PostTag key={tag} tag={tag} />
      ))}
      {isOverLimit() && (
        <li>
          <button
            className="relative block w-8 h-8 p-2 mb-2 mr-2 text-sm bg-gray-200 rounded-lg cursor-pointer z-10"
            onClick={() => setIsFullDisplay(true)}
          >
            <img src="/assets/images/icon-dots-horizontal.svg" alt="" />
            {/* <HorizontalDotsIcon /> */}
          </button>
        </li>
      )}
    </ul>
  )
}

PostTags.defaultProps = {
  tags: [],
  limit: 2,
}

export default PostTags
