export default function Card({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${className ||
        ""} flex flex-col overflow-hidden bg-white rounded-lg shadow-lg`}
    >
      {children}
    </div>
  );
}
