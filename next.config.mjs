/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      enabled: true,
    },
    // If you need to use external packages in edge runtime
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
};

export default nextConfig;
