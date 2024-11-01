## 获取好友列表

### 简要描述

- 获取当前钱包绑定用户在 app 内好友列表

### 请求方式

- `POST`

### 请求 URL

- `http://{server_api_uri}/wallet/friends`

### Header

| header 名              | 示例值       | 选填 | 类型   | 说明           |
| :--------------------- | :----------- | :--- | ------ | -------------- |
| Authorization : Bearer | eyJhbxxxx3Xs | 必填 | string | app 登陆 token |

### 请求参数

```json
{
  "wallet_address": "",
  "chain_type": 0,
  "page": 1,
  "limit": 10
}
```

### 请求参数示例

| 字段名         | 选填 | 类型   | 说明                                          |
| :------------- | :--- | :----- | --------------------------------------------- |
| wallet_address | 必填 | string | 钱包地址                                      |
| chain_type     | 必填 | int    | [类型说明](/common/enum.md#chaintype) |
| page           | 必填 | int    | 当前页码                                      |
| limit          | 必填 | int    | 每页行数                                      |

### 成功返回示例

```json
{
  "code": 200,
  "data": {
    "total": 0,
    "friends": {
      "user_id": "6541f683f14d8ef0d92975db",
      "wallet_address": "0x226677f16dd095015b5448c47519ba0f70024a8f",
      "nickname": "test01-hehe",
      "avatar": "",
      "username": "test01"
    }
  },
  "message": "Success"
}
```

### 成功返回示例的参数说明

| 参数名  | 类型   | 说明                                         |
| :------ | :----- | :------------------------------------------- |
| code    | int    | [错误码](/common/errCode.md)          |
| message | string | 错误简要信息,无错误时为空                    |
| data    | object | 通用数据对象，具体结构见下方                 |
| total   | int    | 总计路数                                     |
| friends | object | [用户信息](/common/entity.md#userinfo) |

### 失败返回示例

```json
{
  "code": 1004,
  "message": "RecordNotFoundError"
}
```

### 失败返回示例的参数说明

| 参数名  | 类型   | 说明                          |
| :------ | :----- | :---------------------------- |
| code    | int    | 错误码,具体查看全局错误码文档 |
| message | string | 错误简要信息                  |
