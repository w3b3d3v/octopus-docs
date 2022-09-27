## Registro de Appchain


### Fazer _Checklist_ antes do registro

Esta seção tem como objetivo listar os itens que o time da Appchain precisa verificar antes do registro na Appchain, para garantir um lançamento sem problemas.



* A Appchain está usando a última versão do template barnacle/barnacle-evm.
* A versão do Substrate usada no Cargo.toml da Appchain deve ser consistente com o template.
* Os paletes abaixo definidos na parte `construct_runtime!` no código de tempo de execução da Appchain (runtime/src/lib.rs) deve ser consistente com o template.


```rust
construct_runtime!(
	pub enum Runtime where
		Block = Block,
		NodeBlock = opaque::Block,
		UncheckedExtrinsic = UncheckedExtrinsic
	{
		System: frame_system,
		Babe: pallet_babe,
		Timestamp: pallet_timestamp,
		Authorship: pallet_authorship,
		Balances: pallet_balances,
		TransactionPayment: pallet_transaction_payment,
		OctopusAppchain: pallet_octopus_Appchain, // deve antes da sessão
		OctopusLpos: pallet_octopus_lpos,
		OctopusUpwardMessages: pallet_octopus_upward_messages,
		OctopusAssets: pallet_assets::<Instance1>,
		Session: pallet_session,
		Grandpa: pallet_grandpa,
		ImOnline: pallet_im_online,
		Historical: pallet_session_historical::{Pallet},
		Mmr: pallet_mmr,
		Beefy: pallet_beefy,
		MmrLeaf: pallet_beefy_mmr,
		Uniques: pallet_uniques,
		Sudo: pallet_sudo,
		// Inclui a lógica personalizada do template-palete no tempo de execução. 
		TemplateModule: pallet_template,
	}
);

```



* O tempo de bloco da Appchain é consistente com o template, definido para 6s.


```rust
pub const MILLISECS_PER_BLOCK: Moment = 6000;
pub const EPOCH_DURATION_IN_BLOCKS: BlockNumber = 4 * HOURS;

```



* No arquivo JSON especificado na cadeia Appchain, a configuração de `ss58Format` deve ser 42. Além disso, se a Appchain não suportar a transferência _cross-chain_ de ativos estáveis (USDN na rede NEAR) da cadeia principal para a Appchain, favor definir `assetIdByTokenId` com `[]`. 

```
"assetIdByTokenId": []
```



* Durante o registro do time Appchain, o Ícone do Token fornecido pela Appchain deve estar no formato SVG.

### Pré-requisitos

* Conta NEAR.
* Token OCT: O time da Appchain precisa pagar 1k de tokens OCT como taxa de auditoria. Para a testnet, a equipe da Appchain pode solicitar OCTs da Discord.

### Passos para o Registro da Appchain

1. Faça login nos aplicativos da Octopus por meio da conta NEAR.
2. Clique no botão **Join Octopus** e depois preencha as seguintes informações:
    * **ID da Appchain**: 3-20 caracteres com letras minúsculas, números e hifen`-`, não pode começar com número e o hífen `-` não pode ser usado nem no início nem no final, também chamado de expressão regular: `[a-z]([-a-z0-9]*[a-z0-9])?`
    * **Informações do Token** 
        * **Nome do Token**: O nome do token nativo da Appchain
        * **Símbolo do Token**: O símbolo do token nativo da Appchain 
        * **Ícone**: O link do ícone no formato SVG do token nativo da Appchain
        * **Decimais**: Os decimais do token nativo da Appchain 
    * **Website**: O website oficial da Appchain
    * **Especificação da Função**: O url do arquivo da especificação funcional da Appchain
    * **Endereço do Github**: O repositório Github da Appchain
    * **Publicação do Github**:O URL do Github da publicação da Appchain
    * **Suprimento inicial**: A quantidade de tokens nativos da Appchain das emissões iniciais
    * **Pré-minerados**: O número de tokens encapsulados que são Pré-minerados para a rede NEAR no total da emissão inicial
    * **Beneficiário**: A conta NEAR que vai receber os tokens encapsulados Pré-minerados 
    * **Quantidade IDO** (Oferta inicial de Dex): O número de tokens utilizados pelo time da Appchain para usar Skyward para IDO antes do lançamento da Mainnet
    * **Recompensa Diária**: A quantidade de tokens nativos da Appchain usada como sua recompensa de bloco por dia
    * **E-mail**: O contato de e-mail da Appchain
    * **Tipo de Template**: O tipo de template usado pela Appchain
    * **Descrição do Projeto**: Uma única frase de introdução da Appchain


 ![Register Screenshot](https://docs.oct.network/assets/img/register.972c3289.png)

3. Clique em _Submit_ para enviar solicitação de registro. 