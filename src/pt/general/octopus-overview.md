## Visão geral da rede Octopus

A Octopus Network é uma nova rede multi cadeia nascida para servir blockchains específicas de aplicativos, também conhecidas como Appchain. A Octopus Network oferece segurança alugada flexível e acessível, interoperabilidade entre cadeias prontas para uso, infraestrutura completa e uma comunidade pronta para ser engajada para as appchains.

![Octopus Network Architecture](https://docs.oct.network/assets/img/Octopus_Architecture.0c3753cb.png)

O nome completo das abreviações no diagrama de arquitetura:

| Abreviaturas | Nome completo  |
|------|------|
| D | Delegante, delega OCT ao validador para o staking |
| S | Staking, mantém a segurança da appchain |
| V | Validador, Stake de OCT e executa o nó validador para o staking |
| RT | (Substrate) RunTime, a lógica da aplicação appchain |
| N | Nó, os nós completos da appchain | 

### Octopus Relay

Octopus Relay é o núcleo da Octopus Network - um conjunto de  [ contratos inteligentes](https://github.com/octopus-network/octopus-relay-contract) rodando na blockchain NEAR, também conhecida como rede principal, que implementa o mercado de leasing de segurança.

### Appchain

Uma Appchain Octopus  é uma blockchain baseada em Substrate, feita para um aplicativo descentralizado específico. Uma vez integrado o palete  [pallet-octopus-appchain](https://github.com/octopus-network/pallet-octopus-appchain), a Appchain será preparada para ancorar fora da Octopus Network.

### Validador

Na Rede Octopus, os detentores de OCT podem fazer stake de OCTs para se tornarem validadores ou delegantes. Os validadores protegem as Appchains fazendo staking de OCT e [executando os nós validadores](../maintain/validator-guide.md) da Appchain. Os delegantes protegem as Appchains delegando OCT dos quais eles fazem staking para validadores honestos.

Os validadores são recompensados ​​com o token nativo das Appchains correspondentes, validando transações e blocos. Se um validador se comportar mal (por exemplo, estar offline, atacar a rede ou executar malware) na rede, o OCT em stake do validador e de seus delegantes será reduzido proporcionalmente.
