# WesCode — Portfólio Premium Grafite & Dourado

Site estático, responsivo, sem backend e pronto para GitHub Pages.

## Personalizar antes de publicar

1. Abra `assets/script.js` e altere `CONTACT.email` e `CONTACT.whatsapp` para seus contatos reais. O WhatsApp deve conter apenas números, incluindo o DDI 55. Se deixar vazio, o botão não aparece.
2. Atualize textos e nomes de projetos em `index.html`, conforme necessário.
3. A seção Café Local utiliza **quatro capturas reais enviadas pelo proprietário** (PDV, Comandas, Validades e Produtos e estoque), disponíveis em `assets/screenshots/`. O painel decorativo da seção inicial continua ilustrativo, com dados fictícios.
4. O site carrega fontes do Google Fonts; sem conexão, utiliza fontes de fallback.

## Publicar gratuitamente no GitHub Pages

1. Crie uma conta no https://github.com/ (se ainda não tiver).
2. Crie um repositório público chamado `SEUUSUARIO.github.io`, substituindo `SEUUSUARIO` pelo nome da sua conta.
3. Envie `index.html`, `assets/` e, opcionalmente, este README para a raiz do repositório (não envie a pasta `portfolio-premium` como subpasta).
4. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
5. Aguarde a publicação em `https://SEUUSUARIO.github.io/`.

Alternativa: hospede em um repositório com outro nome e acesse `https://SEUUSUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Testar localmente

Abra `index.html` no navegador ou execute `python -m http.server 8000` dentro da pasta e acesse http://localhost:8000.

## Estrutura

- `index.html`: conteúdo do site
- `assets/style.css`: aparência e responsividade
- `assets/script.js`: menu, animações e contatos
- `assets/favicon.svg`: ícone da WesCode
- `assets/screenshots/`: imagens reais das telas do Café Local

Não inclua senhas, dados de clientes ou informações privadas nos arquivos públicos do repositório.

## Cliente Guilm's Café

A seção “Quem utiliza o Café Local”, após a galeria de telas, contém um link direto para https://www.instagram.com/guilmscafe/ (abre em nova aba). Não há incorporação de postagens, login ou dependência da API do Instagram. A arte de xícara é ilustrativa, não é uma foto ou logotipo oficial do estabelecimento. **Confirme com o cliente a autorização para divulgar o nome e sua condição de usuário do software antes de publicar.**

## Marca do cliente
A seção Guilm’s Café inclui o logotipo fornecido em `assets/guilms-logo.jpg`. Confirme autorização do cliente antes da publicação pública.
