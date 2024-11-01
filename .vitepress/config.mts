import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenPay",
  description: "openpay sdk docs",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Client SDKs", link: "/client/index" },
      { text: "Server APIs", link: "/server/index" },
      { text: "Common", link: "/common/errCode" },
    ],

    sidebar: {
      "/guide/": { base: "/guide/", items: sidebarGuide() },
      "/client/": { base: "/client/", items: sidebarClient() },
      "/server/": { base: "/server/", items: sidebarServer() },
      "/common/": { base: "/common/", items: sidebarCommon() },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/OpenPay1" }],

    search: {
      provider: "local",
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/">0xryan</a>',
    },
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "快速开始",
      link: "getting-started",
    },
    {
      text: "Android接入",
      link: "android",
    },
    {
      text: "IOS接入",
      link: "ios",
    },
    {
      text: "H5接入",
      link: "h5",
    },
  ];
}

function sidebarClient(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "index",
      link: "index",
    },
    {
      text: "general",
      collapsed: false,
      items: [
        { text: "initSDK", link: "initSDK" },
        { text: "closeSDK", link: "closeSDK" },
        { text: "generateMnemonic", link: "generateMnemonic" },
        { text: "newWalletFromMnemonic", link: "newWalletFromMnemonic" },
        { text: "transfer", link: "transfer" },
        {
          text: "getTransactionReceipt",
          link: "getTransactionReceipt",
        },
        { text: "getTransactions", link: "getTransactions" },
        { text: "getChains", link: "getChains" },
        { text: "getTokens", link: "getTokens" },
        { text: "getTokenBalance", link: "getTokenBalance" },
        {
          text: "getEstimatedGas",
          link: "getEstimatedGas",
        },
      ],
    },
    {
      text: "listeners",
      collapsed: false,
      items: [
        { text: "tokenListener", link: "listener/tokenListener" },
        { text: "setTokenListener", link: "listener/setTokenListener" },
      ],
    },
    {
      text: "utils",
      collapsed: false,
      items: [{ text: "checkCryptoAddress", link: "utils/checkCryptoAddress" }],
    },
  ];
}

function sidebarServer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "index",
      link: "index",
    },
    {
      text: "REST API",
      collapsed: false,
      items: [{ text: "getFriends", link: "getFriends" }],
    },
  ];
}

function sidebarCommon(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "枚举",
      link: "enum",
    },
    {
      text: "错误码",
      link: "errCode",
    },
    {
      text: "通用实体",
      link: "entity",
    },
  ];
}
