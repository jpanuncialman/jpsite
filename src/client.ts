import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "i9b5u0my",
  dataset: "production",
  apiVersion: "2023-05-03", // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default client;
