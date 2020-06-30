import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../components/markdown.module.css";
import cn from "classnames";

const classes = cn("w-full px-8 max-w-2xl mx-auto", styles["markdown"]);

export default function Layout(_frontmatter) {
  return ({ children: content }) => {
    return (
      <div className="flex flex-col min-h-screen text-lg bg-gray-50">
        <Header />
        <main className={classes}>{content}</main>
        <Footer />
      </div>
    );
  };
}
