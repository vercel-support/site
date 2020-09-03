import fs from "fs";
import { join, basename } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import globby from "globby";
import renderToString from "next-mdx-remote/render-to-string";

const postsDirectory = join(process.cwd(), "content/posts");

export interface Post {
  date: Date;
  tags: string[];
  description: string;
}

export async function queryPost(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);
  const source = await renderToString(content);
  data = {
    ...data,
    date: data.date.toISOString(),
    timeToRead: readingTime(content).text
  };

  return {
    data,
    content,
    source
  };
}

export const getPostSlugs = () =>
  globby.sync(`${postsDirectory}/**.md`).map(path => basename(path));

export async function getAllPosts() {
  const slugs = getPostSlugs();
  return await Promise.all(slugs.map(slug => queryPost(slug)));
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.map(post => post.data.tags).flat(Infinity);
  return Array.from(new Set(tags));
}
