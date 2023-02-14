module.exports = {
    title: 'Hello Fee',
    base: "/learn/",
    description: ' ',
    dest: './dist',
    port: 8086,
    themeConfig: {
        nav: [{
            text: 'Google SEO',
            link: '/GoogleSeo/Why SEO.md'
        },
        {
            text: '商务英语',
            link: '/商务英语/Words.md'
        },
        // {
        //     text: 'Web开发技术积累',
        //     link: '/web/React/Webpack.md'
        // },
        {
            text: '自动化打包',
            link: '/jenkins/pipeline.md'
        },
        {
            text: '科学上网',
            link: '/科学上网/搭建V2ray.md'
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
                    '/GoogleSeo/': getGoogleSeo('Google SEO'),
                }
            },
        }
    }
}

function getWebSidebar(name) {
    return [{
            title: 'React',
            collapsable: true,
            children: ['React/生命周期', 'React/Webpack', 'React/脚手架', 'React/Redux', 'React/React创建组件的三种方式及其区别', 'React/React Router', 'React/高阶组件', 'React/Refs', 'React/Context']
        },
        {
            title: 'JS',
            collapsable: true,
            children: ['JS/原型和原型链', 'JS/闭包', 'JS/This', 'JS/JS执行上下文', 'JS/JS运行机制', 'JS/Service Workers、Web Workers', 'JS/箭头函数表达式', 'JS/Promise和async、await', 'JS/Eslint']
        },
        {
            title: 'CSS',
            collapsable: true,
            children: ['CSS/特殊性、继承、层叠', 'CSS/伪类、伪元素', 'CSS/基本视觉格式化', 'CSS/浮动和定位', 'CSS/动画', 'CSS/文本属性', 'CSS/Flex布局', 'CSS/CSS预编译器及PostCSS', 'CSS/CSS模块化']
        },
        {
            title: '小程序',
            collapsable: true,
            children: ['小程序/生命周期']
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

function getGoogleSeo(name) {
    return [{
            title: 'Why SEO',
            collapsable: true,
            children: ['Why SEO']
        },
        {
            title: 'Google rank',
            collapsable: true,
            children: ['Google rank']
        },
        {
            title: 'Website building',
            collapsable: true,
            children: [
                'Website building/On-page SEO',
                'Website building/Off-page SEO',
            ]
        },
        {
            title: 'Keyword research',
            collapsable: true,
            children: [
                'Keyword research/How to do keyword research',
                'Keyword research/Types of keyword research',
                'Keyword research/LSI keyword',
            ]
        }
    ]
}