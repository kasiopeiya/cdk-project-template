/**
 * 環境別パラメータ設定
 * 環境固有の値をコードから分離し、一元管理する
 * 環境ごとに異なる値はこのファイルを見ればすべてわかるようにする
 * 手動作成リソースや外部パラメータもここに記載する
 */

import { type Environment } from 'aws-cdk-lib'
import * as ec2 from 'aws-cdk-lib/aws-ec2'

export interface Parameter {
  env: Environment
  prefix: string
  vpcId: string
  InstanceType: ec2.InstanceType
}

export const devParameter: Parameter = {
  env: {
    account: process.env.DEV_ACCOUNT_ID,
    region: 'ap-northeast-1'
  },
  prefix: 'kasio-dev',
  vpcId: 'bbbbbbbbbb',
  InstanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO)
}

export const prdParameter: Parameter = {
  env: {
    account: process.env.PROD_ACCOUNT_ID,
    region: 'ap-northeast-1'
  },
  prefix: 'kasio-prd',
  vpcId: 'bbbbbbbbbb',
  InstanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL)
}
