## 创建或导入钱包

### 功能介绍

:::info 说明
根据助记词恢复 key 列表
:::

### 函数原型

```go showLineNumbers
func NewWalletFromMnemonic(callback openpay_callback.Base, operationID string, mnemonic string)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述      |
| ----------- | -------- | -------- | --------- |
| operationID | string   | 是       | 请求 UUID |
| mnemonic    | string   | 是       | 助记词    |

### 返回结果

| 名称 | 类型                                   | 描述     |
| ---- | -------------------------------------- | -------- |
| ~    | [][KeyInfo](/common/entity.md#keyinfo) | Key 数组 |

### 代码示例

```go showLineNumbers
 SDK.NewWalletFromMnemonic(ParamsUtil.buildOperationID(), "This is monemonic phrase demo")
```
