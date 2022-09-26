## Desenvolvimento de Appchain

Neste tutorial, nós iremos:



1. Configurar o ambiente de desenvolvimento;
2. Implementar o tempo de execução da appchain;
3. Iniciar a testnet local;

### Configuração do ambiente de desenvolvimento


É sugerido iniciar um nó Appchain baseado no [Barnacle](https://github.com/octopus-network/barnacle) que é um template desenvolvido pela equipe da Octopus Network. Originário do [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template), o Barnacle é um modelo de nó Appchain de trabalho mínimo para desenvolvedores iniciarem rapidamente seu projeto Appchain da Octopus. O frontend de uma Appchain pode ser desenvolvido com base no [Front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template).

Nota: O desenvolvimento do Substrate é mais fácil em sistemas operacionais baseados em Unix como MacOS ou Linux. E para usuários Windows, é altamente recomendável usar o Subsistema Linux do Windows (WSL) e seguir as instruções para Ubuntu/Debian.

Para a maioria dos usuários, pode-se executar os seguintes comandos para instalar o ambiente.


```
curl https://getsubstrate.io/ -sSf | bash -s - --fast
```


Para mais informações, por favor, consulte o [Installation Guide](https://substrate.dev/docs/en/knowledgebase/getting-started/) no _Substrate Developer Center_.


### Barnacle

O Template Barnacle do nó Appchain é baseado no template de nó Substrate e integra uma série de [octopus-pallets](https://github.com/octopus-network/octopus-pallets) que foi implementada pelo time da Octopus Network, incluindo:



* Appchain, [pallet-octopus-appchain](https://github.com/octopus-network/octopus-pallets/tree/main/appchain)
    * Metadados de uma appchain, incluindo o identificador da appchain, o endpoint da cadeia principal RPC, etc.
    * Os validadores da appchain observarão a cadeia principal e submeterão os eventos observados usando OCW para consenso.
* LPoS, [pallet-octopus-lpos](https://github.com/octopus-network/octopus-pallets/tree/main/lpos)
    * Uma implementação da LPoS da Octopus Network.
    * Este palete depende do pallet-octopus-appchain.
* Comum, [pallet-octopus-support](https://github.com/octopus-network/octopus-pallets/tree/main/support)
    * Algumas características e tipos comuns.
* Mensagens Cross-chain, [pallet-octopus-upward-messages](https://github.com/octopus-network/octopus-pallets/tree/main/upward-messages)
    * Este palete gerencia as mensagens de cross-chain enviadas da appchain para a cadeia principal.


```yaml
git clone --depth 1 https://github.com/octopus-network/barnacle.git
cd barnacle
cargo build
```


Com base no Barnacle, o time da appchain somente precisa focar no desenvolvimento dos paletes de função comercial e, então, eles integrariam facilmente a appchain na Octopus Network.


### Template Front-end 


```yaml
# Instale o Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install node
# Instale o Yarn
npm install --global yarn
# Clone o template do frontend do github
git clone -b v3.0.0+monthly-2021-08 --depth 1 https://github.com/substrate-developer-hub/substrate-front-end-template
# Instale as dependências
cd substrate-front-end-template
yarn install
```


>**Nota**
>
>Se tiver uma nova versão do `substrate-front-end-template`, é recomendado que substitua `v3.0.0+monthly-2021-08` por ela com o comando acima.


### Implementar o tempo de execução da appchain

Etapas para implementar paletes de uma aplicação específica:



1. Acrescente um `pallet`, e implemente uma lógica específica de aplicação em `pallets/&lt;pallet-name>/src/lib.rs`;
2. Acrescente o `pallet` ao `runtime/Cargo.toml`, `runtime/src/lib.rs`;
3. Acrescente o `runtime` ao `node/Cargo.toml`, instale-o no nó.

Nota: Neste momento, por favor, defina o valor de `MILLISECS_PER_BLOCK` com 6000.

Para mais informações, por favor, consulte o [Add Pallet to Runtime Guide](https://substrate.dev/docs/en/tutorials/add-a-pallet/) no _Substrate Developer Center_.


#### Configuração da Appchain

A configuração da appchain está principalmente no arquivo ChainSpec. Precisa configurar:



* Palete Appchain
    * Contrato Anchor;
    * Coleção do Validador;
    * O número de tokens pré-minerados na rede NEAR;

O exemplo Barnacle é como se segue:


```rust
"octopusAppchain": {
  "anchorContract": "barnacle.registry.test_oct.testnet",
  "validators": [
    [
      "5G6xVxyaS8PZargUL27pSEbhLQbRQJ2PBvrvXVpyjHzivQxs",
      10000000000000000000000
    ],
    [
      "5Dqg8gjTeM4it3mCaX1bdQmTT3GXgv7oSuZAfFUwJaTKuJfz",
      10000000000000000000000
    ],
    [
      "5Gj5yzSKtqkMM3j7FhRSWuybkwwms9KBPsAhyeobgmLD4r1g",
      10000000000000000000000
    ],
    [
      "5F42cCzboJhzfuVazARY6gFVpjwWMwAg1aG3pWF2aS76uu4Q",
      10000000000000000000000
    ]
  ],
  "preminedAmount": 500000000000000000000000000,
  "assetIdByName": [
    [
      "usdc.testnet",
      0
    ]
  ]
},

```



* Palete LPoS 
    * O ciclo histórico das recompensas da LPoS;
    * Recompensas de cada Era;

O exemplo Barnacle é como se segue:


```rust
"octopusLpos": {
  "historyDepth": 84,
  "eraPayout": 20000000000000000000000
},
```



### Começar a Testnet local

Execute o seguinte comando para compilar e iniciar o nó da blockchain local:


```yaml
cargo build
# Execute um nó temporário no modo desenvolvimento
./target/debug/appchain-barnacle --dev --tmp
```


Se você quiser executar um front-end local para interagir com os nós locais, você pode consultar a [Run Local Front End](https://substrate.dev/docs/en/tutorials/create-your-first-substrate-chain/interact#start-the-front-end-template).


### Publicar a edição da Appchain

Uma vez que foi finalizado o desenvolvimento da Appchain e a integração das Paletes da Octopus, o time da Appchain precisa publicar uma edição da Appchain.

>Nota
>
>* O arquivo _Chain Spec_ poderia ser colocado sob uma pasta de código fonte. Ex: [resources](https://github.com/octopus-network/barnacle/tree/master/resources)
>* Para a integração, por favor, consulte o [Barnacle](https://github.com/octopus-network/barnacle)