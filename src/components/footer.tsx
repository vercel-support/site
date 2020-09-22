import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
  { label: "Blog", href: "/writing" },
  { label: "OmniFocus", href: "/focusing" },
  { label: "Contact", href: "/available" },
  { label: "Patronage", href: "/grateful" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-16 mx-auto text-sm text-gray-700 space-y-2">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className="text-pink-600 hover:underline">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex space-x-1">
        {/* <span>Copyright © {new Date().getFullYear()}.&nbsp;</span> */}
        <span>
          This site is powered by{" "}
          <a
            className="text-pink-600 hover:underline"
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            Next.js
          </a>
          .{" "}
        </span>

        <span>
          Source available on{" "}
          <a
            href="https://github.com/brandonpittman/next-blog"
            target="_blank"
            rel="noreferrer noopener author"
            className="text-pink-600 hover:underline"
          >
            GitHub.
          </a>
        </span>
      </div>
    </footer>
  );
}
