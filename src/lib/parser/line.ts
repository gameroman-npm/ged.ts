interface GedcomLine {
  level: number;
  pointer?: string;
  tag: string;
  value?: string;
}

function parseLine(line: string): GedcomLine {
  let index = 0;

  let spaceIndex = line.indexOf(" ", index);

  const level = Number.parseInt(line.substring(0, spaceIndex), 10);

  index = spaceIndex + 1;

  let pointer: string | undefined;
  if (line[index] === "@") {
    const endPointerIndex = line.indexOf("@", index + 1);
    if (endPointerIndex !== -1) {
      pointer = line.substring(index, endPointerIndex + 1);
      index = endPointerIndex + 2; // Move past closing '@' and space
    }
  }

  spaceIndex = line.indexOf(" ", index);
  if (spaceIndex === -1) {
    spaceIndex = line.length;
  }

  const tag = line.substring(index, spaceIndex);
  index = spaceIndex + 1;

  let value: string | undefined;
  if (index < line.length) {
    value = line.substring(index);
  }

  const result: GedcomLine = { level, tag };

  if (pointer) {
    result.pointer = pointer;
  }

  if (value) {
    result.value = value;
  }

  return result;
}

export { parseLine };
export type { GedcomLine };
