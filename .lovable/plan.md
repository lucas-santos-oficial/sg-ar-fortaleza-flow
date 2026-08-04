# Otimização de conversão (CRO) da landing page

Objetivo: aumentar conversão mantendo 100% da identidade visual atual (azul #013C92, fonte Manrope, logo e componentes existentes). Nenhuma mudança de layout desnecessária — apenas copy, hierarquia e elementos de confiança.

## 1. Hero mais curto e direto

- Título mantido: "Manutenção de ar-condicionado em Fortaleza".
- Novo subtítulo (versão escolhida por ser mais específica e cobrir objeções de marca/local):
  "Seu ar-condicionado parou de funcionar? Diagnóstico rápido, atendimento em domicílio e manutenção especializada para todas as marcas em Fortaleza e Região Metropolitana."
- Encurtar o bloco: subtítulo em até 2 linhas, sem parágrafos extras acima do botão.

## 2. CTA principal

- Texto do botão principal do hero: **"Solicitar orçamento no WhatsApp"** (nomeia o canal, reduz atrito e diz exatamente o que acontece ao clicar).
- Botão do topo (header) passa a "Falar com um técnico" para não competir com o CTA principal.
- O botão do hero continua sendo o elemento visual mais forte: tamanho maior, largura total no mobile e leve destaque de sombra — mesma cor da marca.
- Microcopy abaixo: "Resposta rápida • Orçamento sem compromisso".

## 3. Prova social logo abaixo do CTA

Nova faixa compacta imediatamente após o botão do hero, usando os depoimentos reais já existentes na página (avaliações do Google):

```text
★★★★★  Excelente avaliação dos clientes no Google
"A manutenção/limpeza é muito boa e eficiente. Recomendo!"
```

Estilo: mesma tipografia e paleta, estrelas em dourado (já usado na seção de depoimentos).

## 4. Selos de confiança com ícones

Substituir a lista atual de 3 "pills" por uma grade compacta de 6 itens com ícones simples em SVG inline (mesma cor azul da marca):

- Fortaleza e Região Metropolitana
- Técnicos especializados
- Todas as marcas
- Residencial e comercial
- Orçamento sem compromisso
- Atendimento via WhatsApp

No mobile: grade de 2 colunas, texto pequeno, sem aumentar muito a altura.

## 5. Imagem do técnico no mobile

- No mobile a imagem sobe: fica logo após a prova social, com altura reduzida (proporção mais panorâmica) para que botão + parte da foto caibam na primeira dobra.
- No desktop nada muda (permanece à direita).

## 6. Fundo quadriculado mais discreto

Reduzir a opacidade/contraste do padrão de grade do hero (linhas mais claras e máscara de esmaecimento), aumentando o contraste do texto sem remover o elemento.

## 7. Hierarquia final do hero

```text
Título → Subtítulo (benefício) → CTA → Prova social → Selos de confiança → Foto
```

## 8. Revisão de CRO no restante da página

- Encurtar subtítulos longos das seções (Problemas, Benefícios, Serviços realizados) para frases escaneáveis.
- Padronizar os CTAs intermediários com verbos de ação orientados a WhatsApp.
- Reforçar a redução de objeções no CTA final ("sem compromisso", "resposta rápida").
- Ajustar espaçamentos verticais no mobile (seções de 72px → ~52px) para reduzir rolagem.

## Detalhes técnicos

- Arquivos alterados: `public/index.html` (copy, nova faixa de prova social, selos com ícones, ordem dos blocos do hero) e `public/style.css` (opacidade do padrão de fundo, grid dos selos, ordem responsiva via `order` no mobile, espaçamentos).
- `public/script.js` não muda: os links `data-wa` continuam funcionando.
- Nenhuma alteração de tokens de cor, fonte, logo ou estrutura de rotas.
- Verificação: screenshot mobile (390px) e desktop após as mudanças para confirmar que CTA e parte da imagem aparecem na primeira dobra.
