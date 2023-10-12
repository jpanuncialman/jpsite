import client from "../src/client";

export async function getHomePage() {
  const query = `
  *[_type == 'homePage'][0] {
    header
  }

  `;

  return await client.fetch(query);
}

export async function getPosts() {
  const query = `*[_type == 'post'] {
    title,
    description,
    mainImage {
      asset->{
        url
      }
    },
    categories[]->{
      title
    }
    
  }
`;

  const data = await client.fetch(query);

  return data;
}
