import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import Modal from '../components/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { getProviders, getSession, useSession } from 'next-auth/react';
import Widgets from '../components/Widgets';

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <div>
      <Head>
        <title>Twitter</title>
      </Head>

      <main className="bg-black min-h-screen flex mx-auto max-w-[1500px]">
        <Sidebar />
        <Feed />
        {/* <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        /> */}
        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
  //   (res) => res.json()
  // );
  // const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
  //   (res) => res.json()
  // );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      // trendingResults,
      // followResults,
      providers,
      session,
    },
  };
}
