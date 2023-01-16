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
      <div className="flex items-center flex-col py-24">
        <h2 className="text-3xl text-center py-12">Something Cool is Coming!</h2>
        <p className="text-center text-lg max-w-sm">If you are looking to get in touch, you can reach me at <a href="mailto:contact@tylerashley.com" className="text-[#2C7D77]">contact@tylerashley.com</a></p>
      </div>
    </Layout>
  );
}