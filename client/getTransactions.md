## 查询历史交易记录

### 功能介绍

:::info 说明
查询历史交易记录列表，查询时间格式 unixtime
:::

### 函数原型

```go showLineNumbers
func GetTransactions(callback openpay_callback.Base, operationID string, filter TransactionFilter)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述                  |
| ----------- | -------- | -------- | --------------------- |
| operationID | string   | 是       | 请求 UUID             |
| filter      | Object   | 是       | [TransactionFilter]() |

## TransactionFilter

> 过滤交易记录

| 参数名称         | 参数类型 | 是否必填 | 说明                                | 描述                                                                                    |
| ---------------- | -------- | -------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| chain_type      | int      | 是       | [链类型](/common/enum.md#chaintype) |                                                                                         |
| query_type       | string   | 是       | 查询类型                            | in:转入 out:转出                                                                        |
| category         | string   | 否       | 查询代币类型                        | native: 原生代币 token_20: erc20 代币, token_721: nft721 代币, token_1155: nft1155 代币 |
| address          | string   | 是       | 钱包地址                            |                                                                                         |
| contract_address | string   | 否       | 代币合约地址                        |                                                                                         |
| start_time       | int      | 否       | 交易开始时间                        |                                                                                         |
| end_time         | int      | 否       | 交易结束时间                        |                                                                                         |
| page             | int      | 是       | 当前页码                            |                                                                                         |
| limit            | int      | 是       | 每页行数                            |                                                                                         |

### 返回结果

| 名称 | 类型                                                   | 描述     |
| ---- | ------------------------------------------------------ | -------- |
| ~    | [][TransactionInfo](/common/entity.md#transactioninfo) | 记录列表 |

### 代码示例

```go showLineNumbers
 SDK.GetTransactions(ParamsUtil.buildOperationID(),  "")
```
