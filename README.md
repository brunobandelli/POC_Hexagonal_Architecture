# 🔷 PoC - Registro e Login com Arquitetura Hexagonal (Node.js + TypeScript)

Uma prova de conceito simples de **autenticação de usuário** (registro e login) implementada com **Arquitetura Hexagonal (Ports & Adapters)**, escrita em Node.js com TypeScript.

---

## 📁 Estrutura de Pastas

```
src/
├── adapters/
│   ├── PseudoCrypto.ts           # Adapter de criptografia falsa
│   ├── RealCrypto.ts             # Adapter com bcrypt real
│   └── UserCollectionMemory.ts   # Simulação de banco de dados em memória
│
├── core/
│   ├── shared/
│   │   └── UseCase.ts            # Classe base para casos de uso
│   └── user/
│       ├── model/                # Entidades e contratos (interfaces)
│       │   ├── CryptoProvider.ts
│       │   ├── User.ts
│       │   └── UserCollection.ts
│       └── service/              # Casos de uso (regras de negócio)
│           ├── UserLogin.ts
│           └── UserRegister.ts
│
├── app/
│   └── App.ts                    # Orquestrador da aplicação
│
└── index.ts                      # Ponto de entrada
```

---

## 🚀 Requisitos e Como Rodar

### 🧾 Pré-requisitos

- Node.js 18+  
- npm ou yarn

### 📦 Instalando dependências

```bash
npm install
```

### ▶️ Execução

```bash
npm run dev
```
ou
```bash
npm run start
```

- npm run dev: roda com ts-node-dev, para recarregamento automático.
- npm run start: compila e roda com Node.js.  
- A aplicação irá registrar e depois logar um usuário fictício no console.

---

## 🔐 Criptografia

O projeto oferece duas opções de adapter para simular a camada de criptografia:

- `PseudoCrypto`: apenas inverte a senha (para simulação)
- `RealCrypto`: usa bcrypt real para hash e comparação de senha

Trocar entre eles é fácil, bastando mudar a instância usada em `App.ts`.

---

## 🧱 Conceitos de Arquitetura

- **Domínio isolado**: regras de negócio desacopladas de frameworks ou infraestrutura.
- **Inversão de dependência**: adapters são passados via interfaces para os casos de uso.
- **Testabilidade elevada**: fácil simular ou substituir componentes.
- **Extensível**: arquitetura preparada para expansão real (banco real, API, etc).

### ✅ Vantagens

- Maior modularidade e clareza entre camadas.
- Troca fácil de implementações (ex: banco, criptografia).
- Código de domínio independente de ferramentas externas.

### ⚠️ Desvantagens

- Curva de aprendizado inicial.
- Mais arquivos e complexidade estrutural.
- Necessidade de disciplina.

---

## 📺 Referência

Projeto inspirado no vídeo:  
> **Arquitetura Hexagonal Simplificada** – cod3r cursos  
> Vidéo explicando cada camada da arquitetura passo a passo com PoC em Node.js.  
[Arquitetura Hexagonal Simplificada](https://www.youtube.com/watch?v=XA6J9GM1TCQ&utm_source=chatgpt.com)


---

## 🧠 O que você aprende com esta PoC

- Como estruturar um projeto seguindo Domínio, Ports & Adapters  
- Inversão de dependência com interfaces explícitas  
- Como organizar entidades, casos de uso, adapters e entrypoint  
- Estrutura limpa para crescimento e testes futuros

---
