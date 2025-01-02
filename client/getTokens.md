## 获取 Token 列表

### 功能介绍

:::info 说明
获取指定链下的 Token 列表，查询全部传-1

返回结果 tokenInfo 不带余额，需实现 tokenListener 注册后订阅实时余额
:::

### 函数原型

```go showLineNumbers
func GetTokens(callback openpay_callback.Base, operationID string, walletType int)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述                                |
| ----------- | -------- | -------- | ----------------------------------- |
| operationID | string   | 是       | 请求 UUID                           |
| walletType  | int      | 是       | [链类型](/common/enum.md#chaintype) |

### 返回结果

| 名称 | 类型                                       | 描述       |
| ---- | ------------------------------------------ | ---------- |
| ~    | [][TokenInfo](/common/entity.md#tokeninfo) | token 列表 |

### 代码示例

```go showLineNumbers
 SDK.GetTokens(ParamsUtil.buildOperationID(), 0)
```
