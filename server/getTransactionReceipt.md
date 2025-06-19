## 获取指定交易详情

### 简要描述

- 查询指定交易历史记录

### 请求方式

- `GET`

### 请求 URL

- `http://{server_api_uri}/api/v1/transactions/{hash}`

### Header

| header 名              | 示例值       | 选填 | 类型   | 说明           |
| :--------------------- | :----------- | :--- | ------ | -------------- |
| Authorization : Bearer | eyJhbxxxx3Xs | 选填 | string | app 登陆 token |

### 请求参数

| 字段名     | 选填 | 类型   | 说明      |
| :--------- | :--- | :----- | --------- |
| chain_type | 必填 | int    | 链类型    |
| hash       | 必填 | string | 交易 hash |

### 成功返回示例

```json
{
  "category": "string",
  "block_number": "string",
  "transaction_hash": "string",
  "from_address": ["string"],
  "to_address": ["string"],
  "amount": "string",
  "status": 0,
  "token_name": "string",
  "contract_address": "string",
  "decimal": 0,
  "block_timestamp": "string",
  "erc721_token_id": "string"
}
```

### 成功返回示例的参数说明

| 参数名           | 类型     | 说明            |
| :--------------- | :------- | :-------------- |
| category         | string   | 代币类型        |
| block_number     | string   | 区块高度        |
| transaction_hash | string   | 交易 hash       |
| from_address     | []string | 发起人地址数组  |
| to_address       | []string | 接收人地址数组  |
| amount           | string   | 金额            |
| status           | int      | 交易状态        |
| token_name       | string   | 代币名称        |
| contract_address | string   | 代币合约地址    |
| decimal          | int      | 代币精度        |
| block_timestamp  | string   | 区块时间        |
| erc721_token_id  | string   | erc721 token_id |
