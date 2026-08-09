import { describe, it, expect } from "bun:test";

import { parseLine } from "#lib/parser/line";

describe("parseLine", () => {
  it('parses "0 HEAD"', () => {
    expect(parseLine("0 HEAD")).toEqual({ level: 0, tag: "HEAD" });
  });

  it('parses "1 GEDC"', () => {
    expect(parseLine("1 GEDC")).toEqual({ level: 1, tag: "GEDC" });
  });

  it('parses "2 VERS 5.5.1"', () => {
    expect(parseLine("2 VERS 5.5.1")).toEqual({
      level: 2,
      tag: "VERS",
      value: "5.5.1",
    });
  });

  it('parses "2 FORM LINEAGE-LINKED"', () => {
    expect(parseLine("2 FORM LINEAGE-LINKED")).toEqual({
      level: 2,
      tag: "FORM",
      value: "LINEAGE-LINKED",
    });
  });

  it('parses "1 CHAR UTF-8"', () => {
    expect(parseLine("1 CHAR UTF-8")).toEqual({
      level: 1,
      tag: "CHAR",
      value: "UTF-8",
    });
  });

  it('parses "1 LANG English"', () => {
    expect(parseLine("1 LANG English")).toEqual({
      level: 1,
      tag: "LANG",
      value: "English",
    });
  });

  it('parses "1 SOUR GEDTS"', () => {
    expect(parseLine("1 SOUR GEDTS")).toEqual({
      level: 1,
      tag: "SOUR",
      value: "GEDTS",
    });
  });

  it('parses "2 NAME ged.ts"', () => {
    expect(parseLine("2 NAME ged.ts")).toEqual({
      level: 2,
      tag: "NAME",
      value: "ged.ts",
    });
  });

  it('parses "0 @I1@ INDI"', () => {
    expect(parseLine("0 @I1@ INDI")).toEqual({
      level: 0,
      pointer: "@I1@",
      tag: "INDI",
    });
  });

  it('parses "1 SEX M"', () => {
    expect(parseLine("1 SEX M")).toEqual({ level: 1, tag: "SEX", value: "M" });
  });

  it('parses "1 FAMC @F1@"', () => {
    expect(parseLine("1 FAMC @F1@")).toEqual({
      level: 1,
      tag: "FAMC",
      value: "@F1@",
    });
  });
});
