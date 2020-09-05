[@react.component]
let make = (~title: string, ~description: string, ~image="") => {
  <Next.Head>
    <title> {(title ++ " | Brandon Pittman")->React.string} </title>
    <meta name="description" content=description />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@brandonpittman" />
    <meta name="twitter:title" content=title />
    <meta name="twitter:image" content=image />
    <meta name="twitter:description" content=description />
    <meta property="og:title" content=title />
    <meta property="og:description" content=description />
    <meta property="og:type" content="website" />
    <meta property="og:image" content=image />
  </Next.Head>;
};
