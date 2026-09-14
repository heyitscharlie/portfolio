import type { StructureResolver } from "sanity/structure";

// Hero/About/Contact are singletons -- there's only ever one of each, at
// a fixed document id, so the default "list + create new" UI (which
// would let you accidentally create a second Hero) is replaced with a
// direct link straight to that one document.
const SINGLETONS = [
  { id: "hero", type: "hero", title: "Hero" },
  { id: "about", type: "about", title: "About" },
  { id: "contact", type: "contact", title: "Contact" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...SINGLETONS.map(({ id, type, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(type).documentId(id)),
      ),
      S.divider(),
      S.documentTypeListItem("skill").title("Skills"),
      S.documentTypeListItem("project").title("Projects"),
    ]);
