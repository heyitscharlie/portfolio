import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision lets you run raw GROQ queries from inside Studio -- handy
    // for checking a query works before wiring it into the site, not
    // needed by editors day-to-day.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
