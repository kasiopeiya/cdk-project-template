import { Stack, type StackProps } from 'aws-cdk-lib'
import { type Construct } from 'constructs'

import { MyS3Bucket } from '../construct/myS3'

/**
 * ステートフルなリソースを構築する
 * ステートフルリソースは基本的に削除してはならないものであるため、スタックを分離する
 */
export class BaseStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    /*
    * S3
    -------------------------------------------------------------------------- */
    new MyS3Bucket(this, 'Bucket', {})
  }
}
