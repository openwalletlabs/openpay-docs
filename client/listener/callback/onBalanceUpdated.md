# OnBalanceUpdated

## 功能介绍

:::info
每 3 秒钟会回调该接口，返回实时的 token 余额
:::

### 返回原型

```go showLineNumbers
 func OnBalanceUpdated(tokenInfo string)
```

### 返回结果

| 名称      | 类型                                    | 描述       |
| --------- | --------------------------------------- | ---------- |
| tokenInfo | [TokenInfo](/common/entity.md#tokeninfo) | token 信息 |
