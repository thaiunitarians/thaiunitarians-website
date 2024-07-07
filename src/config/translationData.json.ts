/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import siteDataEn from "./en/siteData.json";
import siteDataFr from "./fr/siteData.json";
import navDataEn from "./en/navData.json";
import navDataFr from "./fr/navData.json";

export const dataTranslations = {
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
  },
  fr: {
    siteData: siteDataFr,
    navData: navDataFr,
  },
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Example
 *
 * ```ts
 * import { getLocaleFromUrl } from "@js/localeUtils";
 * import { useTranslations } from "@js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
  en: {
    hero_description:
      "Get your blog running in a snap. Multiple pages and sections, i18n, animations, CMS - all ready to go.",
    back_to_all_posts: "Back to all posts",
    related_posts: "Related Posts",
    share_this_post: "Share this post!",
    updated: "Updated",
    reading_time: "min read",
    table_of_contents: "Table of Contents",
  },
  fr: {
    hero_description:
      "Je ne parle pas vraiment français donc j'utilise Google Translate pour quelques parties de cette démo.",
    back_to_all_posts: "Retour à tous les articles",
    related_posts: "Articles Similaires",
    share_this_post: "Partager cette publication!",
    updated: "Mis à jour",
    reading_time: "min de lecture",
    table_of_contents: "Table des Matières",
  },
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * ## Examples
 *
 * These routes must be everything after the base domain. So if this is "site.com/blog", the route would be "blog"
 * Or if this is "ste.com/blog/my-post", the route would be "blog/my-post"
 */
export const routeTranslations = {
  en: {
    overviewKey: "overview",
  },
  fr: {
    overviewKey: "apercu",
  },
} as const;
