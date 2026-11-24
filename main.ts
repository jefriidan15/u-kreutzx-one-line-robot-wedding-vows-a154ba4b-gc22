import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I promise to love you in sickness and in health, in Wi-Fi dead zones and in airplane mode, until death — or a factory reset — do us part.";

mkdirSync("/output", { recursive: true });
// One vow, one line, written exactly as-is — no trailing newline.
// The vow promises love through dead zones and airplane mode, and ends
// on the factory reset — the last words carry the joke.
writeFileSync("/output/entry.txt", entry, "utf8");
