import Header from "@components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx) {
    const files = Deno.readDir(
      `${Deno.cwd()}/static/content`,
    );
    const datas = [];
    for await (const file of files) {
      datas.push(file.name.replace(".md", ""));
    }
    return await ctx.render({
      blogs: datas,
    });
  },
};

export default function (props: PageProps) {
  const { blogs } = props.data;

  return (
    <>
      <Header></Header>
      <div className={"mx-auto w-3/4"}>
        <h1>Blogs</h1>

        {blogs.map((blog: string) => (
          <a
            href={`/blog/${blog}`}
            class={"hover:text-gray-700 py-1 border-gray-500 font-bold "}
          >
            <div className={"border-2 rounded-md p-3"}>
              {(blog.charAt(0).toUpperCase() + blog.slice(1)).replaceAll(
                "-",
                " ",
              )}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
