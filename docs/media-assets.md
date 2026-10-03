# Biblioteca de marca e mídia

Esta biblioteca reúne referências selecionadas para tratamento posterior. Os arquivos ainda não são, necessariamente, assets finais de produção. As cópias preservam os bytes dos originais; nesta etapa não houve recorte, recompressão, retoque ou geração de conteúdo.

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

## Referências para Hero

- Desktop: `hero-reference-desktop-01.jpg`, pela leitura ampla do buffet, profundidade e espaço lateral para composição editorial.
- Mobile: `hero-reference-mobile-01.jpg`, pelo enquadramento vertical e proximidade dos alimentos.
- Alternativas para narrativa ou vídeo: `restaurant-grill-01.jpg`, `restaurant-facade-01.jpg` e `restaurant-interior-01.jpg`.

Os arquivos `churrasco.mp4` e `acompanhamento churrasco.mp4`, encontrados no material do cliente, foram catalogados como possíveis referências de movimento. Não foram copiados por somarem aproximadamente 22,4 MiB e exigirem avaliação de frames antes de qualquer uso.

## Tratamentos futuros

| Asset | Necessidades identificadas |
| --- | --- |
| `hero-reference-desktop-01.jpg` | Correção de luz, balanço de branco e enquadramento; remoção dos veículos e placas visíveis através da fachada. |
| `hero-reference-mobile-01.jpg` | Correção de luz, contraste, enquadramento e limpeza visual do fundo. |
| `restaurant-facade-01.jpg` | Correção de perspectiva e luz; limpeza de resíduos, fiação e interferências laterais, incluindo o telefone parcial do estabelecimento vizinho. |
| `restaurant-interior-01.jpg` | Correção de luz e perspectiva; remoção ou substituição do conteúdo da TV; possível preenchimento moderado com clientes. |
| `paladar-buffet-event-01.jpg` | Correção de luz, cor e perspectiva; limpeza visual da cortina, do piso e dos elementos de operação ao fundo. |
| `restaurant-grill-01.jpg` | Correção de luz e cor; limpeza da bancada, recipientes e objetos de operação; avaliar autorização de imagem do funcionário. |
| `restaurant-entrance-01.jpg` | Recuperação de sombras, correção vertical e limpeza de marcas da cobertura e do piso. |

`restaurant-interior-01.jpg` é a melhor base para receber clientes por IA, pois apresenta mesas vazias, circulação clara e perspectiva coerente. `hero-reference-desktop-01.jpg` também admite presença humana discreta ao fundo. Qualquer inclusão deverá manter escala, iluminação e circulação naturais.

As imagens permanecem como bases de trabalho. Elas não devem ser referenciadas em páginas nem seguir para uma entrega de produção antes da revisão de privacidade, direitos de imagem e tratamentos indicados. Isso se aplica especialmente a `restaurant-grill-01.jpg`, que registra um funcionário de costas.

Para uma futura geração de vídeo cinematográfico, as melhores bases estáticas são a fachada, o buffet horizontal, o salão e a churrasqueira. Elas permitem estabelecer exterior, ambiente, serviço e gastronomia sem depender de material artificial nesta etapa.

## Estado da logo

As melhores fontes imediatamente utilizáveis são os dois JPGs de `../logo/`. Eles também existem como duplicatas exatas no material do cliente. A versão clara mede 1440 × 837 px e possui fundo branco; a escura mede 1920 × 1080 px e possui fundo preto.

Há ainda dois PNGs identificados como oficiais, ambos com 1920 × 1920 px. Eles não possuem transparência e mantêm a marca pequena dentro de uma área ampla, por isso não substituem as fontes selecionadas nesta etapa.

Derivados ainda necessários:

- arquivo mestre vetorial, caso exista;
- versões transparentes e com área útil ajustada;
- versão raster em alta resolução para fundos claros e escuros;
- isotipo simplificado e favicon em tamanhos adequados;
- validação de legibilidade em tamanhos pequenos.

Nenhuma dessas derivações foi criada nesta Issue.

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
