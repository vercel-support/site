module Header = {
  [@bs.module "./header.tsx"] [@react.component]
  external make: unit => React.element = "default";
};

[@react.component]
let make = (~children: ReasonReact.reactElement, ~className: string) => {
  let baseMainClasses = "flex-1 w-full container p-4 mx-auto sm:p-8";
  let mainClasses = baseMainClasses ++ " " ++ className;

  <div className="flex flex-col min-h-screen text-lg bg-gray-50">
    <Header />
    <main className=mainClasses> children </main>
    <Footer />
  </div>;
};
