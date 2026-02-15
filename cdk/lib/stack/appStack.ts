import * as path from 'path'

import { Duration, Stack, type StackProps } from 'aws-cdk-lib'
import { type Construct } from 'constructs'

import { aws_lambda_nodejs as nodejs } from 'aws-cdk-lib'
import { aws_lambda as lambda } from 'aws-cdk-lib'

/**
 * メインアプリのスタック
 * ステートレスなものを中心に構築する
 */
export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)

    /*
    * Lambda
    -------------------------------------------------------------------------- */
    const lambdaCommonProps = {
      runtime: lambda.Runtime.NODEJS_24_X,
      architecture: lambda.Architecture.ARM_64,
      memorySize: 256,
      timeout: Duration.seconds(10),
      // esbuild によるバンドル設定
      bundling: {
        // 外部パッケージとして扱わない（全てバンドルに含める）
        externalModules: []
      }
    }

    new nodejs.NodejsFunction(this, 'Function', {
      ...lambdaCommonProps,
      entry: path.join(__dirname, '../../../backend/src/handlers/base.ts'),
      handler: 'handler',
    })
  }
}
