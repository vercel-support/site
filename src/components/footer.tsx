export default function Footer() {
  return (
    <footer className="flex justify-center py-16 text-sm text-gray-700">
      <span>Copyright © {new Date().getFullYear()}.&nbsp;</span>

      <a href="https://nextjs.org" target="_blank" rel="noreferrer noopener">
        Powered by Next.js.
      </a>
    </footer>
  );
}
