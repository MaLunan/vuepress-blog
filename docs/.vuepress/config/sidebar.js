//侧边栏
module.exports = {
    '/views/': [
        {
            title: '基础知识',
            collapsable: true,
            children: [
                'basis/js.md'
            ]
        },
        {
            title: '高级进阶',
            collapsable: true,
            children: [
                'advanced/array-note.md'
            ]
        },
        {
            title: 'Bug',
            collapsable: true,
            children: [
                'Bug/bug.md'
            ]
        },
        {
            title: '面试宝典',
            collapsable: true,
            children: [
                'interview/interview-01.md',
                'interview/vue.md',
                'interview/react.md'
            ]
        },
    ],
    '/coms/':[
        {
            title: '基础组件',
            collapsable: true,
            children: [
                'basicsCom/pagination'
            ]
        },{
            title: '业务组件',
            collapsable: true,
            children: [
                'basicsCom/pagination'
            ]
        },
    ]
}