## Implantação Automática com a AWS

>Se você não tem uma conta AWS, por favor, primeiramente [crie e configure a conta AWS](https://aws.amazon.com/getting-started/guides/setup-environment/?nc1=h_ls)
>
>Para criar a [AWS Access Key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

Faça login na   [mainnet](https://mainnet.oct.network/) da Octopus Network[ ](https://mainnet.oct.network/)com a conta NEAR criada em  [Gerar Conta ](validator-generate-keys.md)de Validador.


![validator login](https://docs.oct.network/assets/img/validator_login.acdac949.jpg)

Clique em `appchains` e selecione a appchain que você quer que seja um validador, clique nela para abrir a página da appchain, depois realize as seguintes operações:



1. Na área **My Node** da página da appchain, insira sua `AWS Access Key` na caixa de entrada  `Access Key`, depois clique em `Deploy`;


![aws access key](https://docs.oct.network/assets/img/validator_aws_accesskey.cb38f0c4.jpg)

2. As informações de configuração da instância AWS implantadas e o custo aproximado serão exibidos na região **My Node**. Após a confirmação, favor inserir a sua `AWS Secret Key` na caixa de entrada `Secret Key` e selecione a área de implantação da instância da AWS na caixa suspensa `Deploy region` e depois clique em `Confirm`;

![aws secret key](https://docs.oct.network/assets/img/validator_aws_secretkey.f9ebccc1.jpg)


**Nota:** A chave secreta AWS só será usada para esta implantação e não será armazenada em nenhum lugar.



3. Na área **My Node**, o status do nó é `Applying`, o que significa que o serviço de implantação automática está implantando o nó.

![validator applying](https://docs.oct.network/assets/img/validator_aws_applying.962d51a8.jpg)

Por favor, aguarde cerca de 3~5 minutos. O status do nó mudará para `Syncing`, o que significa que o nó validador está sincronizando os dados do bloco da appchain. Quanto mais cedo a appchain estiver on-line, mais longo será o tempo de sincronização do nó. Por favor, aguarde pacientemente.

![validator syncing](https://docs.oct.network/assets/img/validator_aws_syncing.7e68791e.jpg)

Para verificar a sincronização dos nós, por favor consulte [Nó de Monitoramento](monitor-node.md).

Após a sincronização do nó, o status na área **My Node** mudará para `Running`.

![validator running](https://docs.oct.network/assets/img/validator_aws_running.6af33455.jpg)

Para o nó validador implantado automaticamente, o validador pode clicar `...` na área **My Node**, e selecionar `Instance Info` para verificar as informações de status do hardware (como CPU, disco rígido, memória) da instância do nó validador em execução.

No status `Running`, o validador pode prosseguir para o próximo passo [registrar validador](validator-register.md).


### Mudar o tipo de instância da AWS 

O validador pode redimensionar a instância da AWS mudando o tipo de instância à medida que os requisitos da appchain mudam. Clique no link à direita de `Instance` na região **My Node** para abrir o console da instância AWS EC2 implantada automaticamente e então, por favor consulte a  AWS EC2 [Mudando o tipo de instância](https://docs.aws.amazon.com/en_us/AWSEC2/latest/UserGuide/ec2-instance-resize.html) para concluir a operação.
