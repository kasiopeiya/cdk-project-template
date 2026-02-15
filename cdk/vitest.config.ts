import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // テスト環境の設定
    environment: 'node',

    // テストファイルのパターン
    include: ['test/**/*.test.ts'],

    // スナップショットシリアライザー
    snapshotSerializers: ['./test/snapshot-plugin.ts']
  }
})
