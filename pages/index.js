import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilSyltes from "../styles/utils.module.css";
import Link from "next/link";

import { getSortedPostData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className = {utilSyltes.headingMd}>
        <p>I'm DANA</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>.)
        </p>
      </section>

      <section className={`${utilSyltes.headingMd} ${utilSyltes.padding1px}`}>
        <h2 className={utilSyltes.headingLg}>Blog</h2>
        <ul className={utilSyltes.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilSyltes.listItem} key = {id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps(){
  const allPostsData = getSortedPostDate();
  return {
    props: {
      allPostsData,
    },
  };
}
