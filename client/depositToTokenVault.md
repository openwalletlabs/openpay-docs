## 余额宝存款

### 功能介绍

:::info 说明
向余额宝存入指定数量代币
:::

### 函数原型

```go showLineNumbers
func DepositToTokenVault(callback openpay_callback.Base, operationID string, depositInput string)
```

### 输入参数

| 参数名称     | 参数类型 | 是否必填 | 描述                   |
| ------------ | -------- | -------- | ---------------------- |
| operationID  | string   | 是       | 请求 UUID              |
| depositInput | Object   | 是       | [TokenVaultDeposit](#) |

## TokenVaultDeposit

>

| 参数名称         | 参数类型 | 是否必填 | 说明                                | 描述 |
| ---------------- | -------- | -------- | ----------------------------------- | ---- |
| chain_type       | int      | 是       | [链类型](/common/enum.md#chaintype) |      |
| contract_address | string   | 是       | 余额宝合约地址                      |      |
| token_name       | string   | 是       | 代币名称                            |      |
| amount           | string   | 是       | 存入金额                            |      |

### 返回结果

| 名称 | 类型                                                 | 描述     |
| ---- | ---------------------------------------------------- | -------- |
| ~    | [TransactionInfo](/common/entity.md#transactioninfo) | 成功返回 |

### 代码示例

```go showLineNumbers
 SDK.DepositToTokenVault(ParamsUtil.buildOperationID(), "")
```
