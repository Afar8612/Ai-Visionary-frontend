export default [
  {
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  {path: '/', redirect: '/add_chart'},
  { path: '/add_chart', name: '创建图表', icon: 'FileAddTwoTone', component: './Addchart' },
  { path: '/add_chart_async', name: '创建图表(异步)', icon: 'FileAddTwoTone', component: './AddchartAsync' },
  { path: '/my_chart', name: '我的图表', icon: 'PictureTwoTone', component: './Mychart' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: '管理页面', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
