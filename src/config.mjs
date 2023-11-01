export default {
  title: {
    whenMissing: "affecture",
    suffix: "| affecture",
  },
  seo: {
    description:
      "games user research using biosignals and AI to deliver deeper and faster results",
  },
  url: process.env.CI
    ? "https://affecture.github.io/Affecture-website/"
    : "http://localhost:4321",
  social: {
    github: false,
    linkedin: "https://www.linkedin.com/company/affecture/",
  },
};
