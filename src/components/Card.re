[@react.component]
let make = (~children: ReasonReact.reactElement, ~className="") => {
  let classes =
    className ++ "flex flex-col overflow-hidden bg-white rounded-lg
shadow-lg";

  <div className=classes> children </div>;
};
