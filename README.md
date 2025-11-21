# 🦅 App Hórus

> Uma aplicação social mobile para um projeto de exetensão com estética Black & Gold, desenvolvida com React Native e Expo.

![Badge React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Badge TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## 📸 Screenshots

## 📱 Sobre o Projeto

O **App Hórus** é um projeto de rede social focado em uma experiência de usuário visualmente impactante. O design utiliza uma paleta de cores de alto contraste (Preto e Dourado) e tipografia serifada para transmitir elegância.

O projeto foi construído utilizando a arquitetura moderna do **Expo Router** (navegação baseada em arquivos).

## 🎨 Design System

O visual do app foi cuidadosamente planejado:
* **Cores Primárias:** `#000000` (Dark BG) e `#D4AF37` (Gold).
* **Navegação:** Tab Bar customizada com botão central de ação flutuante.
* **Estilo:** Elementos curvos no topo (Header) e ícones minimalistas.

## 🚀 Funcionalidades Implementadas

* ✅ **Autenticação:** Telas de Login e Cadastro.
* ✅ **Navegação Avançada:** * Stack Navigation (Fluxo de entrada).
    * Tab Navigation (Abas principais).
    * Botão central customizado (Create Post).
* ✅ **Feed & Postagem:** Interface para criação de posts com opções de mídia.
* ✅ **Perfil de Usuário:**
    * Galeria de fotos em Grid responsivo.
    * Estatísticas (Seguidores/Seguindo).
    * Header com design curvo.
* ✅ **Central de Notificações:** Lista interativa com ícones dinâmicos baseados no tipo de interação (Like, Comentário, Follow).
* ✅ **Configurações:** Menu de ajustes gerais com Switches e Listas.

## 🛠 Tecnologias Utilizadas

* **React Native** (Framework principal)
* **Expo SDK** (Plataforma de desenvolvimento)
* **Expo Router** (Roteamento baseado em arquivos - File-based routing)
* **TypeScript** (Tipagem estática)
* **StyleSheet** (Estilização nativa)
* **Lucide Icons / Ionicons** (Ícones vetoriais)
## 📦 Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/rayramello/app-horus-new.git](https://github.com/rayramello/app-horus-new.git)
Instale as dependências

Bash

cd app-horus-new
npm install
Execute o projeto

Bash

npx expo start
Teste

Escaneie o QR Code com o app Expo Go (Android/iOS).

Ou pressione a para abrir no Emulador Android.

Ou pressione w para abrir na Web.

📂 Estrutura de Pastas
app-horus-new/
├── app/
│   ├── (tabs)/          # Telas da navegação inferior (Home, Profile, etc.)
│   │   ├── _layout.tsx  # Configuração da TabBar
│   │   └── ...
│   ├── _layout.tsx      # Configuração da Stack (Root)
│   ├── index.tsx        # Tela inicial
│   └── login.tsx        # Tela de Login
├── assets/              # Imagens e fontes
└── components/          # Componentes reutilizáveis
Desenvolvido por Rayra Mello.

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/rayramello/app-horus-new.git](https://github.com/rayramello/app-horus-new.git)
