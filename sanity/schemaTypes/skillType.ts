import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "core",
      title: "Core stack",
      description: "Core skills lead the list, styled with the primary colour.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Order",
      description: "Lower numbers appear first within their group (core / other).",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "core", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "core" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: subtitle ? "Core" : undefined }),
  },
});
