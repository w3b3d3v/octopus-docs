## Implantar nó validador

Para simplificar a implantação do nó validador, a equipe da Octopus Network fornece um serviço de implantação automática para o nó validador. Atualmente, ele suporta: 

* [AWS](https://docs.oct.network/maintain/validator-deploy-aws.html)

* [Digital Ocean](https://docs.oct.network/maintain/validator-deploy-do.html) 

Além disso, o validador pode optar por [implantar manualmente o nó validador](./validator-deploy-manually.md).

### Configuração de hardware

A configuração e o custo aproximado de cada nó validador da Appchain que é implantado por meio do serviço de implantação automática.

**AWS**

| Appchain | Tipo de instância EC2  | Armazenamento | Transferência de dados | Custo total mensal |
|------|------|------|------|------|
| debionetwork | t3.small 2 GB Memory / 2 vCPUs  | 120 GB | 100 GB | $45 |
| myriad | t3.small 2 GB Memory / 2 vCPUs  | 120 GB | 100 GB | $45 |
| deip | t3.small 2 GB Memory / 2 vCPUs  | 120 GB | 100 GB | $45 |
| atocha | t3.small 2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |
| fusotao | c5.large 4 GB Memory / 2 vCPUs  | 250 GB | 4500 GB | $509 |
| discovol | t3.small 2 GB Memory / 2 vCPUs | 120 GB | 100 GB | $45 |


**Digital Ocean**

| Appchain | Droplet  | Armazenamento | Transferência de dados | Custo total mensal |
|------|------|------|------|------|
| debionetwork | 2 GB Memory / 2 vCPUs  | 120 GB | 3 TB | $33 |
| myriad | 2 GB Memory / 2 vCPUs  | 120 GB | 3 TB | $33 |
| deip | 2 GB Memory / 2 vCPUs  | 120 GB | 3 TB | $33 |
| atocha | 2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |
| fusotao |  8 GB Memory / 2 vCPUs  | 250 GB | 5 TB | $81 |
| discovol |  2 GB Memory / 2 vCPUs | 120 GB | 3 TB | $33 |

### Alterar provedor VPS

Para o validador que precisa alterar o provedor VPS do nó implantado, siga estas etapas:

1. Mantenha o nó validador antigo em execução;

2. Implante um novo nó validador. Para o nó que foi implantado por meio do serviço de implantação automática, por favor, `Clear Local Storage` se necessário.

![validator login](https://docs.oct.network/assets/img/validator_clear_local.86b686a4.jpg)

3. Quando o novo nó fizer a sincronização, [defina a Chave de Sessão](https://docs.oct.network/maintain/validator-register.html#set-session-key) para o novo nó validador;

4. O validador pode [parar](https://docs.oct.network/maintain/validator-register.html#stop-the-validator-node) o antigo nó validador até o próximo ciclo de recompensa.