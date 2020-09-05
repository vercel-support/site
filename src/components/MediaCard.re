[@react.component]
let make = (~children: ReasonReact.reactElement, ~title: string) =>
  <Card
    className="relative w-full transition-all ease-in-out duration-200 group transform hover:translate-y-px hover:shadow-md">
    <div className="flex flex-col flex-1 p-6"> title->Re.s children </div>
  </Card>;
