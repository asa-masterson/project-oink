export async function onRequestGet(request, env) {
    const vws = await env.KV.get("views")
    await env.KV.put("views", parseInt(vws)+1)
    return new Response(vws);
}