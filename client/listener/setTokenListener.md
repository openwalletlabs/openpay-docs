## 设置 token 监听器

### 功能介绍

:::info 说明
当需要实时监听 token 余额时，需实现 tokenListener 后，调用该方法注册到 sdk
:::

### 函数原型

```go showLineNumbers
func SetTokenListener(listener openpay_callback.TokenListener)
```

### 输入参数

| 参数名称 | 参数类型                                           | 是否必填 | 描述         |
| -------- | -------------------------------------------------- | -------- | ------------ |
| listener | [TokenListener](/client/listener/tokenListener.md) | 是       | token 监听器 |

### 返回结果

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |

### 代码示例

```go showLineNumbers
 SDK.SetTokenListener(tokenListener)
```
