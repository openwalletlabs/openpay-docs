# OpenPay

使用此 SDK，您可以为您的应用添加多链多token、跨链互联功能

OpenPaySDK 现支持Ethereum、Tron、Bitcoin、Solana等网络

### iOS 集成

- **工具**: gomobile
- **输出文件**: XCFramework
- **交互**: iOS 通过 JSON 与 SDK 进行交互
- **API**: SDK 提供了重新封装的 API 以便于集成
- **数据存储**: iOS 使用 SDK 内部提供的 kv 层

### Android 集成

- **工具**: gomobile
- **输出文件**: AAR
- **交互**: Android 通过 JSON 与 SDK 进行交互
- **API**: SDK 提供了重新封装的 API 以便于集成
- **数据存储**: Android 使用 SDK 内部提供的 kv 层

### Web 集成

- **语言**: Go
- **特性**: 使用 Go 语言提供的 WebAssembly 支持编译为 wasm
- **交互**: 网页通过 JSON 与 SDK 进行交互
- **API**: SDK 提供了重新封装的 API 以便于集成
- **数据存储**: JavaScript 使用[sql.js](https://sql.js.org/)虚拟化 SQLite 并存储在 IndexedDB 中来处理 SQL 逻辑

### SDK 初始化

- **说明**: 初始化分为2个步骤，全部成功才能正常使用
- **InitSDK**: 初始化SDK, 配置系统变量
- **创建钱包**: 创建或者导入用户钱包
