## Atualização de Appchain

A atualização da Appchain inclui dois casos:



* Atualização do tempo de execução
* Atualização do nó

### Atualização do Tempo de Execução


Se apenas o código de tempo de execução for modificado, o time da Appchain precisa concluir a atualização do tempo de execução de acordo com o seguinte processo:



1. O time da Appchain lança uma nova versão e um novo arquivo wasm de tempo de execução;
2. O time da Appchain decide a data da atualização do tempo de execução e informa à equipe da Rede Octopus no seu canal Discord;
3. O time da Rede Octopus concluirá a atualização do tempo de execução antes de permitir a governança on-chain;

### Atualização do Nó


Se você modificar o código fora do tempo de execução, ou atualizar a versão Substrate da Rede Octopus (por exemplo: v0.9.13 para v0.9.18), o time Appchain precisa concluir a atualização do nó de acordo com o seguinte processo:



1. O time da Appchain lança uma nova versão, assim como os arquivos binários do novo nó;
2. O time da Appchain decide a data da atualização do nó e informa à equipe da Rede Octopus no seu canal Discord;
3. O time da Rede Octopus atualiza os nós da Appchain operados pela Fundação Octopus;
4. O time da Rede Octopus notifica os validadores de Appchain da comunidade Octopus para atualizar seus nós da Appchain;

Nota: A atualização do nó é a mesma que a atualização do tempo de execução. A `spec_version` na `runtime/src/lib.rs` também deve ser atualizada.
