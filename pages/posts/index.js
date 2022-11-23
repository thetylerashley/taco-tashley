import Link from 'next/link';
import Date from '../../components/date';
import Layout from '../../components/layout';

import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <> 
      <Layout>
        <h2 className="">Blog Index Page</h2>
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className=""
             key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        </Layout>
      </>
  );
}