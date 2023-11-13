export default {
  title: {
    whenMissing: "affecture",
    suffix: "| affecture",
  },
  seo: {
    description:
      "games user research using biosignals and AI to deliver deeper and faster results",
  },
  url: import.meta.env.PROD
    ? "https://affecture.github.io"
    : "http://localhost:4321",
  base: import.meta.env.PROD ? "/Affecture-website" : undefined,
  social: {
    github: false,
    linkedin: "https://www.linkedin.com/company/affecture/",
  },
  contact: {
    emailjs: {
      publicKey: "",
      formTemplate: "",
    },
  },
};
