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

APIのルートエンドポイントのレスポンスは次のコマンドで確認できます。

```bash
curl http://localhost:3000
```

期待するレスポンスは以下です。

```text
Hello World!
```

### タスク一覧の確認

`GET /tasks`でタスク一覧を取得できます。リクエストボディは必要ありません。

```bash
curl http://localhost:3000/tasks
```

現在は学習用の固定データを返します。

```json
[
  {
    "id": "task-1",
    "title": "TypeScriptを復習する",
    "status": "todo"
  },
  {
    "id": "task-2",
    "title": "NestJSの公式ドキュメントを読む",
    "status": "doing"
  }
]
```

Web（`http://localhost:5173`）を開くと、ReactがAPIからタスクを取得して表示します。取得状況に応じて、次の4状態を表示します。

- loading: `読み込み中`
- empty: `タスクはありません`
- error: タスク取得エラー
- success: タスク一覧

APIを個別に起動する場合は、先にAPI、別のターミナルでWebを起動してください。WebからAPIへアクセスできるよう、APIは`http://localhost:5173`からのCORSだけを許可しています。

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

E2Eテストでは、NestJSアプリケーションを起動した状態をテスト用に作成し、`GET /`と`GET /tasks`のHTTPレスポンスを確認します。

## 現在の実装範囲

- API: NestJSの`TaskModule`、`TaskController`、`TaskService`
- APIのタスクデータ: Service内の固定配列（DB・Prismaは未接続）
- Web: React + Vite、`fetch`、`useEffect`、`useState`
- 型: APIとWebにそれぞれ`Task`型を定義
- テスト: APIのunit testと`GET /tasks`を含むE2E test

このリポジトリでは、機能を小さなIssueに分割し、実装・テスト・Lint・Buildを確認しながら段階的に技術を追加していきます。
