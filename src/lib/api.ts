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
    data: data.date.toISOString(),
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

export function getPostBySlug(slug: string, fields = []) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "timeToRead") {
      items[field] = readingTime(content).text;
    }

    if (data[field]) {
      switch (field) {
        case "tags":
          items[field] = JSON.stringify(data[field]);
          break;
        case "date":
          items[field] = data[field].toISOString();
          break;
        default:
          items[field] = data[field];
      }
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1: Post, post2: Post) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllTags() {
  const slugs: any[] = getPostSlugs();
  const tags: any = slugs
    .flatMap(slug => getPostBySlug(slug, ["tags"]))
    .flat(Infinity)
    .reduce((acc: any[], val: any) => [...acc, JSON.parse(val.tags)], []);

  console.log(tags);

  return Array.from(new Set(tags));
}
