## 生成助记词

### 功能介绍

:::info 说明
生成钱包助记词
:::

### 函数原型

```go showLineNumbers
func GenerateMnemonic(callback openpay_callback.Base, operationID string)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述      |
| ----------- | -------- | -------- | --------- |
| operationID | string   | 是       | 请求 UUID |

### 返回结果

| 名称     | 类型   | 描述   |
| -------- | ------ | ------ |
| mnemonic | string | 助记词 |

### 代码示例

```go showLineNumbers
 SDK.GenerateMnemonic(ParamsUtil.buildOperationID())
```

### 客户端示例

::: code-group

```kotlin [Android]
OpenPayClient.getInstance().keyManager.generateMnemonic(object : OnBase<String> {
    override fun onError(code: Int, error: String) {
        super.onError(code, error)
    }

    override fun onSuccess(data: String) {
        super.onSuccess(data)
    }
})
```

```sh [Ios]
```

:::
