import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "French Blogsmith",
  // Your website's title and description (meta fields)
  title:
    "Blogsmith - a beautiful starter blog template using Astro and Tailwind CSS",
  description:
    "Get your new blog website up and running quickly with our beautiful website theme designed using Astro and Tailwind CSS. Perfect for freelancers, developers, startups, and personal use.",
  // Your information!
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Blogsmith logo",
  },
};

export default siteData;
