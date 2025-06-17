## 获取 token 余额

### 功能介绍

:::info 说明
查询指定 token 指定地址的余额
:::

### 函数原型

```go showLineNumbers
func GetTokenBalance(callback openpay_callback.Base, operationID string, tokenInput *input.Token)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述            |
| ----------- | -------- | -------- | --------------- |
| operationID | string   | 是       | 请求 UUID       |
| tokenInput  | Object   | 是       | [TokenInput](#) |

## TokenInput

> token 余额查询

| 参数名称    | 参数类型 | 是否必填 | 说明                                | 描述 |
| ----------- | -------- | -------- | ----------------------------------- | ---- |
| chain_type | int      | 是       | [链类型](/common/enum.md#chaintype) |      |
| token_name  | string   | 否       | 代币名称                            |      |
| address     | string   | 是       | 地址                                |      |

### 返回结果

| 名称 | 类型                                     | 描述       |
| ---- | ---------------------------------------- | ---------- |
| ~    | [TokenInfo](/common/entity.md#tokeninfo) | token 信息 |

### 代码示例

```go showLineNumbers
 SDK.GetTokenBalance(ParamsUtil.buildOperationID(), "")
```

### 客户端示例

::: code-group

```kotlin [Android]
 OpenPayClient.getInstance().tokenManager.getTokenBalance(object : OnBase<TokenInfo> {
    override fun onError(code: Int, error: String?) {
        super.onError(code, error)
    }

    override fun onSuccess(data: TokenInfo?) {
        super.onSuccess(data)
    }
}, TokenBalanceInput())
```

```sh [Ios]

```

:::