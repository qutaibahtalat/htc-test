export const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://heightcomparisonchart.com";

type link = {
  title: string;
  path: string;
  showInNav: boolean;
  target?: "_blank" | "_self";
};
export const routes: Record<string, link> = {
  home: {
    title: "Home",
    path: "/",
    showInNav: true,
  },

  about: {
    title: "About",
    path: "/about",
    showInNav: true,
  },
  contact: {
    title: "Contact",
    path: "/contact",
    showInNav: true,
  },
  blog: {
    title: "Blog",
    path: "https://guides.heightcomparisonchart.com/",
    showInNav: true,
    target: "_blank",
  },
};
