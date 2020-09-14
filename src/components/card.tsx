export default function Card({ className, children, style }) {
  return (
    <div
      style={style}
      className={`${
        className || ""
      } flex flex-col overflow-hidden bg-white rounded-lg shadow-lg`}
    >
      {children}
    </div>
  );
}
