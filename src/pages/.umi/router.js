import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/bangdan',
    exact: true,
    component: require('../bangdan/index.js').default,
  },
  {
    path: '/',
    exact: true,
    component: require('../index.js').default,
  },
  {
    path: '/mymusic',
    exact: true,
    component: require('../mymusic.js').default,
  },
  {
    path: '/playmv',
    exact: true,
    component: require('../playmv/index.js').default,
  },
  {
    path: '/search',
    exact: true,
    component: require('../search/index.js').default,
  },
  {
    path: '/songlistde',
    exact: true,
    component: require('../songlistde/index.js').default,
  },
  {
    path: '/songsdetil',
    exact: true,
    component: require('../songsdetil/index.js').default,
  },
  {
    path: '/user/login',
    exact: true,
    component: require('../user/login.js').default,
  },
  {
    path: '/user/login1',
    exact: true,
    component: require('../user/login1.js').default,
  },
  {
    path: '/user/mine',
    exact: true,
    component: require('../user/mine.js').default,
  },
  {
    path: '/user/regist',
    exact: true,
    component: require('../user/regist.js').default,
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
