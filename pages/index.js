import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';

// import { getSortedPostsData } from '../lib/posts';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className="">
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className="">
//         <h2 className="">Blog</h2>
//         <ul className="">
//           {allPostsData.map(({ id, date, title }) => (
//             <li className=""
//              key={id}>
//               <Link href={`/posts/${id}`}>{title}</Link>
//               <br />
//               <small className="">
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }

export default function Home() {
  return (
    <Layout home>
    <h2 className="">Homepage</h2>
    </Layout>
  );
}