/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@mui/icons-material",
    "@mui/x-date-pickers",
    "@devexpress/dx-react-grid-material-ui",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
