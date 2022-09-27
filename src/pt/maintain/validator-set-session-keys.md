## Generate Session Keys

Execute o comando `author_rotateKeys` no servidor em que o nó validador está implantado e o nó está sendo executado com a porta HTTP RPC padrão configurada:

```bash
curl -H "Content-Type: application/json" -d'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

A saída terá um campo "resultado" codificado em hexadecimal, que é a concatenação das várias chaves públicas, salve-o como a chave de sessão que seria usada na próxima etapa.

```bash
{"jsonrpc":"2.0","result":"0xb143b87b83d16a43f444e94fed9cd87491802b9fae635c0de37b52609900fd398bbb0acd67d345a75ca0ef523acfc94fa63b462109f20684701a6150810231f7f92800d8f740e15187a4723f7671d0db7bb2ee46b87602b9f86bfa478a889c768da183a5d25673cf30424d649c95351a1c41f11c92c5bc8e84251406069999055a8cf21e44d9fd5fb41fa77ecb6cf0ea2ac62c4001083fd638fe70153a5f37c661","id":1}
```