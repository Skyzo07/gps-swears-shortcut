import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS's one-line excuse for sending the driver down the wrong road.
// Internal winner (145/150): boat ramp + lake, smug and defensive, fresh detail.
const ENTRY =
  "I sent you down the boat ramp because the lake looked shorter on my screen, and I stand by that.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// Runtime gate guard: UTF-8, 1-200 characters, not only whitespace. Fail loudly otherwise.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(
    `entry length ${chars.length} chars is outside the 1-200 gate`
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync(outDir, { recursive: true });
// Write exactly the line — no trailing newline, so the file is byte-identical to ENTRY.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${chars.length} chars): ${ENTRY}`);
