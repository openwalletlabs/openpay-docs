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

| 参数名称     | 参数类型 | 是否必填 | 说明                                | 描述                   |
| ------------ | -------- | -------- | ----------------------------------- | ---------------------- |
| chain_type   | int      | 是       | [链类型](/common/enum.md#chaintype) |                        |
| category     | string   | 是       | 代币类型                            | erc20, erc721, erc1155 |
| from_address | string   | 是       | 发起人地址                          |                        |
| to_address   | string   | 否       | 接收人地址                          |                        |
| page         | int      | 是       | 当前页码                            |                        |
| limit        | int      | 是       | 每页行数                            |                        |

### 返回结果

| 名称 | 类型                                                   | 描述     |
| ---- | ------------------------------------------------------ | -------- |
| ~    | [][TransactionInfo](/common/entity.md#transactioninfo) | 记录列表 |

### 代码示例

```go showLineNumbers
 SDK.GetTransactions(ParamsUtil.buildOperationID(),  "")
```

### 客户端示例

::: code-group

```kotlin [Android]
OpenPayClient.getInstance().transactionManager.getTransactions(object : OnBase<List<TransactionInfo>> {
    override fun onError(code: Int, error: String?) {
        super.onError(code, error)
    }

    override fun onSuccess(data: List<TransactionInfo>?) {
        super.onSuccess(data)
    }
}, TransactionsFilter())
```

```sh [Ios]

```

:::
