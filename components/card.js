import React from "react"

const Card = ({ className, children }) => (
  <div
    className={`${className} flex flex-col overflow-hidden bg-white rounded-lg shadow-lg`}
  >
    {children}
  </div>
)

export default Card
