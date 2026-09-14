import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // No CDN in dev so content edits show up immediately; useCdn: true
  // would cache reads for up to a minute, which is fine in production
  // but confusing while actively editing content in Studio.
  useCdn: process.env.NODE_ENV === "production",
});
