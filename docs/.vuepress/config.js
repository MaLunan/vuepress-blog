module.exports = {
    title: 'Hello MaLunan',
    description: 'Hello, my friend!',
    base:"/",
    head: [
        ['link', {
            rel: 'icon',
            href: `/icon.jpg`
        }],["script", {
          "language": "javascript",
          "type": "text/javascript",
          "src": "/js/clickMove.js"
        }]
    ],
    dest: './docs/.vuepress/dist',
    // permalink: "/:year/:month/:day/:slug", //配置永久链接
    ga: '',
    evergreen: true,
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    //导航菜单
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'English', link: '/language/english' }
            ]
          },
          { text: 'External', link: 'https://www.baidu.com' },
        ]
    },
    //左侧菜单栏
    // 通过 themeConfig.sidebarDepth 来修改它的行为。默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。
    sidebarDepth: 2,
    sidebar: [
    {
        title: 'Guide',
        //是否折叠
        collapsable: false,
        children: ['/guide/']
    }         
    ]
}