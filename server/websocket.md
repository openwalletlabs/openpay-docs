## WebSocket 实时价格推送

### 概述

WebSocket 服务提供加密货币与 USDT 的实时价格推送功能。服务可选多种数据源接入，确保价格数据的实时性和可靠性：

- Alchemy API: 提供基于 HTTP 的价格查询服务
  - 文档地址：https://www.alchemy.com/docs/data/prices-api/prices-api-endpoints/prices-api-endpoints/get-token-prices-by-address
- CoinMarketCap API: 提供基于 HTTP 的实时行情数据
  - 文档地址：https://coinmarketcap.com/api/documentation/v1/#operation/getV2CryptocurrencyQuotesLatest
- CoinRanking API: 提供 WebSocket 实时价格推送
  - 文档地址：https://developers.coinranking.com/api/documentation/realtime
- CoinAPI: 提供 WebSocket 实时市场数据
  - 文档地址：https://docs.coinapi.io/market-data/websocket/endpoints

服务端在 WebSocket 连接建立后，可主动推送所有已配置代币的实时价格信息

### 数据交互协议

#### 连接认证

客户端在建立 WebSocket 连接时，需要携带访问令牌进行身份验证

#### 心跳机制

客户端需要定期发送 ping 消息以维持连接状态，建议间隔时间为 10 秒

#### 请求消息格式

```json
{
  "reqIdentifier": 1001,
  "token": "xxx",
  "operationID": "op456",
  "msgIncr": "1",
  "data": "json"
}
```

| 参数名        | 类型   | 必填 | 说明                |
| :------------ | :----- | :--- | :------------------ |
| reqIdentifier | int    | 是   | 请求类型标识符      |
| token         | string | 是   | 访问令牌            |
| operationID   | string | 是   | 操作唯一标识        |
| msgIncr       | string | 是   | 消息序列号          |
| data          | string | 是   | JSON 格式的请求数据 |

#### 响应消息格式

```json
{
  "reqIdentifier": 1001,
  "errCode": 0,
  "errMsg": "",
  "msgIncr": "1",
  "operationID": "op456",
  "data": { ... }
}
```

| 参数名        | 类型   | 必填 | 说明               |
| :------------ | :----- | :--- | :----------------- |
| reqIdentifier | int    | 是   | 请求类型标识符     |
| errCode       | int    | 是   | 错误码，0 表示成功 |
| errMsg        | string | 是   | 错误信息           |
| operationID   | string | 是   | 操作唯一标识       |
| msgIncr       | string | 是   | 消息序列号         |
| data          | object | 是   | 响应数据           |

### 实时价格推送

服务端会定期推送所有已配置代币的实时价格信息，推送数据格式如下：

```json
{
  "reqIdentifier": 2001,
  "data": {
    "id": "2",
    "chain_type": 1,
    "chain_id": "1",
    "token_name": "Ethereum",
    "token_symbol": "ETH",
    "token_icon": "",
    "token_decimals": 18,
    "contract_address": "",
    "is_native": true,
    "is_multiple_chain": false,
    "usdt_price": "2000.50",
    "usdt_balance": "3000.75",
    "percent_change_1h": "2.5",
    "percent_change_24h": "5.2"
  },
  ...
}
```

推送数据字段说明：

| 字段名             | 类型    | 说明                             |
| ------------------ | ------- | -------------------------------- |
| id                 | string  | token id                         |
| chain_type         | int     | 链类型                           |
| chain_id           | string  | 链 id                            |
| token_name         | string  | 代币名称                         |
| token_symbol       | string  | 代币符号                         |
| token_icon         | string  | 代币图标                         |
| token_decimals     | int     | 代币精度                         |
| contract_address   | string  | 代币合约地址，原生代币为空字符串 |
| is_native          | boolean | 是否为原生代币                   |
| is_multiple_chain  | boolean | 是否为多链代币                   |
| usdt_price         | string  | 当前 USDT 价格                   |
| usdt_balance       | string  | USDT 等值余额                    |
| percent_change_1h  | string  | 1 小时价格变化百分比             |
| percent_change_24h | string  | 24 小时价格变化百分比            |

### 请求标识符说明

| 标识符 | 说明     |
| :----- | :------- |
| 1003   | 发送消息 |
| 2001   | 推送消息 |
