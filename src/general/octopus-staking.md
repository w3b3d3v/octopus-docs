## Staking na Rede Octopus

A LPoS (Prova de Participação Alugada) da Octopus Network consiste em selecionar um grupo de mantenedores de rede dentre os detentores de OCT participantes do staking. O validador com a operação normal receberá as recompensas, mas se não conseguir desempenhar suas funções normalmente, os ativos em stake serão reduzidos.

No staking, existem dois papéis: validador e delegante. Os  detentores de OCT podem participar do staking para se tornarem:

* Validador
    - Escolhe a appchain e faz stake de 5.000 OCTs no mínimo;
    - Executa o nó validador, certifica-se de que sua disponibilidade seja a mais alta possível;
    - O período de desvinculação é de 21 dias;
* Delegante
    - Delega OCT ao validador, não são necessárias outras operações;
    - O período de desvinculação é de 21 dias;

### Recompensas

#### Distribuição de recompensas

Na LPoS, as recompensas são calculadas com base no viés de geração de blocos e registradas por era (aproximadamente 24 horas). Se o viés de geração de blocos de um validador atingir os 80% esperados em uma era, haverá a recompensa total dessa era.

Supondo que um bloco seja gerado a cada 6 segundos, haverá 14.400 blocos em um dia. Se houver 100 validadores, espera-se que um validador gere 144 blocos. Enquanto o número de blocos gerados nesta era for superior a 144 * 80%, ele receberá a recompensa total, caso contrário, não haverá recompensa.

Além disso, as recompensas são distribuídas com base no valor em staking do nó validador, o que significa que quanto maior o valor em stake, maior a recompensa que o nó validador receberá quando estiver 100% disponível ao formar o consenso. Para a recompensa de staking do nó validador, o validador recebe 20% como taxa de comissão e, em seguida, as recompensas de staking restantes são distribuídas entre o validador e o delegante proporcionalmente ao valor do staking.

Assumimos que: um nó validador, o validador faz stake de 10.000 OCT, o delegante A, B e C, respectivamente, fazem stake de 3.000 OCT, 5.000 OCT e 2.000 OCT, e a recompensa de staking do nó validador é 100 XYZ, então a distribuição de recompensa é mostrada na tabela a seguir:


|             | Feito stake  (OCT) | Recompensas (XYZ) |
| ----------- | ------------ | ------------- |
| Validador 0 | 10000        | 60            |
| Delegador A | 3000         | 12            |
| Delegador B | 5000         | 20            |
| Delegador C | 2000         | 8             |

#### Reivindicar recompensas

O validador ou delegante precisa reivindicar manualmente as recompensas por meio do aplicativo Octopus. A recompensa de staking mantém-se até 84 Eras, que é aproximadamente 84 dias.

**Atenção**: Se o validador ou delegante não reivindicar sua recompensa de staking dentro do período, atualmente, a recompensa é bloqueada no contrato e não pode ser reivindicada.

### Desvincular automaticamente

Na LPoS, se o validador não gerar blocos normalmente em 3 ciclos consecutivos de recompensa (cerca de 3 dias), ele será removido do conjunto de validadores. Mas as recompensas existentes ainda podem ser reivindicadas, e os OCTs em stake seriam retirados após o período de desvinculação.

### Slashing (Cortar)

Na LPoS, se o nó validador se comportar mal na rede, tanto o validador quanto seus delegantes serão cortados, perdendo assim uma certa porcentagem de OCT em stake.

Para entender em qual caso seria cortado, veja a condição abaixo.

* Condição 1: Um grupo de validadores assina mais de um bloco à mesma altura;
* Condição 2: Um grupo de validadores assina um bloco que inclui pelo menos um tx inválido;
* Condição 3: Um grupo de validadores não pode reagir a um desafio de disponibilidade de dados com um bloco válido que possa justificar um bloco header que eles assinaram;

Na condição 1, a fórmula abaixo será usada para calcular a taxa de corte: Seja x = total de staking dos infratores, n = taxa total de corte de staking de todos os validadores  = Min((3 * x/n)^2, 1)

Nas condições 2 e 3, os infratores serão cortados em 100%.

Esses OCTs cortados serão enviados para um tesouro público, de onde poderão ser devolvidos aos validadores na decisão de governança, por exemplo, o corte é causado por erros de tempo de execução da appchain.
