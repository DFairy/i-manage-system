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
const quillEditor = () =>
    import ('views/Editor/quillEditor.vue')
const mavonEditor = () =>
    import ('views/Editor/mavonEditor.vue')
const tinymceEditor = () =>
    import ('views/Editor/tinymceEditor.vue')
const vueDraggable = () =>
    import ('views/componentPage/vueDraggable.vue')
const animateBlur = () =>
    import ('views/special/animateBlur.vue')
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
                    path: '/upload',
                    component: Upload,
                    meta: { title: '文件上传' },
                    icon: 'fa-cloud-upload'
                },
                {
                    path: '/component',
                    meta: { title: '组件' },
                    icon: 'fa-th-large',
                    component: { render(c) { return c('router-view') } },
                    children: [{
                        path: '/component/vueDraggable',
                        component: vueDraggable,
                        meta: { title: '拖拽' }
                    }]
                },
                {
                    path: '/special',
                    meta: { title: '动效' },
                    icon: 'fa-th-large',
                    component: { render(c) { return c('router-view') } },
                    children: [{
                        path: '/special/animateBlur',
                        component: animateBlur,
                        meta: { title: '抛物线小球' }
                    }]
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
                        },
                        {
                            path: '/editor/quillEditor',
                            component: quillEditor,
                            meta: { title: 'quillEditor' }
                        },
                        {
                            path: '/editor/mavonEditor',
                            component: mavonEditor,
                            meta: { title: 'mavonEditor' }
                        },
                        {
                            path: '/editor/tinymceEditor',
                            component: tinymceEditor,
                            meta: { title: 'tinymceEditor' }
                        }
                    ]
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