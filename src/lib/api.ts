import fs from "fs";
import globby from "globby";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import { basename, join } from "path";
import readingTime from "reading-time";

const postsDirectory = join(process.cwd(), "content/posts");

export interface Post {
  content: string;
  source: any;
  data: {
    date: Date;
    tags: string[];
    description: string;
    title: string;
  };
}

export async function queryPost(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const source = await renderToString(content);
  data = {
    ...data,
    date: data.date.toISOString(),
    timeToRead: readingTime(content).text,
  };

  return {
    data,
    content,
    source,
  };
}

export const getPostSlugs = () =>
  globby.sync(`${postsDirectory}/**.md`).map((path) => basename(path));

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => queryPost(slug)));
  return posts.sort((post1: Post, post2: Post) =>
    post1.data.date > post2.data.date ? -1 : 1
  );
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.map((post) => post.data.tags).flat(Infinity);
  return Array.from(new Set(tags));
}
