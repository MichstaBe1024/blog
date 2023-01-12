module.exports = {
  title: 'MichstaBe',
  description: 'MichstaBe Blog',// mate标签description，多用于搜索引擎抓取摘要
  head: [
    ['link', { rel: 'icon', href: '/avatar.png' }]
  ],
  theme: 'reco',
  themeConfig: {
    siteTitle: 'MichstaBe',
    logo: '/avatar.png',
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "博客", link: "/articles/index" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/MichstaBe1024" },
    ],
    // sidebar: [
    //   {
    //     title: "组件库源码实现",
    //     path: '/articles/index',
    //     collapsable: false,  // 是否折叠
    //     children: [
    //       {
    //         title: "组件库环境搭建",
    //         link: "/articles/index",
    //       },
    //     ],
    //   }
    // ],
    sidebar: {
      "/articles/": [
        {
          title: "组件库源码实现",
          collapsible: true,
          collapsed: true,
          items: [
            {
              title: "组件库环境搭建",
              link: "/articles/index",
            },
          ],
        }
      ]
    },
  },
  // plugins: require('./plugins/index')
}