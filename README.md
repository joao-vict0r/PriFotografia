# Projeto Site Fotografia

Site estatico criado para apresentar o trabalho fotografico de `Pri Oliveira Maro` com um visual mais editorial e chamadas diretas para contato.

## Arquivos principais

- `index.html`: estrutura da pagina.
- `styles.css`: identidade visual, responsividade e animacoes.
- `script.js`: configuracao do Instagram, WhatsApp e efeitos de entrada.
- `assets/portfolio/`: placeholders locais que podem ser trocados pelas fotos finais.

## Como usar

1. Abra `index.html` no navegador.
2. Se quiser testar com um servidor local, rode:

```powershell
cd "C:\Users\Joaov\OneDrive\Ambiente de Trabalho\Web projets\Projeto_site_fotografia"
python -m http.server 5500
```

Depois acesse `http://localhost:5500`.

## Personalizacao rapida

### Instagram

O Instagram ja esta configurado em `script.js`.

### WhatsApp

Edite este trecho em `script.js`:

```js
whatsappNumber: "",
```

Preencha com o numero no formato internacional, por exemplo:

```js
whatsappNumber: "5511999999999",
```

### Fotos reais

Substitua os arquivos dentro de `assets/portfolio/` por suas imagens finais mantendo os mesmos nomes, ou atualize os caminhos no `index.html`.

## Observacao

Os SVGs atuais sao placeholders artisticos para manter o layout atraente enquanto as fotos finais ainda nao foram inseridas.
