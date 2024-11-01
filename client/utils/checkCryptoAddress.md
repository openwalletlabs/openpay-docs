## 校验 crypto 地址合法性

### 功能介绍

:::info 说明
校验 crypto 地址合法性，该方法为同步方法，可直接获取结果
:::

### 函数原型

```go showLineNumbers
func CheckCryptoAddress(address string)
```

### 输入参数

| 参数名称 | 参数类型 | 是否必填 | 描述     |
| -------- | -------- | -------- | -------- |
| address  | string   | 是       | 钱包地址 |

### 返回结果

| 名称 | 类型                                                         | 描述         |
| ---- | ------------------------------------------------------------ | ------------ |
| ~    | [AddressValidateInfo](/common/entity.md#addressvalidateinfo) | 地址校验信息 |

### 代码示例

```go showLineNumbers
 SDK.CheckCryptoAddress(address)
```

### 返回结果示例

```json showLineNumbers
{
  "Address": "0x2a5087d290ef3f6a5efe8b3cf8a30649fdc07b73",
  "Matched": true,
  "Chains": ["Ethereum"]
}
```
