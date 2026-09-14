import { defineField, defineType } from "sanity";

// Singleton (see ../structure.ts), fixed at document id "contact".
export const contactType = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({ name: "blurb", title: "Blurb", type: "text", rows: 3 }),
    defineField({
      name: "footerNotes",
      title: "Footer notes",
      description:
        "Independent one-line credits at the bottom of the page (e.g. illustration credit, 'built with' note) — add as many as you like, each with an optional linked handle and icon.",
      type: "array",
      of: [
        {
          type: "object",
          name: "footerNote",
          fields: [
            defineField({ name: "text", title: "Text", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "linkText", title: "Link text", type: "string" }),
            defineField({ name: "linkHref", title: "Link URL", type: "url" }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ["none", "instagram", "github", "npm"] },
              initialValue: "none",
            }),
          ],
          preview: {
            select: { title: "text", subtitle: "linkText" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact" }),
  },
});
