  
 ## Implante Manualmente o Nó Validador 


Para implantar manualmente o nó validador da appchain, o validador pode escolher seu provedor de VPS favorito, e geralmente usando o sistema operacional **Ubuntu**.

As seguintes etapas são necessárias:



1. Instalar o  Rust
2. Instalar as Dependências
3. Obter o Nó da appchain
4. Executar o nó da appchain 

### 1. Instalar o Rust


Se você nunca instalou o Rust, você deve fazer isso primeiro. Este comando irá buscar a última versão do Rust e instalá-la.


```bash
# Instalar
curl https://sh.rustup.rs -sSf | sh
# Configurar
source ~/.cargo/env
```


Se você já instalou o Rust, execute o seguinte comando para ter certeza de que está usando a versão mais recente.

```bash
rustup default stable
rustup update
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
n-unknown --toolchain nightly
```



### 2. Instalar as Dependências

Execute este comando para instalar as dependências necessárias para a compilação e execução do software baseado no Substrate do nó Appchain .

```bash
sudo apt update
# Pode solicitar informações de localização
sudo apt install make clang pkg-config libssl-dev build-essential
```

### 3. Obter o nó da appchain 

Você pode gerar o nó appchain compilando o código fonte a partir do repositório appchain. Por favor, consulte o seguinte comando:

```bash
git clone <Appchain GitHub Repo>
cd <Appchain>
cargo build --release
```

>`<Appchain GitHub Repo>`, o repositório GitHub da appchain. Navegue nele, clicando no ícone `Github` na página da appchain 
>
>`<Appchain>`, o nome do repositório appchain 

Após o término da compilação, o nó appchain será gerado no diretório `./target/release/`. Esta etapa levará um tempo (10~40 minutos), dependendo da configuração do hardware do servidor.

>Nota: Se tiver erros de compilação, você pode ter que mudar para uma versão noturna mais recente do Rust.


### 4.Executar o nó validator

Execute o nó validador. Por favor, observe o seguinte comando:

```bash
./target/release/<Appchain node> \
--base-path ./chain_data \
--chain octopus-mainnet \
--name <Your validator name> \
--validator \
--telemetry-url "wss://telemetry.mainnet.octopus.network/submit 0" \  
--enable-offchain-indexing true
```

>`<Appchain node>`, o nó gerado na etapa anterior
>
>`<Your validator name>`，o nome do nó validador

Você pode verificar se o nó validador conclui a sincronização dos dados da cadeia e verificar o registro, se há uma saída semelhante à seguinte:


```bash
2021-09-21 00:12:09 ✨ Imported #54411 (0x3566…3b0e)
2021-09-21 00:12:12 ✨ Imported #54412 (0xdf36…2c87)
2021-09-21 00:12:12 [54412] 🐙 Current block: 54412 (parent hash: 0x9cc7f31a20793f50cf885835de0e3977a1e080431ebc002469aa176046ba094a)
......
2021-09-21 00:13:18 ✨ Imported #54434 (0xba36…ee68)
2021-09-21 00:13:18 [54434] 🐙 Current block: 54434 (parent hash: 0x84aa3d1b6455859f9503d6ecc70b50b183141fe08f5b0695357e00fe1d24d915)
2021-09-21 00:13:18 💤 Idle (6 peers), best: #54434 (0xba36…ee68), finalized #54431 (0xd194…b319), ⬇ 22.0kiB/s ⬆ 21.9kiB/s
```

Após a sincronização do nó, o validador precisa de [gerar a Session Key](./validator-set-session-keys.md) para a próxima etapa [registrar validador](./validator-register.md).


### Atualizar o Nó Validador 

Quando a appchain lança uma nova versão do nó, os validadores precisam atualizar seu nó validador. Por favor, siga o canal **validadores-delegantes** no Discord. A equipe da Octopus Network publicará informações sobre a nova versão do nó appchain. O validador precisa de:



1. Compilar a nova versão do código fonte appchain para gerar um novo nó appchain;
2. Parar o nó validador antes da atualização;
3. Lançar o nó validador com o novo nó appchain.
