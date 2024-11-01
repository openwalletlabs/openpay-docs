## SDK 初始化

### 功能介绍

:::info 说明
关闭 sdk, 释放资源，各端应在 app 退出之前调用该方法
:::

### 函数原型

```go showLineNumbers
func CloseSDK(operationID string)
```

### 输入参数

| 参数名称    | 参数类型 | 是否必填 | 描述      |
| ----------- | -------- | -------- | --------- |
| operationID | string   | 是       | 请求 UUID |

### 返回结果

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |

### 代码示例

```go showLineNumbers
 SDK.CloseSDK(ParamsUtil.buildOperationID())
```
