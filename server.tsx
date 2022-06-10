import React from "react";
import { serve } from "std/http/server.ts";
import { renderToString } from "react-dom/server";
import { handler } from "./api.ts";

const dist = "/bundle.js";
const style = "/app.css";
const port = 8000;

const client = async (): Promise<Uint8Array> => {
  // リリースモードかどうかの判定
  return await Deno.readFile(`.${dist}`);
};

const Root = () => (
  <html lang="ja">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>しりとり</title>
      <link rel="stylesheet" href={style} />
    </head>
    <body>
      <div id="app" />
      <script type="module" src={dist}></script>
    </body>
  </html>
);

serve(
  async (req: Request): Promise<Response> => {
    const { pathname } = new URL(req.url);

    switch (true) {
      // client js
      case pathname === dist: {
        return new Response(await client(), {
          headers: { "Content-Type": "text/javascript" },
        });
      }
      // client css
      case pathname === style: {
        return new Response(await Deno.readFile(`./src${style}`), {
          headers: { "Content-Type": "text/css" },
        });
      }
      // api
      case pathname.startsWith("/api/"): {
        return handler(req);
      }
      //
      default: {
        return new Response(
          "<!DOCTYPE html>" + renderToString(Root(dist, style)),
          { headers: { "Content-Type": "text/html" } },
        );
      }
    }
  },
  { port },
);
