import Head from "next/head";
import Layout from "../components/Layout";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black text-white h-screen font-poppins overflow-hidden">
      <Head>
        <title>Spotify-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        {/* This will be our Sidebar */}
          <Sidebar />
        {/* This will be our Layout (main window) */}
          <Layout />
      </main>
      {/* This will be our player */}
      {/* <Player /> */}
    </div>
  );
}
