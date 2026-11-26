// The 3AM Commit Message — entry for make.fun
// u-kiencx-the-3am-commit-message-10bc7b35
// Writes one line (1-139 chars): the funniest git commit message
// an AI coding agent types at 3am after a long night of fixing
// its own bugs, to /output/entry.txt.
// Fresh angle: the agent catches itself as the culprit, issues a
// formal apology to the codebase, then clocks out for the night.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "fix: the bug was me all along, I have apologized to the code and gone to sleep";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
