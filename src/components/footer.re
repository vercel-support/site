let today = Js.Date.make();
let thisYear = Js.Date.getFullYear(today);
let thisYearAsString = Js.Float.toString(thisYear);
let copy = {js|©|js};
let nbsp = {js|\u00A0|js};
let s = ReasonReact.string;

[@react.component]
let make = () =>
  <footer className="flex justify-center py-16 text-sm text-gray-700">
    <span>
      {("Copyright " ++ copy ++ thisYearAsString ++ "." ++ nbsp)->s}
    </span>
    <a
      href="https://nextjs.org"
      target="_blank"
      rel="noreferrer noopener"
      className="text-pink-500 underline">
      "Powered by Next.js."->s
    </a>
  </footer>;
