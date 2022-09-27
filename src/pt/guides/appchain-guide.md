# Guias do Desenvolvedor

Antes de entrar no desenvolvimento, supõe-se que você tenha um entendimento da [Octopus Network](https://oct.network/) e da [arquitetura global](../general/octopus-overview.md) da Octopus Network.


## Desenvolver e Testar

Configure um ambiente de desenvolvimento e teste



* [Instale o Rust e o Substrate](https://docs.substrate.io/main-docs/install/)
* [Configure uma rede multi-nós Appchain ](https://docs.substrate.io/tutorials/get-started/simulate-network/)no ambiente local
* [Linha de Comando Substrate ToolsSetup uma rede Appchain multi-nó](https://docs.substrate.io/reference/command-line-tools/)

Desenvolva a Appchain baseada no template fornecido pela Octopus Network



* [Template Appchain ](https://github.com/octopus-network/barnacle/tree/release-v0.9.18)
* [Template Appchain compatível com EVM](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm)

Desenvolva a Appchain baseada no template Barnacle 



* [Tempo de execução de desenvolvimento](appchain-develop.md)
* [Construção do Substrate ](https://docs.substrate.io/main-docs/build/)
* [Palete Substrate ](https://docs.substrate.io/tutorials/work-with-pallets/)

Desenvolva a Appchain baseada no template EVM Barnacle



* [Appchain EVM](appchain-evm.md)
* [Desenvoler a DApp](https://docs.moonbeam.network/builders/build/eth-api/)

## Lançar a Testnet e Desenvolver a Mainnet


Após concluir o desenvolvimento da Appchain, por favor, familiarize-se com o [Processo de lançamento da Appchain ](appchain-startup.md), e então, entre em contato com o time Octopus para lançar a Testnet.



* [Registrar](appchain-register.md)
* [Auditar](https://github.com/octopus-network/octopus-docs/tree/main/src/guides)
* [Votar](voting-appchain.md)
* [Inicializar](appchain-startup.md)

>O processo de lançamento da Mainnet é o mesmo que o da Testnet.


## Atualizar e Manter

[Atualizar a Appchain ](appchain-upgrade.md)


## Segurança

Na Octopus Network, os proprietários de OCT podem fazer stake de OCTs para se tornarem validadores ou delegantes que fornecem segurança à Appchain.



* [LPoS da Octopus Network ](../general/octopus-staking.md)
* [Guia do Validador](../maintain/validator-guide.md)
* [Guia do Delegante](../maintain/delegator-delegate.md)

Nós validadores



* [Verificar o status da Appchain](https://mainnet.oct.network/appchains)
* Monitorar o status do nó validador por meio do [telemetry node](https://telemetry.mainnet.octopus.network/)