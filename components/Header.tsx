import IconBrandAmongUs from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-among-us.tsx";

export default function Header() {
  const menus = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div class="bg-[#86efac] py-6 px-8 ">
      <div className={"mx-auto w-4/5 flex flex-col md:flex-row gap-4"}>
        <div class="flex items-center flex-1">
          <IconBrandAmongUs aria-hidden="true" />
          <div class="text-2xl ml-1 font-bold">
            <a
              style={{ listStyleType: "none" }}
              href="/"
              class={"hover:text-gray-700 py-1 border-gray-500 font-bold border-b-2"}
            >
              Home
            </a>
          </div>
        </div>
        <ul class="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"hover:text-gray-700 py-1 border-gray-500 font-bold border-b-2"}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
