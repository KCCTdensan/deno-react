export const handler = async (req: Request): Promise<Response> => {
  const { pathname } = new URL(req.url);

  if (req.method === "GET") {
    switch (pathname) {
      // GET 404
      default: {
        return new Response(null, { status: 404 });
      }
    }
  }

  if (req.method === "POST") {
    switch (pathname) {
      // POST /api/unko
      case "/api/unko": {
        try {
          const body = await req.json();
          if (body.name) {
            return new Response(
              JSON.stringify({ "💩": `${body.name} with 💩` }),
            );
          } else {
            return new Response(
              JSON.stringify({ "💩💩": "no name found" }),
            );
          }
        } catch {
          return new Response(null, { status: 400 });
        }
      }
      // POST 404
      default: {
        return new Response(null, { status: 404 });
      }
    }
  }

  return new Response(null, { status: 404 });
};
