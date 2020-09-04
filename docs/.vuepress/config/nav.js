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
                    link:'/views/interview/interview-01'
                },
            ]
    },
    {
        text: '组件库', 
        items: [
                {
                    text: '基础组件',
                    link:'/coms/basicsCom/pagination'
                },{
                    text: '业务组件',
                    link:'/coms/professionCom/yewu'
                },
            ]
    },
    {text: '随笔', link: '/jottings/20200904',},
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