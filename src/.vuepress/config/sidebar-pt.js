module.exports = [
  "/",
  {
    title: "Geral",
    path: "/general/octopus-overview",
    collapsable: false,
    children: [
      "/general/octopus-overview",
      "/general/infrastructure",
      "/general/octopus-staking",
      "/general/octopus-faq",
    ],
  },
  {
    title: "Guia para Desenvolvedor",
    path: "/guides/appchain-guide",
    collapsable: false,
    children: [
      "/guides/appchain-develop",
      "/guides/appchain-evm",
      "/guides/appchain-register",
      "/guides/appchain-startup",
      "/guides/appchain-upgrade",
      "/guides/appchain-indexer",
      "/guides/assets-cross-chain",
    ],
  },
  {
    title: "Guia do Usuário",
    path: "/guides/voting-appchain",
    collapsable: false,
    children: ["/guides/voting-appchain"],
  },
  {
    title: "Guia de Delegadores",
    path: "/maintain/delegator-delegate",
    collapsable: false,
    children: ["/maintain/delegator-delegate", "/maintain/delegator-operations"],
  },
  {
    title: "Guia de Validadores",
    path: "/maintain/validator-guide",
    collapsable: false,
    children: [
      "/maintain/validator-generate-keys",
      "/maintain/validator-deploy",
      "/maintain/validator-register",
      "/maintain/monitor-node",
    ],
  },
]
