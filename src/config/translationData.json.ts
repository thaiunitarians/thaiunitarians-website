/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/Hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import siteDataEn from "./en/siteData.json";
import siteDataTh from "./th/siteData.json";
import navDataEn from "./en/navData.json";
import navDataTh from "./th/navData.json";

export const dataTranslations = {
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
  },
  th: {
    siteData: siteDataTh,
    navData: navDataTh,
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
    the_name: "The Unitarians in Thailand",
    hero_description:
      "We are Thai Unitarians, a liberal religion that embraces openness, diversity, and the search for truth through reason and compassion.",
    back_to_all_posts: "Back to all posts",
    related_posts: "Related Posts",
    share_this_post: "Share this post!",
    updated: "Updated",
    reading_time: "min read",
    table_of_contents: "Table of Contents",
  },
  th: {
    the_name: "กลุ่มชาวยูนิทาเรี่ยนในประเทศไทย",
    hero_description:
      "เราคือชาวยูนิทาเรี่ยนในประเทศไทย ศาสนาเสรีซึ่งยอมรับในความเปิดกว้าง ความหลากหลาย และการแสวงหาความจริงด้วยเหตุผลและความเข้าใจ",
    back_to_all_posts: "กลับไปที่บทความทั้งหมด",
    related_posts: "บทความที่เกี่ยวข้อง",
    share_this_post: "แชร์บทความนี้",
    updated: "อัพเดทล่าสุด",
    reading_time: "เวลาอ่าน",
    table_of_contents: "สารบัญ",
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
  th: {
    overviewKey: "overview",
  },
} as const;
