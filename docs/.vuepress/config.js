module.exports = {
    title: 'Hello Fee',
    base: "/learn/",
    description: ' ',
    dest: './dist',
    port: 8086,
    themeConfig: {
        nav: [{
            text: 'Web开发技术积累',
            link: '/web/Webpack.md'
        },
        {
            text: '自动化打包',
            link: '/jenkins/pipeline.md'
        }],
        sidebarDepth: 2,
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
            title: name,
            collapsable: false,
            children: ['Webpack', 'Umi脚手架', 'This', 'Redux', 'React创建组件的三种方式及其区别', 'React Router', 'ES6语法', 'Flex布局', 'CSS预编译器及PostCSS', 'CSS模块化']
        }
    ]
}

function getJenkinsSidebar(name) {
    return [{
            title: name,
            collapsable: false,
            children: ['自动化打包', 'pipeline']
        }
    ]
}