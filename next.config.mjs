/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["civicad.in"],
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        slide: "slide 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default nextConfig;
