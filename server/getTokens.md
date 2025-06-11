## 获取代币列表

### 简要描述

- 获取代币列表

### 请求方式

- `GET`

### 请求 URL

- `http://{server_api_uri}/api/v1/tokens`

### Header

| header 名              | 示例值       | 选填 | 类型   | 说明           |
| :--------------------- | :----------- | :--- | ------ | -------------- |
| Authorization : Bearer | eyJhbxxxx3Xs | 选填 | string | app 登陆 token |

### 请求参数

| 字段名     | 选填 | 类型   | 说明   |
| :--------- | :--- | :----- | ------ |
| chain_type | 选填 | string | 链类型 |

### 成功返回示例

```json
[
  {
    "id": "1",
    "chain_type": 8,
    "chain_id": "56",
    "token_name": "BNB",
    "token_symbol": "BNB",
    "token_icon": "",
    "token_decimals": 18,
    "contract_address": "",
    "is_native": true,
    "is_multiple_chain": false
  },
  {
    "id": "2",
    "chain_type": 1,
    "chain_id": "1",
    "token_name": "Ethereum",
    "token_symbol": "ETH",
    "token_icon": "",
    "token_decimals": 18,
    "contract_address": "",
    "is_native": true,
    "is_multiple_chain": false
  }
]
```

### 成功返回示例的参数说明

| 字段名            | 类型    | 说明                             |
| :---------------- | :------ | :------------------------------- |
| id                | string  | token id                         |
| chain_type        | int     | 链类型                           |
| chain_id          | string  | 链 id                            |
| token_name        | string  | 代币名称                         |
| token_symbol      | string  | 代币符号                         |
| token_icon        | string  | 代币图标 成功返回示例的参数说明  |
| token_decimals    | int     | 代币精度                         |
| contract_address  | string  | 代币合约地址，原生代币为空字符串 |
| is_native         | boolean | 是否为原生代币                   |
| is_multiple_chain | boolean | 是否为多链代币                   |
