import Navbar from "./components/Navbar";
import { cache } from "react";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Learn NextJs</title>
        <meta name="keywords" content="next js" />
      </Head>
      <Navbar />
      <Image src="/vercel.svg" width={300} height={300} alt="logo next" />
      <section>
        <h1>About</h1>
      </section>
    </>
  );
};
export default about;
