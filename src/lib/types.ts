interface GedcomNode {
  id?: string;
  tag: string;
  value?: string;
  children: GedcomNode[];
}

type GedcomTree = GedcomNode[];

export type { GedcomTree, GedcomNode };
