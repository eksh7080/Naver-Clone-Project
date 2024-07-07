/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "*.pstatic.net",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MONGO_DB_URL:
      "mongodb+srv://eksh7080:dano2030@sideproject.n00xybg.mongodb.net/?retryWrites=true&w=majority&appName=SideProject",
  },
};

export default nextConfig;
