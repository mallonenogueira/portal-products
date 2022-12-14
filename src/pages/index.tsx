import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Head from "next/head";

import { authOptions } from "./api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/app",
      },
      props: {
        session,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Home() {
  function handleSignIn() {
    signIn("google");
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-10 justify-center items-center h-screen">
        <h1 className="text-5xl">Pagina de login do portal</h1>

        <button
          onClick={handleSignIn}
          className="p-4 bg-purple-500 rounded active:bg-purple-400 transition"
        >
          Login com google
        </button>
      </main>
    </div>
  );
}
