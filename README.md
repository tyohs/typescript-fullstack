# TypeScript Full-Stack — Without AI-generated code

React、NestJS、pnpm workspace、Turborepoを使用し、段階的に構築していくTypeScriptフルスタック学習プロジェクトです。
AIに実装のすべてを任せるのではなく、UIからAPI、データベースまでの処理を自分で理解し、実装・テスト・デバッグできるようになることを目的としています。


## 現在の構成

```text
.
├── apps
│   ├── api  # NestJS
│   └── web  # React + Vite
├── packages # 今後追加する共有パッケージ
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

## 動作確認環境

- Node.js: `v24.14.1`
- pnpm: `10.17.1`

## セットアップ

```bash
git clone https://github.com/tyohs/typescript-fullstack.git
cd typescript-fullstack
pnpm install
```

## 開発サーバーの起動

リポジトリのルートで次を実行すると、Turborepoを通してWebとAPIが同時に起動します。

```bash
pnpm dev
```

起動後は、以下のURLへアクセスできます。

- Web: `http://localhost:5173`
- API: `http://localhost:3000`

APIのレスポンスは次のコマンドで確認できます。

```bash
curl http://localhost:3000
```

期待するレスポンスは以下です。

```text
Hello World!
```

WebとAPIを個別に起動する場合は、次を使用します。

```bash
pnpm --filter web dev
pnpm --filter api start:dev
```

## Build

WebとAPIをまとめてビルドします。

```bash
pnpm build
```

個別にビルドする場合は、次を使用します。

```bash
pnpm --filter web build
pnpm --filter api build
```

## Lint

WebとAPIのLintをまとめて実行します。

```bash
pnpm lint
```

個別に実行する場合は、次を使用します。

```bash
pnpm --filter web lint
pnpm --filter api lint
```

## Test

現在はAPIにunit testとE2E testがあります。

unit testはルートから実行できます。

```bash
pnpm test
```

E2E testはAPIを指定して実行します。

```bash
pnpm --filter api test:e2e
```
