import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>akumarujon - Home</title>
      </Head>
      <div className={"justify-center items-center flex align-middle h-full"}>
        <h1 className={"text-center  shadow-zinc-500"}>
          akumaru's land
        </h1>
      </div>
    </>
  );
}
