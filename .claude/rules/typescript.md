---
globs: **/*.ts
---

# TypeScript 共通ルール

## コーディングスタイル

- ESLint / Prettier の設定に準拠
- `any` を避け、型システムを活用
- JSDoc形式で関数の役割・引数・戻り値・スローする例外を明記

## Import 順序

以下の順に記載し、各グループ間は空行で区切る：

1. 標準ライブラリ（`fs`, `path`, `crypto` など）
2. サードパーティライブラリ
3. プロジェクト内の自作モジュール

```typescript
// 1. 標準ライブラリ
import * as crypto from 'crypto'

// 2. サードパーティライブラリ
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

// 3. 自作モジュール
import { generateState, verifyState } from './utils/state'
```

## 例外処理・制御フロー

- `try` ブロックは20行以内に収める。長い場合は処理を関数に分割する
- `if` / `try` / `for` / `while` のネストは2重まで。3重以上は禁止

## 改行スタイル

見やすさを損ねない範囲で行数を最小限にする。引数・オブジェクト・配列は1行に収まる場合はインラインで記述する。

```typescript
// ✅ 良い例：引数が収まるなら1行で
saveSession(sessionId, { accessToken }, logger)
createUser({ id, name, email }, options)
const result = await fetchData(url, { method: 'POST', body })

// ❌ 避けるべき例：不必要な展開
saveSession(
  sessionId,
  {
    accessToken
  },
  logger
)

// ✅ 良い例：短い配列・オブジェクトはインライン
const config = { timeout: 3000, retries: 2 }

// ✅ 良い例：条件式・三項演算子も1行で収まるなら
const label = isAdmin ? 'Admin' : 'User'
if (error) return { statusCode: 500, body: 'Internal Server Error' }

**例外：** 引数や要素が多く1行が長くなりすぎる場合（目安：100文字超）は適切に改行する。
