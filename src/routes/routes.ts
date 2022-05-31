import { Route } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

//type JSXComponent = () => JSX.Element;

interface IRoute {
    path: string;
    component: () => JSX.Element;
    name: string;
    children?: Route[];
}

export const routes: IRoute[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'LazyPage-1',
    },
    {
        path: '/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2',
    },
    {
        path: '/lazy3',
        component: LazyPage3,
        name: 'LazyPage-3',
    }
]