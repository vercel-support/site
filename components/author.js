import React from "react";
import { trackGoal } from "fathom-client";
import TwitterIcon from "../public/assets/images/icon-twitter.svg";
import GithubIcon from "../public/assets/images/icon-github.svg";
import DribbbleIcon from "../public/assets/images/icon-dribbble.svg";
import cn from "classnames";

export default function Author({ className }) {
  const trackTwitterGoal = () => trackGoal("IFOPB1RM", 0);
  const trackGithubGoal = () => trackGoal("JOZATR2E", 0);
  const trackDribbbleGoal = () => trackGoal("EGN48GIU", 0);

  return (
    <aside className={cn(className, "max-w-lg mx-auto")}>
      <div className="flex justify-center text-gray-900">
        <img
          alt="Brandon Pittman"
          className="shadow-outline-gray w-32 h-32 rounded-full"
          src="/assets/images/brandon.png"
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
          onClick={trackTwitterGoal}
          href="http://twitter.com/brandonpittman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="w-8 h-8 mr-4 text-blue-400 fill-current" />
        </a>

        <a
          onClick={trackGithubGoal}
          href="http://github.com/brandonpittman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="w-8 h-8 mr-4 text-gray-900 fill-current" />
        </a>

        <a
          onClick={trackDribbbleGoal}
          href="http://dribbble.com/pittman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleIcon className="w-8 h-8 mr-4 text-gray-900 fill-current" />
        </a>
      </div>
    </aside>
  );
}
