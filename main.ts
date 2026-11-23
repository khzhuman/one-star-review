import { mkdirSync, writeFileSync } from "node:fs";

const review = "One star. Water has no taste. Zero effort. Would not drink again.";

// Gate guard: one line, 1-160 chars, not only whitespace.
if (review.length < 1 || review.length > 160 || review.trim().length === 0) {
  throw new Error("entry must be 1-160 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
console.log(review);
