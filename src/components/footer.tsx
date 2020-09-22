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
    <footer className="flex flex-col items-center px-4 py-16 mx-auto text-sm text-gray-700 sm:px-8 space-y-2">
      <ul className="flex flex-wrap justify-start w-full sm:justify-items-center sm:w-auto">
        {links.map((link) => (
          <li key={link.href} className="p-1">
            <Link href={link.href}>
              <a className="text-pink-600 hover:underline">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap">
        {/* <span>Copyright © {new Date().getFullYear()}.&nbsp;</span> */}
        <span className="p-1">
          This site is powered by{" "}
          <a
            className="text-pink-600 hover:underline"
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            Next.js
          </a>{" "}
          and its source is available on{" "}
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
