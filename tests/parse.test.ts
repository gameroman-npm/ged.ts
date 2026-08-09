import { describe, it, expect } from "bun:test";

import { parse } from "ged.ts";

describe("parse", () => {
  it("parses a simple header of a v5.5.1 GEDCOM file", () => {
    const input = `
0 HEAD
1 GEDC
2 VERS 5.5.1
2 FORM LINEAGE-LINKED
1 CHAR UTF-8
1 LANG English
1 SOUR GEDTS
2 NAME ged.ts
2 VERS 1.0.0
`.trim();
    expect(parse(input)).toEqual([
      {
        tag: "HEAD",
        children: [
          {
            tag: "GEDC",
            children: [
              { tag: "VERS", value: "5.5.1", children: [] },
              { tag: "FORM", value: "LINEAGE-LINKED", children: [] },
            ],
          },
          { tag: "CHAR", value: "UTF-8", children: [] },
          { tag: "LANG", value: "English", children: [] },
          {
            tag: "SOUR",
            value: "GEDTS",
            children: [
              { tag: "NAME", value: "ged.ts", children: [] },
              { tag: "VERS", value: "1.0.0", children: [] },
            ],
          },
        ],
      },
    ]);
  });
});
