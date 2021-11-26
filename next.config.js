module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://localhost:8000/api/:path*",
      },
    ]
  },
}
