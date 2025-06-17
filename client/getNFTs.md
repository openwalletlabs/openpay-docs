## 查询 nft 列表

### 功能介绍

:::info 说明
根据筛选条件查询 nft 列表
:::

### 函数原型

```go showLineNumbers
func GetNFTs(callback openpay_callback.Base, operationID string, filter NFTFilter)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述          |
| ----------- | -------- | -------- | ------------- |
| operationID | string   | 是       | 请求 UUID     |
| filter      | Object   | 是       | [NFTFilter]() |

## NFTFilter

> 过滤交易记录

| 参数名称         | 参数类型 | 是否必填 | 说明                                | 描述 |
| ---------------- | -------- | -------- | ----------------------------------- | ---- |
| chain_type       | int      | 是       | [链类型](/common/enum.md#chaintype) |      |
| address          | string   | 是       | 钱包地址                            |      |
| contract_address | string   | 否       | nft 合约地址                        |      |
| page             | int      | 是       | 当前页码                            |      |
| limit            | int      | 是       | 每页行数                            |      |

### 返回结果

| 名称 | 类型                                   | 描述     |
| ---- | -------------------------------------- | -------- |
| ~    | [][NFTInfo](/common/entity.md#nftinfo) | 记录列表 |

### 代码示例

```go showLineNumbers
 SDK.GetNFTs(ParamsUtil.buildOperationID(),  "")
```

### 客户端示例

::: code-group

```kotlin [Android]
OpenPayClient.getInstance().nftManager.getNFTs(object : OnBase<List<NFTInfo>> {
    override fun onError(code: Int, error: String?) {
        super.onError(code, error)
    }

    override fun onSuccess(data: List<NFTInfo>?) {
        super.onSuccess(data)
    }
}, NFTFilter())
```

```sh [Ios]

```

:::