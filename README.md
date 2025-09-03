# CatDog - Gawr Gura Edition

## 📖 Descrição

Este é um projeto acadêmico desenvolvido para estudo de consumo de APIs e desenvolvimento web com Vite e TypeScript. A aplicação é uma página simples que permite ao usuário visualizar imagens aleatórias de gatos ou cachorros, consumindo duas APIs públicas. Inicialmente, a página exibe uma imagem aleatória de Gawr Gura, uma personagem da Hololive, e oferece controles para alternar entre imagens de animais ou voltar à imagem inicial.

[Link versão online](https://cat-dog-eight.vercel.app/)

O projeto foi criado como parte de um exercício educacional para praticar conceitos de:
- Consumo de APIs REST
- Manipulação do DOM com TypeScript
- Desenvolvimento de interfaces responsivas
- Uso de ferramentas modernas de build (Vite)

## 🛠️ Tecnologias Utilizadas

- **Frontend Framework**: Vite (para build e desenvolvimento rápido)
- **Linguagem**: TypeScript (para tipagem estática e melhor DX)
- **HTML5**: Estrutura da página
- **CSS3**: Estilização com variáveis CSS e design responsivo
- **APIs Consumidas**:
  - [The Cat API](https://thecatapi.com/) - Para imagens de gatos
  - [Dog CEO API](https://dog.ceo/dog-api/) - Para imagens de cachorros

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:
- Node.js (versão 16 ou superior)
- npm ou yarn (gerenciador de pacotes)

## 🚀 Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/RuanLopes1350/CatDog.git
   cd CatDog
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```

   O projeto será executado em `http://localhost:5173` (ou outra porta disponível).

4. **Build para produção**:
   ```bash
   npm run build
   ```

5. **Preview do build**:
   ```bash
   npm run preview
   ```

## 📱 Como Usar

1. Abra a página no navegador.
2. Inicialmente, você verá uma imagem aleatória de Gawr Gura.
3. Selecione "Gato" ou "Cachorro" no menu suspenso.
4. Clique no botão "A" para carregar uma imagem aleatória do animal selecionado.
5. Use o botão "Voltar para Gura" para retornar à imagem inicial.

## 📁 Estrutura do Projeto

```
CatDog/
├── index.html              # Arquivo HTML principal
├── package.json            # Configurações do projeto e dependências
├── tsconfig.json           # Configurações do TypeScript
├── vercel.json             # Configurações para deploy na Vercel
├── public/
│   └── vite.svg            # Ícone do Vite
└── src/
    ├── main.ts             # Lógica principal da aplicação
    ├── vite-env.d.ts       # Tipos do Vite
    └── styles/
        ├── main.css        # Estilos principais
        └── reset.css       # Reset de estilos
```

## 🌐 APIs Utilizadas

### The Cat API
- **URL**: `https://api.thecatapi.com/v1/images/search`
- **Parâmetros**: `size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
- **Resposta**: Retorna um array com objetos contendo URLs de imagens de gatos

### Dog CEO API
- **URL**: `https://dog.ceo/api/breeds/image/random`
- **Resposta**: Retorna um objeto com a propriedade `message` contendo a URL da imagem

## 🤝 Contribuição

Este é um projeto acadêmico, mas contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📄 Licença

Este projeto é de uso educacional e não possui licença específica.

## 👨‍💻 Autor

**Ruan Lopes** - [GitHub](https://github.com/RuanLopes1350)

---

*Projeto desenvolvido como exercício acadêmico para estudo de desenvolvimento web moderno.*
