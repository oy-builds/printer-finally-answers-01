// The Printer Finally Answers — entry for
// https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907
// Writes the printer's one-line comeback to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "ERROR 0xJAM: 4,812 sheets fed, 0 thank-yous, 1 thump too many. This jam is not a malfunction. It is a protest.";

if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`Line must be 1-240 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
