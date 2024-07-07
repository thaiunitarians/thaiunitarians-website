// utils
import { getAllPosts, countItems, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

// get the categories used in blog posts, to put into navbar
const posts = await getAllPosts("th");
const allCategories = posts.map((post) => post.data.categories).flat();
const countedCategories = countItems(allCategories);
const processedCategories = sortByValue(countedCategories);

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: "เกี่ยวกับเรา",
    link: "/about/",
  },
  {
    // get the categories used in blog posts, to put into a navbar dropdown
    text: "Categories",
    dropdown: processedCategories.map(([category, count]) => {
      return {
        text: humanize(category),
        link: `/categories/${category}/`,
      };
    }),
  },
  {
    text: "Pages",
    dropdown: [
      {
        text: "Blog",
        link: "/blog/",
      },
      {
        text: "Categories",
        link: "/categories/",
      },
      {
        text: "Tags",
        link: "/tags/",
      },
      {
        text: "Elements",
        link: "/elements/",
      },
      {
        text: "Contact",
        link: "/contact/",
      },
      {
        text: "Privacy Policy",
        link: "/privacy-policy/",
      },
    ],
  },
];

export default navConfig;
