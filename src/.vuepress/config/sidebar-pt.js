module.exports = [
  "/pt/",
  {
    title: "Geral",
    path: "/pt/general/octopus-overview",
    collapsable: false,
    children: [
      "/pt/general/octopus-overview",
      "/pt/general/infrastructure",
      "/pt/general/octopus-staking",
      "/pt/general/octopus-faq",
    ],
  },
  {
    title: "Guia para Desenvolvedor",
    path: "/pt/guides/appchain-guide",
    collapsable: false,
    children: [
      "/pt/guides/appchain-develop",
      "/pt/guides/appchain-evm",
      "/pt/guides/appchain-register",
      "/pt/guides/appchain-startup",
      "/pt/guides/appchain-upgrade",
      "/pt/guides/appchain-indexer",
      "/pt/guides/assets-cross-chain",
    ],
  },
  {
    title: "Guia do Usuário",
    path: "/pt/guides/voting-appchain",
    collapsable: false,
    children: ["/pt/guides/voting-appchain"],
  },
  {
    title: "Guia de Delegadores",
    path: "/pt/maintain/delegator-delegate",
    collapsable: false,
    children: ["/pt/maintain/delegator-delegate", "/pt/maintain/delegator-operations"],
  },
  {
    title: "Guia de Validadores",
    path: "/pt/maintain/validator-guide",
    collapsable: false,
    children: [
      "/pt/maintain/validator-generate-keys",
      "/pt/maintain/validator-deploy",
      "/pt/maintain/validator-register",
      "/pt/maintain/monitor-node",
    ],
  },
]
