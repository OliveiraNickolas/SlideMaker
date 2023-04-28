# SlideMaker

SlideMaker é uma aplicação desenvolvida com React e Vite para ajudar os usuários a criar slides de letras de músicas de forma rápida e fácil.

## Requisitos
- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)

## Como usar

1. Faça o clone do repositório para o seu computador:

`git clone https://github.com/OliveiraNickolas/SlideMaker.git`

2. Navegue até a pasta do projeto e instale as dependências:

`cd SlideMaker
npm install `

3. Inicie o servidor de desenvolvimento:

 `npm run dev`
 
4. Em um novo terminal, navegue até a pasta do projeto e inicie o servidor backend:

`cd SlideMaker
node server.js`


5. Abra seu navegador e acesse http://localhost:3000. Agora você pode começar a usar o SlideMaker!

## Tecnologias utilizadas
- React
- Vite
- Axios
- Cheerio
- PptxGenJS

**Nota**: O projeto atualmente funciona apenas com links de letras do site https://www.letras.mus.br/. Insira um link de uma letra deste site e clique em "Gerar Slide". A aplicação está sujeita a parar de funcionar caso o site mude a estrutura da página, visto que faz um parse no HTML e gera o PPTX.
