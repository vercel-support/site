interface CtaProps {
  href: string;
  children: React.ReactNode;
}

const Cta = ({ href, children }: CtaProps) => {
  return (
    <a
      href={href}
      className="inline-block px-3 py-2 mt-8 font-semibold text-white rounded shadow-lg bg-key hover:shadow focus:shadow transform transition-all duration-100 ease-in-out hover:translate-y-px"
      style={{ color: "white", textDecoration: "none" }}
    >
      {children}
    </a>
  );
};

export default Cta;
