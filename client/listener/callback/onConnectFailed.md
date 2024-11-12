# OnConnectFailed

## 功能介绍

:::info

与 websocket 服务连接失败回调

:::

### 返回原型

```go showLineNumbers
 func OnConnectFailed(errCode int32, errMsg string)
```

### 返回结果

| 名称    | 类型   | 描述     |
| ------- | ------ | -------- |
| errCode | int    | 错误码   |
| errMsg  | string | 错误详情 |
