import { Links, Meta, Outlet, Scripts, ScrollRestoration, LiveReload } from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import stylesheet from "~/styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet }
];

export const meta: MetaFunction = () => [{ title: "わびさび日記" }];

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-100 text-gray-800 font-serif">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
