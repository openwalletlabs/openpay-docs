## 查询历史交易记录

### 功能介绍

:::info 说明
查询历史交易记录列表
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

| 参数名称    | 参数类型 | 是否必填 | 说明                                | 描述                      |
| ----------- | -------- | -------- | ----------------------------------- | ------------------------- |
| page        | int      | 是       | 当前页码                            |                           |
| limit       | int      | 是       | 每页行数                            |                           |
| query_type  | string   | 是       | 查询类型                            | all:全部 in:转入 out:转出 |
| wallet_type | int      | 是       | [链类型](/common/enum.md#chaintype) |                           |
| token_name  | string   | 否       | 代币名称                            |                           |
| address     | string   | 是       | 地址                                |                           |

### 返回结果

| 名称 | 类型                                                       | 描述     |
| ---- | ---------------------------------------------------------- | -------- |
| ~    | List<[TransactionInfo](/common/entity.md#transactioninfo)> | 记录列表 |

### 代码示例

```go showLineNumbers
 SDK.GetTransactions(ParamsUtil.buildOperationID(),  "")
```
