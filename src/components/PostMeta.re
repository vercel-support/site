[@bs.module "date-fns"]
external formatDistanceToNow: Js.Date.t => string = "formatDistanceToNow";

type data = {
  date: string,
  description: string,
  title: string,
  timeToRead: string,
};
type post = {
  content: string,
  data,
};

let make = (~post: post) => {
  let parsedDate = Js.Date.fromString(post.data.date);
  let published = formatDistanceToNow(parsedDate);

  <div className="flex items-center">
    <p className="text-sm text-gray-700">
      <span> {("Published " ++ published ++ " ago.")->Re.s} </span>
      <span> " • "->Re.s </span>
      <span> post.data.timeToRead->Re.s </span>
    </p>
  </div>;
};
