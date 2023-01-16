import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer';
import Header from './header';

const name = 'Tyler Ashley';
export const siteTitle = 'Tyler Ashley Co';

export default function Layout({ children, home }) {
  return (
    <div className="">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#173c34" />
        <meta name="msapplication-TileColor" content="#173c34" />
        <meta name="theme-color" content="#173c34" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Header />
        {/* {home ? (
          <>
            <Image
              priority
              src="/images/tashley-profile.PNG"
              className="rounded-full"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/tashley-profile.PNG"
                className="rounded-full"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="">
              <Link href="/" className="">
                {name}
              </Link>
            </h2>
          </>
        )} */}
      <main>{children}</main>
      {home ? (
          <></>
        ) : (
          <div className="">
            <Link href="/">← Back to home</Link>
          </div>
          )}
      {/* {!home && (
        <div className="">
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
    <div><Footer /></div>
    </div>
  );
}