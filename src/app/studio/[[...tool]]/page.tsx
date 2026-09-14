/**
 * Embeds Sanity Studio at /studio. Kept as a Server Component so the
 * metadata/viewport exports (Next.js-only in Server Components) work --
 * actual rendering is delegated to StudioClient, which imports the
 * config itself rather than receiving it as a prop (see that file for
 * why passing it across the server/client boundary breaks).
 */
import StudioClient from "./StudioClient";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <StudioClient />;
}
