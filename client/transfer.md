## 转账

### 功能介绍

:::info 说明
给指定地址转账
:::

### 函数原型

```go showLineNumbers
func Transfer(callback openpay_callback.Base, operationID string, transferInfo string)
```

### 输入参数

| 参数名称     | 参数类型 | 是否必填 | 描述                                       |
| ------------ | -------- | -------- | ------------------------------------------ |
| operationID  | string   | 是       | 请求 UUID                                  |
| transferInfo | Object   | 是       | [交易对象](/common/entity.md#transferinfo) |

### 返回结果

| 名称 | 类型                                                 | 描述     |
| ---- | ---------------------------------------------------- | -------- |
| ~    | [TransactionInfo](/common/entity.md#transactioninfo) | 成功返回 |

### 代码示例

```go showLineNumbers
 SDK.Transfer(ParamsUtil.buildOperationID(), "")
```
