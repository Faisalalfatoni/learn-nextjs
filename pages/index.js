import Navbar from "./components/Navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Learn NextJs</title>
        <meta name="keywords" content="next js" />
      </Head>
      <Navbar />
      <Image src="/next.svg" width={300} height={300} alt="logo next" />
      <section>
        <h1>Hello World</h1>
      </section>
    </>
  );
}
