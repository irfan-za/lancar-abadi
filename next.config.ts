import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xwemsfgtjtwokqckvwus.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/ddjmxrrij/image/upload/**",
      }
    ],
  },
};

export default nextConfig;
