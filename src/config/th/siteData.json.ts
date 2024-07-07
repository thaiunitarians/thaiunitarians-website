import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "ชาวยูนิทาเรี่ยนในประเทศไทย",
  // Your website's title and description (meta fields)
  title:
    "กลุ่มชาวยูนิทาเรี่ยนในประเทศไทย",
  description:
    "เราคือชาวยูนิทาเรี่ยนในประเทศไทย ศาสนาเสรีซึ่งยอมรับในความเปิดกว้าง ความหลากหลาย และการแสวงหาความจริงด้วยเหตุผลและความเข้าใจ",
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
