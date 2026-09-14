import { defineField, defineType } from "sanity";

// Covers both "Client / Proprietary" and "Independent" projects (the
// `group` field is what splits them on the page) -- including the
// "Coming soon" placeholder card, which is just a normal project doc
// with an empty description/tags/links.
export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "group",
      title: "Group",
      type: "string",
      options: {
        list: [
          { title: "Client / Proprietary", value: "client" },
          { title: "Independent", value: "independent" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Tech stack tags shown in the client project cards.",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "links",
      title: "Links",
      description: "GitHub/npm icon links shown on independent project cards.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              options: { list: ["github", "npm"] },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "href", title: "URL", type: "url", validation: (rule) => rule.required() }),
          ],
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Order",
      description: "Lower numbers appear first within the group.",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "group" },
  },
});
