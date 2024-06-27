import { createBrowserRouter } from 'react-router-dom';
import Login from '@/views/system/login/index.js';
import LayoutMain from '@/views/layout/index.jsx';
import Home from '@/views/system/home/index.jsx';
import User from '@/views/system/user/index.jsx';
import MatchTwo from '@/views/system/match/index.jsx';
import Button from '@/views/system/button/index.jsx';
import Lifecircle from '@/views/system/lifecircle/index.jsx';
import NewLifecircle from '@/views/system/lifecircle/newIndex.jsx';
import ModuleCss from '@/views/system/moduleCss/index.jsx';

import Icon from '@/views/system/icon/index.jsx';
import Error from '@/views/layout/error';

import { BookOutlined } from '@ant-design/icons';

export const routes = [
  {
    name: '首页',
    index: true, //设置后，地址/直接访问/home的内容
    element: <Home />,
    errorElement: <Error />
  },
  {
    name: '用户',
    path: 'user/:userId',
    element: <User />,
    errorElement: <Error />
  },
  {
    path: 'match',
    name: '竞赛',
    element: <MatchTwo />,
    errorElement: <Error />
  },
  {
    path: 'button',
    name: '按钮',
    element: <Button />,
    errorElement: <Error />
  },
  {
    path: 'icon',
    element: <Icon />,
    name: '图标',
    errorElement: <Error />
  },
  {
    path: 'lifecircle',
    name: '旧生命周期',
    element: <Lifecircle />,
    errorElement: <Error />
  },
  {
    path: 'newLifecircle',
    name: '新生命周期',
    element: <NewLifecircle />,
    errorElement: <Error />
  },
  {
    path: 'ModuleCss',
    name: '样式的模块化',
    element: <ModuleCss />,
    errorElement: <Error />
  }
];
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    errorElement: <Error />,
    children: routes
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  }
]);
export function getMenu(routes) {
  return routes.map(route => {
    return {
      key: route.path ? route.path : '/home',
      icon: <BookOutlined />,
      label: route.name
    };
  });
}
export default router;
