const  nav =require('./config/nav.js') ;
const  sidebar =require('./config/sidebar.js');

module.exports = {
    title: 'MaNong-blog',
    description: '胸有凌云志，无高不可攀',
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
    logo:'/icon.jpg',
    nav,
    sidebar,
    //左侧菜单栏
    // 通过 themeConfig.sidebarDepth 来修改它的行为。默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。
    sidebarDepth: 2,   
    lastUpdated: '上次更新时间', // string | boolean    最后更新时间 前缀
     // 项目开始时间
     startYear: '2020',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'MaLunan/press',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'MaLunan/press',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'dev-mln',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在GitHub 上编辑此页！',
    },
}