import type { GedcomNode, GedcomTree } from "#lib/types";

import { parseLine } from "./line";

function parse(input: string): GedcomTree {
  const nodes: GedcomNode[] = [];
  const stack: GedcomNode[] = [];

  const lines = input.split(/\r?\n/);

  for (const rawLine of lines) {
    if (!rawLine.trim()) continue;

    const parsedLine = parseLine(rawLine);
    const { level, pointer, tag, value } = parsedLine;

    const node: GedcomNode = { tag, children: [] };

    if (pointer) {
      node.id = pointer;
    }

    if (value) {
      node.value = value;
    }

    if (level === 0) {
      nodes.push(node);
      stack[0] = node;
      stack.length = 1;
    } else {
      stack[level - 1]?.children.push(node);
      stack[level] = node;
      stack.length = level + 1;
    }
  }

  return nodes;
}

export { parse };
