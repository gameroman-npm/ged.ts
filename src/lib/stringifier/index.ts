import type { GedcomTree } from "#lib/types";

function stringify(input: GedcomTree): string {
  return JSON.stringify(input);
}

export { stringify };
