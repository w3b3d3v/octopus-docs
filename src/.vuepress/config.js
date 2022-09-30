module.exports = {
  title: "Documentação Octpus",
  theme: "reco",
  plugins: [["@dovyp/vuepress-plugin-clipboard-copy", true]],

  base: process.env.BASE_PATH || "/",
  dest: "./dist",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  locales: {
    "/": {
      title: "Documentação Octopus",
      lang: "pt-BR",
      description: "WEB3DEV",
    },
  },

  themeConfig: {
    logo: "/logo-blue-w3d.png",
    logoDark: "/logo-blue.png",
    lastUpdated: true,
    editLinks: false,
    sidebar: "auto",

    author: "Octopus Team",
    repo: "https://github.com/octopus-network/octopus-docs.git",

    locales: {
      "/": {
        label: "Português",
        nav: [
          {
            text: "Site Oficial",
            link: "https://oct.network/",
            target: "_self",
            rel: "",
            icon: "reco-home",
          },
          { text: "Índice", link: "/", icon: "" },
        ],
        sidebar: require("./config/sidebar-pt"),
      },
    },
  },
}