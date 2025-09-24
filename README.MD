
# n8n-nodes-random

Este repositório contém um **nó customizado Random** para [n8n](https://n8n.io).
O nó consome a API pública do [random.org](https://www.random.org/integers/) para gerar números inteiros aleatórios entre valores `Min` e `Max`.

---

## 🚀 Instalação de dependências

```bash
git clone https://github.com/SauloMFreitas/Desafio-Onfly.git
cd n8n-nodes-random
npm install
npm run build
mkdir -p custom
cp -r dist/* custom/
```

---

## 🐳 Executar localmente com Docker

O repositório contém um `docker-compose.yml` configurado com:

* **db** → PostgreSQL 16
* **n8n** → n8n versão 1.85.4

Subir os serviços:

```bash
docker compose up -d
```

Verificar se estão rodando:

```bash
docker compose ps
```

Parar os serviços:

```bash
docker compose down
```

---

## ⚙️ Configuração de ambiente

As variáveis de ambiente já estão declaradas no `docker-compose.yml`. Principais:

* Banco de dados:

  * `POSTGRES_USER=n8n`
  * `POSTGRES_PASSWORD=n8n`
  * `POSTGRES_DB=n8n`

* n8n:

  * `DB_TYPE=postgresdb`
  * `DB_POSTGRESDB_HOST=db`
  * `DB_POSTGRESDB_PORT=5432`
  * `DB_POSTGRESDB_DATABASE=n8n`
  * `DB_POSTGRESDB_USER=n8n`
  * `DB_POSTGRESDB_PASSWORD=n8n`
  * `N8N_CUSTOM_EXTENSIONS=/home/node/.n8n/custom`
  * `TZ=America/Sao_Paulo`

---

## 🧪 Executar os testes

1. Acesse o editor do n8n em: [http://localhost:5678](http://localhost:5678)
2. Crie um novo **Workflow**
3. Adicione um nó **Manual Trigger**
4. Adicione o nó **Random**
5. Configure os parâmetros:

   * `Min = 1`
   * `Max = 60`
6. Execute o workflow. A saída será um número aleatório em JSON:

```json
{ "value": 42 }
```

---

## ℹ️ Informações adicionais

* O nó está implementado em `nodes/Random/Random.node.ts`.
* O ícone está em `nodes/Random/random.svg`.
* Para recompilar após alterações:

```bash
npm run build
cp -r dist/* custom/
docker compose restart n8n
```

* Logs úteis:

```bash
docker compose logs n8n --tail=50
docker compose logs db --tail=50
```

---

## 📚 Referências

* [n8n – Criar nós customizados](https://docs.n8n.io/integrations/creating-nodes/create-node.html)
* [random.org – API Integers](https://www.random.org/integers/)
* [Imagem oficial n8n (Docker Hub)](https://hub.docker.com/r/n8nio/n8n)
* [Imagem oficial Postgres (Docker Hub)](https://hub.docker.com/_/postgres)

---
