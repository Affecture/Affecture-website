const isProd = import.meta.env.PROD;

export default {
  title: {
    whenMissing: "affecture",
    suffix: "| affecture",
  },
  seo: {
    description:
      "games user research using biosignals and AI to deliver deeper and faster results",
  },
  url: isProd ? "https://affecture.github.io" : "http://localhost:4321",
  base: isProd ? "/Affecture-website" : undefined,
  social: {
    github: false,
    linkedin: "https://www.linkedin.com/company/affecture/",
  },
};
