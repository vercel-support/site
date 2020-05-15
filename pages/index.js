import React from "react"
import Link from "next/link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout className="max-w-2xl text-lg">
        <p className="mt-8">
          Looking for someone to help you build a JAMstack website or
          frontend-heavy application? You may not even need a backend. If you
          do, I have experience building web apps using Laravel, Jigsaw, Adonis,
          Vue, Nuxt, Gridsome, React, Gatsby and BaaS technologies like Netlify
          and Zeit Now.
        </p>

        <p className="relative my-8 text-3xl italic">
          <strong>
            I’m your guy for building forward-thinking progressive web apps.
          </strong>
        </p>

        <p className="mt-4">
          I’ve lived in Japan for over 15 years. If you’re looking to reach a
          Japanese audience or a Japanese company looking to reach a global
          audience, I can help. I’ve helped large corporations in Japan better
          connect with their foreign customers through improved site
          translations and globally focused UX consultations.
        </p>

        <p className="mt-4">
          Choose me for my experience of Japan, westerners, and my ability to
          incorporate the latest technologies to provide better experiences for
          you customers and increase engagement with them.
        </p>

        <p className="mt-4">
          You can read check out things I've written on the{" "}
          <Link href="/writing"><a>blog</a></Link> or follow me on{" "}
          <a
            href="https://twitter.com/brandonpittman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://github.com/brandonpittman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          , or{" "}
          <a
            href="https://dribbble.com/pittman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          .
        </p>

        <p className="mt-4">
          If you'd like to help support my continued work on open source
          software, or you'd like to say "thanks" for something of mine that you
          used or read that gave you some benefit, then consider{" "}
          <a
            href="https://buymeacoffee.com/blp"
            target="_blank"
            rel="noopener noreferrer"
          >
            buying me a coffee.
          </a>
        </p>

        <div className="flex justify-center">
          <Link
            href="/available"
          >
            <a
              className="inline-block px-3 py-2 mt-8 font-semibold text-white rounded shadow-lg bg-key hover:shadow focus:shadow transform transition-all duration-100 ease-in-out hover:translate-y-px"
            >
              Send me a message
            </a>
          </Link>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
