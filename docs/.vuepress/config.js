import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    title: 'Jace Chou\'s Blog',
    theme: defaultTheme({
        navbar: [
            { text: '首页', link: '/' },
            {
                text: '书签',
                link: '/bookmark'
            },
            {
                text: '库',
                link: '/repository'
            },
            {
                text: '网站',
                link: '/website'
            },
            {
                text: '文章',
                link: '/article'
            },
        ]
    }),
    plugins: [
        searchPlugin({
            // options
        })
    ]
}
