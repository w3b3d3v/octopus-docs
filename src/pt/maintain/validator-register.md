## Registrar Validador


Para registrar o validador da appchain, o validador precisa concluir as operações de registro do validador e configuração da Session Key.

### Registrar Validador

Clique em `Register Validator` na área  **My Node** da página appchain e insira os campos abaixo na página pop-up:


* `Appchain Account`, a conta appchain do validador, que é o endereço gerado na etapa [Generate Validator Account](./validator-generate-keys.md).
* `Deposit Amount`, a quantidade de OCT em staking pelo validador;
* `Email`, o e-mail de contato do validador;
* `Twitter ID`, a conta do Twitter do validador;
* `Accept delegation`, selecione se o nó validador aceita [ delegação de delegante](./delegator-delegate.md);
    
Clique em `Register`.

![validator register](https://docs.oct.network/assets/img/validator_register.50251ee7.jpg)

Após o registro bem-sucedido, aguarde cerca de 1 a 2 minutos e a conta da appchain do validador receberá um token nativo da appchain que será usado na próxima etapa.

### Definir chave de sessão

**Nota**: Certifique-se de que o nó do validador concluiu a sincronização dos dados da cadeia e que a conta da appchain do validador recebeu o token nativo da appchain.

Clique em `...` na área **My Node**  da página da appchain, selecione `Set Session Key`, e na página pop-up, selecione a conta da appchain preenchida no cadastro.

Para o validador implantado automaticamente, clique em `Set`.

![validator set sessionkey](https://docs.oct.network/assets/img/validator_set_sessionkey.40c8a998.jpg)

![validator set sessionkey](https://docs.oct.network/assets/img/validator_set_sessionkey2.3657ceff.jpg)

Para o validador implantado manualmente, por favor, insira o conteúdo da saída do campo `result` na operação `author_rotateKeys` na caixa de entrada `Session key`;

![validator set sessionkey](https://docs.oct.network/assets/img/validator_set_sessionkey1.93a8b38a.jpg)

![validator set sessionkey](https://docs.oct.network/assets/img/validator_set_sessionkey3.d96025ad.jpg)

O validador será adicionado à próxima rodada de conjuntos de validadores após aguardar um ciclo de recompensa (~ 1 dia).

### Verificar chave de sessão


Abra o [aplicativo PolkadotJS](https://polkadot.js.org/apps/),  o validador pode configurar o  `custom endpoint` com a Appchain RPC Endpoint.

![RPC Endpoit](https://docs.oct.network/assets/img/appchain_rpc.8d36385a.jpg)

Depois de garantir que você se conectou a appchain RPC endpoint, navegue até a guia  `Developer` e selecione `Chain State` em seguida, selecione a opção  `session > nextKeys(AccountId32)` selecione sua conta de validador e clique em `+`. 

![check session keys](https://docs.oct.network/assets/img/validator_check_session_keys.d95d101c.jpg)

Verifique se o valor de retorno é consistente com as chaves de sessão que você definiu.


### Reivindicar recompensas

Após um ciclo de recompensa (~ 1 dia), o validador receberá a recompensa de staking, que precisa ser reivindicada manualmente. Na área **My Staking**, clique em **Rewards**, então selecione  `Validator Reward` e clique no botão `Claim` para reivindicar a recompensa.


![validator claim rewards](https://docs.oct.network/assets/img/validator_claim_rewards.90aa4795.jpg)


### Parar de validar

Para parar de validar, é necessário desvincular o staking e parar o nó validador.

### Desvincular Staking

Clique em  `Manage` para abrir a página `Validator Profile`.

![validator unbond](https://docs.oct.network/assets/img/validator_manage.76c26e0e.jpg)

Clique no botão `Unbond Validator` na página `Validator Profile` para realizar a operação de retirada do staking.

![unbond withdraw](https://docs.oct.network/assets/img/validator_unbond.f2b36239.jpg)

>**Nota**: Após a desvinculação, o OCT em staking terá um período de desvinculação. Antes do término do período de desvinculação, ele não pode ser retirado e você não obterá nenhuma recompensa de staking.

### Pare o nó validador

Para o nó que foi implantado por meio do serviço de implantação automática, o validador pode clicar no botão `Destory` na área **My node** para interromper o nó validador e excluir a instância de implantação automática.

Para o nó que foi implantado manualmente, lembre-se de interrompê-lo.

>**Nota**: Após a desvinculação, se parar o nó imediatamente, o validador não terá recompensas para o último ciclo de recompensas. Se parar após um ciclo de recompensa, o validador ainda terá as recompensas.

### Retirar OCT do staking

Clique em `...` e selecione `Withdraw Stakes`  na área **My Staking**.

![unbond withdraw](https://docs.oct.network/assets/img/unbond_withdraw.6816eac7.jpg)

Após o término do período de desvinculação, você pode clicar no botão `Withdraw` para retirar o OCT do staking.

![withdraw stakes](https://docs.oct.network/assets/img/withdraw_stakes.12c81f01.jpg)