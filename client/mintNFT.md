## mint nft

### 功能介绍

:::info 说明
在指定链上创建 nft，只支持evm链
:::

### 函数原型

```go showLineNumbers
func MintNFT(callback openpay_callback.Base, operationID string, mintNFTInput *input.NFT)
```

### 输入参数

| 参数名称     | 参数类型 | 是否必填 | 描述              |
| ------------ | -------- | -------- | ----------------- |
| operationID  | string   | 是       | 请求 UUID         |
| mintNFTInput | Object   | 是       | [MintNFTInput](#) |

## MintNFTInput

> nft 创建

| 参数名称         | 参数类型 | 是否必填 | 说明                                | 描述 |
| ---------------- | -------- | -------- | ----------------------------------- | ---- |
| chain_type       | int      | 是       | [链类型](/common/enum.md#chaintype) |      |
| contract_address | string   | 是       | nft 合约地址                        |      |
| address          | string   | 是       | 钱包地址(接收 nft)                  |      |
| title            | string   | 是       | nft 标题                            |      |
| description      | string   | 是       | nft 描述                            |      |
| image            | string   | 是       | nft 图片在线地址                    |      |

### 返回结果

| 名称 | 类型                                                 | 描述     |
| ---- | ---------------------------------------------------- | -------- |
| ~    | [TransactionInfo](/common/entity.md#transactioninfo) | 成功返回 |

### 代码示例

```go showLineNumbers
 SDK.MintNFT(ParamsUtil.buildOperationID(), "")
```
