import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { render } from "https://deno.land/x/gfm@0.6.0/mod.ts";
import Header from "../../components/Header.tsx";

export const handler: Handlers = {
  async GET(req: Request, ctx) {
    const slug = req.url.split("/").slice(-1)[0];
    return await ctx.render({
      content: await Deno.readTextFile(
        `${Deno.cwd()}/static/content/${slug}.md`,
      ),
    });
  },
};

export default function Page(props: PageProps) {
  const body = render(props.data.content);
  const { slug } = props.params;

  return (
    <>
      <Header></Header>
      <div className={"mx-auto w-3/4"}>
        <h1>
          {(slug.charAt(0).toUpperCase() + slug.slice(1)).replaceAll("-", " ")}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: body }}
        >
        </div>
      </div>
    </>
  );
}
