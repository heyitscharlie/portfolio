import { defineField, defineType } from "sanity";

// Singleton (see ../structure.ts) — there's only ever one Hero document,
// fixed at document id "hero".
export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "rotatingWords",
      title: "Rotating words",
      description: "\"Let's build something ___\" — cycles through these.",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: "introParagraphs",
      title: "Intro paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero" }),
  },
});
