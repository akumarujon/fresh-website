import Header from "@components/Header.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>akumarujon - Home</title>
      </Head>
      <div className={"fredoka"}>
        <Header></Header>

        <div className={"mx-auto w-3/4 p-5 m-5 font-medium"}>
          <h1 className={"text-3xl font-bold text-center"}>Welcome!</h1>
          <p>
            My name is akumaru. I am 17 y.o. programmer from Uzbekistan.
          </p>
          <ul>
            <li>I'm using TypeScript for my projects</li>
            <li>I'm learning Go and Rust for systems programming.</li>
            <li>I actively use and learn Linux.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
