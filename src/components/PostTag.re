[@bs.module "lodash"] external kebabCase: string => string = "kebabCase";
[@bs.module "../images/heroicons/solid/Tag.jsx"] [@react.component]
external tagComponent: unit => ReasonReact.reactElement = "default";

let make = (~tag: string) =>
  <li
    className="relative z-10 inline-block p-2 mb-2 mr-2 text-xs text-blue-700 rounded bg-blue-50">
    <Next.Link href="/tags/[slug]" _as={"/tags/" ++ kebabCase(tag)}>
      <a className="flex items-end text-blue-700 hover:opacity-75">
        <tagComponent className="block w-4 h-4 mr-1 text-key" />
        tag->Re.s
      </a>
    </Next.Link>
  </li>;
