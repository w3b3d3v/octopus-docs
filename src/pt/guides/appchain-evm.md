
## Compatibilidade de Appchain com a EVM

A [EVM Barnacle ](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm)é uma EVM compatível com o template de desenvolvimento  appchain fornecido pela rede Octopus. Ela usa o [Frontier](https://github.com/paritytech/frontier) desenvolvido pela Parity.

A equipe de desenvolvedores pode usar este modelo para desenvolver uma Appchain compatível com EVM. Ele apoia o time na implantação direta de seu DApp escrito em Solidity como uma Appchain em execução na Rede Octopus. A Appchain se beneficia de ser uma blockchain autônoma. Além disso, ela obtém o que a [Octopus Network](https://oct.network/) fornece, ou seja, segurança flexível cedida, interoperabilidade imediata, serviços de infraestrutura ricos e uma comunidade ativa.

A EVM Barnacle da Appchain está sendo executada na [Octopus Testnet](https://testnet.oct.network/appchains). A conexão RPC da EVM Barnacle da Appchain:



* RPC: [https://gateway.testnet.octopus.network/barnacle-evm/wj1hhcverunusc35jifki19otd4od1n5](https://gateway.testnet.octopus.network/barnacle-evm/wj1hhcverunusc35jifki19otd4od1n5)
* Chain Id: 1281
* Symbol: EBAR

## Como usar a EVM Barnacle da Octopus


 


### Uma visão de como você pode usar a EVM Barnacle da Rede Octopus

A Ethereum tornou-se o _Fat-Hub_ do ecossistema blockchain. Siga o dinheiro - como eles dizem. Todos os projetos blockchain interoperáveis que buscam o crescimento devem se conectar à rede Ethereum porque a maioria dos ativos da Web 3.0 estão lá. A maioria dos projetos blockchain independentes tem algum sistema de compatibilidade EVM em vigor. Alguns preferem pontes e outros criam um ambiente compatível com EVM em sua cadeia nativa. O objetivo de ter uma Appchain compatível com EVM é agilizar o ambiente para os validadores e usuários de app. Os usuários de aplicativos usam conjuntos de ferramentas EVM, como a MetaMask, mas os validadores ainda podem usar a carteira de plugins Polkadot.js.

Por exemplo, a Parity, empresa por trás do Substrate, criou o palete Frontier para permitir que as blockchains baseadas no Substrate tivessem contratos inteligentes compatíveis com EVM dentro de suas blockchains Substrate. Uma Parachain Polkadot se baseia na promessa de 100% de compatibilidade com EVM, a Moonbeam.

A rede Octopus também suporta um nível básico de compatibilidade com a EVM. Como as Appchains são cadeias Substrate na NEAR, pode-se usar paletes Frontier da Parity diretamente na sua Appchain. O modelo básico de blockchain compatível com EVM da Octopus é o [EVM Barnacle](https://github.com/octopus-network/barnacle/tree/release-v0.9.18-evm), usando o palete Frontier da Parity.

Para dar a você uma melhor noção de como funciona, você pode acompanhar neste tutorial.


### 
**Configurando uma EVM Barnacle Local**


### 
A EVM Barnacle é uma ótima alternativa para testar seus contratos inteligentes Solidity em um ambiente de blockchain local, sem ter que fazer deploy dos contratos em uma Testnet. 

Primeiro, você precisa clonar o repositório Barnacle original:


```
git clone https://github.com/octopus-network/barnacle
```


Em seguida, entre no diretório clonado e entre na ramificação EVM.


```
cd barnacle
git switch release-v0.9.18-evm
```


A versão atual da EVM Barnacle é a v0.9.18, mas ela irá incrementar as atualizações futuras. Você pode verificar ramificações ativas dentro do repositório Barnacle para as atualizações mais recentes.

A EVM Barnacle é um ambiente preparado e você não precisa de nenhuma configuração sofisticada. Você pode executar diretamente a blockchain e ela estará pronta para funcionar!


```
cargo build --release
./target/release/appchain-barnacle --dev --enable-offchain-indexing true
```


Ao executar a blockchain, não se esqueça de adicionar o marcador `--dev` para executar localmente. Para mais detalhes você pode consultar a documentação do [README](https://github.com/octopus-network/barnacle/blob/release-v0.9.18-evm/README.md).

Parabéns, você rodou o seu primeiro EVM Barnacle! Você pode se conectar diretamente à EVM através de `http://127.0.0.1:9933`.

>Nota: use o port `9933`. Será diferente do padrão Substrate Websocket port `9944`.


### Implantando contratos na EVM Barnacle usando Hardhat

A implantação de contratos inteligentes para a EVM Barnacle é fácil. Você pode usar os templates de contratos inteligentes fornecidos dentro de `docs/example` para simplificar o processo. O Hardhat é um ambiente de desenvolvimento da Ethereum criado com o NodeJS, então, para usá-lo, você vai precisar ter o NodeJS e NPM pré-instalado.

Entre no repositório `docs/example` e instale as dependências usando o NPM:


```
cd docs/example
npm i
```


Dentro do diretório, você verá um `contracts` e a pasta `.maintain`. Você pode ver os contratos prontos para uso dentro da pasta `contracts`. A pasta `.maintain` hospedará todos os scripts necessários, incluindo a implantação e os testes.

O template do projeto Hardhat precisa de um arquivo `.env` para funcionar:


```
BARNACLE_RPC_URL=http://127.0.0.1:9933
BARNACLE_DEPLOYER_PRIVATE_KEY=*private key here*
BARNACLE_ACCOUNT_PRIVATE_KEY=*private key here*
```


Há três variáveis de ambiente que você é obrigado a fornecer. As variáveis de ambiente são utilizadas no arquivo `hardhat.config.js`.

Se você abrir o arquivo, notará um parâmetro `chainId`. O `chainId` serve para assinatura de transações dentro da rede. O `chainId` da EVM Barnacle é `1281`. Você pode [ver isso aqui](https://github.com/octopus-network/barnacle/blob/release-v0.9.18-evm/runtime/src/lib.rs#L752).

Depois de fornecer as chaves privadas, você precisa imprimir os endereços de sua conta, já que o endereço será diferente do de outras cadeias. Você precisa se conectar à EVM Barnacle e recuperar os endereços manualmente usando um script.


```
npx hardhat run .maintain/print-addresses.js --network barnacle
```


Seu comando irá imprimir os endereços públicos para suas chaves públicas:


```
Deployer private key account address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Executor private key account address: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
```


Você pode modificar o trecho abaixo dentro do arquivo <code>[node/src/chain_spec.rs](https://github.com/octopus-network/barnacle/blob/release-v0.9.18-evm/node/src/chain_spec.rs)</code> para adicionar suas contas pré-financiadas.


```rust
// Contas pré-financiadas
Some(
  vec![AccountId::from_str("f24FF3a9CF04c71Dbc94D0b566f7A27B94566cac").unwrap()],
)
```


Além disso, você pode modificar a conta _sudo_ conforme sua necessidade.


```rust
// Conta sudo
AccountId::from_str("f24FF3a9CF04c71Dbc94D0b566f7A27B94566cac").unwrap(),
```


Observe que existem duas configurações idênticas no arquivo, mas a diferença é o ambiente de execução. Modifique as configurações em `development_config(),` se você executa como ambiente de desenvolvimento. Modifique as configurações em `local_testnet_config(),` se você executa como ambiente de testnet local.

Depois, vá até o diretório raiz de seu projeto, reinicie a EVM Barnacle e faça deploy dos contratos inteligentes:


```
cd ~/*work directory*/barnacle
cargo build --release
./target/release/appchain-barnacle --dev --enable-offchain-indexing true
cd docs/example
npx hardhat run .maintain/deployment.js --network barnacle
```


O script de implantação também tem testes neles, e deve retornar algo assim:


```
Deploying to network barnacle http://127.0.0.1:9933
Deploying contracts with the account: 0x4FF637E5326Ff581E8F62cd66BD116dd27Ac800B
Executor contracts with the account: 0x19Ee2F7736Dcb4A76d567F35bfEf55aE24f7A5Ae
Contracts deployed!
Deployed ERC20 contract address 0xfBAf19640F23b36Df6d4d599aB8bCf2C92f95D69
Deployed Escrow Contract address 0x5a51cE149EcD3312C994Febaae69E4Beb939A0c6
Approved smart contract!
Executor Account Balance:  340282366920938463462374562926906777218
Executor ERC20 Account Balance:  80000000000000000000
Executor ERC20 Account Balance:  50000000000000000000
Executor ERC20 Account Balance:  80000000000000000000
```


Aí está! Você implantou seu primeiro (dois) contrato inteligente na EVM Barnacle, um token ERC20 e um simples contrato inteligente de depósito.

Você pode interagir com seu contrato inteligente como em qualquer outra rede, usando `ethers.js`; você pode olhar o script `.maintain/deployment.js` como exemplos.


### Como Conectar a EVM Barnacle com a MetaMask

Você pode conectar sua conta MetaMask à EVM Barnacle.

Primeiro, você precisa abrir a MetaMask e encontrar o botão "Adicionar rede".

![Add network](https://docs.oct.network/assets/img/image-1.142c6cff.png)


Em seguida, preencha os detalhes da EVM Barnacle. Nomeie a rede "EVM Barnacle", depois insira o RPC EVM padrão da EVM Barnacle  "[http://127.0.0.1:9933](http://127.0.0.1:9933/)".

A ID da cadeia desta EVM Barnacle em particular é [1281](https://github.com/octopus-network/barnacle/blob/release-v0.9.18-evm/runtime/src/lib.rs#L752).

O token da EVM barnacle é  chamado "EBAR" de forma predefinida. Contudo, você pode nomear o token nativo de "DOLLAR".

Depois de preencher o formulário, clique em "Salvar".

![Describe network](https://docs.oct.network/assets/img/image-2.98777215.png)


Você pode ter que esperar um segundo para conectar com a MetaMask.


![Waiting...](https://docs.oct.network/assets/img/image-3.5b49a0f5.png)


Se você estiver conectado com sucesso, você deve ver seus fundos padrão.

![Waiting...](https://docs.oct.network/assets/img/image-4.c62cc131.png)


A EVM Barnacle usa endereços H160 e é compatível com a EVM Ethereum. Você pode usar suas chaves privadas de sua carteira Ethereum na Barnacle muito bem.


### Conclusão

A EVM Barnacle é o template básico para a sua Appchain compatível com EVM. Você pode implantar seus contratos inteligentes na EVM Barnacle para testes, como em qualquer outro ambiente Testnet.

Você pode usar qualquer ferramenta de desenvolvimento Ethereum para interagir com a EVM Barnacle. Nesta caminhada, você usou o Hardhat. Mas existem outros ambientes que podem ser usados, incluindo Truffle, Remix, Brownie, e muitos outros. Você pode ler outros exemplos nos documentos da Moonbeam.

Precisa de mais tutoriais? Por favor, consulte os [tutoriais](https://docs.moonbeam.network/builders/build/eth-api/) da Moonbeam Docs.
