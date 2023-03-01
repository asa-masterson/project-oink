export async function onRequestGet() {
    const vws = await KV.get("views")
    await KV.put("views", parseInt(vws)+1)
    return new Response(vws);
} # worker