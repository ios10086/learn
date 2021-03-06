module.exports = {
    title: 'Hello Fee',
    base: "/learn/",
    description: ' ',
    dest: './dist',
    port: 8086,
    themeConfig: {
        nav: [{
            text: 'Web开发技术积累',
            link: '/web/React/Webpack.md'
        },
        {
            text: '自动化打包',
            link: '/jenkins/pipeline.md'
        }],
        sidebarDepth: 1,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                sidebar: {
                    '/web/': getWebSidebar('Web开发技术积累'),
                    '/jenkins/': getJenkinsSidebar('自动化打包'),
                }
            },
        }
    }
}

function getWebSidebar(name) {
    return [{
            title: 'React',
            collapsable: true,
            children: ['React/Webpack', 'React/脚手架', 'React/Redux', 'React/React创建组件的三种方式及其区别', 'React/React Router']
        },
        {
            title: 'JS',
            collapsable: true,
            children: ['JS/原型和原型链', 'JS/闭包', 'JS/This', 'JS/JS执行上下文', 'JS/JS运行机制', 'JS/Service Workers、Web Workers', 'JS/箭头函数表达式', 'JS/Promise和async、await']
        },
        {
            title: 'CSS',
            collapsable: true,
            children: ['CSS/特殊性、继承、层叠', 'CSS/伪类、伪元素', 'CSS/基本视觉格式化', 'CSS/浮动和定位', 'CSS/动画', 'CSS/文本属性', 'CSS/Flex布局', 'CSS/CSS预编译器及PostCSS', 'CSS/CSS模块化']
        },
    ]
}

function getJenkinsSidebar(name) {
    return [{
            title: 'iOS自动化打包',
            collapsable: true,
            children: ['自动化打包', 'pipeline']
        }
    ]
}