//侧边栏
// const autosidebar = require('vuepress-auto-sidebar-doumjun')
const {getChildren} = require("vuepress-sidebar-atuo")

module.exports = {
    '/views/': [
        {
            title: '基础知识',
            collapsable: true,
            children: getChildren('./docs/views/basis/')
        },
        {
            title: '高级进阶',
            collapsable: true,
            children: getChildren('./docs/views/advanced/')
        }, 
        {
            title: 'Bug',
            collapsable: true,
            children: getChildren('./docs/views/Bug/')
        },
        {
            title: '面试宝典',
            collapsable: true,
            children:getChildren('./docs/views/interview/')
        },
    ],
    '/coms/':[
        {
            title: '基础组件',
            collapsable: true,
            children: getChildren('./docs/coms/basicsCom/')
        },{
            title: '业务组件',
            collapsable: true,
            children: getChildren('./docs/coms/professionCom/')
        },
    ],
    '/jottings/':[
        {
            title: '随笔',
            collapsable: true,
            children: getChildren('./docs/jottings/')
        },
    ],

}