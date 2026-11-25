// Midnight Fridge Roast.
// One roast line about a smart fridge that refuses to open after midnight.
// The program checks the line fits the gate (1-200 characters, one line,
// not blank) and writes exactly that line, with no trailing newline, to
// /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The roast: the fridge will not open after midnight, because the
// leftovers inside have supposedly taken out a restraining order against
// their owner — and this fridge, unlike every other appliance, actually
// enforces it. The joke turns on the fridge treating a midnight snack
// like a legal matter.
const ROAST =
  "My fridge won't open after midnight — apparently the leftovers filed a restraining order, and this fridge actually enforces it.";

function fail(message: string): never {
  throw new Error(message);
}

if (ROAST.length < 1 || ROAST.length > 200) {
  fail(`roast must be 1-200 characters, got ${ROAST.length}`);
}
if (ROAST.trim() === "") {
  fail("roast must not be blank");
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  fail("roast must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ROAST) {
  fail("entry.txt does not match the roast line");
}

console.log(ROAST);
console.log(`characters: ${ROAST.length}`);
