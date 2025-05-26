## 查询交易详情

### 功能介绍

:::info 说明
根据交易 hash 查询交易详情
:::

### 函数原型

```go showLineNumbers
func GetTransactionReceipt(callback openpay_callback.Base, operationID string, receiptInput string)
```

### 输入参数

| 参数名称     | 参数类型 | 是否必填 | 描述             |
| ------------ | -------- | -------- | ---------------- |
| operationID  | string   | 是       | 请求 UUID        |
| receiptInput | Object   | 是       | [ReceiptInput]() |

## ReceiptInput

| 参数名称   | 参数类型 | 是否必填 | 说明                                | 描述 |
| ---------- | -------- | -------- | ----------------------------------- | ---- |
| chain_type| int      | 是       | [链类型](/common/enum.md#chiantype) |
| hash       | string   | 是       | 交易 hash                           |


### 返回结果

| 名称 | 类型                                                 | 描述     |
| ---- | ---------------------------------------------------- | -------- |
| ~    | [TransactionInfo](/common/entity.md#transactioninfo) | 交易记录 |

### 代码示例

```go showLineNumbers
 SDK.GetTransactionReceipt(ParamsUtil.buildOperationID(), 6, "0xdcb8e9303ecf152addbb11a789bb5d742bb8f586156cfccd55a7f956c667071c")
```
