
## Inicialização de Appchain

![Appchain_Pipeline](https://docs.oct.network/assets/img/appchain_pipeline.890856b1.png)

### Appchain Status

Há as cinco fases abaixo:

1. **Registrado**: A appchain passará pela fase Registrado depois que a equipe da appchain submeter o registro com as informações da appchain.
2. **Auditoria**: O time da Octopus iniciará a auditoria dentro de 1-2 semanas. Durante a fase de Auditoria, o time Octopus realiza auditorias principalmente em dois aspectos:
    * As funções do protocolo são utilizáveis/valorizáveis para fins comerciais;
    * Tanto os aplicativos de protocolo como o nó da appchain são implementados como o mesmo, com o arquivo de especificação da função de protocolo fornecido;
3. **Votação**: Se a appchain passar na auditoria, ela passará pela fase de votação. Esta é a fase crítica para que a equipe da appchain solicite o apoio dos proprietários de OCT. Esses podem [votar](https://docs.oct.network/guides/voting-appchain.html) para decidir se a appchain passará pela fase seguinte.
4. **Inicialização**: A appchain com maior número de votos passará pela fase de inicialização, o time Octopus fará alguns preparativos para que a appchain entre em funcionamento.
5. **Execução**: Depois que o time Octopus inicializa a appchain e ativa a cadeia com a conta Sudo, executará a etapa de "go-live" (ir para a vida), a cadeia passará pela fase de Execução.

### Processo de inicialização da Appchain 


Quando uma appchain está pronta para ser iniciada, o time da Octopus a desloca para a fase de inicialização. Nesta seção, vamos listar o que precisamos fazer durante a fase de inicialização.



1. O time da Octopus implanta um contrato de âncora e um contrato de token encapsulado para a appchain. 

   Nota: Ao criar o token encapsulado na rede NEAR antecipadamente, o time da appchain pode escolher fazer um IDO (Initial Dex Offering) antes do lançamento da appchain. Os tokens da appchain existem em dois lugares, token encapsulado na rede NEAR e token nativo da appchain na rede Appchain.  Quando uma appchain é lançada, os usuários podem usar a Octopus Bridge para transferir tokens entre esses dois lugares.

   Além disso, o time da Octopus fornecerá um trecho do arquivo chainspec que contém as chaves da sessão e informações de staking dos nós de validação da fundação Octopus. Para os nós de validação das fundações, a quantidade de staking padrão é  `10000 * 10**18` OCT e para esses nós, o saldo padrão pré-alocado do token nativo é `10 * 10**18` e o valor real é determinado pelo time da appchain.

2.  O time Appchain gera um arquivo de especificações de cadeia legível por humanos. Exemplo de comando:

 
```bash
./target/debug/debio build-spec --disable-default-bootnode --chain dev > debionetwork.json
```         


E então, o time da Octopus fornecerá o trecho do arquivo de informações diretamente a você. Por favor, copie cuidadosamente as informações do trecho fornecidas no arquivo de especificações da cadeia. Exemplo: 



```bash
/// verifique essa seção, os nós validadores da fundação do Octopus têm alocado um saldo pequeno para cobrir as taxas das transações (por exemplo, 10 $DBIO)
   "balances": {
    "balances": [
     [
      "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
      10000000000000000000
     ],
   ...
   },


// isso pode ser encontrado na mainnet/testnet do website   
"anchorContract": "debionetwork.octopus-registry.near", 
"eraPayout": 13699000000000000000000,

// verifique essa seção, estas são as chaves da sessão dos nós de validação da fundação Octopus
   "session": {
    "keys": [
     [
      "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
      "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
      {
       "babe": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
       "grandpa": "5FA9nQDVg267DEd8m1ZypXLBnvN7SFxYwV7ndqSYGiN9TTpu", 
       "im_online": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 
       "beefy": "KW39r9CJjAVzmkf9zQ4YDb2hqfAVGdRqn53eRqyruqpxAP5YL", 
       "octopus": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY" 
      }
     ],
 ...
    ]
   },

// Acrescente uma conta sudo para futuras atualizações e operações privilegiadas. (Não se esqueça de acrescentar também algum saldo a esta conta.)
   "sudo": {
    "key": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
   }
```


Além disso, o time da Appchain deve gerar uma especificação de cadeia bruta e nomeá-la como `octopus-mainnet.json` para mainnet ou `octopus-testnet.json` para testnet e então fazer commit dela para o repositório do Github da appchain (ex. &lt;APPCHAIN_REPO>/resources/). Exemplo do comando: 

``` bash
$ ./target/debug/debio build-spec --chain=debionetwork.json --raw  > octopus-testnet.json
```

Ao mesmo tempo, por favor, envie o arquivo de especificação da cadeia, legível para humanos para o time Octopus revisar. 
>Nota: Verifique no nó appchain, a função `load_spec` no arquivo `&lt;APPCHAIN_REPO>/node/src/command.rs`, se o seguinte conteúdo está adicionado para definir a opção valor `--chain`:
   >* para mainnet, use `octopus-mainnet`
   >* para testnet, use `octopus-testnet`

O código exemplo no template Barnacle fica como se segue:


```rust
"octopus-testnet" => Box::new(chain_spec::octopus_testnet_config()?),
```



3. O time da  Octopus utiliza o código da equipe da appchain liberado para construir uma imagem docker e então lançará uma cadeia de quatro validadores + quatro _bootnodes_, implantará o _gateway_ API, o _relayer_ e outros serviços, e então enviará o endpoint wss do _gateway_ API para o time Appchain.
4. O time da Appchain conecta os aplicativos polkadotjs com endpoint wss, e então usa a conta `sudo` para ativar a appchain, faz a chamada `sudo` `octopusAppchain -> forceSetIsActivated` com `yes`.
5. O time Octopus move a appchain para o estágio de execução.