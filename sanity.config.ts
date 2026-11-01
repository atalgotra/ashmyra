import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { postType } from "./src/sanity/schemas/post";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "ashmyra_studio",
  title: "Ashmyra Editorial Studio",
  projectId: projectId || "zqxl7z7v",
  dataset: dataset || "production",
  schema: {
    types: [postType],
  },
  plugins: [structureTool()],
});
