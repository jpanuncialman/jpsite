import client from "../src/client";

export async function getHomePage() {
  const query = `
  *[_type == 'homePage'][0] {
    header
  }

  `;

  return await client.fetch(query);
}

export async function getProjects() {
  const query = `*[_type == 'post'] {
    title,
    slug,
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

export async function getProject(slug: string) {
  const query = `*[_type == 'post' && slug.current == $slug][0] {
    title,
    mainImage {
      asset->{
        url
      }
    },
    categories[]->{
      title
    },
    body
    
  }
`;

  const data = await client.fetch(query, { slug });

  console.log("DATA!:", data);
  return data;
}
