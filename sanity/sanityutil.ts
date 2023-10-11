import client from "../src/client";

export async function getPosts() {
  const query = `*[_type == 'post']`;

  const data = await client.fetch(query);

  console.log("DATA!: ", data);
  return data;
}
