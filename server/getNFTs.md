## 获取 nft 列表

### 简要描述

- 获取指定地址拥有 nft 列表，该接口接入 alchemy 平台为标准
- 文档地址：https://www.alchemy.com/docs/data/nft-api/api-reference/nft-api-v-2-methods-older-version/get-nf-ts

### 请求方式

- `GET`

### 请求 URL

- `http://{server_api_uri}/api/v1/nfts`

### Header

| header 名              | 示例值       | 选填 | 类型   | 说明           |
| :--------------------- | :----------- | :--- | ------ | -------------- |
| Authorization : Bearer | eyJhbxxxx3Xs | 选填 | string | app 登陆 token |

### 请求参数

| 字段名           | 选填 | 类型   | 说明             |
| :--------------- | :--- | :----- | ---------------- |
| chain_type       | 必填 | int    | 链类型           |
| address          | 必填 | string | 钱包地址         |
| contract_address | 选填 | string | 合约地址         |
| page             | 选填 | int    | 当前页码         |
| limit            | 必填 | int    | 每页行数         |
| page_key         | 选填 | string | alchemy 分页参数 |

### 成功返回示例

```json
{
  "page_key": "string",
  "nfts": [
    {
      "token_id": "string",
      "contract_address": "string",
      "metadata": "string",
      "title": "string",
      "description": "string",
      "image_url": "string"
    }
  ]
}
```

### 成功返回示例的参数说明

| 参数名   | 类型   | 说明             |
| :------- | :----- | :--------------- |
| page_key | string | alchemy 分页参数 |
| nfts     | []NFT  | nft 数组         |

### NFT

| 参数名           | 类型   | 说明               |
| :--------------- | :----- | :----------------- |
| token_id         | string | tokenID            |
| contract_address | string | 代币合约地址       |
| metadata         | string | metadata信息,json |
| title            | string | 标题               |
| description      | string | 描述               |
| image_url        | string | 图片地址           |
