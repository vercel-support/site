import clsx from "clsx";
import { differenceInMonths } from "date-fns";

const OldPostWarning = ({
  className,
  date,
}: {
  className?: string;
  date: string;
}) => {
  return differenceInMonths(new Date(date), new Date()) ? (
    <aside
      className={clsx(
        className,
        "p-4 text-sm text-orange-700 bg-orange-100 border-l-4 border-orange-500"
      )}
      role="alert"
    >
      <p className="font-bold">Just to let you know…</p>
      <p>
        The content in this post is more than 6 months old, so it's possible the
        content isn't up to date or that my thoughts on the subject described
        below have changed.
      </p>
    </aside>
  ) : null;
};

export default OldPostWarning;
