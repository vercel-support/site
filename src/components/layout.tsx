import Header from "./header";
import { make as Footer } from "./footer.bs";

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseMainClasses = "flex-1 w-full container p-4 mx-auto sm:p-8";
  const mainClasses = baseMainClasses.concat(" ").concat(className);

  return (
    <div className="flex flex-col min-h-screen text-lg bg-gray-50">
      <Header />
      <main className={mainClasses}> {children}</main>
      <Footer />
    </div>
  );
}
