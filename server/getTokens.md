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
| chain_type | 必填 | string | 链类型 |

### 成功返回示例

```json
[
  {
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