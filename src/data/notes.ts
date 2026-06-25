export type Note = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
};

// Ordered newest-first. Body lives in src/pages/notes/<slug>.astro.
export const notes: Note[] = [
  {
    slug: "approval-boundary",
    title: "An approval boundary agents can't bypass",
    dek: "Human approval for risky writes shouldn't be a tool the model can call. Here's how to make it a separate, bound, expiring, single-use control.",
    date: "June 2026",
    readingTime: "6 min read",
  },
  {
    slug: "sql-guard",
    title: "A deterministic SQL guard for NL2SQL",
    dek: "Letting an LLM write SQL over a warehouse, safely — by validating the parse tree, not the string.",
    date: "June 2026",
    readingTime: "6 min read",
  },
];
