## 登录

### 功能介绍

:::info 说明
上报钱包信息，用于钱包登录。该方法需在调用[NewWalletFromMnemonic](/client/newWalletFromMnemonic.md)后调用
:::

### 函数原型

```go showLineNumbers
func Signin(callback openpay_callback.Base, operationID string)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述      |
| ----------- | -------- | -------- | --------- |
| operationID | string   | 是       | 请求 UUID |

### 返回结果

| 名称     | 类型                                   | 描述     |
| -------- | -------------------------------------- | -------- |
| authInfo | [AuthInfo](/common/entity.md#authinfo) | 验证信息 |

### 代码示例

```go showLineNumbers
 SDK.Signin(ParamsUtil.buildOperationID())
```
