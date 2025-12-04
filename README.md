# GradeTracker
Aplicativo moderno para registrar notas, calcular médias e acompanhar o desempenho acadêmico de forma prática e direta. Reescrito totalmente em React + Vite + TypeScript para ficar mais rápido, organizado e fácil de manter.

## Visão Geral
O GradeTracker permite registrar suas notas, visualizar médias, identificar rapidamente onde melhorar e acompanhar tudo em uma interface simples e funcional. Ele salva tudo automaticamente no navegador, então você nunca perde seus dados — mesmo fechando o app.

## Funcionalidades
Adicionar uma nova nota com nome, simulado 1, simulado 2 e prova.
Cálculo automático da média (limitada a 10).
Tabela completa com destaque visual:
Verde para média acima ou igual a 6.
Vermelho para média abaixo de 6.
Remoção de notas com um clique.
Dados persistidos via localStorage.
Interface minimalista e leve.
Rotas separadas para organização (Home, Dashboard e Adicionar Nota).

## Tecnologias Utilizadas
React + Vite (alta performance e hot reload instantâneo)
TypeScript
React Router DOM
LocalStorage (persistência local)
CSS puro para estilo base

Como Rodar o Projeto

1. Instale as dependências:

```
npm install
```

2. Inicie o servidor de desenvolvimento:

```
npm run dev
```

3. Gerar build de produção:

```
npm run build
```

4. Servir a build (opcional):

```
npm run preview
```

Estrutura de Pastas

```
src/
  components/
    GradeForm.tsx      # formulário para adicionar notas
    GradeTable.tsx     # tabela com médias, cores e remover
  pages/
    Home.tsx           # página inicial
    Dashboard.tsx      # tabela e visão geral
    AddGrade.tsx       # página para adicionar nota
  services/
    storage.ts         # leitura e escrita no localStorage
  types.ts             # tipos compartilhados
  routes.tsx           # configuração das rotas
  App.tsx              # raiz do app
  main.tsx             # entrada principal do Vite
  utils/
    App.css            # estilo base do app
```

## Motivação
Esse projeto foi recriado para ficar mais próximo de um ambiente real de desenvolvimento com React + Vite + TypeScript. A ideia é torná-lo mais escalável, limpo e fácil de entender — servindo tanto como app pessoal quanto como prática sólida de front-end moderno.

## Melhorias Futuras (opcional)
Edição de notas diretamente na tabela.
Modal para detalhes avançados.
Gráficos de desempenho (com Recharts ou Chart.js).
Filtro e busca.
Sincronização com banco real (Firebase/Supabase).

## Licença
Este projeto é aberto. Utilize, modifique e evolua como quiser.
