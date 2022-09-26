# Guias do Desenvolvedor

Antes de entrar no desenvolvimento, supõe-se que você tenha um entendimento da [Octopus Network](https://oct.network/) e da [arquitetura global](https://docs.oct.network/general/octopus-overview.html#octopus-network-overview) da Octopus Network.


## Desenvolver e Testar

Configure um ambiente de desenvolvimento e teste



* [Instale o Rust e o Substrate](https://docs.substrate.io/main-docs/install/)
* [Configure uma rede multi-nós Appchain ](https://docs.substrate.io/tutorials/get-started/simulate-network/)no ambiente local
* [Linha de Comando Substrate ToolsSetup uma rede Appchain multi-nó](https://docs.substrate.io/reference/command-line-tools/)

Desenvolva a Appchain baseada no template fornecido pela Octopus Network



* [Template Appchain ](https://github.com/octopus-network/barnacle/tree/release-v0.9.18)
* [Template Appchain compatível com EVM](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm)

Desenvolva a Appchain baseada no template Barnacle 



* [Tempo de execução de desenvolvimento](https://docs.oct.network/guides/appchain-develop.html#implement-appchain-runtime)
* [Construção do Substrate ](https://docs.substrate.io/main-docs/build/)
* [Palete Substrate ](https://docs.substrate.io/tutorials/work-with-pallets/)

Desenvolva a Appchain baseada no template EVM Barnacle



* [Appchain EVM](https://docs.oct.network/guides/appchain-evm.html#appchain-evm-compatible)
* [Desenvoler a DApp](https://docs.moonbeam.network/builders/build/eth-api/)

## Lançar a Testnet e Desenvolver a Mainnet


Após concluir o desenvolvimento da Appchain, por favor, familiarize-se com o [Processo de lançamento da Appchain ](https://docs.oct.network/guides/appchain-startup.html), e então, entre em contato com o time Octopus para lançar a Testnet.



* [Registrar](https://docs.oct.network/guides/appchain-register.html#appchain-register)
* [Auditar](https://github.com/paulo-gio/octopus-docs/blob/main/Developer%20Guides)
* [Votar](https://docs.oct.network/guides/voting-appchain.html#voting-for-appchain)
* [Inicializar](https://docs.oct.network/guides/appchain-startup.html#appchain-booting-process)

>O processo de lançamento da Mainnet é o mesmo que o da Testnet.


## Atualizar e Manter

[Atualizar a Appchain ](https://docs.oct.network/guides/appchain-upgrade.html#appchain-upgrade)


## Segurança

Na Octopus Network, os proprietários de OCT podem fazer stake de OCTs para se tornarem validadores ou delegantes que fornecem segurança à Appchain.



* [LPoS da Octopus Network ](https://docs.oct.network/general/octopus-staking.html#octopus-network-staking)
* [Guia do Validador](https://docs.oct.network/maintain/validator-guide.html)
* [Guia do Delegante](https://docs.oct.network/maintain/delegator-delegate.html)

Nós validadores



* [Verificar o status da Appchain](https://mainnet.oct.network/appchains)
* Monitorar o status do nó validador por meio do [telemetry node](https://telemetry.mainnet.octopus.network/)