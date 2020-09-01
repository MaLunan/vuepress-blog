//导航栏
module.exports = [
    {text: '主页', link: '/index.html'},
    {
        text: '知识笔记',
        items: [
                {
                    text: '基础知识',
                    link:'/views/basis/js'
                },{
                    text: '高级进阶',
                    link:'/views/advanced/array-note'
                },{
                    text: 'Bug',
                    link:'/views/Bug/bug'
                },{
                    text: '面试宝典',
                    link:'/views/basis/js'
                },
            ]
    },
    {text: '组件库', link: '/timeline/',},
    {text: '随笔', link: '/timeline/',},
    {text: '关于我', link: '/about/',},
    // {
    //     text: '知识笔记',
    //     items: [
    //             {
    //                 text: '基础知识',
    //                 items: [{
    //                     text: 'My Project22',
    //                     link: '/other/project',
    //                 }]
    //             },
    //         ]
    // },
]