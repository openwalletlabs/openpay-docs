## WalletConfig

> SDK 初始化配置

| 字段名                                    | 类型   | 说明                   |
| ----------------------------------------- | ------ | ---------------------- |
| api_addr                                  | string | 服务端 api 地址        |
| ws_addr                                   | string | 服务端 ws 地址         |
| [platform_id](/common/enum.md#platformid) | int32  | 平台 ID                |
| data_dir                                  | string | 数据目录               |
| [log_level](/common/enum.md#loglevel)     | uint32 | 日志级别               |
| is_log_standard_output                    | bool   | 是否日志输出到标准输出 |
| log_file_path                             | string | 日志文件路径           |

## KeyInfo

> 链 key 信息

| 字段名      | 类型   | 说明                                |
| ----------- | ------ | ----------------------------------- |
| chain_type  | int    | [链类型](/common/enum.md#chainType) |
| address     | string | 地址                                |
| mnemonic    | string | 助记词                              |
| private_key | string | hex 编码私钥                        |

## ChainInfo

> 区块链信息

| 字段名       | 类型   | 说明                                |
| ------------ | ------ | ----------------------------------- |
| name         | string | 链名称                              |
| chain_type   | int    | [链类型](/common/enum.md#chainType) |
| icon         | string | icon                                |
| total_assets | string | 总资产                              |

## TokenInfo

> Token 信息

| 字段名             | 类型   | 说明                                |
| ------------------ | ------ | ----------------------------------- |
| chain_type         | int    | [链类型](/common/enum.md#chainType) |
| token_id           | string | token id                            |
| name               | string | 名称                                |
| symbol             | string | 符号                                |
| icon               | string | 图标                                |
| decimals           | int    | 精度                                |
| contract_address   | string | token 合约地址                      |
| balance            | string | 余额                                |
| is_multiple_chain  | bool   | 是否是多链代币                      |
| is_native_token    | bool   | 是否是原生代币                      |
| usdt_price         | string | 代币 usdt 换算价格                  |
| usdt_balance       | string | USDT 余额                           |
| percent_change_1h  | string | 1 小时涨跌幅                        |
| percent_change_24h | string | 24 小时涨跌幅                       |

## TransferInfo

> 发起交易信息

| 字段名       | 类型   | 是否必填 | 说明                                                            |
| ------------ | ------ | -------- | --------------------------------------------------------------- |
| from_address | string | 是       | 发送钱包地址                                                    |
| to_address   | string | 是       | 接收钱包地址                                                    |
| gas          | string | 否       | Gas 数量                                                        |
| gas_limit    | string | 否       | Gas 上限，用于转账时加速交易确认，该值比 gas 越大，交易确认越快 |
| amount       | string | 是       | 金额                                                            |
| chain_type   | int    | 是       | [链类型](/common/enum.md#chainType)                             |
| token_name   | string | 是       | 代币名称                                                        |

## TransactionInfo

> 交易信息

| 字段名              | 类型     | 说明                                   |
| ------------------- | -------- | -------------------------------------- |
| transaction_hash    | string   | 交易哈希                               |
| transaction_index   | int      | 交易索引                               |
| block_number        | int      | 区块号                                 |
| block_hash          | string   | 区块哈希                               |
| from_address        | []string | 发送钱包地址                           |
| to_address          | []string | 接收钱包地址                           |
| amount              | string   | 金额                                   |
| gas_used            | int      | Gas 使用量                             |
| gas_price           | string   | Gas 价格                               |
| cumulative_gas_used | int      | 累计 Gas 使用量                        |
| status              | int      | 状态 -1:转账中, 0:转账失败, 1:转账成功 |
| token_name          | string   | 代币名称                               |
| contract_address    | string   | 合约地址                               |
| chain_type          | int      | [链类型](/common/enum.md#chainType)    |
| transaction_type    | int      | 交易类型 1:转入 2:转出                 |
| block_timestamp     | int      | 交易时间(unixtime)                     |

## FeeInfo

> FeeInfo

| 字段名 | 类型   | 说明                                                |
| ------ | ------ | --------------------------------------------------- |
| gas    | string | 转账预估消耗 Gas 数量                               |
| fee    | string | 转账预估消耗费用，费用=消耗 gas 数 \* 实时 gas 价格 |

## AddressValidateInfo

| 字段名  | 类型     | 说明                   |
| ------- | -------- | ---------------------- |
| address | string   | 钱包地址               |
| matched | bool     | 是否匹配               |
| chains  | []string | 符合地址规范的链名数组 |

## AuthInfo

> 验证信息

| 字段名       | 类型   | 说明     |
| ------------ | ------ | -------- |
| access_token | string | 访问令牌 |

## NFTInfo

> NFT 信息

| 字段名           | 类型   | 说明                   |
| ---------------- | ------ | ---------------------- |
| token_id         | string | token id               |
| contract_address | string | nft 合约地址           |
| title            | string | nft 名称               |
| description      | string | nft 描述               |
| image_url        | string | nft 图片地址           |
| metadata         | string | nft metadata 原始 json |
