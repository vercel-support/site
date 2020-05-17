import React from "react"
import Card from "./card"

const MediaCard = ({ image, children, title }) => {
  return (
    <Card className="relative w-full transition-all ease-in-out duration-200 group transform hover:translate-y-px hover:shadow-md">
      <div>
        <img src={image} className="w-full object-cover h-64" />
      </div>

      <div className="flex flex-col flex-1 p-6">
        {title}
        {children}
      </div>
    </Card>
  )
}

export default MediaCard
