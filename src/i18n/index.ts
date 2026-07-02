import en from "./en";
import zh from "./zh";

export type Lang = "en" | "zh";
export const languages: Record<Lang, string> = { en: "English", zh: "中文" };

export type Content = typeof en;
// Typed Record forces zh to match en's shape at compile time.
const content: Record<Lang, Content> = { en, zh };

export function getContent(lang: Lang): Content {
  return content[lang];
}

/** Prefix an app-absolute path (e.g. "/work/x/") for the given locale. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "zh" ? `/zh${clean === "/" ? "/" : clean}` : clean;
}

/** Given the current pathname, return the equivalent path in the other locale. */
export function alternatePath(pathname: string): string {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) {
    const stripped = pathname.replace(/^\/zh/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/zh/" : `/zh${pathname}`;
}
