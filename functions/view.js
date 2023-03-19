export async function onRequestGet({env}) {
  const vws = await env.KV.get("views", "json") ?? 0;
  return new Response("<h1> Views: " + vws + "</h1>", {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}