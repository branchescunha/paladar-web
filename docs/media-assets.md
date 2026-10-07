# Biblioteca de mídia

A biblioteca definitiva separa referências de produção da Hero e imagens públicas do site. As fontes externas permanecem fora do repositório e são somente leitura.

## Referências da Hero

`assets/hero-references/` contém as 12 imagens usadas como referência para a futura geração do vídeo cinematográfico. Esses arquivos não são carregados diretamente pelas páginas públicas.

Sequência visual: fachada → entrada → interior → buffet → churrasqueira → mesas.

| Arquivo | Dimensões | Proporção | Observação |
| --- | ---: | ---: | --- |
| `desktop/facade.jpg` | 1664 × 936 | 16:9 | Base externa aprovada; marca e arquitetura preservadas. |
| `desktop/entrance.jpg` | 1440 × 810 | 16:9 | Referência aprovada preservada. |
| `desktop/interior.jpg` | 1280 × 720 | 16:9 | Referência aprovada preservada. |
| `desktop/buffet.jpg` | 1664 × 936 | 16:9 | Base externa aprovada com buffet completo. |
| `desktop/grill.jpg` | 1536 × 864 | 16:9 | Referência aprovada preservada. |
| `desktop/tables.jpg` | 1664 × 936 | 16:9 | Base externa aprovada com exterior arborizado. |
| `mobile/facade.jpg` | 936 × 1664 | 9:16 | Base externa aprovada; marca e arquitetura preservadas. |
| `mobile/entrance.jpg` | 576 × 1024 | 9:16 | Referência aprovada preservada. |
| `mobile/interior.jpg` | 630 × 1120 | 9:16 | Referência aprovada preservada. |
| `mobile/buffet.jpg` | 936 × 1664 | 9:16 | Base externa aprovada com buffet completo. |
| `mobile/grill.jpg` | 864 × 1536 | 9:16 | Referência aprovada preservada. |
| `mobile/tables.jpg` | 864 × 1536 | 9:16 | Referência aprovada preservada. |

As cinco bases externas adotadas receberam apenas redimensionamento para proporção exata, conversão para JPEG de alta qualidade e ajustes leves de saturação e contraste. Não houve nova edição generativa, alteração de composição ou upscale para 4K. As outras sete referências foram preservadas byte a byte.

## Marca

`public/images/brand/` contém os ativos de marca mantidos no projeto.

| Arquivo | Dimensões | Finalidade |
| --- | ---: | --- |
| `paladar-logo-dark.jpg` | 1920 × 1080 | Fonte raster da marca para fundos escuros e futuros derivados. |
| `paladar-logo-light.jpg` | 1440 × 837 | Fonte raster da marca para fundos claros e futuros derivados. |
| `paladar-social-preview.jpg` | 1200 × 630 | Prévia social com símbolo e lettering completos. |

Versões transparentes, favicon e isotipo continuam pendentes de uma fonte vetorial ou recorte profissional. Nenhum desses derivados foi simulado nesta etapa.

## Imagens públicas

`public/images/site/` contém a biblioteca final aprovada para integração posterior nas páginas. Nenhum desses arquivos é referenciado atualmente por `src/`.

| Arquivo | Dimensões | Uso previsto |
| --- | ---: | --- |
| `restaurant-facade.webp` | 960 × 540 | Home, contato e localização. |
| `restaurant-entrance.webp` | 1280 × 720 | Home, Sobre e contato. |
| `restaurant-interior.webp` | 1280 × 720 | Home e Sobre. |
| `restaurant-buffet.webp` | 960 × 540 | Home e Cardápio. |
| `restaurant-grill.webp` | 640 × 360 | Home e Cardápio. |
| `paladar-buffet-event.webp` | 1200 × 554 | Página de integração do Paladar Buffet. |

Os WebPs são derivados otimizados para uso direto no site. As referências da Hero não foram duplicadas automaticamente em `public/`.

## Decisões finais

- As fontes externas em `../logo/`, `../minhas fotos/` e `../z - o que me mandaram/` permanecem fora do repositório e não foram alteradas.
- `assets/hero-references/` é exclusivo para a futura produção do vídeo.
- `public/images/brand/` concentra somente os ativos de marca preservados.
- `public/images/site/` concentra somente imagens WebP aprovadas para integração posterior.
- Pastas de revisão, candidatos, fontes intermediárias e derivados antigos foram removidas.
- O vídeo da Hero ainda será produzido em uma tarefa posterior.
