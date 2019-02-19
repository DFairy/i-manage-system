import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
    import ('views/login.vue')
const Home = () =>
    import ('components/home.vue')
const DashBoard = () =>
    import ('views/dashBoard.vue')
const Table = () =>
    import ('views/table.vue')
const Tabs = () =>
    import ('views/tabs.vue')
const Form = () =>
    import ('views/form.vue')
const Charts = () =>
    import ('views/charts.vue')
const wangEditor = () =>
    import ('views/Editor/wangEditor.vue')
const Markdown = () =>
    import ('views/markdown.vue')
const Upload = () =>
    import ('views/upload.vue')
const View404 = () =>
    import ('views/404.vue')
const Rights = () =>
    import ('views/rights.vue')
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashBoard'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Home,
            children: [{
                    path: '/dashBoard',
                    component: DashBoard,
                    meta: { title: '系统首页' },
                    icon: 'fa-home'
                },
                {
                    path: '/table',
                    component: Table,
                    meta: { title: '基础表格' },
                    icon: 'fa-table'
                },
                {
                    path: '/tabs',
                    component: Tabs,
                    meta: { title: 'tab选项卡' },
                    icon: 'fa-sitemap'
                },
                {
                    path: '/form',
                    component: Form,
                    meta: { title: '表单相关' },
                    icon: 'fa-wpforms'
                },
                {
                    path: '/charts',
                    component: Charts,
                    meta: { title: '图表相关' },
                    icon: 'fa-pie-chart'
                },
                {
                    path: '/editor',
                    component: { render(c) { return c('router-view') } },
                    meta: { title: '编辑器' },
                    icon: 'fa-edit (alias)',
                    children: [{
                        path: '/editor/wangEditor',
                        component: wangEditor,
                        meta: { title: 'wangEditor' }
                    }]
                },
                {
                    path: '/upload',
                    component: Upload,
                    meta: { title: '文件上传' },
                    icon: 'fa-cloud-upload'
                },
                {
                    path: '/wrong',
                    meta: { title: '错误页面' },
                    icon: 'fa-bullhorn',
                    component: { render(c) { return c('router-view') } },
                    children: [{
                            path: '/wrong/view404',
                            component: View404,
                            meta: { title: '404页面' }
                        },
                        {
                            path: '/wrong/rights',
                            component: Rights,
                            meta: { title: '权限页面' }
                        }
                    ]
                },
            ]
        }
    ]
})