import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sanity Studio's server-side bundle pulls in `swr`, which resolves to
  // a "react-server" conditional export with no default export under
  // Next.js's RSC bundling -- but Studio's own code imports it as a
  // default export, so bundling it through Next.js's module graph
  // breaks. Marking `sanity` external tells Next.js to require() it at
  // runtime like a normal Node package instead of resolving its imports
  // through the RSC-aware graph, which sidesteps the conflict entirely.
  serverExternalPackages: ["sanity"],
};

export default nextConfig;
