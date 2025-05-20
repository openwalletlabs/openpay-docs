## 获取链节点列表

### 简要描述

- 获取链节点列表

### 请求方式

- `GET`

### 请求 URL

- `http://{server_api_uri}/api/v1/nodes`

### Header

| header 名              | 示例值       | 选填 | 类型   | 说明           |
| :--------------------- | :----------- | :--- | ------ | -------------- |
| Authorization : Bearer | eyJhbxxxx3Xs | 选填 | string | app 登陆 token |

### 请求参数

| 字段名     | 选填 | 类型 | 说明   |
| :--------- | :--- | :--- | ------ |
| chain_type | 选填 | int  | 链类型 |

### 成功返回示例

```json
[
  {
    "chain_type": 0,
    "chain_id": "string",
    "node_urls": ["string"]
  }
]
```

### 成功返回示例的参数说明

| 参数名     | 类型     | 说明         |
| :--------- | :------- | :----------- |
| chain_type | int      | 链类型       |
| chain_id   | string   | 链 id        |
| node_urls  | string[] | 节点链接地址 |