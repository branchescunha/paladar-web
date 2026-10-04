# Biblioteca de marca e mídia

Esta biblioteca reúne fontes preservadas, derivados técnicos e referências preparadas para o site e para uma futura Hero cinematográfica. Na seleção original, as cópias mantiveram os bytes das fontes externas sem recorte, recompressão, retoque ou geração de conteúdo.

Os JPGs selecionados continuam intactos como fontes de maior qualidade. Os derivados WebP são arquivos novos e não os substituem. As correções determinísticas ficaram restritas a orientação, enquadramento, exposição, balanço visual, saturação moderada e otimização para web.

A única edição generativa aceita nesta etapa foi a inserção moderada de clientes no salão. Tentativas de remoção no buffet e na churrasqueira foram descartadas por modificarem alimentos, rótulos ou equipamentos. Nenhuma dessas tentativas rejeitadas foi copiada para o projeto.

## Inventário das fontes

| Origem | Conteúdo encontrado | Observação |
| --- | --- | --- |
| `../logo/` | 2 JPGs (0,17 MiB) | Versões clara e escura da marca Paladar. |
| `../minhas fotos/` | 51 JPEGs (7,83 MiB) | Registro atual do restaurante, com arquivos nomeados em 29/09/2026. |
| `../z - o que me mandaram/` | 139 arquivos (60,92 MiB) | Fotos antigas e de eventos, logos, vídeos, peças gráficas, documento e imagens geradas. |

As 51 fotos atuais foram classificadas pelo assunto predominante:

| Categoria | Quantidade | Conteúdo |
| --- | ---: | --- |
| `facade` | 3 | Fachada completa e vistas externas. |
| `entrance` | 2 | Acesso principal visto da calçada. |
| `dining-room` | 9 | Salão, circulação e visão geral interna. |
| `buffet` | 22 | Linha de pratos quentes, saladas e visão geral do serviço. |
| `grill` | 4 | Churrasqueira, carnes e operação. |
| `tables` | 2 | Mesas e assentos em primeiro plano. |
| `cashier` | 6 | Balcão, balanças e área de atendimento. |
| `other` | 3 | Aquário e detalhes internos sem prioridade de uso. |

Cenas mistas foram atribuídas à categoria dominante. No material fornecido pelo cliente, também foram identificados registros do salão antigo, fachadas anteriores, montagens reais do Paladar Buffet, fotos de alimentos, peças de divulgação, cinco vídeos e imagens geradas.

## Assets selecionados

| Arquivo no projeto | Origem | Uso previsto | Situação atual |
| --- | --- | --- | --- |
| `public/images/brand/paladar-logo-light.jpg` | `../logo/logo branca.jpg` | Marca sobre fundo claro | Fonte raster com fundo branco. |
| `public/images/brand/paladar-logo-dark.jpg` | `../logo/logo preta.jpg` | Marca sobre fundo escuro | Fonte raster com fundo preto. |
| `public/images/hero/hero-reference-desktop-01.jpg` | `../minhas fotos/WhatsApp Image 2026-09-29 at 4.25.35 PM.jpeg` | Hero desktop, Home e buffet | Melhor visão horizontal do buffet atual sem pessoas em primeiro plano. |
| `public/images/hero/hero-reference-mobile-01.jpg` | `../minhas fotos/WhatsApp Image 2026-09-29 at 4.25.35 PM (1).jpeg` | Hero mobile e destaque gastronômico | Composição vertical com saladas e churrasqueira ao fundo. |
| `public/images/restaurant/facade/restaurant-facade-01.jpg` | `../minhas fotos/WhatsApp Image 2026-09-29 at 4.25.26 PM (3).jpeg` | Localização, contato e estrutura | Melhor registro frontal sem pessoas ou veículos em primeiro plano. |
| `public/images/restaurant/interior/restaurant-interior-01.jpg` | `../minhas fotos/WhatsApp Image 2026-09-29 at 4.25.23 PM (1).jpeg` | Sobre, Home e Nosso Espaço | Salão vazio, adequado para mostrar o ambiente. |
| `public/images/restaurant/buffet/paladar-buffet-event-01.jpg` | `../z - o que me mandaram/WhatsApp Image 2026-08-22 at 6.19.49 PM55.jpeg` | Integração com o Paladar Buffet | Montagem real de evento sem pessoas identificáveis. |
| `public/images/restaurant/grill/restaurant-grill-01.jpg` | `../minhas fotos/WhatsApp Image 2026-09-29 at 4.25.33 PM (1).jpeg` | Churrasco, carnes e Angus | Melhor enquadramento horizontal da operação. |
| `public/images/restaurant/space/restaurant-entrance-01.jpg` | `../minhas fotos/WhatsApp Image 2026-09-29 at 4.25.27 PM (1).jpeg` | Entrada, localização e Nosso Espaço | Referência vertical do acesso principal. |

## Classificação e destino

| Asset fonte | Classificação | Derivados e destino | Estado atual |
| --- | --- | --- | --- |
| `paladar-logo-light.jpg` | `both` | Fundo claro e futura versão transparente | Fonte preservada; transparência depende de mestre vetorial ou recorte manual profissional. |
| `paladar-logo-dark.jpg` | `both` | Fundo escuro e social preview | Social preview pronto; transparência ainda pendente. |
| `hero-reference-desktop-01.jpg` | `Hero reference` | `hero-buffet-reference-desktop.webp` | Luz e cor equilibradas; veículos e placas externos ainda exigem edição localizada externa. |
| `hero-reference-mobile-01.jpg` | `Hero reference` | `hero-buffet-reference-mobile.webp` | Luz e cor equilibradas; limpeza localizada do fundo ainda pendente. |
| `restaurant-facade-01.jpg` | `both` | Versão balanceada e referências Hero desktop/mobile | Enquadramentos prontos; fiação, telefone vizinho e resíduos ainda exigem edição localizada externa. |
| `restaurant-interior-01.jpg` | `both` | Versão limpa, versão com clientes e referências Hero desktop/mobile/mesa | Derivados aprovados. A versão vazia foi mantida separadamente. |
| `paladar-buffet-event-01.jpg` | `final website image` | `paladar-buffet-event-01.webp` | Pronto para uso web; nenhuma nova alteração trouxe ganho suficiente. |
| `restaurant-grill-01.jpg` | `Hero reference` | `restaurant-grill-balanced.webp` | Luz e cor equilibradas; remoção fiel do funcionário e objetos permanece pendente. |
| `restaurant-entrance-01.jpg` | `both` | Versão balanceada e referências Hero desktop/mobile | Enquadramentos prontos; recuperação seletiva de sombras e limpeza localizada ainda são desejáveis. |

Nenhum asset fonte foi classificado como `discard`. A tentativa generativa do buffet e a tentativa de remoção na churrasqueira foram descartadas por não preservarem fielmente alimentos, rótulos, equipamentos ou geometria. A versão generativa do salão com clientes foi aceita após comparação visual com a fonte.

## Derivados de produção

Todos os WebPs desta etapa usam qualidade 88, preservam a resolução útil disponível e removem metadados. Não houve upscale.

| Derivado | Fonte | Dimensões | Tamanho | Finalidade e tratamento |
| --- | --- | ---: | ---: | --- |
| `public/images/hero/hero-buffet-reference-desktop.webp` | `hero-reference-desktop-01.jpg` | 1280 × 960 | 183698 bytes | Hero desktop; exposição e saturação moderadas, enquadramento integral. |
| `public/images/hero/hero-buffet-reference-mobile.webp` | `hero-reference-mobile-01.jpg` | 960 × 1280 | 198310 bytes | Hero mobile; exposição e saturação moderadas, enquadramento integral. |
| `public/images/restaurant/facade/restaurant-facade-balanced.webp` | `restaurant-facade-01.jpg` | 960 × 1280 | 150730 bytes | Referência limpa de cor, sem reconstrução generativa. |
| `public/images/hero/hero-facade-reference-desktop.webp` | `restaurant-facade-01.jpg` | 960 × 540 | 83642 bytes | Recorte horizontal para abertura da sequência. |
| `public/images/hero/hero-facade-reference-mobile.webp` | `restaurant-facade-01.jpg` | 720 × 1280 | 106430 bytes | Recorte vertical central para abertura da sequência. |
| `public/images/restaurant/space/restaurant-entrance-balanced.webp` | `restaurant-entrance-01.jpg` | 960 × 1280 | 145636 bytes | Versão integral com ajuste leve de exposição. |
| `public/images/hero/hero-entrance-reference-desktop.webp` | `restaurant-entrance-01.jpg` | 960 × 540 | 59894 bytes | Recorte horizontal da transição exterior/interior. |
| `public/images/hero/hero-entrance-reference-mobile.webp` | `restaurant-entrance-01.jpg` | 720 × 1280 | 86934 bytes | Recorte vertical da transição exterior/interior. |
| `public/images/restaurant/interior/restaurant-interior-clean.webp` | `restaurant-interior-01.jpg` | 1280 × 960 | 109370 bytes | Salão vazio preservado, com ajuste leve de exposição e cor. |
| `public/images/restaurant/interior/restaurant-interior-guests.webp` | `restaurant-interior-01.jpg` | 1448 × 1086 | 147882 bytes | Site; inserção generativa aceita de clientes adultos em ocupação moderada. |
| `public/images/hero/hero-interior-reference-desktop.webp` | `restaurant-interior-01.jpg` | 1280 × 720 | 89682 bytes | Recorte horizontal do salão vazio. |
| `public/images/hero/hero-interior-reference-mobile.webp` | `restaurant-interior-01.jpg` | 540 × 960 | 69910 bytes | Recorte vertical do salão vazio. |
| `public/images/hero/hero-table-reference-desktop.webp` | `restaurant-interior-01.jpg` | 1000 × 562 | 65242 bytes | Etapa de mesa da sequência desktop, derivada do salão real. |
| `public/images/hero/hero-table-reference-mobile.webp` | `restaurant-interior-01.jpg` | 540 × 960 | 46546 bytes | Etapa de mesa da sequência mobile, derivada do salão real. |
| `public/images/restaurant/grill/restaurant-grill-balanced.webp` | `restaurant-grill-01.jpg` | 1280 × 960 | 210308 bytes | Referência de churrasqueira com ajuste leve de exposição e cor; não é asset final enquanto houver pendência de direito de imagem. |

Os derivados técnicos anteriores continuam válidos:

| Derivado | Fonte | Especificação | Tamanho | Estado |
| --- | --- | --- | ---: | --- |
| `public/images/brand/paladar-social-preview.jpg` | `paladar-logo-dark.jpg` | JPEG 1200 × 630 px, qualidade 88, sRGB e metadados removidos | 35408 bytes | Pronto para social preview; símbolo e lettering integrais. |
| `public/images/restaurant/buffet/paladar-buffet-event-01.webp` | `paladar-buffet-event-01.jpg` | WebP 1200 × 554 px, qualidade 82, proporção preservada e metadados removidos | 62390 bytes | Pronto para uso web, sem artefatos perceptíveis. |

## Candidatos da futura Hero

Sequência desktop preparada:

1. `hero-facade-reference-desktop.webp`
2. `hero-entrance-reference-desktop.webp`
3. `hero-interior-reference-desktop.webp`
4. `hero-buffet-reference-desktop.webp`
5. `restaurant-grill-balanced.webp`, apenas como referência interna enquanto a remoção fiel estiver pendente
6. `hero-table-reference-desktop.webp`

Sequência mobile preparada:

1. `hero-facade-reference-mobile.webp`
2. `hero-entrance-reference-mobile.webp`
3. `hero-interior-reference-mobile.webp`
4. `hero-buffet-reference-mobile.webp`
5. `restaurant-grill-01.jpg`, apenas como fonte interna enquanto não houver derivado vertical fiel
6. `hero-table-reference-mobile.webp`

Os candidatos principais do buffet continuam sendo as melhores bases gastronômicas. Os arquivos `churrasco.mp4` e `acompanhamento churrasco.mp4` seguem apenas catalogados fora do repositório; não foram copiados porque somam aproximadamente 22,4 MiB e exigem avaliação de frames.

## Edições generativas e pendências

| Asset | Resultado nesta etapa | Pendência |
| --- | --- | --- |
| Buffet desktop | Tentativa rejeitada: alterou alimentos, rótulos e equipamentos. | Remover veículos e placas com máscara localizada ou edição manual de alta fidelidade. |
| Buffet mobile | Não recebeu reconstrução generativa. | Limpar apenas interferências do fundo sem alterar alimentos, etiquetas ou churrasqueira. |
| Fachada | Não recebeu reconstrução generativa para proteger placa e arquitetura. | Remover fiação, telefone parcial do vizinho e resíduos; corrigir perspectiva de forma localizada. |
| Entrada | Não recebeu reconstrução generativa. | Recuperar sombras seletivamente e limpar marcas da cobertura/piso sem alterar o caminho real. |
| Salão limpo | Correções determinísticas aprovadas; a TV permaneceu intacta. | Substituir ou neutralizar o conteúdo da TV apenas se houver edição localizada segura. |
| Salão com clientes | Edição generativa aceita; clientes em escala e luz coerentes, sem poses dirigidas à câmera. | Revisar novamente junto ao layout final antes da publicação. |
| Churrasqueira | Tentativa rejeitada: alterou carnes e geometria do equipamento. | Remover funcionário, caixas e pano com máscara localizada; preservar integralmente carnes, churrasqueira, bancada e mármore. |
| Buffet de eventos | Derivado existente mantido. | Nenhuma edição obrigatória. |

As remoções rejeitadas exigem ferramenta externa com máscara explícita ou retoque manual. Não devem ser aproximadas por blur, clone grosseiro ou regeneração integral da cena.

Não foi criada uma versão do buffet com clientes. A tentativa mais simples de limpeza já modificou alimentos e equipamentos; adicionar pessoas aumentaria o risco de descaracterização e ficou registrado como pendência externa.

## Estado da logo

As melhores fontes imediatamente utilizáveis são os dois JPGs de `../logo/`. Eles também existem como duplicatas exatas no material do cliente. A versão clara mede 1440 × 837 px e possui fundo branco; a escura mede 1920 × 1080 px e possui fundo preto.

Há ainda dois PNGs identificados como oficiais, ambos com 1920 × 1920 px. Eles não possuem transparência e mantêm a marca pequena dentro de uma área ampla, por isso não substituem as fontes selecionadas nesta etapa.

Pendências da marca:

- arquivo mestre vetorial, caso exista;
- versões transparentes e com área útil ajustada;
- versão raster em alta resolução para fundos claros e escuros;
- isotipo simplificado e favicon em tamanhos adequados;
- validação de legibilidade em tamanhos pequenos.

Situação por aplicação:

- Header em fundo escuro: pendente de versão transparente; o JPG preto criaria uma emenda sobre o carvão do site.
- Fundo claro: pendente de versão transparente; o JPG branco não se integra ao creme das superfícies.
- Favicon: pendente de mestre vetorial e aprovação do símbolo isolado.
- Social preview: derivado 1200 × 630 px criado a partir da versão escura, sem cortar símbolo ou lettering.
- Versão transparente: não criada, pois a remoção automática do fundo degradaria o desenho rasterizado.

Nenhuma tentativa generativa de transparência foi realizada. As cinco pendências listadas acima continuam abertas.

## Materiais não incluídos

- variações muito parecidas ou inferiores às fotos selecionadas;
- registros do salão e da fachada antigos como representação do espaço atual;
- imagens geradas do proprietário;
- fotos comerciais ou de banco com procedência de uso não confirmada;
- peças prontas para redes sociais e cardápios anteriores;
- logos de outras marcas do acervo;
- duplicatas das logos;
- vídeos, documento DOCX e arquivos sem uso imediato;
- fotos de eventos com muitas pessoas identificáveis ou qualidade insuficiente.
