# Assets de Imagens

Esta pasta contém todos os assets de imagem utilizados no site da Portocon Contabilidade e Assessoria LTDA.

## Estrutura de Pastas

```
public/images/
├── illustrations/     # Ilustrações para processos e etapas
├── departments/       # Imagens dos departamentos (Fiscal, Pessoal, Contábil)
└── hero/             # Imagens para hero sections (opcional)
```

## Imagens Necessárias

### Ilustrações (`/illustrations/`)

#### Abertura de Empresa
- `open-company-step-1.webp` - Etapa 1: Pessoa conversando com especialista
- `open-company-step-2.webp` - Etapa 2: Documentos digitais/smartphone
- `open-company-step-3.webp` - Etapa 3: Sucesso/conquista

#### Mudança de Contador
- `change-accountant-step-1.webp` - Etapa 1: Apresentação/conhecimento
- `change-accountant-step-2.webp` - Etapa 2: Documentação/preparação
- `change-accountant-step-3.webp` - Etapa 3: Boas-vindas/integração

### Departamentos (`/departments/`)
- `fiscal.webp` - Departamento Fiscal (impostos/finanças)
- `pessoal.webp` - Departamento Pessoal (funcionários/equipe)
- `contabil.webp` - Departamento Contábil (organização/documentos)

### Hero (`/hero/`)
- Imagens opcionais para hero sections

## Especificações Técnicas

### Formato
- **Recomendado**: WebP (melhor compressão e performance)
- **Alternativa**: PNG (com transparência se necessário)

### Dimensões
- **Ilustrações**: 400x400px (aspect ratio 1:1)
- **Departamentos**: 400x400px (aspect ratio 1:1)
- **Hero**: Conforme necessário para hero sections

### Otimização
- Compressão adequada para web
- Lazy loading implementado automaticamente via Next.js Image
- Responsive images com srcset automático

## Uso no Código

As imagens são referenciadas através das constantes em `src/constants/portocon.ts`:

```typescript
// Exemplo de uso em etapas
image: {
  src: "/images/illustrations/open-company-step-1.webp",
  alt: "Descrição da imagem"
}
```

## Notas

- As imagens são opcionais - o código funciona mesmo sem elas
- Use Next.js Image component para otimização automática
- Mantenha os nomes dos arquivos consistentes com as referências no código
