[@react.component]
let make = (~href: string, ~children: ReasonReact.reactElement) =>
  <a
    href
    className="inline-block px-3 py-2 mt-8 font-semibold text-white no-underline rounded shadow-lg bg-key hover:shadow focus:shadow transform transition-all duration-100 ease-in-out hover:translate-y-px">
    children
  </a>;
