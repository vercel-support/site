import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../components/markdown.module.css";

export default function Layout(_frontmatter) {
  return ({ children: content }) => {
    return (
      <div className="flex flex-col min-h-screen text-lg bg-gray-50">
        <Header />
        <main className={"max-w-3xl mx-auto" + " " + styles["markdown"]}>
          {content}
        </main>
        <Footer />
      </div>
    );
  };
}
