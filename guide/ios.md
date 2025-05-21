## 集成步骤

### 1. 添加依赖

    implementation 'io.openpay:android-sdk:latest@aar'
    implementation 'io.openpay:core-sdk:latest@aar'
    implementation 'com.google.code.gson:gson:2.9.0'

### 2. 导入包

    import io.openpay.android.sdk.OpenPayClient

### 3. 初始化

```java
InitConfig initConfig=new InitConfig(
            "",//SDK api地址
            "",//SDK WebSocket地址
            getStorageDir(),//SDK存储目录
            );

 OpenPayClient.getInstance().initSDK(
            application, //Application
            initConfig,//InitConfig
            new OnConnListener() {
                @Override
                public void onConnectFailed(long code, String error) {
                    //连接服务器失败
                }

                @Override
                public void onConnectSuccess() {
                    //连接服务器成功
                }

                @Override
                public void onConnecting() {
                    //连接服务器中...
                }
            });
```

### 4. 设置监听器

```java
// Set listener
// sdk采用的set方式，多次set会替换上次set,建议使用一个中间件使用add方式分发执行回调

    // token余额等信息变更回调
   OpenPayClient.getInstance().chainManager.setOnTokenListener(info -> {});
```