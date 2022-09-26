
## Ativos Cross-chain

A Octopus Network fornece funções de cross-chain de uso imediato para Appchain, incluindo a transferência de stablecoin da cadeia principal (NEAR) e também, para ativo nativo da Appchain.

* Transferir Token da Appchain para a Mainchain
* Transferir Token da Mainchain para a Appchain

## Transferir Token da Appchain para a Mainchain


Este guia descreve como transferir o token nativo Appchain entre Appchains e Mainchain.

Cobriremos os 3 tópicos abaixo, empregando "Barnacle" da Appchain e seu token nativo "BAR" como exemplos:



* Criar token wrapper na Near
* Transferir token nativo  Appchain da  Appchain para a mainchain
* Resgatar token nativo  Appchain da  mainchain para a Appchain

### Limitação da transferência cross-chain

* NEAR -> Appchain: o valor total de mercado de todos os tokens nativos não pertencentes à appchain não é superior a 1/3 do valor total de  mercado de staking do token OCT que está no contrato âncora da cadeia.

### Criar Token Wrapper na NEAR


Após a entrada em funcionamento de uma Appchain, se os usuários da Appchain quiserem usar o token nativo Appchain na cadeia principal, o contrato do token wrapper correspondente, um ativo NEP-141, deve ser implantado na mainchain com antecedência.

Os times da Appchain podem consultar o [sample contract ](https://github.com/octopus-network/appchain-native-token)como um guia para configurar um token wrapper na mainchain.


### Transferir token nativo Appchain da Appchain para a mainchain

Em [Octopus testnet bridge](https://testnet.oct.network/bridge), selecionamos o Barnacle como a Appchain na transferência cross-chain.

![BarnacleAsAppchain](https://docs.oct.network/assets/img/BarnacleAsAppchain.b943cb02.png)


Selecione a conta da Appchain como remetente.


![AppchainAccAsSender](https://docs.oct.network/assets/img/AppchainAccAsSender.d1946366.png)


> Nota: Se sua conta Appchain não tiver um saldo de BAR, você pode transferir algum BAR da conta integrada ALICE na Appchain para sua conta via Polkadot.js.

![AppchainAliceSend](https://docs.oct.network/assets/img/AppchainAliceSend.c7085141.png)

Configure a conta NEAR hellocto.testnet como destinatária e queime a transação.

![FireAppNativeToMainchain](https://docs.oct.network/assets/img/FireAppNativeToMainchain.ca1a733f.png)


### Regatar o token nativo Appchain da mainchain para a Appchain

Seguindo a operação anterior, trocamos o remetente e o destinatário para resgatar o token nativo Appchain de volta para a Appchain.

![RedeemAppNativeToAppchain](https://docs.oct.network/assets/img/RedeemAppNativeToAppchain.cf0076e1.png)

## Transferir Token da Mainchain para a Appchain

A Octopus Network oferece funções cross-chain de uso imediato para Appchains, incluindo a transferência de stablecoins da mainchain (NEAR) e a transferência de ativos nativos Appchain.

Este guia descreve como transferir stablecoin da mainchain por meio da função cross-chain incorporada da Octopus.



* Criar um ativo wrapper na Appchain
* Transferir stablecoin para a Appchain
* Transferir ativo wrapper de stablecoin para a mainchain da Appchain

### Criar Ativos Wrapper


Após a entrada em funcionamento da Appchain, se os usuários da Appchain quiserem usar uma stablecoin na mainchain, como USDC, precisamos criar primeiro o ativo wrapper correspondente na Appchain. Normalmente, esta etapa é feita por meio da governança da Appchain. No entanto, usamos `sudo`, em vez disso, para a demonstração.



* Conecte-se à Appchain com Polkadot JS.
* Definir o tipo personalizado, selecionar `Settings -> Developer`, adicionar o seguinte conteúdo JSON e salvar:


```json
{
  "Validator": {
    "id": "AccountId",
    "weight": "u128"
  },
  "ValidatorSet": {
    "sequence_number": "u32",
    "set_id": "u32",
    "validators": "Vec<Validator>"
  },
  "LockEvent": {
    "sequence_number": "u32",
    "token_id": "Vec<u8>",
    "sender_id": "Vec<u8>",
    "receiver": "AccountId",
    "amount": "u128"
  },
  "AssetIdOf": "u32",
  "AssetBalanceOf": "u128",
  "TAssetBalance": "u128",
  "Observation": {
    "_enum": {
      "UpdateValidatorSet": "(ValidatorSet)",
      "LockToken": "(LockEvent)"
    }
  }
}
```

![custom_type](https://docs.oct.network/assets/img/custom_type.aa93bd9a.jpg)



* Selecione  `Developer -> Sudo -> assets -> forceCreate` para emitir um ativo com o ID 0:

![Create Asset](https://docs.oct.network/assets/img/create_asset.319ef267.png)


* Verifique o status da cadeia, se o ativo foi emitido corretamente, onde o Ativo 0 corresponde à stablecoin USDC na mainchain (temos este mapeamento pré-definido em ChainSpec, `usdc.testnet`).

### Transfeir a Mainchain para a  Appchain


Em [cross-chain bridge ](https://testnet.oct.network/bridge)da Octopus Test Network, selecionamos a Appchain `easydeal-demo` que vai receber a stablecoin USDC transferida da mainchain e a conta `oct.testnet` como remetente; o destinatário é um endereço SS58 de uma conta Appchain, que vai receber os 2 USDC depois de transferidos.

![Transfer USDC assets](https://docs.oct.network/assets/img/transfer_usdc.c66a72df.jpg)


Alguns minutos depois, a transação de transferência é verificada pelos validadores da Appchain e, em seguida, os ativos encapsulados correspondentes são cunhados para o destinatário. Podemos verificar o estado da cadeia para confirmar se os ativos são transferidos corretamente, selecionando `Chain State -> Storage -> assets -> account` e o saldo deve ser 2,000,000 unidades (nota: a ordem de grandeza é 6).

![Map Asset Balance](https://docs.oct.network/assets/img/appchain_balance.7c163d05.jpg)


### Transferir de Volta para a Mainchain da Appchain

Seguindo a operação anterior, trocamos as contas do remetente e do receptor para transferir de volta o ativo de stablecoin.

![Redeem USDC assets](https://docs.oct.network/assets/img/redeem_usdc.3fc5331e.jpg)


O saldo do ativo será atualizado após o evento de transferência de volta ser verificado pelo Octopus Relay na mainchain.
