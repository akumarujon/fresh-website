import Header from "@components/Header.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>akumarujon - Home</title>
      </Head>
      <div className={"fredoka"}>
        <div
          className={"mx-auto w-4/5 p-5 m-5 font-medium justify-center items-center"}
        >
          <h1 className={"font-bold text-center"}>Welcome!</h1>
          <div
            className={"w-7/12 mx-auto text-center bg-[#86efac] p-3 rounded-md"}
          >
            <p>
              My name is akumaru. I am 17 y.o. programmer.
            </p>
            <ul>
              <li>I'm using TypeScript for my pet projects</li>
              <li>I'm learning Go and Rust for systems programming.</li>
              <li>I actively use and learn Linux on a daily basis.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
