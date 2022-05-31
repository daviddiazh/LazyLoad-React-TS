import { Route } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

//type JSXComponent = () => JSX.Element;

interface IRoute {
    path: string;
    Component: () => JSX.Element;
    name: string;
    children?: Route[];
}

export const routes: IRoute[] = [
    {
        path: '/lazy1',
        Component: LazyPage1,
        name: 'LazyPage-1',
    },
    {
        path: '/lazy2',
        Component: LazyPage2,
        name: 'LazyPage-2',
    },
    {
        path: '/lazy3',
        Component: LazyPage3,
        name: 'LazyPage-3',
    }
]