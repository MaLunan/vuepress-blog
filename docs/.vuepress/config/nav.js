//导航栏
module.exports = [
    {text: '主页', link: '/index.html'},
    {
        text: '笔记',
        items: [
            {
                text: 'Projects🎈',
                items: [{
                    text: 'My Project',
                    link: '/other/project',
                }]
            }, 
            ]
    },
    {text: '组件库', link: '/timeline/',},
    {text: '关于我', link: '/about/',}
]