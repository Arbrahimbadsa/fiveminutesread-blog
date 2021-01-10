import Head from 'next/head';
import Categories from './components/categories';
import Header from './components/header';
import Posts from './components/posts';
import Layout from './layout/layout';

export default function Home({posts = []}) {
  return <Layout title="Five minutes read - fill your quest.">
    <div class="bg-gray-100 overflow-x-hidden">
      <Header />
      <div class="px-6 py-8">
          <div class="flex justify-between container mx-auto">
              <Posts posts={posts} />
              <Categories />
          </div>
      </div>
  </div>
  </Layout>
}

// export async function getStaticProps(context) {
//   const dev = process.env.NODE_ENV !== 'production';
//   //const server = dev ? 'http://localhost:3000' : 'https://fiveminutesread.netlify.app';
//   const server = dev ? `http://localhost:3000` : `https://fiveminutesread.netlify.app`;
//   const {posts} = await fetch(`${server}/api/posts`).then(res => res.json());
//   return {
//       props: {
//           posts: posts.posts
//       },
//       revalidate: 1
//   }
// }