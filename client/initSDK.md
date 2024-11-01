## SDK 初始化

### 功能介绍

:::info 说明
初始化 sdk, WalletConfig 中各属性均为必填项
:::

### 函数原型

```go showLineNumbers
func InitSDK(operationID string, config string) bool
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述                                           |
| ----------- | -------- | -------- | ---------------------------------------------- |
| operationID | string   | 是       | 请求 UUID                                      |
| config      | string   | 是       | [WalletConfig](/common/entity.md#walletconfig) |

### 返回结果

| 名称 | 类型 | 描述     |
| ---- | ---- | -------- |
| ~    | bool | 成功返回 |

### 代码示例

```go showLineNumbers
 SDK.InitSDK(ParamsUtil.buildOperationID(), "{\"api_addr\":\"https://api\",\"ws_addr\":\"wss://api\",\"platform_id\":2,\"data_dir\":\"./\",\"log_level\":5,\"is_log_standard_output\":true,\"log_file_path\":\"./\"}")
```
