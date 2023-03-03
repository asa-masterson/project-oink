export async function onRequestGet({env}) {
  const vws = await env.KV.get("views", "json") ?? 0;
  await env.KV.put("views", vws + 1);
  return new Response(vws);
};