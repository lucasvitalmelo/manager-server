
# Manager API

Backend API desenvolvida com **NestJS**, **Prisma** e **PostgreSQL** para gerenciamento de estúdio de tatuagem.


## 🛠️ Tecnologias

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger](https://swagger.io/) — Documentação da API
- Autenticação via **Google OAuth2 + JWT**
- Deploy ready **Railway**

---

## 🚩 Funcionalidades

- Autenticação com Google OAuth2 e JWT (cookies httpOnly)
- Gestão de Clientes (Customers)
- Gestão de Pedidos (Orders)
- Gestão de Pagamentos (Payments)
- Gerenciamento de Tags
- Gerenciamento de Tipos de Tatuagem (Tattoo Types)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/lucasvitalmelo/manager-server
cd manager-server

# Instale as dependências
npm install

# Copie e configure as variáveis de ambiente
cp .env.example .env
```

---

## 🗒️ Variáveis de ambiente

```env
APP_WEB='https://manager-web.app/'
DATABASE_URL=postgresql://user:password@host:port/dbname
GOOGLE_CLIENT_ID=seu_google_client_id
GOOGLE_CLIENT_SECRET=seu_google_client_secret
SECRETKEY=chave_secreta_jwt

# se for fechar para apenas um email ter acesso
AUTH_MAIL='john.doe@gmail.com'

```

---

## 🔨 Rodando o projeto

```bash
# Gere o client Prisma
npx prisma generate

# Rode as migrations
npx prisma migrate dev

# Rode o projeto
npm run start:dev
```

---

## 🔥 Documentação da API

Acesse:

```
http://localhost:3000/docs-swagger
```

Gerada automaticamente via Swagger.

---

## 🗂️ Endpoints Principais

| Entidade    | Método | Endpoint             | Descrição                       |
|--------------|--------|----------------------|----------------------------------|
| Auth         | GET    | /auth/google         | Login via Google OAuth           |
| Auth         | GET    | /auth/google/callback| Callback OAuth                   |
| Customer     | GET    | /customer            | Listar clientes                  |
| Customer     | POST   | /customer            | Criar cliente                    |
| Customer     | PATCH  | /customer/:id        | Atualizar cliente                |
| Customer     | DELETE | /customer/:id        | Deletar cliente                  |
| Order        | GET    | /order               | Listar pedidos                   |
| Order        | POST   | /order               | Criar pedido                     |
| Order        | PATCH  | /order/:id           | Atualizar pedido                 |
| Order        | DELETE | /order/:id           | Deletar pedido                   |
| Payment      | POST   | /payment             | Criar pagamento                  |
| Payment      | DELETE | /payment/:id         | Deletar pagamento                |
| Tags         | GET    | /tags                | Listar tags                      |
| Tags         | POST   | /tags                | Criar tag                        |
| Tags         | DELETE | /tags/:id            | Deletar tag                      |
| Tattoo Type  | GET    | /tattoo-type         | Listar tipos de tatuagem         |
| Tattoo Type  | POST   | /tattoo-type         | Criar tipo de tatuagem           |
| Tattoo Type  | DELETE | /tattoo-type/:id     | Deletar tipo de tatuagem         |

---

## 🔐 Autenticação

- A API utiliza autenticação via **JWT armazenado em cookies httpOnly**.
- Todos os endpoints, exceto `/auth/google` e `/auth/google/callback`, são protegidos.
- A documentação Swagger permite testes autenticados usando o botão "Authorize" (ícone de cadeado) — necessário cookie `access_token`.

---

## 👨‍💻 Autor

- Desenvolvido por [Lucas Vital de Melo](https://github.com/lucasvitalmelo)

---

## 🏆 Licença

MIT — sinta-se livre para usar e adaptar.
