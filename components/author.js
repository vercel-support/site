import React from "react"
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg"
import { ReactComponent as GithubIcon } from "../images/icon-github.svg"
import { ReactComponent as DribbbleIcon } from "../images/icon-dribbble.svg"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import useGoal from "../hooks/use-goal"

const Author = () => {
  const trackTwitterGoal = useGoal("IFOPB1RM", true)
  const trackGithubGoal = useGoal("JOZATR2E")
  const trackDribbbleGoal = useGoal("EGN48GIU")

  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "brandon.png" }) {
        childImageSharp {
          fixed(width: 128) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <aside className="max-w-lg mx-auto">
      <div className="flex justify-center text-gray-900">
        <Image
          alt="Brandon Pittman"
          className="shadow-outline-gray w-32 h-32 rounded-full"
          fixed={query.file.childImageSharp.fixed}
        />
      </div>

      <p className="mt-6 text-lg text-gray-900">
        Hello, there! I'm Brandon. I'm originally from Ohio, but now I live in
        Nagoya, Japan. I love the Web, programming, coffee, cooking and
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.georgerrmartin.com/"
        >
          {" "}
          A Song of Ice and Fire
        </a>
        .
      </p>

      <p className="mt-6 text-lg">
        My usual toolset is{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          React
        </a>
        ,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gatsbyjs.org/"
        >
          Gatsby
        </a>
        , and
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tailwindcss.com/"
        >
          {" "}
          Tailwind
        </a>
        . I'm interested in building web sites and applications using the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jamstack.org/"
        >
          JAMstack
        </a>
        .
      </p>

      <div className="flex justify-center mt-6">
        <a
          href="http://twitter.com/brandonpittman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            onClick={trackTwitterGoal}
            className="w-8 h-8 mr-4 text-blue-400 fill-current"
          />
        </a>

        <a
          href="http://github.com/brandonpittman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon
            onClick={trackGithubGoal}
            className="w-8 h-8 mr-4 text-gray-900 fill-current"
          />
        </a>

        <a
          href="http://dribbble.com/pittman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleIcon
            onClick={trackDribbbleGoal}
            className="w-8 h-8 mr-4 text-gray-900 fill-current"
          />
        </a>
      </div>
    </aside>
  )
}

export default Author
