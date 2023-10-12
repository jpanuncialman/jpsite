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
};

module.exports = nextConfig;
