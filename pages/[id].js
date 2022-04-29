import React from "react";
// import { getAllPostIds, getPostData } from "../components/lib/subPages";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";

const subPages = ({ id, contentHtml }) => {
  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>
      <article className="py-10 prose lg:prose-xl">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
};

export default subPages;

export async function getStaticPaths({ locales }) {
  const { defaultLocale } = require("../i18n.json");
  let paths = [];
  const files = fs.readdirSync(path.join("subPages"));
  for (let id of files) {
    for (let locale of locales) {
      let fullpath = path.join(
        "subPages",
        id,
        locale === defaultLocale ? "index.md" : `index.${locale}.md`
      );
      if (!fs.existsSync(fullpath)) {
        continue;
      }

      paths.push({ params: { id }, locale });
    }
  }

  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps = async ({ params, locale }) => {
  const { defaultLocale } = require("../i18n.json");
  const id = params.id;
  const fullPath = path.join(
    "subPages",
    id,
    locale === defaultLocale ? "index.md" : `index.${locale}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: { id, contentHtml },
  };
};
