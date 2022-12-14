import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Home() {
  const session = useSession();

  function handleSignOut() {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-10 justify-center items-center h-screen">
        <h1 className="text-5xl">Aplicação rolando solta</h1>

        <h2>Logado com {session?.data?.user?.name}</h2>

        <button
          onClick={handleSignOut}
          className="p-4 bg-purple-500 rounded active:bg-purple-400 transition"
        >
          Sair da bagaça
        </button>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return {
      props: {
        session,
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  };
};
