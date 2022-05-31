import { lazy, LazyExoticComponent } from 'react';
import { Route } from 'react-router-dom';
import NoLazy from '../lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface IRoute {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../lazyload/layout/LazyLayout'))

export const routes: IRoute[] = [
    {
        path: '/lazy1',
        component: LazyLayout,
        name: 'LazyPage-1',
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No-LazyPage',
    },
]