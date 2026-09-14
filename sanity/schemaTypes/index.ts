import { type SchemaTypeDefinition } from "sanity";
import { aboutType } from "./aboutType";
import { contactType } from "./contactType";
import { heroType } from "./heroType";
import { projectType } from "./projectType";
import { skillType } from "./skillType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, aboutType, contactType, skillType, projectType],
};
