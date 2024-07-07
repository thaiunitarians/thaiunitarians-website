import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Unitarians in Thailand",
  // Your website's title and description (meta fields)
  title:
    "Unitarians in Thailand",
  description:
    "We are Thai Unitarians, a liberal religion that embraces openness, diversity, and the search for truth through reason and compassion.",
  // Your information!
  author: {
    name: "Thai Unitarians",
    email: "thaiunitarians@gmail.com",
    twitter: "thaiunitarians",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Logo",
  },
};

export default siteData;
