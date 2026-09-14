import { defineField, defineType } from "sanity";

// Singleton (see ../structure.ts), fixed at document id "about".
export const aboutType = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "introParagraph", title: "Intro paragraph", type: "text", rows: 4 }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          name: "educationEntry",
          fields: [
            defineField({ name: "qualification", title: "Qualification", type: "string" }),
            defineField({ name: "org", title: "Institution", type: "string" }),
            defineField({ name: "dates", title: "Dates", type: "string" }),
          ],
          preview: {
            select: { title: "qualification", subtitle: "org" },
          },
        },
      ],
    }),
    defineField({
      name: "membershipsText",
      title: "Memberships",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    prepare: () => ({ title: "About" }),
  },
});
