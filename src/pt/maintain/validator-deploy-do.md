## Implantação Automática com Digital Ocean

>Se não tiver uma conta Digital Ocean, primeiro [crie e configure a conta Digital Ocean](https://docs.digitalocean.com/products/getting-started/)
>
>Para criar um [token de acesso da Digital Ocean](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
>
>**Nota**:
>
>Lembre-se do **Nome do Token** e, em seguida, copie e salve o **Token de Acesso** pessoal. Se o Token expirar, crie um novo Token de Acesso com o mesmo Nome do Token. Se estiver usando uma nova conta da Digital Ocean, crie o Token de Acesso com um novo Nome de Token.

Faça login na [rede principal](https://mainnet.oct.network/) da Octopus Network com a conta NEAR criada em [Gerar conta do validador](validator-generate-keys.md).

![https://docs.oct.network/assets/img/validator_login.acdac949.jpg](https://docs.oct.network/assets/img/validator_login.acdac949.jpg)

Clique em `Appchains` e selecione a appchain que gostaria de usar como validador, clique nela para abrir a página da appchain e execute as seguintes operações:



1. Na área **My Node** da página da appchain, insira seu `Token Name` na caixa de entrada `Digital Ocean Token Name` e clique em `Deploy`;

![https://docs.oct.network/assets/img/validator_do_tokenname.fa7ad071.jpg](https://docs.oct.network/assets/img/validator_do_tokenname.fa7ad071.jpg)



2. As informações de configuração implantadas do Digital Ocean Droplet e o custo aproximado serão exibidos na região **My Node**. Após a confirmação, insira seu `Access Token` na caixa de entrada `Token` e selecione a área de implantação na caixa suspensa `Deploy Region` e clique em `Confirm`;

![https://docs.oct.network/assets/img/validator_do_token.a16110f9.jpg](https://docs.oct.network/assets/img/validator_do_token.a16110f9.jpg)

**Nota**: O Token será usado apenas para esta implantação e não será armazenado em nenhum lugar.



3. Na área **My Node**, o status do nó é `Applying`, o que significa que o serviço de implantação automática está implantando o nó.

![https://docs.oct.network/assets/img/validator_do_applying.89646b5c.jpg](https://docs.oct.network/assets/img/validator_do_applying.89646b5c.jpg)

Aguarde cerca de 3 a 5 minutos, o status do nó mudará para `Syncing`, o que significa que o nó validador está sincronizando os dados do bloco da appchain. Quanto mais cedo a appchain estiver online, maior será o tempo de sincronização do nó. Por favor, espere pacientemente.

![https://docs.oct.network/assets/img/validator_do_syncing.235f7fa4.jpg](https://docs.oct.network/assets/img/validator_do_syncing.235f7fa4.jpg)

Para verificar a sincronização de nós, consulte [Nó de Monitoramento](monitor-node.md).

Após a sincronização do nó, o status na área **My Node** mudará para `Running`.

![https://docs.oct.network/assets/img/validator_do_running.db66b145.jpg](https://docs.oct.network/assets/img/validator_do_running.db66b145.jpg)

Para o nó validador implantado automaticamente, o validador pode clicar em `...` na área **My Node** e selecionar `Instance Info` para verificar as informações de status do hardware (como CPU, disco rígido, memória) da instância do nó validador em execução.

No status `Running`, o validador pode prosseguir para a próxima etapa, [registrar validador](validator-register.md).
